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

export default function Projects() {
    const [form] = Form.useForm();
    const [habilidades, setHabilidades] = useState(niveisDefault);
    const [niveis, setNiveis] = useState(habilidadesDefault);
    const [file, setFile] = useState();
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
                Salvar
            </Button>
        );
    };

    async function postPublication(){
        const titulo = form.getFieldValue("Titulo");
        const tipo = form.getFieldValue("Tipo");
        const info = form.getFieldValue("Info");
        //const response = await fetch();
        console.log(titulo + "\n" + tipo+ "\n" + info + "\n" + "\n" + niveis+ "\n" + habilidades);
    }

    useEffect(() => {
    }, [tagsVisible]);

    const handleTagsChange = (values) => {
        console.log(`lista: ${values}`);
    };

    const handlePubTypeChange = (value) => {
        switch (value) {
            case "Notícia":
                setTagsVisible(false);
                break;
            case "Recrutamento":
                setTagsVisible(true);
                break;
        }
    };

    const handleFileChange = (props) => {
        console.log(props.file);
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
                        <Select.Option value="Notícia">Notícia</Select.Option>
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
                                    onChange={handleTagsChange}
                                    options={habilidades}
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
                                    onChange={handleTagsChange}
                                    options={niveis}
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
