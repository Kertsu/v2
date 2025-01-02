import { HiQuestionMarkCircle } from "react-icons/hi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  SiElectron,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongoose,
  SiPrisma,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiTypeorm,
  SiVercel,
  SiNetlify,
  SiRender,
  SiGithub,
  SiPostman,
  SiShadcnui,
  SiGit,
  SiPrimeng,
  SiFramer,
  SiRadixui,
  SiPwa,
  SiSocketdotio,
  SiOpenai,
  SiFacebook,
  SiInstagram,
} from "react-icons/si";

export interface Contributor {
  name: string;
  avatarUrl: string;
  designation: string;
}
export interface Project {
  title: string;
  description: string;
  appUrl?: string;
  githubRepository: { visibility: "private" | "public"; url: string };
  appThumbnailUrl: string;
  technologies: Technology[];
  contributors?: Contributor[];
  narration?: string;
}

export interface Technology {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

export const technologies = {
  // Frontend Technologies
  html: { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  css: { name: "CSS", icon: SiCss3, color: "#1572B6" },
  javascript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  typescript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  angular: { name: "Angular", icon: SiAngular, color: "#DD1B16" },
  react: { name: "React", icon: SiReact, color: "#61DAFB" },
  electron: { name: "Electron", icon: SiElectron, color: "#47848F" },
  tailwindcss: { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },

  // Backend Technologies
  nodejs: { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  express: { name: "Express.js", icon: SiExpress, color: "#000000" },
  mongoose: { name: "Mongoose", icon: SiMongoose, color: "#880000" },
  prisma: { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  laravel: { name: "Laravel", icon: SiLaravel, color: "#DD1B16" },
  socketio: { name: "Socket.io", icon: SiSocketdotio, color: "#000000" },

  // Database Technologies
  mongodb: { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  mysql: { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  typeorm: { name: "TypeORM", icon: SiTypeorm, color: "#FE0902" },

  // DevOps/Cloud Platforms
  vercel: { name: "Vercel", icon: SiVercel, color: "#000000" },
  netlify: { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  render: { name: "Render", icon: SiRender, color: "#121212" },
  github: { name: "GitHub", icon: SiGithub, color: "#181717" },

  // API & Tools
  postman: { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  shadcnui: { name: "Shadcn UI", icon: SiShadcnui, color: "#000000" },
  git: { name: "Git", icon: SiGit, color: "#F05032" },
  primeng: { name: "PrimeNG", icon: SiPrimeng, color: "#DD1B16" },
  framer: { name: "Framer Motion", icon: SiFramer, color: "#000000" },

  pwa: { name: "PWA", icon: SiPwa, color: "#000000" },
  openai: { name: "OpenAI API", icon: SiOpenai, color: "#000000" },
  azle: { name: "Azle", icon: HiQuestionMarkCircle, color: "#000000" },
  radixui: { name: "Radix UI", icon: SiRadixui, color: "#000000" },
};

export const projects: Project[] = [
  {
    title: "Personal Website v2",
    description: "The second iteration of my personal website.",
    appUrl: "https://kurtddanielbigtas.vercel.app",
    githubRepository: {
      visibility: "public",
      url: "https://github.com/Kertsu/v2",
    },
    appThumbnailUrl: "v2.webp",
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.tailwindcss,
      technologies.framer,
    ],
    contributors: [
      {
        name: "Kurtd Daniel Bigtas",
        avatarUrl: "kurtd.jpeg",
        designation: "Full-stack Developer",
      },
    ],
  },
  {
    title: "ConnectED",
    description:
      "A web application contributing to the Quality Education SDG, and serves as a centralized repository of internships and scholarships in the Philippines.",
    githubRepository: {
      visibility: "public",
      url: "https://github.com/Kertsu/LV-ConnectED",
    },
    appThumbnailUrl: "connected.webp",
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.tailwindcss,
      technologies.express,
      technologies.typeorm,
      technologies.shadcnui,
      technologies.radixui,
    ],
    contributors: [
      {
        name: "Kurtd Daniel Bigtas",
        avatarUrl: "kurtd.jpeg",
        designation: "Full-stack Developer",
      },
      {
        name: "Raven Dela Rama",
        avatarUrl: "https://res.cloudinary.com/drlztlr1m/image/upload/v1729331139/Hackathon/olsermjsgxepfzalyzur.jpg",
        designation: "Full-stack Developer",
      },
      {
        name: "Allen Magadia",
        avatarUrl: "https://res.cloudinary.com/drlztlr1m/image/upload/v1735027541/Hackathon/eqnna3fxoebpd64a1hve.jpg",
        designation: "UI/UX Designer & Front-end Developer",
      },
      {
        name: "Johnmack Faeldonia",
        avatarUrl: "https://res.cloudinary.com/drlztlr1m/image/upload/v1729331139/Hackathon/xb9t23uznqfop14olmvl.jpg",
        designation: "Project Manager & Front-end Developer",
      },
      {
        name: "Jethro Cadang",
        avatarUrl: "https://res.cloudinary.com/drlztlr1m/image/upload/v1729331140/Hackathon/wpxmy7np9h5dfryp0not.jpg",
        designation: "Front-end Developer",
      },
    ],
  },
  {
    title: "Whisper",
    description:
      "A chat app that allows users to send messages without revealing their identity. Users can share their unique links, inviting others to start a conversation in complete privacy.",
    githubRepository: {
      visibility: "private",
      url: "https://github.com/Kertsu/Whisper",
    },
    appThumbnailUrl: "whisper.svg",
    technologies: [
      technologies.angular,
      technologies.pwa,
      technologies.primeng,
      technologies.nodejs,
      technologies.express,
      technologies.socketio,
      technologies.mongodb,
    ],
    contributors: [
      {
        name: "Kurtd Daniel Bigtas",
        avatarUrl: "kurtd.jpeg",
        designation: "Full-stack Developer",
      },
    ],
    appUrl: 'https://k-whisper.vercel.app/u/kertsu'
  },
  {
    title: "Xplain",
    description:
      "A web application that allows users to transcribe YouTube videos and generate summaries.",
    githubRepository: {
      visibility: "private",
      url: "https://github.com/Kertsu/Xplain",
    },
    appThumbnailUrl: "xplain.svg",
    technologies: [
      technologies.angular,
      technologies.primeng,
      technologies.nodejs,
      technologies.express,
      technologies.openai,
    ],
    contributors: [
      {
        name: "Kurtd Daniel Bigtas",
        avatarUrl: "kurtd.jpeg",
        designation: "Full-stack Developer",
      },
    ],
  },
  {
    title: "DeskSync v2",
    description:
      "DeskSync is an online-based hot desk booking tool that assists groups, businesses, and organizations in developing settings that are both safer and more productive.",
    githubRepository: {
      visibility: "private",
      url: "https://github.com/Kertsu/DeskSyncV2",
    },
    appThumbnailUrl: "desksyncv2.svg",
    technologies: [
      technologies.angular,
      technologies.primeng,
      technologies.nodejs,
      technologies.express,
      technologies.socketio,
      technologies.mongodb,
    ],
    contributors: [
      {
        name: "Kurtd Daniel Bigtas",
        avatarUrl: "kurtd.jpeg",
        designation: "Full-stack Developer",
      },
    ],
  },
  {
    title: "Personal Website v1",
    description: "The first iteration of my personal website.",
    githubRepository: {
      visibility: "public",
      url: "https://github.com/Kertsu/v1",
    },
    appThumbnailUrl: "v1.webp",
    technologies: [technologies.angular, technologies.css],
    contributors: [
      {
        name: "Kurtd Daniel Bigtas",
        avatarUrl: "kurtd.jpeg",
        designation: "Full-stack Developer",
      },
    ],
  },
];

export const usedTechnologies = Object.values(technologies).splice(
  0,
  Object.values(technologies).length - 4
);


export const socmedLinks = [
  {
    href: "https://www.facebook.com/Kertsuuu",
    icon: (
      <SiFacebook className="text-custom-secondary hover:text-custom-primary text-3xl hover:scale-105 hover:-translate-y-1 ease-linear transition-transform xl:text-xl" />
    ),
  },
  {
    href: "https://github.com/Kertsu",
    icon: (
      <SiGithub className="text-custom-secondary hover:text-custom-primary text-3xl hover:scale-105 hover:-translate-y-1 ease-linear transition-transform xl:text-xl" />
    ),
  },
  {
    href: "https://www.instagram.com/_kertsu",
    icon: (
      <SiInstagram className="text-custom-secondary hover:text-custom-primary text-3xl hover:scale-105 hover:-translate-y-1 ease-linear transition-transform xl:text-xl" />
    ),
  },
];