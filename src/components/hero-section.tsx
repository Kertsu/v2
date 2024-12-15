import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <>
      <motion.section className="relative flex items-center max-w-[80rem] px-8 mx-auto flex-col w-full justify-start md:px-16">
        <div className="w-full flex flex-col min-h-screen justify-center gap-2 xl:gap-6">
          <motion.h3
            viewport={{ once: true }}
            whileInView={{ y: "0%", opacity: 1 }}
            initial={{ y: "45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.6 }}
            className="text-base tracking-widest font-semibold md:text-lg"
          >
            Hi there! I am
          </motion.h3>
          <motion.h1
            viewport={{ once: true }}
            whileInView={{ y: "0%", opacity: 1 }}
            initial={{ y: "45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.7 }}
            className="text-3xl font-bold md:text-6xl xl:text-7xl"
          >
            Kurtd Daniel Bigtas.
          </motion.h1>
          <motion.h1
            viewport={{ once: true }}
            whileInView={{ y: "0%", opacity: 1 }}
            initial={{ y: "45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.8 }}
            className="text-3xl font-bold text-custom-secondary bg-gradient-to-t from-[#007bff] to-[#007bff] bg-clip-text text-transparent leading-[1.2] md:text-6xl xl:text-7xl"
          >
            I turn caffeine into websites.
          </motion.h1>
          <motion.p
            viewport={{ once: true }}
            whileInView={{ y: "0%", opacity: 1 }}
            initial={{ y: "45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.8 }}
            className="w-full text-sm mt-4 text-custom-secondary md:text-base md:max-w-[90%] xl:max-w-[50%]"
          >
            I aspire to be a Software Engineer with a passion in building
            cutting-edge web applications. I always strive to provide constant
            superior performance. Currently, I am in the process of creating
            applications for skill-building purposes.
          </motion.p>

          {/* <motion.button
            className="px-8 py-2 rounded-md border w-max mt-4 xl:px-10 xl:py-4"
            viewport={{ once: true }} whileInView={{ y: "0%", opacity: 1 }}
            initial={{ y: "45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.9 }}
          >
            <a href="mailto:kurtddbigtas@gmail.com">Contact Me</a>
          </motion.button> */}
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
