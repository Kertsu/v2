import { technologies } from "@/constants/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const footerIcons = [
  technologies.react,
  technologies.framer,
  technologies.tailwindcss,
];

const Footer = () => {
  const [footerIconsShown, setFooterIconsShown] = useState<boolean>(false);

  const handleLinkHover = (value: boolean) => {
    setFooterIconsShown(value);
  };

  return (
    <footer className="w-full p-8 flex flex-col gap-1 items-center justify-center relative">
      <a
        href="https://github.com/Kertsu/v2"
        target="_blank"
        className="group flex justify-center items-center flex-col"
        onMouseEnter={() => handleLinkHover(true)}
        onMouseLeave={() => handleLinkHover(false)}
      >
        <p className="text-xs text-custom-secondary group-hover:text-custom-primary transition-colors">
          Designed and Built by Kurtd Daniel Bigtas
        </p>
        <p className="text-xs text-custom-secondary group-hover:text-custom-primary transition-colors">
          Copyright © 2024 All rights reserved.
        </p>
      </a>

      {footerIconsShown && (
        <AnimatePresence>
          <div className="w-full flex flex-col gap-3 items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-[calc(100%-.5rem)] px-3">
            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.2 }}
              className="text-sm text-custom-secondary font-bold"
            >
              POWERED BY
            </motion.span>
            <div className="flex gap-2">
              {footerIcons.map((icon, index) => (
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.25 + index * 0.15 }}
                  key={index}
                  className="flex justify-center items-center gap-2  bg-gradient-to-tr from-[#27272741_0.6%] to-[#171717] bg-white/10 rounded-full pr-3"
                >
                  <div className="p-3 rounded-full bg-white/10">
                    <icon.icon
                      style={{ color: icon.color }}
                      className="text-lg"
                    />
                  </div>
                  <span className="text-custom-secondary text-xs">
                    {icon.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatePresence>
      )}
    </footer>
  );
};

export default Footer;
