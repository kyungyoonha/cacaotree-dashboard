import React, { useState } from "react";
import { Avatar, Col, Layout, Menu, Row, Space, Typography } from "antd";

import {
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Logo from "../Logo";

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
    setCurrent(e.key);
  };

  return (
    <Layout style={{ height: "100vh", overflowY: "scroll" }}>
      <Header className="header">
        <Row>
          <Col xs={4} sm={2}>
            <Logo width="40" height="40" />
          </Col>
          <Col xs={19} sm={21}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
              theme="dark"
            />
          </Col>
          <Col xs={1} sm={1}>
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
          height: "calc(100vh - 100px)",
          overflow: "hidden",
        }}
      >
        {children}
      </AntdContent>
    </Layout>
  );
};
export default MainLayout;
