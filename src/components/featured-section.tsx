import { motion } from "framer-motion";
import { projects, Project as ProjectType } from "../constants";

const FeaturedSection = () => {
  return (
    <motion.section
      id="featured"
      className="relative flex items-center mx-auto max-w-[80rem] flex-col w-full justify-start mt-48 md:px-16 md:pt-0 px-8"
    >
      <div className="w-full flex flex-col min-h-screen items-center justify-start gap-2 max-w-[80rem] xl:gap-6 border">
        <h1 className="text-2xl font-bold md:text-5xl xl:text-6xl bg-gradient-to-b from-[#fff] to-[#adadad] !bg-clip-text !leading-normal !text-transparent">
          Featured
        </h1>

        <FeaturedProject />
      </div>
    </motion.section>
  );
};

const FeaturedProject = () => {
  return (
    <motion.img 
    initial={{filter: 'blur(5px)'}}
    whileInView={{filter: 'blur(0px)'}}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{once: true}}
    src="https://placehold.co/600x400?text=katedoe" alt="" />
  )
}

export default FeaturedSection;
