import { Group, Badge } from "@mantine/core";
import styles from "./TagGroup.module.css";

function TagsAsBadges(data, size) {
  return data.tags.map((tag) => (
    <Badge size={size} key={data.id} className={styles.badge}>{tag}</Badge>
  ));
}

export default function TagGroup({ data, size="xs", gap=5 }) {
  return (
    <Group gap={gap}>
      {TagsAsBadges(data, size)}
    </Group>
  )
}