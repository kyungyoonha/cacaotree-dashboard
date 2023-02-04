import React from "react";
import MainLayout from "@/components/MainLayout";
import { Table } from "antd";
import Content from "@/components/Content";
import useSWR from "swr";
import columns from "@/configs/columns";
import DashboardCash from "./DashboardCash";
import BookingFilter from "./BookingFilter";
import { useUIContext } from "@/contexts/contextUI";
import dayjs from "dayjs";

const HomeView = () => {
  const { bookingFilterDate } = useUIContext();
  const { data, isLoading } = useSWR(
    `/api/getBookingByDate/${dayjs(bookingFilterDate).format("YYYY-MM-DD")}`,
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
        {/* <DashboardDaily /> */}
        <BookingFilter />

        <Content style={{ overflow: "scroll", flex: 1 }}>
          <Table
            bordered
            rowKey="rowNumber"
            scroll={{ x: "max-content", y: 500 }}
            size="small"
            loading={isLoading}
            columns={columns}
            dataSource={data?.result?.bookingList}
            pagination={{ pageSize: 50, position: ["bottomCenter"] }}
          />
        </Content>
      </div>
    </MainLayout>
  );
};

export default HomeView;
