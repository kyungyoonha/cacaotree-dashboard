import Content from "@/components/Content";
import MainLayout from "@/components/MainLayout";
import React from "react";
import DashboardDaily from "./DashboardDaily";
import useSWR from "swr";

const ExpensesView = () => {
  const { data, isLoading } = useSWR(`/api/GetDailyReport`, null, {
    refreshInterval: 1000,
  });

  console.log(data);
  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <DashboardDaily />
        <Content style={{ overflow: "scroll", flex: 1 }}>few</Content>
      </div>
    </MainLayout>
  );
};

export default ExpensesView;
