import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiAngular, SiReact, SiElectron, SiTailwindcss, SiNodedotjs, SiExpress, SiMongoose, SiPrisma, SiLaravel, SiMongodb, SiMysql, SiTypeorm, SiVercel, SiNetlify, SiRender, SiGithub, SiPostman, SiShadcnui, SiGit, SiPrimeng } from "react-icons/si";

export interface Project {
  title: string;
  description: string;
  appUrl?: string;
  githubRepository: { visibility: "private" | "public"; url: string };
  appThumbnailUrl: string;
  technologies: string[];
  contributorAvatarUrls?: string[];
  narration?: string;
}

export interface Technology {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

export const projects: Project[] = [
  {
    title: "Personal Website v2",
    description: "The second iteration of my personal website.",
    appUrl: "https://kurtddanielbigtas.vercel.app",
    githubRepository: {
      visibility: "private",
      url: "https://github.com/Kertsu/kurtddanielbigtas",
    },
    appThumbnailUrl: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "ConnectED",
    description:
      "A web application contributing to the Quality Education SDG, and serves as a centralized repository of internships and scholarships in the Philippines.",
    githubRepository: {
      visibility: "public",
      url: "https://github.com/Kertsu/LV-ConnectED",
    },
    appThumbnailUrl: "",
    technologies: [
      "React",
      "TypeScript",
      "Azle",
      "Tailwind CSS",
      "Express.js",
      "TypeORM",
      "Shadcn UI",
      "Radix UI",
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
    appThumbnailUrl: "",
    technologies: [],
  },
  {
    title: "Xplain",
    description: "",
    githubRepository: {
      visibility: "private",
      url: "",
    },
    appThumbnailUrl: "",
    technologies: [],
  },
  {
    title: "DeskSync v2",
    description: "",
    githubRepository: {
      visibility: "private",
      url: "",
    },
    appThumbnailUrl: "",
    technologies: [],
  },
  // {
  //   title: "AIM Voting System",
  //   description: "",
  //   githubRepository: {
  //     visibility: "private",
  //     url: "",
  //   },
  //   appThumbnailUrl: "",
  //   technologies: [],
  // },
  {
    title: "Personal Website v1",
    description: "",
    githubRepository: {
      visibility: "public",
      url: "",
    },
    appThumbnailUrl: "",
    technologies: [],
  },
];

export const technologies: Technology[] = [
  // Frontend Technologies
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Angular", icon: SiAngular, color: "#DD1B16" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Electron", icon: SiElectron, color: "#47848F" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },

  // Backend Technologies
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Mongoose", icon: SiMongoose, color: "#880000" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Laravel", icon: SiLaravel, color: "#DD1B16" },

  // Database Technologies
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "TypeORM", icon: SiTypeorm, color: "#FE0902" },

  // DevOps/Cloud Platforms
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Render", icon: SiRender, color: "#121212" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },

  // API & Tools
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Shadcn", icon: SiShadcnui, color: "#000000" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "PrimeNG", icon: SiPrimeng, color: "#DD1B16" },
];
