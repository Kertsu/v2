import { AnimatePresence, motion } from "framer-motion";
import { Contributor, projects, Project as ProjectType } from "../constants";
import { cn } from "@/lib/utils";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import { useState } from "react";
// import { AnimatedTooltip } from "./ui/animated-tooltip";

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
            <li className="mb-10 md:mb-16 relative" key={index}>
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
    contributors,
  } = project;
  const [hoveredContributor, setHoveredContributor] =
    useState<Contributor | null>(null);

  const handleHoveredContributor = (contributor: Contributor | null) => {
    setHoveredContributor(contributor);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
      viewport={{ once: true }}
      className={cn(
        "relative w-full p-4 flex flex-col items-center gap-4 justify-start rounded-lg lg:flex-row border border-white/10 md:p-10",
        containerClassName
      )}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
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
      </div>
      {/* <DotPattern className="opacity-25" />
       */}
      {/* <div className="absolute h-full w-full bg-[url('grain.webp')] opacity-[0.025] animate-grain pointer-events-none top-0 left-0 rounded-lg"></div> */}

      <div className="relative md:w-full lg:w-1/2 group">
        <motion.img
          width={500}
          height={500}
          initial={{ filter: "blur(5px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
          viewport={{ once: true }}
          src={appThumbnailUrl}
          alt={title}
          className="rounded-md object-cover border border-white/10 shadow-lg w-full"
        />
        <div className="absolute bg-black/40 top-0 left-0 right-0 bottom-0 transition-opacity rounded-md opacity-0 group-hover:opacity-100"></div>
        {contributors && (
          <AnimatePresence>
            <div className="hidden absolute bottom-4 left-4 group-hover:flex">
              {contributors?.map((contributor, index) => (
                <div
                  className={`relative size-10 group ${
                    index !== 0 ? "-ml-2" : ""
                  }`}
                  style={{
                    opacity: !hoveredContributor ? 1 : hoveredContributor === contributor ? 1 : 0.5, 
                    zIndex: !hoveredContributor ? 1 : hoveredContributor === contributor ? 1 : 0.5, 
                  }}
                  key={index}
                >
                  {hoveredContributor === contributor && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="z-40"
                      >
                        <div className="absolute z-30 w-full bottom-[calc(100%+1rem)] bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                        <div className="absolute w-[80%] left-1/2 -translate-x-1/2 z-30 bottom-[calc(100%+1rem)] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                        <div className="z-10 border border-white/10 shadow-[inset_0_0_10px_#ffffff1a] absolute bottom-[calc(100%+1rem)] left-1/2 -translate-x-1/2 py-3 px-6 rounded-md bg-gradient-to-b from-[#27272741] to-[#171717] w-max text-center">
                          <h1 className="font-bold">{contributor.name}</h1>
                          <span className="text-xs text-custom-secondary">
                            {contributor.designation}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                  <motion.img
                    onMouseEnter={() => handleHoveredContributor(contributor)}
                    onMouseLeave={() => handleHoveredContributor(null)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                    className="inline-block w-full h-full object-cover rounded-full ring-1 ring-[#171717]"
                    src={contributor.avatarUrl}
                    alt={`${contributor.name}'s avatar`}
                  />
                </div>
              ))}
            </div>
          </AnimatePresence>
        )}
      </div>

      <div className="w-full flex flex-col h-full justify-between  md:w-full lg:w-1/2">
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
              className="relative p-2 bg-gradient-to-t from-[#27272741_0.6%] to-[#171717] rounded-md"
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
              "flex w-full gap-6 flex-wrap items-center z-10",
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
