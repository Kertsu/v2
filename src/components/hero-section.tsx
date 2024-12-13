import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <motion.section
      id="#about"
      className="relative flex items-center mx-auto w-full justify-start"
    >
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        className="hidden w-full h-screen bg-center absolute -right-[10rem] top-0 bottom-0 bg-cover justify-center align-center -z-10 md:flex"
      >
        <img
          className="w-full h-full"
          src="hero.svg"
          alt="Kurtd Daniel Bigtas hero"
        />
      </motion.div>

      <div className="w-full flex flex-col gap-2 md:gap-6">
        <motion.h3
          whileInView={{ y: "0%", opacity: 1 }}
          initial={{ y: "45%", opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.6 }}
          className="text-base md:text-lg font-semibold"
        >
          Hi there! I am
        </motion.h3>
        <motion.h1
          whileInView={{ y: "0%", opacity: 1 }}
          initial={{ y: "45%", opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.7 }}
          className="text-3xl font-bold md:text-7xl"
        >
          Kurtd Daniel Bigtas.
        </motion.h1>
        <motion.h1
          whileInView={{ y: "0%", opacity: 1 }}
          initial={{ y: "45%", opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.8 }}
          className="text-3xl font-bold text-custom-secondary gradial-text leading-[1.2] md:text-7xl"
        >
          I turn caffeine into websites.
        </motion.h1>
        <motion.p
          whileInView={{ y: "0%", opacity: 1 }}
          initial={{ y: "45%", opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.8 }}
          className="w-full text-sm mt-4 text-custom-secondary md:max-w-[50%] md:text-base"
        >
          I aspire to be a Software Engineer with a passion in building
          cutting-edge web applications. I always strive to provide constant
          superior performance. Currently, I am in the process of creating
          applications for skill-building purposes.
        </motion.p>

        <motion.button
          className="px-10 py-4 rounded-md border w-max mt-4"
          whileInView={{ y: "0%", opacity: 1 }}
          initial={{ y: "45%", opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.9 }}
        >
          <a href="mailto:kurtddbigtas@gmail.com">Contact Me</a>
        </motion.button>
      </div>

    </motion.section>
  );
};

export default HeroSection;
