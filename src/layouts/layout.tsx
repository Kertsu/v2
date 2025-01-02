import { ReactNode, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
// import Loader from "../components/loader";
import { socmedLinks } from "@/constants/constants";
import { motion } from "framer-motion";

const Layout = ({ children }: { children: ReactNode }) => {
  // const [loaderVisible, setLoaderVisible] = useState<boolean>(true);
  // const [loaderDone, setLoaderDone] = useState<boolean>(false);

  // const handleLoaderVisibility = () => {
  //   setLoaderVisible(false);

  //   setTimeout(() => {
  //     setLoaderDone(true);
  //   }, 2);
  // };

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      {/* <Loader
        onLoaderComplete={handleLoaderVisibility}
        loaderVisible={loaderVisible}
      />
      {loaderDone && children} */}{" "}
      <Header />
      <main>
        {children}

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

            <div className="h-[90px] w-[.5px] border border-white/20"></div>
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="hidden fixed right-14 bottom-0 z-10 xl:block"
        >
          <div className="flex flex-col w-max items-center gap-6">
            <p className="text-custom-secondary text-sm [writing-mode:vertical-lr]">This site is still under development</p>

            <div className="h-[90px] w-[.5px] border border-white/20"></div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
