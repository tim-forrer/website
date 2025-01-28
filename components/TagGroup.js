import { Group, Badge } from "@mantine/core";
import styles from "./TagGroup.module.css";
import { HiHashtag } from "react-icons/hi2";

function TagsAsBadges(data, size) {
  const hashtag = <HiHashtag size={10} />
  return data.tags.map((tag) => (
    <Badge size={size} key={data.id} className={styles.badge} leftSection={hashtag}>{tag}</Badge>
  ));
}

export default function TagGroup({ data, size="xs", gap=5 }) {
  return (
    <Group gap={gap}>
      {TagsAsBadges(data, size)}
    </Group>
  )
}