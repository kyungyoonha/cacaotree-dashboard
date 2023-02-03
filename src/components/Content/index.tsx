import React, { ReactNode } from "react";
import { Layout } from "antd";
import theme from "@/styles/theme";
const { Content: AntdContent } = Layout;

type Props = {
  children: ReactNode;
  style?: any;
};

const Content = ({ children, style }: Props) => {
  return (
    <AntdContent
      style={{
        padding: 24,
        minHeight: 100,
        background: theme.colorBgContainer,
        borderRadius: 15,
        ...style,
      }}
    >
      {children}
    </AntdContent>
  );
};

export default Content;
