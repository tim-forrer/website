import MyHead from './MyHead';
import Footer from './Footer';
import HeaderSimple from './HeaderSimple';
import { Container } from '@mantine/core';
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <Container className={styles.container}>
      <MyHead />
      <HeaderSimple />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}