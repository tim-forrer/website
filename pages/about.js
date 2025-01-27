import { Timeline, Title, Stack, Text, Avatar } from "@mantine/core";
import SkewMark from "../components/SkewMark";
import Date from "../components/date";
import { theme } from "../styles/theme";
import { person } from "../public/me";
import PageMotion from "../components/PageMotion";

const events = [
  {
    name: "???",
    get key() {
      return `${this.name}`.replace(/\s/g, "");
    },
    title: "",
    dateStart: "",
    dateEnd: "",
    country: "jp",
    content: "Actively looking for next opportunity - please reach out if you're hiring!",
    lineVariant: "dashed",
  },
  {
    name: "University of Tokyo",
    get key() {
      return `${this.name}`.replace(/\s/g, "");
    },
    title: "PhD",
    dateStart: "2022-10-01",
    dateEnd: "2026-03-31",
    country: "jp",
    content: "Doctoral student researching functional quantum computing.",
  },
  {
    name: "University of Tokyo",
    get key() {
      return `${this.name}`.replace(/\s/g, "");
    },
    title: "Research Student",
    dateStart: "2021-10-01",
    dateEnd: "2022-09-30",
    country: "jp",
    content: "Research student researching distributed quantum computing.",
  },
  {
    name: "Durham University",
    get key() {
      return `${this.name}`.replace(/\s/g, "");
    },
    title: "MSci (First Class Hons.)",
    dateStart: "2017-10-01",
    dateEnd: "2021-07-31",
    country: "uk",
    content: "Studied maths and physics under the Natural Sciences programme."
  },
  {
    name: "Reading Blue Coat School",
    get key() {
      return `${this.name}`.replace(/\s/g, "");
    },
    title: "Student",
    dateStart: "2010-09-01",
    dateEnd: "2017-08-31",
    country: "uk",
    content: ""
  },
]

export default function About() {
  const timelineItems = events.map((event) => {
    return (
      <Timeline.Item
        key={event.key}
        title={event.name}
        lineVariant={event.lineVariant}
      >
        <Text size="xs">
          { event.dateStart ? <><Date dateString={event.dateStart} /> - </> : event.dateStart }
          { event.dateEnd ? <Date dateString={event.dateEnd} /> : event.dateEnd }
        </Text>
        <Text c="dimmed" size="sm" mt={4}>{event.content}</Text>
      </Timeline.Item>
    );
  })
  return (
    <PageMotion>
      <Stack>
        <Title order={2} display='inline'>About <Avatar src={person.avatar}/></Title>
          {person.bio}
        <Title order={2}><SkewMark>Tim</SkewMark>eline</Title>
        <Timeline active={3} lineWidth={3} reverseActive color={theme.colors.blue[3]}>
          {timelineItems}
        </Timeline>
      </Stack>
    </PageMotion>
  )
};