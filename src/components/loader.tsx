import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderVisible(false);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      {loaderVisible && (
        <motion.div
          className="w-full h-screen grid place-content-center"
          initial={{ y: "-35%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <motion.div className="w-max p-20">
            <img
              className="w-24 md:w-32"
              src="K-transparent.svg"
              alt="Kurtd Daniel Bigtas logo"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
