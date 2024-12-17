import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const lights = [
  //   K
  0, 1, 25, 49, 73, 97, 121, 4, 27, 50, 75, 100,

  //   U
  6, 30, 54, 78, 102, 103, 104, 105, 81, 57, 33, 9,

  // R
  11, 35, 59, 83, 107, 12, 37, 60, 85, 110,

  // T
  16, 17, 18, 41, 65, 89, 113,

  // D
  20, 44, 68, 92, 116, 21, 22, 23, 48, 72, 96, 119, 118, 117,
];

const dots = [...Array(120).keys()].map((_) => _ + 1);

const Lights = () => {
  const [activeLights, setActiveLights] = useState<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  const handleLightContainerHover = () => {
    if (intervalRef.current) return;

    let index = 0;
    intervalRef.current = setInterval(() => {
      if (index < lights.length) {
        setActiveLights((prev) => {
          const updatedLights = [...prev, lights[index]];
          return updatedLights;
        });

        index++;
      } else {
        console.log(index, 'skipped')
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }
    }, 10);
  };
  const handleMouseOut = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setActiveLights([]);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  return (
    <motion.div
      className="w-full flex h-full justify-center items-center md:p-3 rounded-lg"
      viewport={{ once: true }}
      whileInView={{ y: "0%", opacity: 1 }}
      initial={{ y: "-10%", opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.8 }}
      onMouseOver={handleLightContainerHover}
      onMouseOut={handleMouseOut}
    >
      <div className="grid w-full h-full justify-center items-center grid-cols-[repeat(24,_1fr)] grid-rows-[repeat(5,_15px)] md:grid-rows-[repeat(5,_20px)] lg:grid-rows-[repeat(5,_30px)] xl:grid-rows-[repeat(5,_45px)] place-items-center place-content-center">
        {dots.map((dot) => {
          return (
            <div
              key={dot}
              className={`w-[1px] h-[1px] bg-white/80 rounded-[999px] relative ${
                activeLights.includes(dot) ? "light" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Lights;
