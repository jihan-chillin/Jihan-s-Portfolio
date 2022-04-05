import React from 'react';
import App from 'next/app';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import wrapper from '../../store/configureStore';
import { useSelector } from 'react-redux';
import '../styles/global.css';


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