import { Group, Badge } from "@mantine/core";
import { person } from "../public/me";
import styles from "./SkillsGroup.module.css"

export default function SkillsGroup({ languages=true }) {
  const skills = languages ? person.languages.concat(person.skills) : person.skills

  return (
    <Group className={styles.group}>
      {skills.map((skill) => (<Badge leftSection={skill.icon} key={skill.label} size='lg'>{skill.label}</Badge>))}
    </Group>
  )
}