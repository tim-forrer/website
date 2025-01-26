import Socials from './Socials';
import { Container } from '@mantine/core';
import classes from './Footer.module.css';
import { Text } from '@mantine/core';

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text>© {year} // Tim Forrer</Text>
        <Socials />
      </Container>
    </div>
  );
}