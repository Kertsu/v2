import { HiOutlineMenuAlt3 } from "react-icons/hi";
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

const Header = () => {
  return (
    <header className="fixed z-20 w-full flex justify-center items-center backdrop-blur-md">
      <nav className="px-8 py-4 max-w-7xl w-full flex justify-between items-center">
        <motion.img
          animate={{ y: "0%", opacity: 1 }}
          initial={{ y: "-35%", opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="w-14"
          src="K-transparent.svg"
          alt="Kurtd Daniel Bigtas logo"
        />
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link: NavLink, index) => (
            <motion.li
              animate={{ y: "0%", opacity: 1 }}
              initial={{ y: "-45%", opacity: 0 }}
              transition={{ duration: 0.3, delay: link.transitionDelay }}
            >
              <a
                className="text-custom-secondary hover:text-custom-primary/60"
                href={link.href}
              >
                <span className="text-custom-primary/60">0{index + 1}.</span>{" "}
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <button
          className="block md:hidden"
          onClick={() => alert("open sidebar")}
        >
          <HiOutlineMenuAlt3 className="text-custom-secondary text-3xl" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
