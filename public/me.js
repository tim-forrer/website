import { FaPython, FaReact } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { GrTestDesktop } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import { SiNextdotjs, SiOllama } from "react-icons/si";
import { TbChartInfographic, TbGitMerge, TbLetterA } from "react-icons/tb";
import { mdiSyllabaryHiragana } from '@mdi/js';
import Icon from "@mdi/react";

function generateKey(string) {
  return string.replace(/\s/g, '')
}

const eventsData = [
  {
    name: "TBD",
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
    title: "Research Student",
    dateStart: "2021-10-01",
    dateEnd: "2022-09-30",
    country: "JAPAN",
    content: "Explored distributed quantum computing as a research student.",
    icon: "distributed"
  },
  {
    name: "Durham University",
    title: "MSci (First Class Hons.)",
    dateStart: "2017-10-01",
    dateEnd: "2021-07-31",
    country: "UK",
    content: "Studied maths and physics under the Natural Sciences programme.",
    icon: "math"
  },
  {
    name: "Reading Blue Coat School",
    title: "Student",
    dateStart: "2010-09-01",
    dateEnd: "2017-08-31",
    country: "UK",
    content: "",
    icon: "school",
  },
]

const events = eventsData.map((event, index) => ({
  ...event,
  key: generateKey(`${event.name}-${index}`)
}))

const socials = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tim-forrer",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/timothy-f-46158b107/",
  },
  {
    name: "Kaggle",
    icon: "kaggle",
    link: "https://www.kaggle.com/timforrer",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:tim.d.forrer@gmail.com",
  },
];

const skills = [
  { label: "Prototyping", icon: <GrTestDesktop/>},
  { label: "Forecasting", icon: <GoGraph />},
  { label: "Python", icon: <FaPython/>},
  { label: "Data analysis", icon: <TbChartInfographic />},
  { label: "Git", icon: <TbGitMerge />},
  { label: "LLMs", icon: <LuBrainCircuit style={{ transform: 'rotate(90deg)'}} />},
  { label: "Javascript", icon: <IoLogoJavascript />},
  { label: "Ollama", icon: <SiOllama/>},
  { label: "Next", icon: <SiNextdotjs/>},
  { label: "React", icon: <FaReact/>},
]

const languages = [
  { label: "English", icon: <TbLetterA/>},
  { label: "Japanese", icon: <Icon path={mdiSyllabaryHiragana} size={0.75} />},
  {label: "Mandarin", icon: <IoLanguage/>}
]

const person = {
  firstName: "Tim",
  lastName: "Forrer",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  avatar: "/images/me.jpg",
  location: "Asia/Tokyo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: languages,
  events: events,
  socials: socials,
  skills: skills,
}

export {
  person,
}