import { HomeOutlined, ProjectOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ collapsed }) {
    const navigate = useNavigate();

    function navegateToPage(e) {
        navigate(e.key);
    }

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
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
                        key: "/projetos",
                        icon: <ProjectOutlined />,
                        label: "Projetos",
                    },
                    {
                        key: "/profile",
                        icon: <UserOutlined />,
                        // icon: <UploadOutlined />,
                        label: "Perfil",
                    },
                ]}
            />
        </Sider>
    );
}
