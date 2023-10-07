import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const onFinish = (values) => {
        navigate("/home");
    };
    return (
        <div className="login-container">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <h1>Science Hub</h1>
                <Form.Item
                    className="form-item"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}
                >
                    <Input
                        className="login-input"
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    className="form-item"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input
                        className="login-input"
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item className="form-item-lembrar">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Mantenha-me Conectado.</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="">
                        Esqueceu sua senha?
                    </a>
                </Form.Item>
                <Form.Item className="form-item">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Entre
                    </Button>
                    Ou <a href="">Cadastre-se</a>
                </Form.Item>
            </Form>
        </div>
    );
}
