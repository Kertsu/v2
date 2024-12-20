import { motion } from "framer-motion";
import Lights from "./lights";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `import { Person } from "../types";

const ME: Person = {
  name: "Kurtd Daniel Bigtas",
  age: 21,
  location: "Cavite City",
  hobbies: [
    "Programming",
    "Gaming",
    // "Sleeping"
  ]
}`;

const AboutMeSection = () => {
  return (
    <>
      <motion.section
        id="about"
        className="relative flex items-center mx-auto max-w-[80rem] flex-col w-full justify-start mt-40 md:px-16 md:pt-0 px-8"
      >
        <div className="w-full flex flex-col min-h-screen justify-center gap-2 max-w-[80rem] xl:gap-6 ">
          <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col w-full gap-8 rounded-md"
          >
            <motion.div
              viewport={{ once: true }}
              whileInView={{ y: "0%", opacity: 1 }}
              initial={{ y: "-35%", opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="w-full flex justify-center items-center"
            >
              <h1 className="text-2xl font-bold md:text-5xl xl:text-6xl bg-gradient-to-b from-[#fff] to-[#adadad] !bg-clip-text !leading-normal !text-transparent">
                About Me
              </h1>
              {/* <a
                  href="https://www.16personalities.com/profiles/enfj-a/m/hqgud0imi"
                  target="_blank"
                  className="bg-gradient-to-t from-[#007bff] to-[#007bff] bg-clip-text text-transparent"
                >
                  ( ENFJ-A )
                </a> */}

              {/* <motion.div className="hidden flex-1 bg-white/50 h-[1px] md:flex ml-4"></motion.div> */}
            </motion.div>
            <div className="w-full flex flex-col-reverse justify-start align-center relative gap-4 lg:items-center xl:gap-8">
              <div className="w-full flex flex-col gap-4 lg:flex-row">
                <motion.div
                  viewport={{ once: true }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  initial={{ y: "-35%", opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="w-full rounded-lg bg-gradient-to-b from-[#27272741_0.6%] to-[#171717] p-4 lg:w-1/2"
                >
                  <p className="text-sm text-custom-secondary md:text-base">
                    Hello! My name is{" "}
                    <span className="text-custom-primary">
                      Kurtd Daniel Bigtas
                    </span>
                    . My interest in web development started back in my second
                    year of college (2022), and it has grown significantly since
                    then.
                  </p>
                  <br />
                  <p className="text-sm text-custom-secondary md:text-base">
                    Overtime, I realized that bringing ideas to life is
                    satisfying, driving me to learn more and pursue my passion.
                    Little did I know, this would become one of the most
                    exciting and rewarding decisions of my life.
                  </p>
                  <br />
                  <p className="text-sm text-custom-secondary md:text-base">
                    Fast-forward to today, I am on my journey to master the art
                    of web development while exploring various technologies to
                    stay current and competitive in the industry.
                  </p>
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  initial={{ y: "-35%", opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="w-full rounded-lg lg:w-1/2"
                >
                  <SyntaxHighlighter
                    customStyle={{
                      background:
                        "linear-gradient(to bottom, #27272741 0.6%, #171717)",
                    }}
                    className="h-full rounded-lg !m-0 flex items-center xl:max-h-[320px]"
                    language="javascript"
                    style={vscDarkPlus}
                    showLineNumbers={true}
                    wrapLongLines={true}
                    codeTagProps={{
                      className: "!text-sm md:!text-base",
                    }}
                  >
                    {code}
                  </SyntaxHighlighter>
                </motion.div>
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
