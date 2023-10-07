import { UserOutlined } from "@ant-design/icons";
import { Space } from "antd";
import React from "react";

export default function Contributor({ username }) {
    return (
        <Space>
            <UserOutlined size={30} />
            <p className="project-member">{username}</p>
        </Space>
    );
}
