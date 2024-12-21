"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";
import { SiAngular, SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";
import { motion } from "framer-motion";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function StackBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: "-20%" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, delay: 1.2 }}
      className="relative flex h-[500px] items-center justify-center w-[85%] md:w-full"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg items-stretch justify-between gap-10 md:max-h-[200px]">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <SiMongodb className="text-2xl text-[#47A248]" />
          </Circle>
          <Circle ref={div2Ref}>
            <SiExpress className="text-2xl text-[#000000]" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Circle ref={div4Ref} className="size-16">
            <img src="K-transparent.svg" alt="Kurtd Daniel Bigtas logo" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <SiAngular className="text-2xl text-[#DD1B16]" />
          </Circle>
          <Circle ref={div5Ref}>
            <SiNodedotjs className="text-2xl text-[#339933]" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </motion.div>
  );
}
