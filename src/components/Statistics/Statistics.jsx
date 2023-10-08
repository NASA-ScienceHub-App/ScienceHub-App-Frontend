import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

import "./styles.css"

export default function Statistics() {
    return (
        <Row gutter={12} className="statistic-container">
            <Col span={12}>
                <Card className="statistic-card" bordered={false}>
                    <Statistic
                        title="Contribuições"
                        value={37.4}
                        precision={2}
                        valueStyle={{ color: "#3f8600" }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card className="statistic-card" bordered={false}>
                    <Statistic
                        title="Desistencias"
                        value={4.0}
                        precision={2}
                        valueStyle={{ color: "#cf1322" }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
        </Row>
    );
}
