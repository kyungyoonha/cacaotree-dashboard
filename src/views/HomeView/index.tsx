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
    null
    // { refreshInterval: 2000 }
  );

  return (
    <MainLayout>
      <div
        style={{
          // display: "flex",
          height: "100%",
          // flexDirection: "column",
          overflow: "scroll",
        }}
      >
        <DashboardCash />
        <BookingFilter />

        <Content
          style={{
            // overflow: "scroll", flex: 1
            minHeight: "calc(100%-500px)",
          }}
        >
          <Table
            bordered
            rowKey="rowNumber"
            size="small"
            scroll={{ x: "max-content" }}
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
