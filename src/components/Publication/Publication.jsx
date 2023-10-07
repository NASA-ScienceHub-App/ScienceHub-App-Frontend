import { React } from "react";
import { useNavigate } from "react-router-dom";
import earth_img from "../../assets/earth.jpg";
import user_img from "../../assets/user.png";
import "./Publication.css";

const Publication = ({ data }) => {
    const {
        userName,
        project,
        title,
        description,
        categories /*, userImg, publicationImg*/,
    } = data;

    // Para Teste (remover dps)
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
                    User Name / {"  "} {/* {userName} */}
                </p>
                <a
                    className="project-link"
                    onClick={() => navigate(`/view-projects`)}
                >
                    Project Name{/* {projectName} */}
                </a>
            </div>

            <div className="publication-content">
                <h2 className="publication-title">Publication Title</h2>{" "}
                {/* {title} */}
                {categories.map((category) => (
                    <div key={category.name} className="category">
                        {category.name}
                    </div>
                ))}
                <p className="publication-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                </p>{" "}
                {/* {description} */}
                <img
                    className="publication-img"
                    src={publicationImg}
                    alt="Imagem da Publicação"
                />
            </div>
        </div>
    );
};

export default Publication;
