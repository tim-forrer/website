import { Stack, Title, Text, Badge, Group, SemiCircleProgress } from '@mantine/core';
import ChatUI from '../components/ChatUI';
import Link from 'next/link';
import { person } from '../public/me'

export async function getStaticProps() {
  return {
    props: {
      title: "Home",
    },
  };
}

export default function Home() {
  const kaggleLink = person.socials.find(social => social.name === "Kaggle")?.link;
  return (
    <Stack gap={30}>
      <Text size='xl'>
        I <Link href="/projects">prod at the edges of quantum theory</Link> and see if what comes back can be used for building better quantum computers.<br/>
        <br />
        In my spare time, I  <Link href={kaggleLink} target="_blank" rel="noopener noreferrer">teach myself data science</Link>, <Link href="#ll-tim">build LLMs</Link>, and try to take nice photos.
      </Text>
      <Stack gap={8}>
        <Title order={1}>Skills</Title>
        <Group justify='space-between' align='center'>
          {person.languages.map((language) => (
            <SemiCircleProgress
            size={150}
            key={language.label} 
            label={language.label}
            value={language.value}
            emptySegmentColor="var(--mantine-color-gray-3)"
          />))}
        </Group>
        <Group gap='xs'>
          {person.skills.map((skill) => (<Badge size='lg'>{skill}</Badge>))}
        </Group>
      </Stack>
      <Stack gap={8}>
        <Title order={1} id="ll-tim">LL-tiM - a personalised LLM</Title>
        <ChatUI />
        {/* You can read about the process of building LL-tiM here! */}
      </Stack>
    </Stack>
  );
}