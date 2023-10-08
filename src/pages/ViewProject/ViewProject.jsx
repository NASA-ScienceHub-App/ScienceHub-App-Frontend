import { Card } from "antd";
import React, { useEffect, useState } from "react";
import Contributor from "../../components/Contributor/Contributor";
import Statistics from "../../components/Statistics/Statistics";
import "./styles.css";

export default function ViewProject() {
    const [dataLoaded, setDataLoaded] = useState(true);
    const [dataProjeto, setDataProjeto] = useState({});
    const [dataPesquisador, setDataPesquisador] = useState({});

    async function getProject() {
        const projetoParams = {
            apelido: "ze",
            nome: "ScienceHub"
        }

        const responsePegarProjeto = await fetch("http://localhost:8000/projetos/pegar-projeto/", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                //"pega aqui": JSON.stringify(projetoParams),
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(projetoParams), // body data type must match "Content-Type" header
        });

        const data1 = await responsePegarProjeto.json()

        setDataProjeto({...data1});

        const responsePegarPesquisador = await fetch("http://localhost:8000/pesquisadores/pegar-pesquisador/", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                //"pega aqui": JSON.stringify(projetoParams),
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({apelido: data1.dono}), // body data type must match "Content-Type" header
        });

        const data2 = await responsePegarPesquisador.json()

        setDataPesquisador({...data2});
    }

    useEffect(() => {
        if (dataLoaded) {
            getProject();
            setDataLoaded(false);
        }
    }, []);

    return (
        <div className="view-project">
            <h1>{dataProjeto.nome}</h1>
            <p className="view-project-description">
                {dataProjeto.descricao}
            </p>
            <div className="view-project-details">
                <Card title="Membros do Projeto" width={"50%"}>
                    <div className="card-members">
                        <Contributor username={dataPesquisador.nome} />
                    </div>
                </Card>

                <Statistics />
            </div>
        </div>
    );
}
