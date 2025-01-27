import { parseISO, format} from "date-fns";

// Parses `dateString` according to the format given
export default function Date({ dateString, dateFormat = 'MMM yyyy' }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, dateFormat)}</time>;
}