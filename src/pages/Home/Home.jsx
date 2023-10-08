import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const { Header, Sider, Content } = Layout;

import "./styles.css";
import Projects from "../Projects/Projects";

export default function Home({ chilldren, scroll = false }) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="home-container">
            <Sidebar collapsed={collapsed} />
            <Layout className="container-absolute-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                {!scroll && <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {chilldren}
                </Content>}

                {scroll && chilldren}
            </Layout>
        </Layout>
    );
}
