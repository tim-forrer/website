import path from "path";
import fs from 'fs'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'projects')

export function getAllProjectIds() {
  // for every file in the projects directory
  // create an object with an id corresponding to the filename sans extension
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // parse frontmatter
  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data
  }
}