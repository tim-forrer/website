// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { theme } from '../styles/theme';
import { MantineProvider } from '@mantine/core';
import '../styles/styles.css'

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
