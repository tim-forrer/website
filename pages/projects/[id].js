import { getAllProjectIds, getProjectData } from "../../lib/projects";
import { Group, Title, Text } from "@mantine/core";
import Date from "../../components/Date"
import TagGroup from "../../components/TagGroup";
import Markdown from "../../components/Markdown"

export default function Project({ projectData }) {
  return(
    <>
      <Group justify="space-between">
        <Title order={1}>{projectData.title}</Title>
        <Text size="sm"><Date dateString={projectData.date} dateFormat="do MMM yyyy"/></Text>
      </Group>
      {projectData.tags ? <TagGroup data={projectData} /> : null}
      <Markdown contentHtml={projectData.contentHtml} />
    </>
  )
}

export async function getStaticPaths() {
  // list of all id values (i.e. all pages)
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // for given params.id, fetch the data for that page
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
      title: projectData.title,
    }
  }
}