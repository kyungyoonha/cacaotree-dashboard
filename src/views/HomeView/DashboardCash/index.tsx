import React from "react";
import { Card, Statistic } from "antd";
import Content from "@/components/Content";

import useSWR from "swr";
import { formatter } from "@/libs/formatter";
import styled from "styled-components";

const DashboardCash = () => {
  const { data, isLoading } = useSWR(`/api/GetBookingCashStatus`, null, {
    // refreshInterval: 2000,
  });

  return (
    <Wrapper>
      <Card>
        <Statistic
          loading={isLoading}
          title="Spa Peso"
          value={data?.result?.spaPeso}
          prefix={"P"}
          formatter={formatter}
        />
      </Card>

      <Card>
        <Statistic
          loading={isLoading}
          title="Spa Dollar"
          value={data?.result?.spaDollar}
          prefix={"$"}
          formatter={formatter}
        />
      </Card>

      <Card>
        <Statistic
          loading={isLoading}
          title="Spa Won"
          prefix={"₩"}
          value={data?.result?.spaWon}
          formatter={formatter}
        />
      </Card>

      <Card>
        <Statistic
          loading={isLoading}
          title="Manager Peso"
          prefix={"P"}
          value={data?.result?.managerPeso}
          formatter={formatter}
        />
      </Card>
    </Wrapper>
  );
};

export default React.memo(DashboardCash);

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > div {
    width: 200px;
    min-height: 40px;
    margin-right: 20px;

    & > div {
      padding: 15px !important;
    }
  }
`;
