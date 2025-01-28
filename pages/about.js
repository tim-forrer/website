import { createElement } from "react";
import { Timeline, Title, Stack, Text, Center } from "@mantine/core";
import Date from "../components/Date";
import SkewMark from "../components/SkewMark";
import Avatar from "../components/Avatar";
import { theme } from "../styles/theme";
import { person } from "../public/me";
import { iconLibrary } from "../public/icons";

export default function About() {
  const timelineItems = person.events.map((event) => {
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
    <Stack>
        <Center>
          <Avatar src="/images/me.jpg" />
        </Center>
        <Text>{person.bio}</Text>
      <Title order={2}><SkewMark>Tim</SkewMark>eline</Title>
      <Timeline active={3} lineWidth={3} reverseActive color={theme.colors.blue[3]}>
        {timelineItems}
      </Timeline>
    </Stack>
  )
};