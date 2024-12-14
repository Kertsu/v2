import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
  transitionDelay: number;
}

const navLinks: NavLink[] = [
  { href: "#about", label: "About", transitionDelay: 1.1 },
  { href: "#featured", label: "Featured", transitionDelay: 1.2 },
  { href: "#contact", label: "Contact", transitionDelay: 1.3 },
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
  return (
    <>
      <header className="fixed z-20 w-full flex justify-center items-center backdrop-blur-md">
        <nav className="px-8 py-4 w-full flex justify-between items-center lg:px-14">
          <a href="#">
            <motion.img
              whileInView={{ y: "0%", opacity: 1 }}
              initial={{ y: "-35%", opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="w-14"
              src="K-transparent.svg"
              alt="Kurtd Daniel Bigtas logo"
            />
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link: NavLink, index) => (
              <motion.li
                key={index}
                whileInView={{ y: "0%", opacity: 1 }}
                initial={{ y: "-45%", opacity: 0 }}
                transition={{ duration: 0.3, delay: link.transitionDelay }}
              >
                <a
                  className="text-custom-secondary hover:text-custom-primary/80 text-sm"
                  href={link.href}
                >
                  <span className="text-custom-primary/80">0{index + 1}.</span>{" "}
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.button
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
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        className="hidden xl:block fixed left-14 bottom-0"
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

          <div className="h-[90px] w-[1px] border"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
