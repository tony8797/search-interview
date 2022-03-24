import Head from 'next/head';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Header from '@/components/headers';

function Layout({
  children,
}) {
  return (
    <Box>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
