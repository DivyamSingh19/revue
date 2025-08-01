"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollText = () => {
  const { scrollYProgress } = useScroll();

  // This maps scroll progress (0 to 1) → index (0 to 4.99)
  const stageIndex = useTransform(scrollYProgress, [0, 1], [0, 4.99]);

  const stages = ["R", "RE", "REV", "REVU", "REVUE"];

  return (
    <div className="flex flex-col items-start space-y-2">
      {stages.map((stage, index) => {
        const opacity = useTransform(stageIndex, (value) =>
          value >= index ? 1 : value > index - 1 ? 0.5 : 0.1
        );
        const scale = useTransform(stageIndex, (value) =>
          value >= index ? 1 : 0.95
        );
        const y = useTransform(stageIndex, (value) =>
          value >= index ? 0 : -10 * (index - value)
        );

        return (
          <motion.div
            key={`stage-${index}`}
            className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider`}
            style={{
              opacity,
              scale,
              y,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            {stage.split("").map((letter, letterIndex) => (
              <motion.span
                key={`stage-${index}-${letterIndex}`}
                className="inline-block bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(139, 92, 246, 0)",
                    "0 0 20px rgba(139, 92, 246, 0.4)",
                    "0 0 0px rgba(139, 92, 246, 0)",
                  ],
                }}
                transition={{
                  duration: 0.6,
                  delay: letterIndex * 0.05,
                  ease: "easeOut",
                }}
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
