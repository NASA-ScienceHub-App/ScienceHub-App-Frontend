import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
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
                        key: "/",
                        icon: <UserOutlined />,
                        label: "Home",
                    },
                    {
                        key: "/projetos",
                        icon: <VideoCameraOutlined />,
                        label: "Projetos",
                    },
                    {
                        key: "/profile",
                        icon: <UploadOutlined />,
                        label: "Perfil",
                    },
                    {
                        key: "/feed",
                        icon: <UploadOutlined />,
                        label: "Feed",
                    },
                ]}
            />
        </Sider>
    );
}
