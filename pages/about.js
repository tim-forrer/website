import { Timeline, Title, Stack, Text, Avatar, Group, Center } from "@mantine/core";
import SkewMark from "../components/SkewMark";
import Date from "../components/Date";
import { theme } from "../styles/theme";
import { person } from "../public/me";
import PageMotion from "../components/PageMotion";
import { iconLibrary } from "../public/icons";
import { createElement } from "react";

const events = [
  {
    name: "TBD",
    get key() {
      return `${this.name}`.replace(/\s/g, "");
    },
    title: "",
    dateStart: "",
    dateEnd: "",
    country: "",
    content: "Actively looking for next opportunity - please reach out if you're hiring!",
    lineVariant: "dashed",
    icon: "question",
  },
  {
    name: "University of Tokyo",
    get key() {
      return `${this.name}`.replace(/\s/g, "");
    },
    title: "PhD",
    dateStart: "2022-10-01",
    dateEnd: "2026-03-31",
    country: "JAPAN",
    content: "Researching functional quantum computing as a doctoral student.",
    icon: "university",
    lineVariant: "dashed",
  },
  {
    name: "University of Tokyo",
    get key() {
      return `${this.name}`.replace(/\s/g, "");
    },
    title: "Research Student",
    dateStart: "2021-10-01",
    dateEnd: "2022-09-30",
    country: "JAPAN",
    content: "Explored distributed quantum computing as a research student.",
    icon: "distributed"
  },
  {
    name: "Durham University",
    get key() {
      return `${this.name}`.replace(/\s/g, "");
    },
    title: "MSci (First Class Hons.)",
    dateStart: "2017-10-01",
    dateEnd: "2021-07-31",
    country: "UK",
    content: "Studied maths and physics under the Natural Sciences programme.",
    icon: "math"
  },
  {
    name: "Reading Blue Coat School",
    get key() {
      return `${this.name}`.replace(/\s/g, "");
    },
    title: "Student",
    dateStart: "2010-09-01",
    dateEnd: "2017-08-31",
    country: "UK",
    content: "",
    icon: "school",
  },
]

export default function About() {
  const timelineItems = events.map((event) => {
    return (
      <Timeline.Item
        key={event.key}
        title={
          <>
            <Title order={5} component="span">
              {event.name}
            </Title>
            <Text size="xs" component="span" ml="xs">
              {event.country}
            </Text>
          </>
        }
        lineVariant={event.lineVariant}
        bullet={iconLibrary[event.icon] ? createElement(iconLibrary[event.icon], { size: 16 }) : null}
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
          <Center>
            <Avatar src={person.avatar} size='xl'/>
          </Center>
          <Text>{person.bio}</Text>
        <Title order={2}><SkewMark>Tim</SkewMark>eline</Title>
        <Timeline active={3} lineWidth={3} reverseActive color={theme.colors.blue[3]}>
          {timelineItems}
        </Timeline>
      </Stack>
    </PageMotion>
  )
};