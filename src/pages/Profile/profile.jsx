import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import WordCloudComponent from "./WordCloudComponent";
import ProjectProfile from "../../components/ProjectProfile/ProjectProfile/";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function UserProfile({ user }) {
    // Estrutura de dados representando as habilidades do usuário
    const [showAdditionalSkills, setShowAdditionalSkills] = useState(false);
    const [newSkill, setNewSkill] = useState({ name: "", level: "" });

    const userSkills = [
        { name: "Inglês", level: "Avançado" },
        { name: "Espanhol", level: "Básico" },
    ];

    const addNewSkill = () => {
        // Verifica se os campos estão preenchidos
        if (newSkill.name && newSkill.level) {
            userSkills.push(newSkill);
            setNewSkill({ name: "", level: "" });
            setShowAdditionalSkills(false);
        }
    };

    const projects = [
        {
            name: "Projeto 1",
            description: "Descrição do Projeto 1",
        },
        {
            name: "Projeto 2",
            description: "Descrição do Projeto 2",
        },
    ];

    // Função para calcular o progresso com base no nível de habilidade
    const calculateProgress = (level) => {
        if (level === "Avançado") {
            return 100;
        } else if (level === "Básico") {
            return 33;
        } else if (level === "Intermediário") {
            return 66;
        }
    };

    return (
        <div className="user-profile">
            <div className="user-info">
                <img
                    src={user.avatar}
                    alt={`Foto de ${user.name}`}
                    className="profile-image"
                />
                <p>
                    {user.name} {user.nickname}
                </p>
                <p>Reputação: {user.reputation}</p>
                <p>{user.email}</p>
                <hr />
                <p>Sobre: {user.description}</p>
                <p>
                    Formação:{" "}
                    <a
                        href={user.education}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Currículo Lattes
                    </a>
                </p>
            </div>
            <div className="user-skills">
                <h2>Habilidades</h2>
                {userSkills.map((skill, index) => (
                    <div key={index}>
                        <p>
                            {skill.name} - {skill.level}
                        </p>
                        <ProgressBar
                            progress={calculateProgress(skill.level)}
                        />
                    </div>
                ))}
                {showAdditionalSkills ? (
                    <div>
                        <input
                            type="text"
                            placeholder="Nova habilidade"
                            value={newSkill.name}
                            onChange={(e) =>
                                setNewSkill({
                                    ...newSkill,
                                    name: e.target.value,
                                })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Nível"
                            value={newSkill.level}
                            onChange={(e) =>
                                setNewSkill({
                                    ...newSkill,
                                    level: e.target.value,
                                })
                            }
                        />
                        <button onClick={addNewSkill}>Adicionar</button>
                    </div>
                ) : (
                    <button onClick={() => setShowAdditionalSkills(true)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                )}
            </div>

            <div className="word-cloud">
                <h2>Tags</h2>
                <WordCloudComponent />
            </div>

            <div className="user-projects">
                <h2>Projetos</h2>
                <div className="project-container">
                    {projects.map((project, index) => (
                        <ProjectProfile
                            key={index}
                            name={project.name}
                            description={project.description}
                            onClick={() => handleProjectClick(project.url)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProfilePage() {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        nickname: "@john",
        education: "https://www.lattes.cnpq.br/",
        description: "descrição pessoal",
        age: 30,
        avatar: "/imagem.png",
        reputation: "4,5",
    };

    return (
        <div className="App">
            <h1>Meu Perfil</h1>
            <UserProfile user={user} />
        </div>
    );
}

export default ProfilePage;
