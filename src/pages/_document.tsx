import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* 
            ### NEXT JS + 구글 폰트 사용해야하는 이유?
              - 구글 폰트로 설정하면 빌드할때 .next 파일안에 다 다운받아서 static으로 만들어준다. 
              - 유저가 페이지 열때 다시 폰트를 다운 받을 필요 없음 
              - 로딩 굉장히 빨라진다.
              - .next/server/pages/index.html 보면 폰트가 다 들어가져있음
            */}

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
