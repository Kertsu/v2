import { motion } from "framer-motion";
import "../styles/technologies.css";
import {
  SiAngular,
  SiCss3,
  SiElectron,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiPostman,
  SiPrimeng,
  SiPrisma,
  SiReact,
  SiRender,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiLaravel,
  SiTypeorm,
} from "react-icons/si";
import { useState } from "react";

interface Technology {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const technologies: Technology[] = [
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

const TechnologiesSection = () => {
  const [currentTech, setCurrentTech] = useState<Technology | null>();

  const handleHoveredTech = (tech: Technology) => {
    setCurrentTech(tech);
  };

  return (
    <motion.section
      id="technologies"
      className="relative flex items-center max-w-[80rem] mx-auto flex-col w-full justify-start mt-40 gap-8 bg-top px-0 md:px-16"
    >
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 1.2 }}
        className="w-full h-full absolute top-0 left-0 bg-[linear-gradient(to_right,#484848,transparent_1px),linear-gradient(to_bottom,#484848,transparent_1px)] bg-[size:6rem_6rem] [mask-composite:intersect] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_90%,#000_80%,transparent_125%),_radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_125%)] lg:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_90%,#000_80%,transparent_125%),_radial-gradient(ellipse_50%_50%_at_50%_40%,#000_80%,transparent_125%)] xl:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_90%,#000_80%,transparent_125%),_radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_125%)]"
      ></motion.div>
      <motion.div
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="w-full relative"
      >
        <motion.div
          viewport={{ once: true }}
          whileInView={{ height: "calc(100% + 4rem)" }}
          initial={{ height: 0 }}
          transition={{ duration: 0.35, delay: 0.9 }}
          className="vertical-lines left-8 origin-top"
        ></motion.div>
        <motion.div
          className={`w-full flex flex-col justify-between items-center gap-4`}
        >
          <motion.div
            viewport={{ once: true }}
            whileInView={{ width: "100%" }}
            initial={{ width: "0%" }}
            transition={{ duration: 0.35, delay: 0.8, ease: "easeInOut" }}
            className="lines w-full"
          ></motion.div>
          <motion.h1
            viewport={{ once: true }}
            whileInView={{ y: "0", opacity: 1 }}
            initial={{ y: "-45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="text-2xl font-bold md:text-5xl xl:text-6xl bg-gradient-to-b from-[#fff] to-[#adadad] !bg-clip-text !leading-normal !text-transparent"
          >
            Technologies
          </motion.h1>
          <motion.div
            viewport={{ once: true }}
            whileInView={{ width: "100%" }}
            initial={{ width: "0%" }}
            transition={{ duration: 0.35, delay: 0.8, ease: "easeInOut" }}
            className="lines w-full"
          ></motion.div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ height: "calc(100% + 4rem)" }}
          initial={{ height: 0 }}
          transition={{ duration: 0.35, delay: 0.9 }}
          className="vertical-lines right-8 origin-top"
        ></motion.div>
      </motion.div>
      <motion.div
        className="w-3/4 text-center"
        initial={{ opacity: 0, y: "-20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.1, delay: 1.2 }}
      >
        <p className="text-custom-secondary">
          I've been doing web development for about 2 years now. Progress is
          progress, no matter how small, and every step I take contributes to my
          growth.
        </p>
      </motion.div>

      <motion.div
        className="w-full relative"
        onMouseLeave={() => setCurrentTech(null)}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 "></div>
        <ul className="w-full flex gap-4 flex-wrap justify-center items-center relative xl:px-12">
          {technologies.map((tech, index) => {
            return (
              <motion.li
                initial={{ opacity: 0, y: "-20%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: 1.2 + index * 0.04 }}
                key={index}
                onMouseEnter={() => handleHoveredTech(tech)}
                className="bg-gradient-to-b from-[#27272741_0.6%] to-[#171717] hover:shadow-[inset_0_0_10px_#ffffff1a] hover:bg-white/20 hover:border-white/20 rounded-xl p-4 flex flex-col justify-center items-center gap-2 border border-[#484848]/40 z-10 transition-colors duration-200"
              >
                <tech.icon
                  className="text-white/80 size-[35px] transition-colors duration-200"
                  style={{
                    color: tech === currentTech ? tech.color : "white",
                    opacity: !currentTech ? 1 : currentTech !== tech ? 0.5 : 1,
                    transition: "color 0.3s ease",
                  }}
                />
              </motion.li>
            );
          })}

          {currentTech && (
            <motion.div
              initial={{ left: "45%", opacity: 0 }}
              animate={{ left: "50%", opacity: 1 }}
              className="absolute top-[calc(50%_+_2rem)] left-1/2 -translate-x-1/2 p-4 flex flex-col items-center justify-center gap-3 opacity-50 xl:top-1/2"
            >
              <currentTech.icon className="text-[12rem] text-white/80"></currentTech.icon>
              <h3 className="text-xl font-semibold">{currentTech.name}</h3>
            </motion.div>
          )}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default TechnologiesSection;
