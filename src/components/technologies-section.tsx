import { motion } from "framer-motion";
import "../styles/technologies.css";
import { ReactNode, useState } from "react";
import { Technology, usedTechnologies } from "../constants";
import { StackBeam } from "./stack-beam";

const TechnologiesSection = ({ children }: { children?: ReactNode }) => {
  const [currentTech, setCurrentTech] = useState<Technology | null>();

  const handleHoveredTech = (tech: Technology) => {
    setCurrentTech(tech);
  };

  return (
    <motion.section
      id="technologies"
      className="relative flex items-center max-w-[80rem] mx-auto flex-col w-full justify-center mt-40 gap-8 bg-top px-0 md:px-16"
    >
      {/* <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 1.2 }}
        style={{
          backgroundImage: currentTech ? `linear-gradient(to right,${currentTech.color},transparent 1px),linear-gradient(to bottom,${currentTech.color},transparent 1px)` : "linear-gradient(to right,#484848,transparent 1px),linear-gradient(to bottom,#484848,transparent 1px)",
        }}
        className="w-full h-full absolute top-0 left-0  bg-[size:8rem_8rem] [mask-composite:intersect] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_90%,#000_80%,transparent_125%),_radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_125%)] lg:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_90%,#000_80%,transparent_125%),_radial-gradient(ellipse_50%_50%_at_50%_40%,#000_80%,transparent_125%)] xl:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_100%,#000_80%,transparent_125%),_radial-gradient(ellipse_60%_60%_at_50%_35%,#000_80%,transparent_125%)]"
      ></motion.div> */}
      <motion.div
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="w-full relative"
      >
        <motion.div
          viewport={{ once: true }}
          whileInView={{ height: "calc(100% + 4rem)" }}
          initial={{ height: 0 }}
          transition={{ duration: 0.35, delay: 0.9 }}
          className="vertical-lines left-8 origin-top"
        ></motion.div>
        <motion.div
          className={`w-full flex flex-col justify-between items-center gap-4`}
        >
          <motion.div
            viewport={{ once: true }}
            whileInView={{ width: "100%" }}
            initial={{ width: "0%" }}
            transition={{ duration: 0.35, delay: 0.8, ease: "easeInOut" }}
            className="lines w-full"
          ></motion.div>
          <motion.h1
            viewport={{ once: true }}
            whileInView={{ y: "0", opacity: 1 }}
            initial={{ y: "-45%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="text-2xl font-bold md:text-5xl xl:text-6xl bg-gradient-to-b from-[#fff] to-[#adadad] !bg-clip-text !leading-normal !text-transparent"
          >
            Technologies
          </motion.h1>
          <motion.div
            viewport={{ once: true }}
            whileInView={{ width: "100%" }}
            initial={{ width: "0%" }}
            transition={{ duration: 0.35, delay: 0.8, ease: "easeInOut" }}
            className="lines w-full"
          ></motion.div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ height: "calc(100% + 4rem)" }}
          initial={{ height: 0 }}
          transition={{ duration: 0.35, delay: 0.9 }}
          className="vertical-lines right-8 origin-top"
        ></motion.div>
      </motion.div>

      {children}

      <StackBeam />

      <motion.div
        className="w-3/4 text-center bg-gradient-to-b from-[#27272741_0.6%] to-[#171717] p-8 rounded-lg relative"
        initial={{ opacity: 0, y: "-20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.1, delay: 1.2 }}
        // style={{
        //   boxShadow: currentTech ? `inset 0 0 20px ${currentTech.color}` : ""
        // }}
      >
        {/* <BorderBeam size={100} duration={12} delay={9} /> */}
        <p className="text-custom-secondary">
          I've been doing web development for about 2 years now. Progress is
          progress, no matter how small, and every step I take contributes to my
          growth.
        </p>
      </motion.div>

      <motion.div
        className="w-[90%] relative md:w-full"
        onMouseLeave={() => setCurrentTech(null)}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 "></div>
        <ul className="w-full flex gap-4 flex-wrap justify-center items-center relative xl:px-12">
          {usedTechnologies.map((tech, index) => {
            return (
              <motion.li
                initial={{ opacity: 0, y: "-20%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: 1.2 + index * 0.04 }}
                key={index}
                onMouseEnter={() => handleHoveredTech(tech)}
                className="relative bg-gradient-to-b from-[#27272741_0.6%] to-[#171717] hover:shadow-[inset_0_0_10px_#ffffff1a] hover:bg-white/20 hover:border-white/20 rounded-xl p-4 flex flex-col justify-center items-center gap-2 border border-[#484848]/40 z-10 transition-colors duration-200"
              >
                <tech.icon
                  className="text-white/80 size-[35px] transition-colors duration-200"
                  style={{
                    color: tech === currentTech ? tech.color : "white",
                    opacity: !currentTech ? 1 : currentTech !== tech ? 0.5 : 1,
                    transition: "color 0.3s ease",
                  }}
                />
              </motion.li>
            );
          })}

          {currentTech && (
            <motion.div
              initial={{ left: "45%", opacity: 0 }}
              animate={{ left: "50%", opacity: 1 }}
              className="absolute top-3/4 left-1/2 -translate-x-1/2 p-4 flex flex-col items-center justify-center gap-3 opacity-50 xl:top-1/2"
            >
              <currentTech.icon className="text-[12rem] text-white/80"></currentTech.icon>
              <h3 className="text-xl font-semibold">{currentTech.name}</h3>
            </motion.div>
          )}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default TechnologiesSection;
