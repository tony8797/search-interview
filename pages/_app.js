import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '@/components/layouts';
import reduxStore from '@/redux/store';
import theme from '@/themes/theme';
import config from '@/configs/config';

import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

// axios global setting
axios.defaults.baseURL = config.serverUrl;

const { wrapper } = reduxStore;
function AppWrapper({
  Component,
  pageProps,
}) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange());

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange());
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CssBaseline>
    </ThemeProvider>
  );
}

AppWrapper.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default wrapper.withRedux(AppWrapper);
