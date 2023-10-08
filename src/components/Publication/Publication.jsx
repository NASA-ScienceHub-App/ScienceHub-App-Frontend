import { React } from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Progress } from "antd";
import earth_img from "../../assets/earth.jpg";
import user_img from "../../assets/user.png";
import "./Publication.css";

const Publication = ({ data }) => {
    const {
        userName,
        project,
        title,
        description,
        // categories,
        habilities /*, userImg, publicationImg*/,
    } = data;

    const userImg = user_img;
    const publicationImg = earth_img;

    const navigate = useNavigate();

    return (
        <div className="publication">
            <div className="user-info">
                <img
                    className="user-img"
                    src={userImg}
                    alt="Imagem do Usuário"
                />
                <p className="user-name">
                    {userName}  / {" "}
                </p>
                <a
                    className="project-link"
                    onClick={() => navigate(`/view-projects`)} /* ${projectId} */
                >
                    {projectName}
                </a>
            </div>

            <div className="publication-content">
                <h2 className="publication-title">{title}</h2>{" "}
                {/* {categories.map((category) => (
                    <div key={category.name} className="category">
                        {category.name}
                    </div>
                ))} */}
                <p className="publication-description">
                    {description}
                </p>{" "}
                <img
                    className="publication-img"
                    src={publicationImg}
                    alt="Imagem da Publicação"
                />
                {habilities !== undefined && (
                    <div>
                        <h4>Habilidades Desejáveis</h4>
                        {habilities.map((hability) => {
                            if (hability.nivel_de_habilidade === "Avancado") {
                                <>
                                    <p>{hability.habilidade}: {hability.nivel_de_habilidade}</p>
                                    <Progress strokeColor={"red"} percent={0} showInfo={false} />;
                                </>;
                            } else if (hability.nivel_de_habilidade === "Intermediario") {
                                <>
                                    <p>{hability.habilidade}: {hability.nivel_de_habilidade}</p>
                                    <Progress strokeColor={"yellow"} percent={0} showInfo={false} />;
                                </>;
                            } else if (hability.nivel_de_habilidade === "Iniciante") {
                                <>
                                    <p>{hability.habilidade}: {hability.nivel_de_habilidade}</p>
                                    <Progress strokeColor={"green"} percent={0} showInfo={false} />;
                                </>;
                            }

                            return null;
                        })}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Publication;
