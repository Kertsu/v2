import { motion } from "framer-motion";
import { projects, Project as ProjectType } from "../constants";
import { cn } from "@/lib/utils";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

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
            <li className="mb-10 md:mb-28">
              <FeaturedProject
                containerClassName={
                  index % 2 === 0 ? "md:flex-row-reverse" : "text-right"
                }
                technologiesClassname={
                  index % 2 === 0 ? "justify-start" : "justify-end"
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
}: {
  project: ProjectType;
  containerClassName?: string;
  technologiesClassname?: string;
}) => {
  const {
    title,
    description,
    appUrl,
    githubRepository,
    appThumbnailUrl,
    technologies,
    contributorAvatarUrls,
  } = project;
  return (
    <div
      className={cn(
        "relative w-full p-4 flex flex-col items-center gap-4 justify-start rounded-lg group md:flex-row",
        containerClassName
      )}
    >
      {/* <DotPattern className="opacity-25" />
       */}
      {/* <div className="absolute h-full w-full bg-[url('grain.webp')] opacity-[0.025] animate-grain pointer-events-none top-0 left-0 rounded-lg"></div> */}

      <motion.img
        width={500}
        height={500}
        initial={{ filter: "blur(5px)" }}
        whileInView={{ filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        src={appThumbnailUrl}
        alt={title}
        className="rounded-md object-cover border border-white/10 md:w-1/2 group-hover:shadow-lg"
      />
      <div className="w-full flex flex-col h-full justify-between">
        <p className="text-custom-primary tracking-widest my-2">
          Featured Project
        </p>
        <h1 className="bg-gradient-to-b from-[#fff] to-[#adadad] !bg-clip-text !text-transparent font-bold text-2xl mb-5 md:text-3xl">
          {title}
        </h1>
        <p className="text-custom-secondary text-base p-6 bg-gradient-to-b from-[#27272741_0.6%] to-[#171717] rounded-md">
          {description}
        </p>
        <div
          className={cn(
            "flex w-full gap-3 flex-wrap items-center my-6",
            technologiesClassname
          )}
        >
          {technologies.map((tech, index) => (
            <span className="text-custom-secondary text-sm" key={index}>
              {" "}
              {tech}
            </span>
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
    </div>
  );
};

export default FeaturedSection;
