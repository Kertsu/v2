import IconCloud from "./ui/icon-cloud";
import { iconSlugs } from "@/constants";
import { motion } from "motion/react";

const OrbitingIconsSection = () => {
  return (
    <motion.div
      className="w-3/4 text-center rounded-lg p-4 border border-white/20 md:w-1/3"
      initial={{ opacity: 0, y: "-20%" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, delay: 1.2 }}
      // style={{
      //   boxShadow: currentTech ? `inset 0 0 20px ${currentTech.color}` : ""
      // }}
    >
      <IconCloud iconSlugs={iconSlugs} />
    </motion.div>
  );
};

export default OrbitingIconsSection;
