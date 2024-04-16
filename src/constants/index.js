import {
  mobile,
  backend,
  creator,
  web,
  config,
  huristic,
  javascript,
  typescript,
  html,
  css,
  ecomm,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Angular Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Config Server LLP",
    icon: config,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern",
    company_name: "Heuristics Technopark",
    icon: huristic,
    iconBg: "#383E56",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Worked on python technology projects and gained solid knowledge of the python",
      "This internship taught me about work ethics, key responsibility, time management, etc",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Our website developer has been instrumental in transforming our online presence. His expertise and dedication have elevated our brand to new heights.",
    name: "Dinesh Raywade",
    designation: "CEO",
    company: "Config Server LLP",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
];

const projects = [
  // {
  //   name: "Company Website",
  //   description:
  //     "Made a website using react, nodeJS and MongoDB for Software Development Company with Admin panel From which you can change every data that you can see on home page.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://configserverllp.com",
  // },
  {
    name: "E-Commerce Website",
    description:
      "Made E-Comm website using Angular with seller and user login. seller can add, update and delete products. ",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/Xp0is0n/Angular-ecomm",
  },
];

export { services, technologies, experiences, testimonials, projects };
