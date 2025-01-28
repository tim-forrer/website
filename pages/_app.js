// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { theme } from '../styles/theme';
import { MantineProvider } from '@mantine/core';
import '../styles/styles.css'
import Layout from '../components/Layout';
import GlobalHead from '../components/GlobalHead';
import PageHead from '../components/PageHead';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalHead/>
      {/* <PageHead title={pageProps}/> */}
      <MantineProvider theme={theme}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </MantineProvider>
    </>
  );
}
