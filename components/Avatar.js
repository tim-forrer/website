import Image from "next/image";
import styles from "./Avatar.module.css"

export default function Avatar({ src, width=100, height=100 }) {
  return (
    <Image src={src} className={styles.avatar} width={width} height={height}/>
  )
}