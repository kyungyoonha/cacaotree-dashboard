import { Col, Row, Statistic } from "antd";
import React from "react";
import Content from "@/components/Content";
import { formatter } from "@/libs/formatter";

const DashboardDaily = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={12}>
          <Content
            style={{
              padding: 15,
              minHeight: 50,
            }}
          >
            <Statistic
              // loading={false}
              title="Spa Peso"
              // value={data?.result?.spaPeso}
              value={100000}
              prefix={"P"}
              formatter={formatter}
            />
          </Content>
        </Col>
        <Col xs={12}>
          <Content
            style={{
              padding: 15,
              minHeight: 50,
            }}
          >
            <Statistic
              // loading={false}
              title="Spa Peso"
              // value={data?.result?.spaPeso}
              value={100000}
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
