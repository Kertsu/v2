import { motion } from "framer-motion";
import { projects, Project as ProjectType } from "../constants";

const FeaturedSection = () => {
  return (
    <motion.section
      id="featured"
      className="relative flex items-center mx-auto max-w-[80rem] flex-col w-full justify-start mt-48 md:px-16 md:pt-0 px-8"
    >
      <div className="w-full flex flex-col min-h-screen items-center justify-start gap-2 max-w-[80rem] xl:gap-6">
        <h1 className="text-2xl font-bold md:text-5xl xl:text-6xl bg-gradient-to-b from-[#fff] to-[#adadad] !bg-clip-text !leading-normal !text-transparent">
          Featured
        </h1>

        {projects.map((project, index) => (
          <FeaturedProject key={index} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

const FeaturedProject = ({ project }: { project: ProjectType }) => {
  const {
    title,
    description,
    appUrl,
    githubRepository,
    appThumbnailUrl,
    technologies,
    contributorAvatarUrls,
    narration,
  } = project;
  return (
    <div className="w-full p-4 flex flex-col items-center gap-4 justify-start border rounded-lg md:flex-row">
      <motion.img
        width={500}
        initial={{ filter: "blur(5px)" }}
        whileInView={{ filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        src={appThumbnailUrl}
        alt={title}
        className="rounded-md shadow-lg md:w-1/2"
      />
      <div className="w-full flex flex-col gap-2">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturedSection;
