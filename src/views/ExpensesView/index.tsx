import Content from "@/components/Content";
import MainLayout from "@/components/MainLayout";
import React from "react";
import DashboardDaily from "./DashboardDaily";
import useSWR from "swr";
import { Table, Typography } from "antd";
import ExpensesFilter from "./ExpensesFilter";
const { Title } = Typography;

const ExpensesView = () => {
  const { data, isLoading } = useSWR(`/api/GetDailyReport`, null, {
    refreshInterval: 1000,
  });

  return (
    <MainLayout>
      <div
        style={{
          height: "100%",
          overflow: "scroll",
        }}
      >
        <ExpensesFilter />
        <DashboardDaily />
        <Content style={{ overflow: "scroll", height: "300px" }}>
          <Title level={5}>Top 5 Peso (+)</Title>
          <Table
            bordered
            rowKey="rank"
            scroll={{ y: 600 }}
            size="small"
            loading={isLoading}
            columns={columns}
            dataSource={data?.result?.topListMius}
            pagination={false}
          />
        </Content>
        <br />
        <Content style={{ overflow: "scroll", height: "300px" }}>
          <Title level={5}>Top 5 Peso (+)</Title>
          <Table
            bordered
            rowKey="rank"
            scroll={{ y: 600 }}
            size="small"
            loading={isLoading}
            columns={columns}
            dataSource={data?.result?.topListMius}
            pagination={false}
          />
        </Content>
      </div>
    </MainLayout>
  );
};

export default ExpensesView;

export const columns = [
  {
    title: "rank",
    key: "rank",
    dataIndex: "rank",
    render: (text: any) => <div style={{ minWidth: "50px" }}>{text}</div>,
  },
  {
    title: "date",
    key: "date",
    dataIndex: "date",
    render: (text: any) => <div style={{ minWidth: "50px" }}>{text}</div>,
  },
  {
    title: "category",
    key: "category",
    dataIndex: "category",
    render: (text: any) => <div style={{ minWidth: "60px" }}>{text}</div>,
  },
  {
    title: "type",
    key: "type",
    dataIndex: "type",
    render: (text: any) => <div style={{ minWidth: "50px" }}>{text}</div>,
  },
  {
    title: "incharge",
    key: "incharge",
    dataIndex: "incharge",
    render: (text: any) => <div style={{ minWidth: "60px" }}>{text}</div>,
  },
  {
    title: "incomePlus",
    key: "incomePlus",
    dataIndex: "incomePlus",
    render: (text: any) => <div style={{ minWidth: "70px" }}>{text}</div>,
  },
  {
    title: "incomeMinus",
    key: "incomeMinus",
    dataIndex: "incomeMinus",
    render: (text: any) => <div style={{ minWidth: "70px" }}>{text}</div>,
  },
  {
    title: "detail",
    key: "detail",
    dataIndex: "detail",
    render: (text: any) => <div style={{ minWidth: "50px" }}>{text}</div>,
  },
];
