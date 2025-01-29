import styles from "./Markdown.module.css"

export default function Markdown({ contentHtml }) {
  // To style processed markdown, can just style the TypographStylesProvider
  return (
      <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{__html: contentHtml}}
      />
  )
}