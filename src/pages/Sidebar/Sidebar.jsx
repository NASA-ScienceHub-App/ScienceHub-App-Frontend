import { HomeOutlined, ProjectOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Menu, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export default function Sidebar({ collapsed }) {
    const navigate = useNavigate();

    function navegateToPage(e) {
        navigate(e.key);
    }

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <Space direction="vertical" size={16}>
                <Space direction="horizontal" size={1} align="center">
                    <Avatar
                        className="view-project-avatar"
                        size="large"
                        icon={<UserOutlined />}
                    />
                    <h2 className="username">Usuario</h2>
                </Space>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    onClick={navegateToPage}
                    items={[
                        {
                            key: "/home",
                            icon: <HomeOutlined />,
                            label: "Home",
                        },
                        {
                            key: "/view-projetos",
                            icon: <ProjectOutlined />,
                            label: "Projetos",
                        },
                        {
                            key: "/profile",
                            icon: <UserOutlined />,
                            label: "Perfil",
                        },
                    ]}
                />
            </Space>
        </Sider>
    );
}
