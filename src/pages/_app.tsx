import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";
import Head from "next/head";
import { SWRConfig } from "swr";
import "antd/dist/reset.css";

import type { AppProps } from "next/app";
import { UIContextProvider } from "@/contexts/contextUI";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>CacaoTree Dashbord</title>
      </Head>
      <SWRConfig
        value={{
          fetcher: (url: string) =>
            fetch(url).then((response) => response.json()),
        }}
      >
        <UIContextProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIContextProvider>
      </SWRConfig>
    </>
  );
}
