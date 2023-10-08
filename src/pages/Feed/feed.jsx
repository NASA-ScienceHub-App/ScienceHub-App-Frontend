import { useState } from "react";
import Publication from "../../components/Publication/Publication";
import "./feed.css";
import { useEffect } from "react";
import axios from "axios";

export default function Feed() {
    const [publications, setPublications] = useState([]);
    
    // TODO: get username
    const userName = "Gustavo"

    // Chamada à API do Backend
    useEffect(() => {

        const fetchData = async () => {
            axios({
                method: "post",
                url: "http://localhost:8000/projetos/feed-pesquisador/",
                withCredentials: false,
                data: {
                    "apelido": userName
                },
            }).then(response => {
                setPublications(response.data);
                console.log(response.data);

            }).catch(error => {
                console.error('Erro ao obter publicações', error);
            })
        };

        fetchData();
    }, []);


    // const data = {
    //     categories: [
    //         {
    //             name: "Cloud",
    //         },
    //         {
    //             name: "Cybersecurity",
    //         },
    //     ],
    // };

    return (
        <div className="feed-screen">
            <div className="filters"></div>

            <div className="feed">
                {publications.map((publication) => (
                    <Publication key={publication.id} data={publication} />
                ))}
            </div>
            {/* <Publication data={data} />
            <Publication data={data} />
            <Publication data={data} />
            <Publication data={data} />
            <Publication data={data} /> */}
        </div>
    );
}
