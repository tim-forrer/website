import MyHead from './MyHead';
import Footer from './Footer';
import HeaderSimple from './HeaderSimple';
import { Container } from '@mantine/core';

export default function Layout({ children }) {
  return (
    <Container w='40vw'>
      <MyHead/>
      <HeaderSimple />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}