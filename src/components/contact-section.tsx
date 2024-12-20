import { motion } from "motion/react";
import UnderConstruction from "./under-construction";
const ContactSection = () => {
  return (
    <motion.section id="contact" className="relative flex items-center mx-auto max-w-[80rem] flex-col w-full justify-start mt-40 md:px-16 md:pt-0 px-8">
      <UnderConstruction section="Contact" />
    </motion.section>
  );
};

export default ContactSection;
