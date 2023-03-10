import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }

    html {
        scroll-behavior: smooth;
        height: 100%;
        min-width: 1280px;
    }

    ul {
        list-style:none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    li {
        list-style: none;
    }

    .ant-table-fixed {
        table-layout: fixed;
    }

    .ant-table table { font-size: 10px; }

    .dashboard table {
        width: auto;
        max-width: 150px !important;
    }
`;

export default GlobalStyles;
