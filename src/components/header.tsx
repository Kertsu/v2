import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { handleScroll } from "../lib/ui-service";

interface NavLink {
  targetId: string
  href: string;
  label: string;
  transitionDelay: number;
}

const navLinks: NavLink[] = [
  { targetId: 'about', href: "#about", label: "About", transitionDelay: 0.6 },
  { targetId: 'featured', href: "#featured", label: "Featured", transitionDelay: 0.7 },
  { targetId: 'contact', href: "#contact", label: "Contact", transitionDelay: 0.8 },
];

const socmedLinks = [
  {
    href: "https://www.facebook.com/Kertsuuu",
    icon: (
      <SiFacebook className="text-custom-secondary hover:text-custom-primary text-xl hover:scale-105 hover:-translate-y-1 ease-linear transition-transform" />
    ),
  },
  {
    href: "https://github.com/Kertsu",
    icon: (
      <SiGithub className="text-custom-secondary hover:text-custom-primary text-xl hover:scale-105 hover:-translate-y-1 ease-linear transition-transform" />
    ),
  },
  {
    href: "https://www.instagram.com/_kertsu",
    icon: (
      <SiInstagram className="text-custom-secondary hover:text-custom-primary text-xl hover:scale-105 hover:-translate-y-1 ease-linear transition-transform" />
    ),
  },
];

const Header = () => {
  

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed z-20 w-full flex justify-center items-center backdrop-blur-md transition-all shadow-lg ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="px-8 py-4 w-full flex justify-between items-center max-w-[1440px] lg:px-14">
          <a href="#">
            <motion.img
              viewport={{ once: true }}
              whileInView={{ y: "0%", opacity: 1 }}
              initial={{ y: "-35%", opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="w-14"
              src="K-transparent.svg"
              alt="Kurtd Daniel Bigtas logo"
            />
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link: NavLink, index) => (
              <motion.li
                key={index}
                viewport={{ once: true }}
                whileInView={{ y: "0%", opacity: 1 }}
                initial={{ y: "-45%", opacity: 0 }}
                transition={{ duration: 0.3, delay: link.transitionDelay }}
              >
                <a onClick={(e) => handleScroll(e, link.targetId)}
                  className="text-custom-secondary hover:text-custom-primary/80 text-sm"
                  href={link.href}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.button
            viewport={{ once: true }}
            whileInView={{ y: "0%", opacity: 1 }}
            initial={{ y: "-35%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="block md:hidden"
            onClick={() => alert("open sidebar")}
          >
            <HiOutlineMenuAlt3 className="text-custom-secondary text-3xl" />
          </motion.button>
        </nav>
      </header>

      <motion.div
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="hidden fixed left-14 bottom-0 z-10 xl:block"
      >
        <div className="flex flex-col w-max items-center gap-6">
          <ul className="flex flex-col gap-8 items-center">
            {socmedLinks.map((link, index) => (
              <li key={index}>
                <a target="_blank" href={link.href}>
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-[90px] w-[.5px] border"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
