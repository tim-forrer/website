import { Mark } from "@mantine/core";
import classes from "./SkewMark.module.css"

export default function SkewMark({ children }) {
  return (
    <Mark className={classes.skew}>{children}</Mark>
  )
}