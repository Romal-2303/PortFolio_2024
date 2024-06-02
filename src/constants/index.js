import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  scss,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  AdminDashboard,
  TicTacToe,
  GeoGuesser,
  BarChart,
  nyeusi,
  space,
  coverhunt,
  factriai,
  suseco,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  // {
  //   title: 'Backend Developer',
  //   icon: backend,
  // },
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  {
    title: "System Design",
    icon: prototyping,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Scss",
    icon: scss,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Rails",
  //   icon: rubyrails,
  // },
  // {
  //   name: "graphql",
  //   icon: graphql,
  // },
  // {
  //   name: "postgresql",
  //   icon: postgresql,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Sustainability Economics",
    icon: suseco,
    iconBg: "#333333",
    date: "Nov 2023 - Present",
  },
  {
    title: "Full Stack Developer",
    company_name: "Facti Ai",
    icon: factriai,
    iconBg: "#333333",
    date: "July 2022 - Nov 2023",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Admin Dashboard",
    description:
      "An intuitive React-based admin dashboard featuring dynamic charts and interactive maps to streamline business analytics and decision making",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: AdminDashboard,
    repo: "https://github.com/Romal-2303/Admin_Dashboard",
    demo: "https://glowing-trifle-847fd2.netlify.app/",
  },
  {
    id: "project-2",
    name: "Tic Tac Toe",
    description:
      "A Tic Tac Toe game built in react, offering a smooth gameplay and an engaging user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: TicTacToe,
    repo: "https://github.com/Romal-2303/Tic-Tac-Toe",
    demo: "https://wonderful-florentine-ac4e62.netlify.app/",
  },
  {
    id: "project-3",
    name: "Geo-Guesser",
    description:
      "A geography quiz game built in react offering a rich quiz experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: GeoGuesser,
    repo: "https://github.com/Romal-2303/GeoGuesser",
    demo: "https://reliable-biscuit-290d49.netlify.app/",
  },
  {
    id: "project-4",
    name: "3D Barchart",
    description: `Third Dimensional bar chart built with three js.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: BarChart,
    repo: "https://github.com/Romal-2303/3d_barchart",
    demo: "https://genuine-pegasus-764cec.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
