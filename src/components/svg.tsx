import { motion } from "framer-motion";

export const HeroSvg = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: .8 }}
      className="w-full h-screen bg-center absolute right-0 top-0 bottom-0 bg-cover justify-center align-center -z-10 flex "
    >
      <img
        className="w-full h-full"
        src="hero.svg"
        alt="Kurtd Daniel Bigtas hero"
      />
    </motion.div>
  );
};
export const AboutMeSvg = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 1.5 }}
      className="absolute right-0 top-0 bottom-0 left-0 justify-center align-center -z-10 flex"
    >
      <img
        className="w-full scale-125"
        src="about-me.svg"
        alt="About SVG"
      />
    </motion.div>
  );
};
