import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Dot {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

const Loader = () => {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [shownDots, setShownDots] = useState<number>(0); 
  const [disappearingDots, setDisappearingDots] = useState<number>(0); 

  const dots: Dot[] = [
    { top: "0", left: "0" },
    { top: "0", left: "50%" },
    { top: "0", right: "0" },
    { top: "50%", right: "0" },
    { bottom: "0", right: "0" },
    { bottom: "0", left: "50%" },
    { bottom: "0", left: "0" },
    { top: "50%", left: "0" },
  ];

  useEffect(() => {
    const showTimer = setInterval(() => {
      setShownDots((prev) => {
        if (prev < dots.length) return prev + 1;
        clearInterval(showTimer);
        return prev;
      });
    }, 200);

    const disappearTimer = setTimeout(() => {
      const hideTimer = setInterval(() => {
        setDisappearingDots((prev) => {
          if (prev < dots.length) return prev + 1;
          clearInterval(hideTimer);
          setLoaderVisible(false);
          return prev;
        });
      }, 200);
    }, 150 * dots.length);

    return () => {
      clearInterval(showTimer);
      clearTimeout(disappearTimer);
    };
  }, [dots.length]);

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
          <motion.div className="w-max p-20 relative">
            {dots.map((dot, index) => (
              <motion.span
                key={index}
                className="w-1 h-1 rounded-full absolute"
                initial={{ opacity: 0, backgroundColor: "white" }}
                animate={{
                  opacity:
                    index < shownDots ? (disappearingDots > index ? 0 : 1) : 0,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  top: dot.top,
                  left: dot.left,
                  bottom: dot.bottom,
                  right: dot.right,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
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
