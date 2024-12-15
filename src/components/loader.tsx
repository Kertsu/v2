import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  loaderVisible: boolean;
  onLoaderComplete: () => void;
}

const Loader = ({ loaderVisible, onLoaderComplete }: LoaderProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaderComplete();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loaderVisible && (
        <motion.div
          className="w-full h-screen grid place-content-center absolute top-0 left-0 bottom-0 right-0"
          initial={{ y: "-35%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <motion.div className="w-max p-20 relative">
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
