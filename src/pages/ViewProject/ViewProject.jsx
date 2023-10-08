import { Card, Collapse, Layout, Space } from "antd";
import React, { useEffect, useState } from "react";
import Contributor from "../../components/Contributor/Contributor";
import Statistics from "../../components/Statistics/Statistics";
import "./styles.css";
import Publication from "../../components/Publication/Publication";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const data = {
    autor: "Renan",
    projeto: "Nome projeto",
    descricao: "Descricao",
    habilidades: [{}, {}],
    tipo: "Recrutamento",
    titulo: "Publicação",
}

const items = [
    {
        key: '1',
        label: 'Tarefas',
        children: <>
            <Publication key={1} data={data} showButton={true} />
            <Publication key={1} data={data} showButton={true} />
        </>,
    },
];

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

        setDataProjeto({ ...data1 });

        const responsePegarPesquisador = await fetch("http://localhost:8000/pesquisadores/pegar-pesquisador/", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                //"pega aqui": JSON.stringify(projetoParams),
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ apelido: data1.dono }), // body data type must match "Content-Type" header
        });

        const data2 = await responsePegarPesquisador.json()

        setDataPesquisador({ ...data2 });

        const responsePegarIssues = await fetch("http://localhost:8000/projetos/pegar-issues/", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                //"pega aqui": JSON.stringify(projetoParams),
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ apelido: data1.dono }), // body data type must match "Content-Type" header
        });
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
                <Layout style={{ backgroundColor: "white" }}>
                    <Space>
                        <Statistics />
                        <Card title="Membros do Projeto" width={"50%"}>
                            <div className="card-members">
                                <Contributor username={dataPesquisador.nome} />
                            </div>
                        </Card>
                    </Space>
                    <Space style={{ paddingTop: "30px" }}>
                        <Collapse style={{width: "100vh"}} items={items} defaultActiveKey={['1']} />
                    </Space>
                </Layout>
            </div>
        </div>
    );
}
