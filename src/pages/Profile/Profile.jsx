import { UserOutlined } from "@ant-design/icons";
import { Avatar, Progress } from "antd";
import React from "react";

import { useNavigate } from "react-router-dom";
import ShowProject from "../../components/ShowProject/ShowProject";
import "./styles.css";

export default function Profile() {
    const navigate = useNavigate();
    return (
        <div className="profile-container">
            <div className="user-avatar-container">
                <Avatar size={128} icon={<UserOutlined />} />
                <div className="information-user">
                    <h2>
                        <strong>Nome do usuario</strong>
                    </h2>
                    <p>Cursando BCC na UTFPR</p>
                    <p>Canal no Youtube</p>
                    <p>Python Programer</p>
                </div>
                <div className="progress-bar">
                    <strong>Inglês</strong>
                    <Progress
                        strokeColor={"yellow"}
                        percent={30}
                        showInfo={false}
                    />
                    <strong>Espanhol</strong>
                    <Progress
                        strokeColor={"green"}
                        percent={70}
                        showInfo={false}
                    />
                </div>
            </div>
            <h3>Projetos fixados</h3>
            <div className="show-project-profile">
                <ShowProject click={() => navigate("/view-projects")} />
                <ShowProject click={() => navigate("/view-projects")} />
                <ShowProject click={() => navigate("/view-projects")} />
            </div>
        </div>
    );
}
