import { motion } from "framer-motion";
import { HeroSvg } from "./svg";
import { handleScroll } from "../lib/ui-service";
import { FaLocationArrow } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <motion.section className="relative flex items-center max-w-[80rem] px-8 mx-auto flex-col w-full justify-start md:px-16">
        <HeroSvg />
        <div className="w-full flex flex-col min-h-screen justify-center gap-2 xl:gap-0">
          <motion.h3
            viewport={{ once: true }}
            whileInView={{ y: "0%", opacity: 1 }}
            initial={{ y: "45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="text-base tracking-widest font-semibold md:text-lg"
          >
            Hi there! I am
          </motion.h3>
          <motion.h1
            viewport={{ once: true }}
            whileInView={{ y: "0%", opacity: 1 }}
            initial={{ y: "45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="text-3xl font-bold md:text-6xl xl:text-7xl bg-gradient-to-b from-[#fff] to-[#adadad] bg-clip-text !leading-normal text-transparent"
          >
            Kurtd Daniel Bigtas.
          </motion.h1>
          <motion.h1
            viewport={{ once: true }}
            whileInView={{ y: "0%", opacity: 1 }}
            initial={{ y: "45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="text-3xl font-bold bg-gradient-to-b from-[#007bff] to-[#99caff] bg-clip-text text-transparent md:text-6xl xl:text-7xl"
          >
            I turn caffeine into websites.
          </motion.h1>
          <motion.p
            viewport={{ once: true }}
            whileInView={{ y: "0%", opacity: 1 }}
            initial={{ y: "45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.3 }}
            className="w-full text-sm mt-4 text-custom-secondary md:text-base md:max-w-[90%] xl:max-w-[50%] xl:!mt-8"
          >
            I aspire to be a Software Engineer with a passion in building
            cutting-edge web applications. I always strive to provide constant
            superior performance. Currently, I am in the process of creating
            applications for skill-building purposes.
          </motion.p>

          <motion.button
            className="px-8 py-2 rounded-md w-max border border-white/10 mt-8 bg-gradient-to-b from-[#27272741_0.9%] to-[#171717] group hover:shadow-[inset_0_0_10px_#ffffff1a] hover:border-white/20 xl:px-10 xl:py-4"
            viewport={{ once: true }}
            whileInView={{ y: "0%", opacity: 1 }}
            initial={{ y: "45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.4 }}
          >
            <a onClick={(e) => handleScroll(e, "about")}>View my work <FaLocationArrow className="inline text-xs ml-1" /></a>
          </motion.button>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
