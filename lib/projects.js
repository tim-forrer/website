import path from "path";
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from "remark";
import html from "remark-html"

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

export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // parse frontmatter
  const matterResult = matter(fileContents);
  // process md to html
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data
  };
}