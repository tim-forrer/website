import { social } from "../public/me";
import Link from "next/link";
import { iconLibrary } from "../public/icons"
import { Group, ThemeIcon } from "@mantine/core";

export default function Socials( {size=30} ) {
  return(
    <Group gap={2}>
      {social.map(({ icon, link }) => {
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