import React from "react";
import MainLayout from "@/components/MainLayout";
import { Table } from "antd";
import Content from "@/components/Content";
import useSWR from "swr";
import { columns, columnsShort } from "@/configs/columns";
import DashboardCash from "./DashboardCash";
import BookingFilter from "./BookingFilter";
import { useUIContext } from "@/contexts/contextUI";
import dayjs from "dayjs";
import styled from "styled-components";

const HomeView = () => {
  const { filterBookingDate, filterColumnOption } = useUIContext();
  const { data, isLoading } = useSWR(
    `/api/GetBookingByDate/${dayjs(filterBookingDate).format("YYYY-MM-DD")}`,
    null
    // { refreshInterval: 2000 }
  );

  return (
    <MainLayout display="inline-block">
      <Wrapper>
        <DashboardCash />
        <BookingFilter />

        <Content
          style={{
            minHeight: "calc(100%-500px)",
            display: "inline-block",
          }}
        >
          <Table
            bordered
            rowKey="rowNumber"
            size="small"
            loading={isLoading}
            columns={filterColumnOption === "all" ? columns : columnsShort}
            dataSource={data?.result?.bookingList}
            pagination={{ pageSize: 50, position: ["bottomCenter"] }}
          />
        </Content>
      </Wrapper>
    </MainLayout>
  );
};

export default HomeView;

const Wrapper = styled.div`
  height: 100%;
`;
