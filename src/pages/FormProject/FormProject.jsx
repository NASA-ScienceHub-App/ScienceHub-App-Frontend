import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
    Select,
    Upload,
    Space
} from 'antd';

export default function FormProject() {
    const [form] = Form.useForm();
    const [file, setFile] = useState(null);

    const { TextArea } = Input;

    const SubmitButton = ({ form }) => {
        const [submittable, setSubmittable] = useState(false);

        // Watch all values
        const values = Form.useWatch([], form);

        useEffect(() => {
            form
                .validateFields({
                    validateOnly: true,
                })
                .then(
                    () => {
                        setSubmittable(true);
                    },
                    () => {
                        setSubmittable(false);
                    },
                );
        }, [values]);

        return (
            <Button type="primary" htmlType="submit" disabled={!submittable} onClick={postProject}>
                Criar
            </Button>
        );
    };

    async function postProject(){
        const nome = form.getFieldValue("Nome");
        const descricao = form.getFieldValue("Descricao");

        const projeto = {
            nome: nome,
            descricao: descricao,
            apelido: "ze"
        }

        const response = await fetch("http://localhost:8000/projetos/cadastrar-projeto/", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(projeto), // body data type must match "Content-Type" header
        });

        //console.log(nome + "\n" + descricao+ "\n" + file);
    }

    useEffect(() => {
    }, []);

    const handleFileChange = (props) => {
        setFile(props.file);
    }

    return (
        <>
            <Form
                form={form}
                labelCol={{
                    span: 7,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item name="Nome" label="Nome do projeto">
                    <Input />
                </Form.Item>
                <Form.Item name="Descricao" label="Descrição">
                    <TextArea rows={7} />
                </Form.Item>
                <Form.Item name="Banner" label="Banner">
                    {/* <Upload action="/upload.do" listType="picture-card"> */}
                    <Upload maxCount="1" listType="picture-card" beforeUpload={() => {return false;}} onChange={handleFileChange}>
                        <PlusOutlined />
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Space>
                        <SubmitButton form={form} />
                        <Button htmlType="reset">Cancelar</Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    )
}
