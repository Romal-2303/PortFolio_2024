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
  Crypto,
  GeoGuesser,
  BarChart,
  nyeusi,
  space,
  coverhunt,
  factriai,
  suseco,
  microverse,
  Redmail,
  TicTacToe,
  Team,
  nextjs,
} from "../assets";
import { Ecommerce } from "../assets/index";

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
  {
    title: "System Design",
    icon: prototyping,
  },
  {
    title: "Technical Lead",
    icon: Team,
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
    name: "Scss",
    icon: scss,
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
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
    name: "CryptoWorld",
    description:
      "A high-performance Next.js website for tracking cryptocurreny trends.",
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
    image: Crypto,
    repo: "https://github.com/Romal-2303/crypto_website",
    demo: "https://crypto-website-weld.vercel.app/",
  },
  {
    id: "project-2",
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
    id: "project-3",
    name: "E-Commerce",
    description:
      "Full functional e-commerce platform featuring dynamic product listing and a responsive UI.",
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
    image: Ecommerce,
    repo: "https://github.com/Romal-2303/perfume-e-commerce",
    demo: "https://e-commerce-789.netlify.app/",
  },
  {
    id: "project-4",
    name: "Redmail",
    description:
      "A SEO optimized, high performance marketing website using NextJs.",
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
    image: Redmail,
    repo: "https://github.com/Romal-2303/Marketting_website",
    demo: "https://marketting-website-ten.vercel.app/",
  },
  // {
  //   id: "project-5",
  //   name: "Tic Tac Toe",
  //   description:
  //     "A Tic Tac Toe game built in react, offering a smooth gameplay and an engaging user experience.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: TicTacToe,
  //   repo: "https://github.com/Romal-2303/Tic-Tac-Toe",
  //   demo: "https://wonderful-florentine-ac4e62.netlify.app/",
  // },
  {
    id: "project-5",
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
