import { getAllProjectIds, getProjectData } from "../../lib/projects";
import { Group, Title } from "@mantine/core";
import Date from "../../components/Date"
import TagGroup from "../../components/TagGroup";

export default function Project({ projectData }) {
  return(
    <>
      <Group justify="space-between">
        <Title order={2}>{projectData.title}</Title>
        <Date dateString={projectData.date} dateFormat="do MMM yyyy"/>
      </Group>
      <TagGroup data={projectData} />
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
  const projectData = getProjectData(params.id);
  return {
    props: {
      projectData,
      title: projectData.title,
    }
  }
}