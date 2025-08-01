"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const stages = ["R", "RE", "REV", "REVU", "REVUE"];

const ScrollText = () => {
  const { scrollYProgress } = useScroll();

  // Reveal each stage at equal scrollYProgress intervals
  const thresholds = stages.map((_, i) => i / stages.length);

  return (
    <div className="flex flex-col items-start space-y-2">
      {stages.map((stage, index) => {
        const start = thresholds[index];
        const end = thresholds[index + 1] || 1;

        const visibility = useTransform(scrollYProgress, [start, end], [0, 1]);

        const y = useTransform(scrollYProgress, [start, end], [10, 0]);

        const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

        return (
          <motion.div
            key={stage}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider origin-left"
            style={{
              opacity: visibility,
              y,
              scale,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {stage.split("").map((letter, letterIndex) => (
              <motion.span
                key={`stage-${index}-${letterIndex}`}
                className="inline-block bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ScrollText;
