import { motion } from "framer-motion";
import { projects, Project as ProjectType } from "../constants";
import { cn } from "@/lib/utils";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import AnimatedGridPattern from "./ui/animated-grid-pattern";

const FeaturedSection = () => {
  return (
    <motion.section
      id="featured"
      className="relative flex items-center mx-auto max-w-[80rem] flex-col w-full justify-start mt-40 md:px-16 md:pt-0 px-8"
    >
      <div className="w-full flex flex-col min-h-screen items-center justify-start gap-2 max-w-[80rem] xl:gap-6">
        <h1 className="text-2xl font-bold md:text-5xl xl:text-6xl bg-gradient-to-b from-[#fff] to-[#adadad] !bg-clip-text !leading-normal !text-transparent">
          Featured
        </h1>

        <ul>
          {projects.map((project, index) => (
            <li className="mb-10 md:mb-16" key={index}>
              <FeaturedProject
                index={index}
                containerClassName={
                  index % 2 === 0 ? "lg:flex-row-reverse" : "lg:text-right"
                }
                technologiesClassname={
                  index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                }
                key={index}
                project={project}
              />
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

const FeaturedProject = ({
  project,
  containerClassName,
  technologiesClassname,
  index,
}: {
  project: ProjectType;
  containerClassName?: string;
  technologiesClassname?: string;
  index: number;
}) => {
  const {
    title,
    description,
    appUrl,
    githubRepository,
    appThumbnailUrl,
    technologies,
  } = project;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
      viewport={{ once: true }}
      className={cn(
        "relative w-full p-4 flex flex-col items-center gap-4 justify-start rounded-lg lg:flex-row overflow-hidden border border-white/10 md:p-10",
        containerClassName
      )}
    >
      <AnimatedGridPattern
        numSquares={10}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] opacity-50",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      {/* <DotPattern className="opacity-25" />
       */}
      {/* <div className="absolute h-full w-full bg-[url('grain.webp')] opacity-[0.025] animate-grain pointer-events-none top-0 left-0 rounded-lg"></div> */}

      <motion.img
        width={500}
        height={500}
        initial={{ filter: "blur(5px)" }}
        whileInView={{ filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
        viewport={{ once: true }}
        src={appThumbnailUrl}
        alt={title}
        className="rounded-md object-cover border border-white/10  shadow-lg md:w-full lg:w-1/2"
      />
      <div className="w-full flex flex-col h-full justify-between">
        <p className="text-custom-primary tracking-widest my-2">
          Featured Project
        </p>
        <h1 className="bg-gradient-to-b from-[#fff] to-[#adadad] !bg-clip-text !text-transparent font-bold text-2xl mb-5 md:text-3xl">
          {title}
        </h1>
        <p className="text-custom-secondary text-base ">{description}</p>
        <div
          className={cn(
            "flex w-full gap-2 flex-wrap items-center my-6 md:gap-3",
            technologiesClassname
          )}
        >
          {technologies.map((tech, index) => (
            <div
              className="relative group p-2 bg-gradient-to-t from-[#27272741_0.6%] to-[#171717] rounded-md"
              key={index}
            >
              {/* {tech.icon && (
                <span className="absolute left-1/2 -translate-x-1/2 -top-[calc(100%_+_1rem)] flex justify-center items-center p-1 w-10 h-10 rounded-full bg-gradient-to-b from-[#27272741_0.6%] to-[#171717] z-10 opacity-0 transition-opacity group-hover:opacity-100">
                  <tech.icon
                    className="text-custom-secondary text-2xl"
                    style={{ color: tech.color }}
                  />
                </span>
              )} */}
              <span className="text-custom-secondary text-xs cursor-default md:text-sm">
                {" "}
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {(appUrl || githubRepository) && (
          <div
            className={cn(
              "flex w-full gap-6 flex-wrap items-center",
              technologiesClassname
            )}
          >
            {appUrl && (
              <a href={appUrl} target="_blank">
                <BsBoxArrowUpRight className="font-bold text-xl text-custom-secondary hover:text-custom-primary" />
              </a>
            )}
            {githubRepository.url && (
              <a href={githubRepository.url} target="_blank">
                <SiGithub className="font-bold text-xl text-custom-secondary hover:text-custom-primary" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeaturedSection;
