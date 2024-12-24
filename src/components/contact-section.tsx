import { motion } from "motion/react";
import { FaEnvelope } from "react-icons/fa";
const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="relative flex items-center mx-auto max-w-[80rem] flex-col w-full justify-center  md:px-16 md:pt-0 px-8"
    >
      <div className="flex flex-col justify-center items-center gap-3 text-center">
        <h1 className="text-2xl font-bold md:text-5xl xl:text-6xl bg-gradient-to-b from-[#fff] to-[#adadad] !bg-clip-text !leading-normal !text-transparent">
          Get In Touch
        </h1>

        <p className="text-custom-secondary w-[55%]">
        Although I am not actively seeking new opportunities at the moment, my inbox is <span className="text-custom-primary">always open</span>. Feel free to reach out if you have any questions or just want to say hi! 🚀
        </p>

        <motion.button
          className="px-8 py-2 rounded-md w-max border border-white/10 bg-gradient-to-b from-[#27272741_0.9%] to-[#171717] group hover:shadow-[inset_0_0_10px_#ffffff1a] hover:border-white/20 xl:px-10 xl:py-4 transition-all"
          viewport={{ once: true }}
          whileInView={{ y: "0%", opacity: 1 }}
          initial={{ y: "45%", opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.4 }}
        >
          <a href="mailto:kurtddbigtas@gmail.com">
            Send an email <FaEnvelope className="inline text-xs ml-1" />
          </a>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default ContactSection;
