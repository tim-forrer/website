import { Card, Group, Stack, Title, Text } from "@mantine/core";
import Link from "next/link";
import TagGroup from "./TagGroup";

export default function ProjectCard({ projectData }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
      </Card.Section>
      <Stack>
        <Group>
          <Link href={projectData.href}>
            <Title>{projectData.title}</Title>
          </Link>
          <Text>{projectData.summary}</Text>
        </Group>
        <TagGroup data={projectData} />
      </Stack>
    </Card>
  )
}