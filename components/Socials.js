import Link from "next/link";
import { Group, ThemeIcon } from "@mantine/core";
import { person } from "../public/me"
import { iconLibrary } from "../public/icons"

export default function Socials({ size=30 }) {
  return(
    <Group gap={2}>
      {person.socials.map(({ icon, link }) => {
        const IconComponent = iconLibrary[icon];
        return (
          <Link
            href={link}
            target="_blank" // open in new tab
            rel="noopener noreferrer" // prevents new tab from accessing current page / stops new tab seeing what opened it
            key={icon}>
            <ThemeIcon color="black" variant="transparent">
              <IconComponent size={size}/>
            </ThemeIcon>
          </Link>
        )
      })}
    </Group>
  )
  }