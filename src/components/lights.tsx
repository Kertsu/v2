import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const lightsOnWide = [
  0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750,
  800, 850, 900, 950, 1000, 501, 452, 552, 603, 403, 403, 354, 654, 705, 305,
  256, 756, 654, 207, 807, 158, 858, 109, 909, 60, 11, 654, 705, 960, 1011, 13,
  63, 113, 163, 213, 263, 313, 363, 413, 463, 513, 563, 613, 663, 713, 763, 813,
  863, 913, 963, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020,

  20, 70, 120, 170, 220, 270, 320, 370, 420, 470, 520, 570, 620, 670, 720, 770,
  820, 870, 920, 970, 1020, 22, 72, 122, 172, 222, 272, 322, 372, 422, 472, 522,
  572, 622, 672, 722, 772, 822, 872, 922, 972, 1022,

  523, 574, 625, 676, 727, 778, 829, 880, 931, 982, 1033, 523, 524, 525, 526,
  527, 528, 529, 530, 531, 532, 533, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  83, 133, 183, 233, 283, 333, 383, 433, 483,

  35, 36, 37, 38, 39, 40, 41, 88, 138, 188, 238, 288, 338, 388, 438, 488, 538,
  588, 638, 688, 738, 788, 838, 888, 938, 988, 1038,

  43, 44, 45, 46, 47, 48, 93, 143, 243, 193, 238, 293, 343, 393, 443, 493, 543,
  593, 643, 693, 743, 793, 843, 893, 943, 993, 1043,

  1044, 1045, 1046, 1047, 1048, 99, 149, 199, 249, 299, 349, 399, 449, 499, 549,
  599, 649, 699, 749, 799, 849, 899, 949, 999,
];

const lights = [
  //   K
  1, 25, 49, 73, 97, 121, 
  4, 27, 
  50, 
  75, 100,

  //   U
  6, 30, 54, 78, 102,
  103, 104, 105,
  81, 57, 33, 9,

  // R
  11, 35, 59, 83, 107,
  12,
  37,
  60,
  85, 110,

  // T
  16, 17, 18,
  41,
  65,
  89,
  113,

  // D
  20,  44, 68, 92, 116,
  21, 22, 23,
  48, 72, 96,
  119, 118, 117
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
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }
    }, 15);
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
      onMouseOver={handleLightContainerHover}
      onMouseOut={handleMouseOut}
    >
      {/* <div
        className="hidden xl:grid gap-2 h-full justify-center items-center grid-cols-[repeat(50,_1fr)]"
      >
        {[...Array(1050).keys()].map((_) => (
          <div
            key={_}
            className={`w-[1px] h-[1px] bg-white/80 rounded-[999px] relative ${
              activeLights.includes(_) ? "light" : ""
            }`}
          ></div>
        ))}
      </div> */}
      <div
        className="grid w-full h-full justify-center items-center grid-cols-[repeat(24,_1fr)] grid-rows-[repeat(5,_15px)] md:grid-rows-[repeat(5,_20px)] lg:grid-rows-[repeat(5,_30px)] xl:grid-rows-[repeat(5,_45px)] place-items-center place-content-center"
      >
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
