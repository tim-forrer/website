// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { theme } from '../styles/theme';
import { MantineProvider } from '@mantine/core';
import '../styles/styles.css'
import Layout from '../components/Layout';
import { AnimatePresence } from 'motion/react';

export default function App({ Component, pageProps, router }) {
  return (
    <MantineProvider theme={theme}>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </MantineProvider>
  );
}
