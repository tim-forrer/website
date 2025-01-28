import { getAllProjectIds, getProjectData } from "../../lib/projects";
import ProjectCard from "../../components/ProjectCard";
import { Stack } from "@mantine/core";

export default function ProjectHome({ allProjectData }) {
  const projectCards = allProjectData.map(
    (projectData) => (<ProjectCard projectData={projectData} key={`${projectData.id}`}/>)
  );
  return (
    <Stack>
      {projectCards}
    </Stack>
  );
}



export async function getStaticProps() {
  const allProjectIds = getAllProjectIds();
  
  const allProjectData = await Promise.all(
    allProjectIds.map(async ({ params }) => {
      const projectData = await getProjectData(params.id);
      return projectData;
    })
  );

  // Return the result as props
  return {
    props: {
      title: "Projects",
      allProjectData,
    },
  };
}