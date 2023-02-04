import React from "react";
import { Col, Row, Statistic } from "antd";
import Content from "@/components/Content";

import useSWR from "swr";
import { formatter } from "@/libs/formatter";

const DashboardCash = () => {
  const { data, isLoading } = useSWR(`/api/getCashStatus`, null, {
    refreshInterval: 1000,
  });

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
              title="Spa Peso"
              value={data?.result?.spaPeso}
              prefix={"P"}
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
              title="Spa Dollar"
              value={data?.result?.spaDollar}
              prefix={"$"}
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
              title="Spa Won"
              prefix={"₩"}
              value={data?.result?.spaWon}
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
              title="Manager Peso"
              prefix={"P"}
              value={data?.result?.managerPeso}
              formatter={formatter}
            />
          </Content>
        </Col>
      </Row>
      <br />
    </>
  );
};

export default React.memo(DashboardCash);
