// import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { handleScroll } from "../lib/ui-service";

interface NavLink {
  targetId: string;
  href: string;
  label: string;
  transitionDelay: number;
}

const navLinks: NavLink[] = [
  { targetId: "about", href: "#about", label: "About", transitionDelay: 0.6 },
  {
    targetId: "featured",
    href: "#featured",
    label: "Featured",
    transitionDelay: 0.7,
  },
  {
    targetId: "contact",
    href: "#contact",
    label: "Contact",
    transitionDelay: 0.8,
  },
];

/**
 * Header for scalability
 */
// const Header = () => {

//   const [isHeaderVisible, setIsHeaderVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < lastScrollY) {
//         setIsHeaderVisible(true);
//       } else {
//         setIsHeaderVisible(false);
//       }

//       setLastScrollY(currentScrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   return (
//     <>
//       <header
//         className={`fixed z-20 w-full flex justify-center items-center backdrop-blur-md transition-all shadow-lg ${
//           isHeaderVisible ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <nav className="px-8 py-4 w-full flex justify-between items-center max-w-[1440px] lg:px-14">
//           <a href="#" onClick={scrollToTop}>
//             <motion.img
//               viewport={{ once: true }}
//               whileInView={{ y: "0%", opacity: 1 }}
//               initial={{ y: "-35%", opacity: 0 }}
//               transition={{ duration: 0.3, delay: 0.5 }}
//               className="w-14"
//               src="K-transparent.svg"
//               alt="Kurtd Daniel Bigtas logo"
//             />
//           </a>

//           <ul className="hidden md:flex items-center gap-8">
//             {navLinks.map((link: NavLink, index) => (
//               <motion.li
//                 key={index}
//                 viewport={{ once: true }}
//                 whileInView={{ y: "0%", opacity: 1 }}
//                 initial={{ y: "-45%", opacity: 0 }}
//                 transition={{ duration: 0.3, delay: link.transitionDelay }}
//               >
//                 <a onClick={(e) => handleScroll(e, link.targetId)}
//                   className="text-custom-secondary hover:bg-gradient-to-b from-[#007bff] to-[#99caff] hover:bg-clip-text hover:text-transparent text-sm"
//                   href={link.href}
//                 >
//                   {link.label}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>

//           <motion.button
//             viewport={{ once: true }}
//             whileInView={{ y: "0%", opacity: 1 }}
//             initial={{ y: "-35%", opacity: 0 }}
//             transition={{ duration: 0.3, delay: 0.8 }}
//             className="block md:hidden"
//             onClick={() => alert("open sidebar")}
//           >
//             <HiOutlineMenuAlt3 className="text-custom-secondary text-3xl" />
//           </motion.button>
//         </nav>
//       </header>

//       <motion.div
//         viewport={{ once: true }}
//         whileInView={{ opacity: 1 }}
//         initial={{ opacity: 0 }}
//         transition={{ duration: 0.3, delay: 0.8 }}
//         className="hidden fixed left-14 bottom-0 z-10 xl:block"
//       >
//         <div className="flex flex-col w-max items-center gap-6">
//           <ul className="flex flex-col gap-8 items-center">
//             {socmedLinks.map((link, index) => (
//               <li key={index}>
//                 <a target="_blank" href={link.href}>
//                   {link.icon}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <div className="h-[90px] w-[.5px] border border-white/20"></div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const threshold = 200;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < threshold) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-4 border-white/10 border z-20 w-[80%] flex justify-center items-center backdrop-blur-md transition-all shadow-lg left-1/2 -translate-x-1/2 rounded-full md:w-1/2 lg:w-1/3 xl:max-w-md ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-[calc(100%+1rem)]"
        }`}
      >
        <nav className="px-8 py-6 w-full flex justify-center items-center lg:px-14 xl:p-4">
          <ul className="flex items-center gap-8">
            <a className=" hidden md:block md:cursor-pointer" onClick={scrollToTop}>
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
            {navLinks.map((link: NavLink, index) => (
              <motion.li
                key={index}
                viewport={{ once: true }}
                whileInView={{ y: "0%", opacity: 1 }}
                initial={{ y: "-45%", opacity: 0 }}
                transition={{ duration: 0.3, delay: link.transitionDelay }}
              >
                <a
                  onClick={(e) => handleScroll(e, link.targetId)}
                  className="text-custom-secondary hover:bg-gradient-to-b from-[#007bff] to-[#99caff] hover:bg-clip-text hover:text-transparent text-sm"
                  href={link.href}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      
    </>
  );
};

export default Header;
