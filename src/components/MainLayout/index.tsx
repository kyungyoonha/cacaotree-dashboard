import React, { useEffect, useState } from "react";
import { Avatar, Layout, Menu } from "antd";

import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Logo from "../Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const { Header, Content: AntdContent } = Layout;

interface MainLayoutProps {
  display: string | `${string}`;
  children: React.ReactNode;
}

const items: MenuProps["items"] = [
  {
    label: <Link href="/">Dashboard</Link>,
    key: "dashboard",
    icon: <AppstoreOutlined />,
  },
  // {
  //   label: <Link href="/expenses">Expenses</Link>,
  //   key: "expenses",
  //   icon: <SettingOutlined />,
  // },
];

const MainLayout = ({ display, children }: MainLayoutProps) => {
  const { asPath } = useRouter();
  const [current, setCurrent] = useState("dashboard");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    if (!asPath) return;
    if (asPath === "/") return setCurrent("dashboard");
    const pageId = asPath.split("/")[1];
    setCurrent(pageId);
  }, [asPath]);

  return (
    <StyledLayout display={display}>
      <StyledHeader className="header">
        <Logo width="40" height="40" margin="0 30px" />

        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          theme="dark"
          style={{ flex: 1 }}
        />

        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
      </StyledHeader>

      <AntdContent
        style={{
          display: "inline-block",
          margin: "20px",
          height: "calc(100vh - 100px)",
        }}
      >
        {children}
      </AntdContent>
    </StyledLayout>
  );
};
export default MainLayout;

type Props = {
  display: string;
};
const StyledLayout = styled(Layout)<Props>`
  display: inline-block;
  min-width: 100vw;
`;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
`;
