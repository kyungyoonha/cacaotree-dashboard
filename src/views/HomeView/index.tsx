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

const HomeView = () => {
  const { filterBookingDate, filterColumnOption } = useUIContext();
  const { data, isLoading } = useSWR(
    `/api/GetBookingByDate/${dayjs(filterBookingDate).format("YYYY-MM-DD")}`,
    null,
    { refreshInterval: 1000 }
  );

  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <DashboardCash />
        <BookingFilter />

        <Content style={{ overflow: "scroll", flex: 1 }}>
          <Table
            bordered
            rowKey="rowNumber"
            scroll={{
              // x: "max-content",
              y: 500,
            }}
            size="small"
            loading={isLoading}
            columns={filterColumnOption === "all" ? columns : columnsShort}
            dataSource={data?.result?.bookingList}
            pagination={{ pageSize: 50, position: ["bottomCenter"] }}
          />
        </Content>
      </div>
    </MainLayout>
  );
};

export default HomeView;
