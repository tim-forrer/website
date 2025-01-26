const person = {
  firstName: "Tim",
  lastName: "Forrer",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Doctoral Student",
  avatar: "/images/me.jpg",
  location: "Asia/Tokyo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Japanese", "Mandarin"],
  bio: (
    <>
    Doctoral student at the University of Tokyo.<br />
    Currently researching methods of functionally programming quantum computers.<br />
    <br />
    Outside of research, I'm interested in anything that helps us learn more about the world.
    I'm currently teaching myself data science/ML through Kaggle, have taken courses from the Graduate School of Economics, and enjoy taking photos.
    </>
  ),
}

const education = [
  {
    id: 0,
    institution: "University of Tokyo",
    country: "Japan",
    qualification: "PhD",
    dateStart: "2022-10-01",
    dateEnd: "2026-03-31",
    info: (
      <>
        Supervised by Prof. Mio Murao.
        Research based on two topics:
        (1) functional programming for quantum computers (higher-order quantum theory),
        (2) distributed quantum computing (continuing from work done as a research student).
      </>
    ),
  },
  {
    id: 1,
    institution: "University of Tokyo",
    country: "Japan",
    qualification: "Research Student",
    dateStart: "2021-10-01",
    dateEnd: "2022-09-30",
    info: (
      <>
        Supervised by Prof. Mio Murao.
        Research based on distributed quantum computing.
      </>
    )
  },
  {
    id: 2,
    institution: "Durham University",
    country: "UK",
    qualification: "MSci (First Class)",
    dateStart: "2017-10-01",
    dateEnd: "2021-07-31",
    info: (
      <>
        Studied maths and physics under the Natural Sciences programme.
        Modules included linear algebra, multivariable calculus, probability, and advanced theoretical physics.<br />
        <br />
        Awarded the Natural Sciences award for Outstanding Achievement in both 2016 and 2017 in recognition of my academic performance.
      </>
    )
  },
]


const social = [
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

export {
  person,
  social,
  education
}