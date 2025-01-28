import { getAllProjectIds, getProjectData } from "../../lib/projects";

export default function Project({ projectData }) {
  return(
    <>
      {projectData.title} <br />
      {projectData.id} <br />
      {projectData.date}
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