import MyHead from './MyHead';
import Footer from './Footer';
import HeaderSimple from './HeaderSimple';
import { Container } from '@mantine/core';
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <MyHead/>
      <Container className={styles.container}>
        <HeaderSimple />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
    
  );
}