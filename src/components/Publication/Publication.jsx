import { React } from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Progress, Button } from "antd";
import earth_img from "../../assets/earth.jpg";
import user_img from "../../assets/user.png";
import "./Publication.css";

const Publication = ({ data, showButton }) => {
    const {
        autor,
        projeto,
        descricao,
        habilidades,
        tipo,
        titulo,
        // autor,
        // projeto,
        // titulo,
        // descricao,
        // // tipo,
        // habilities /*, userImg, publicationImg*/,
    } = data;

    //console.log(data)

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
                    {autor}
                </p>
                {!showButton && (
                    <>
                        <a
                            className="project-link"
                            onClick={() => navigate(`/view-projects`)} /* ${projectId} */
                        >
                         <span style={{color: "black"}}>/</span> {projeto}
                        </a>
                    </>
                )}
                {showButton && (
                    <>
                        <Button style={{ marginLeft: "165px" }}> Contribuir </Button>
                    </>
                )}

            </div>

            <div className="publication-content">
                <h2 className="publication-title">{titulo}</h2>{" "}
                {/* {categories.map((category) => (
                    <div key={category.name} className="category">
                        {category.name}
                    </div>
                ))} */}
                <p className="publication-description">
                    {descricao}
                </p>{" "}
                <img
                    className="publication-img"
                    src={publicationImg}
                    alt="Imagem da Publicação"
                />
                {tipo == "Recrutamento" && (
                    <div>
                        <h4>Habilidades Desejáveis</h4>
                        {habilidades.map((hability, index) => {
                            // console.log(hability.nivel_da_habilidade);
                            // console.log(hability.habilidade);
                            // console.log("----------------------------");
                            if (hability.nivel_da_habilidade == "Avançado") {

                                return (
                                    <>
                                        <p>{hability.habilidade}: {hability.nivel_da_habilidade}</p>
                                        <Progress key={index} strokeColor={"red"} percent={100} showInfo={false} />
                                    </>
                                )
                            } else if (hability.nivel_da_habilidade == "Intermediário") {
                                return (
                                    <>
                                        <p>{hability.habilidade}: {hability.nivel_da_habilidade}</p>
                                        <Progress key={index} strokeColor={"yellow"} percent={50} showInfo={false} />
                                    </>
                                )
                            } else if (hability.nivel_da_habilidade == "Iniciante") {
                                return (
                                    <>
                                        <p>{hability.habilidade}: {hability.nivel_da_habilidade}</p>
                                        <Progress key={index} strokeColor={"green"} percent={25} showInfo={false} />
                                    </>
                                )
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
