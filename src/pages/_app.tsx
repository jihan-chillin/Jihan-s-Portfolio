import React, { useEffect } from 'react';
import App from 'next/app';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme.styles';
import wrapper from '../../store/configureStore';
import '../styles/global.css';


function app({ Component, pageProps } : AppProps) {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
   
app.getInitialProps = async (appContext : any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default wrapper.withRedux(app);