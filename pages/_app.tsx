import React from 'react';
import App from 'next/app';
import { AppProps } from 'next/app';

function app({ Component, pageProps } : AppProps) {
    return <Component {...pageProps} />
  }
   
app.getInitialProps = async (appContext : any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default app;