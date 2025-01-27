import { getSortedProjectsData } from '../lib/projects';
import '@mantine/core/styles.css';
import ChatUI from '../components/ChatUI';
import PageMotion from '../components/PageMotion';

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData
    },
  };
}


export default function Home({ allProjectsData }) {
  return (
    <PageMotion>
      <ChatUI />
    </PageMotion>
  );
}