import { TypographyStylesProvider } from "@mantine/core"

export default function Markdown({ contentHtml }) {
  // To style processed markdown, can just style the TypographStylesProvider
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{__html: contentHtml}} />
    </TypographyStylesProvider>
  )
}