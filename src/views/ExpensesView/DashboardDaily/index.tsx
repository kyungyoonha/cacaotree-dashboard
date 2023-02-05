import { Col, Row, Statistic } from "antd";
import React from "react";
import Content from "@/components/Content";
import { formatter } from "@/libs/formatter";
import useSWR from "swr";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const DashboardDaily = () => {
  const { data, isLoading } = useSWR(`/api/GetDailyReportStatus`, null, {
    refreshInterval: 1000,
  });

  console.log({ data });

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={12} lg={6}>
          <Content
            style={{
              padding: 15,
              minHeight: 50,
            }}
          >
            <Statistic
              loading={isLoading}
              title="Total Guest"
              value={data?.result?.totalGuest}
              suffix="명"
              formatter={formatter}
            />
          </Content>
        </Col>
        <Col xs={12} lg={6}>
          <Content
            style={{
              padding: 15,
              minHeight: 50,
            }}
          >
            <Statistic
              loading={isLoading}
              title="Income(+)"
              value={data?.result?.incomePlus}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              formatter={formatter}
            />
          </Content>
        </Col>
        <Col xs={12} lg={6}>
          <Content
            style={{
              padding: 15,
              minHeight: 50,
            }}
          >
            <Statistic
              loading={isLoading}
              title="Income(-)"
              value={data?.result?.imcomeMinus}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              formatter={formatter}
            />
          </Content>
        </Col>
        <Col xs={12} lg={6}>
          <Content
            style={{
              padding: 15,
              minHeight: 50,
            }}
          >
            <Statistic
              loading={isLoading}
              title="Total Income"
              value={data?.result?.totalIncome}
              prefix={"P"}
              formatter={formatter}
            />
          </Content>
        </Col>
      </Row>
      <br />
    </>
  );
};

export default DashboardDaily;
