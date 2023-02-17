import React from "react";
import Head from "next/head";
import ExpensesView from "@/views/ExpensesView";

const Expenses = () => {
  return (
    <>
      <Head>
        <title>Expense Dashboard</title>
        <meta name="description" content="Cacaotree - Expense Dashboar" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ExpensesView />
    </>
  );
};

export default Expenses;
