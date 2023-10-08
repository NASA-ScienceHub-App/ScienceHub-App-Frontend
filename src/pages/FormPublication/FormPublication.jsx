import React, { useEffect, useRef, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
    Select,
    Upload,
    Space
} from 'antd';

const habilidadesDefault = [];

for (let i = 10; i < 36; i++) {
    habilidadesDefault.push({
        value: i.toString(36) + i,
    });
}

const niveisDefault = [];

for (let i = 10; i < 36; i++) {
    niveisDefault.push({
        value: i.toString(26) + i,
    });
}

export default function FormPublication() {
    const [form] = Form.useForm();
    const [habilidades, setHabilidades] = useState([]);
    const [niveis, setNiveis] = useState([]);
    const [file, setFile] = useState(null);
    const [tagsVisible, setTagsVisible] = useState(false);

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
            <Button type="primary" htmlType="submit" disabled={!submittable} onClick={postPublication}>
                Publicar
            </Button>
        );
    };

    async function postPublication(){
        const titulo = form.getFieldValue("Titulo");
        const tipo = form.getFieldValue("Tipo");
        const info = form.getFieldValue("Info");

        const publicacao = {
            projeto: 1,
            tipo: tipo,
            titulo: titulo,
            descricao: info,
            habilidades: habilidades,
            niveis: niveis
        }

        const response = await fetch("http://localhost:8000/projetos/cadastrar-publicacao/", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(publicacao), // body data type must match "Content-Type" header
        });

        //console.log(titulo + "\n" + tipo+ "\n" + info + "\n" + file + "\n" + niveis+ "\n" + habilidades);
    }

    useEffect(() => {
    }, [tagsVisible]);

    const handleHabilidadesChange = (values) => {
        setHabilidades(values);
    };

    const handleNiveisChange = (values) => {
        setNiveis(values);
    };

    const handlePubTypeChange = (value) => {
        switch (value) {
            case "Noticia":
                setTagsVisible(false);
                break;
            case "Recrutamento":
                setTagsVisible(true);
                break;
        }
    };

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
                <Form.Item name="Titulo" label="Título da publicação">
                    <Input />
                </Form.Item>
                <Form.Item name="Tipo" label="Tipo da publicação" style={{ marginRight: "10px" }}>
                    <Select onChange={handlePubTypeChange}>
                        <Select.Option value="Noticia">Notícia</Select.Option>
                        <Select.Option value="Recrutamento">Recrutamento</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="Info" label="Informações">
                    <TextArea rows={7} />
                </Form.Item>
                <Form.Item name="Banner" label="Banner">
                    {/* <Upload action="/upload.do" listType="picture-card"> */}
                    <Upload maxCount="1" listType="picture-card" beforeUpload={() => {return false;}} onChange={handleFileChange}>
                        <PlusOutlined />
                    </Upload>
                </Form.Item>

                {tagsVisible && (
                    <>
                        <Form.Item name="Habilidades" label="Habilidades desejadas">
                            <Space
                                style={{
                                    width: '100%',
                                }}
                                direction="vertical"
                            >
                                <Select
                                    mode="multiple"
                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Selecione habilidades desejadas"
                                    onChange={handleHabilidadesChange}
                                    options={habilidadesDefault}
                                />
                            </Space>
                        </Form.Item>

                        <Form.Item name="Niveis" label="Níveis desejados">
                            <Space
                                style={{
                                    width: '100%',
                                }}
                                direction="vertical"
                            >
                                <Select
                                    mode="multiple"
                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Selecione níveis desejados"
                                    onChange={handleNiveisChange}
                                    options={niveisDefault}
                                />
                            </Space>
                        </Form.Item>
                    </>
                )}
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
