import { motion } from "framer-motion";
import Lights from "./lights";

const AboutMeSection = () => {
  return (
    <>
      <motion.section
        id="about"
        className="relative flex items-center mx-auto max-w-[80rem] flex-col w-full justify-start pt-40 md:px-16 md:pt-0 px-8 "
      >
        <div className="w-full flex flex-col min-h-screen justify-center gap-2 max-w-[80rem] xl:gap-6">
          <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col w-full gap-8 p-6 rounded-md about-me-container"
          >
            <motion.div
              viewport={{ once: true }}
              whileInView={{ y: "0%", opacity: 1 }}
              initial={{ y: "-35%", opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="w-full flex justify-start items-center"
            >
              <h1 className="text-2xl font-semibold md:text-3xl">
                About Me{" "}
                <a
                  href="https://www.16personalities.com/profiles/enfj-a/m/hqgud0imi"
                  target="_blank"
                  className="bg-gradient-to-t from-[#007bff] to-[#007bff] bg-clip-text text-transparent"
                >
                  ( ENFJ-A )
                </a>
              </h1>
              <div className="hidden flex-1 bg-white/50 h-[1px] md:flex ml-4"></div>
            </motion.div>
            <div className="w-full flex flex-col-reverse justify-start align-center relative gap-4 lg:items-center xl:gap-8">
              <div className="w-full">
                <motion.p
                  viewport={{ once: true }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  initial={{ y: "-35%", opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="text-sm text-custom-secondary md:text-base"
                >
                  Hello! My name is Kurtd Daniel Bigtas. My interest in web
                  development started back in my second year of college (2022),
                  and it has grown significantly since then.
                </motion.p>
                <br />
                <motion.p
                  viewport={{ once: true }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  initial={{ y: "-35%", opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="text-sm text-custom-secondary md:text-base"
                >
                  Overtime, I realized that bringing ideas to life is
                  satisfying, driving me to learn more and pursue my passion.
                  Little did I know, this would become one of the most exciting
                  and rewarding decisions of my life.
                </motion.p>
                <br />
                <motion.p
                  viewport={{ once: true }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  initial={{ y: "-35%", opacity: 0 }}
                  transition={{ duration: 0.3, delay: 1 }}
                  className="text-sm text-custom-secondary md:text-base"
                >
                  Fast-forward to today, I am on my journey to master the art of
                  web development while exploring various technologies to stay
                  current and competitive in the industry.
                </motion.p>
              </div>
              {/* <motion.img
                viewport={{ once: true }}
                whileInView={{opacity: 1, y: "0%",}}
                initial={{ opacity: 0, y: '45%' }}
                transition={{ duration: 0.5, delay: 1 }}
                src="K-transparent-muted.svg"
                className="mx-auto rounded-md h-full w-full absolute top-0 right-0 blur-[8px] md:blur-none md:static md:w-1/2 lg:w-1/4"
                alt="Kurtd Daniel Bigtas"
              /> */}

              <Lights />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutMeSection;
