import React, { useEffect } from 'react';
import App from 'next/app';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import wrapper from '../../store/configureStore';
import '../styles/global.css';
import { useSelector } from 'react-redux';


function app({ Component, pageProps } : AppProps) {
  const {color} = useSelector((state:any)=> state.theme)
    return (
      <ThemeProvider theme={color}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
   
app.getInitialProps = async (appContext : any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default wrapper.withRedux(app);