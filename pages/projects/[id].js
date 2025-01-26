import Layout from '../../components/Layout';
import Date from '../../components/Date';
import Head from 'next/head';
import { Title } from '@mantine/core';
import { getAllProjectIds, getProjectData } from '../../lib/projects';

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export default function Project( {projectData} ) {
  return (
    <Layout home={false}>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <Title order={1}>{projectData.title}</Title>
        <div className={utilStyles.lightText}>
          <Date dateString={projectData.date} />
        </div>
        <div>{projectData.summary}</div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  );
}