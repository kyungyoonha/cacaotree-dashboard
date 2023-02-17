import React from "react";
import Head from "next/head";
import HomeView from "@/views/HomeView";

export default function Home() {
  return (
    <>
      <Head>
        <title>Booking Dashboard</title>
        <meta name="description" content="Cacaotree - Booking Dashboard" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />
    </>
  );
}
