import React, { useState } from "react";
import { Avatar, Col, Layout, Menu, Row } from "antd";

import {
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Logo from "../Logo";
import Content from "../Content";

const { Header, Content: AntdContent } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const items: MenuProps["items"] = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Expenses",
    key: "expenses",
    icon: <SettingOutlined />,
    disabled: true,
  },
];

const MainLayout = ({ children }: MainLayoutProps) => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Layout style={{ height: "100vh", overflowY: "scroll" }}>
      <Header className="header">
        <Row>
          <Col xs={4} sm={2}>
            <Logo width="40" height="40" />
          </Col>
          <Col xs={18} sm={20}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
              theme="dark"
            />
          </Col>
          <Col xs={2} sm={2}>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Col>
        </Row>
      </Header>

      <AntdContent
        style={{
          margin: "20px",
          minHeight: 280,
        }}
      >
        {children}
      </AntdContent>
    </Layout>
  );
};
export default MainLayout;
