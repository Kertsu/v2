import { motion } from "motion/react";

const FeaturedSection = () => {
  return (
    <motion.section
      viewport={{ once: true }} whileInView={{ y: "0%", opacity: 1 }}
      initial={{ y: "45%", opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="#featured"
      className="border border-yellow-500 mx-auto"
    >
      <h1>FeaturedSection</h1>
    </motion.section>
  );
};

export default FeaturedSection;
