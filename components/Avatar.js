import Image from "next/image";
import styles from "./Avatar.module.css"

export default function Avatar({ width=100, height=100, ...rest }) {
  return (
    <Image className={styles.avatar} width={width} height={height} {...rest} />
  )
}