import { useState } from 'react';
import { Group, Stack, Title, Text, Image, ThemeIcon } from '@mantine/core';
import classes from './HeaderSimple.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Change this to be dynamic
const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/projects', label: 'Projects'}
];

export default function HeaderSimple() {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Group justify='space-between' align='center'>
        <Group>
          <ThemeIcon>
            <Image src='/TF-logo.svg' w='150%'/>
          </ThemeIcon>
          <Stack gap={0}>
            <Title order={1}>Tim Forrer</Title>
            <Text size='sm'>Doctoral Student @ UTokyo</Text>
          </Stack>
        </Group>
        <Group justify='flex-end'>{items}</Group>
      </Group>
    </header>
  );
}