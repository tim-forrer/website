import Head from 'next/head';
import Layout from '../components/Layout';
import { person } from '../public/me';
import { getSortedProjectsData } from '../lib/projects';
import '@mantine/core/styles.css';
import ChatUI from '../components/ChatUI';

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
    <Layout>
    <Head>
      <title>{person.name}</title>
    </Head>
    <ChatUI />
    </Layout>
  );
}