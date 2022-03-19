import React from 'react'
import Document,{ Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document{
  static async getInitialProps(ctx){

    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

      // 리액트 렌더링을 동기적으로 실행
    ctx.renderPage = () =>
      originalRenderPage({
        // 전체 애플리케이션 wrapping
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheet.getStyleElement(),
      ],
    };
  }

  render(){
    return(
      <Html lang="ko">
        <Head>
          {/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;