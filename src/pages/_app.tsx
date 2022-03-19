import React from 'react';
import App from 'next/app';
import { AppProps } from 'next/app';

import '../styles/global.css';

function app({ Component, pageProps } : AppProps) {
    return <Component {...pageProps} />
  }
   
app.getInitialProps = async (appContext : any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default app;