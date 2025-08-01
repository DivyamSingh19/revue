import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STAGES = ["R", "RE", "REV", "REVU", "REVUE"];

export default function ScrollText() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [currentStage, setCurrentStage] = useState(0);
  const [scrollDir, setScrollDir] = useState("down");
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const newDir = v > lastScrollTop.current ? "down" : "up";
      setScrollDir(newDir);
      lastScrollTop.current = v;

      const stage = Math.floor(v * (STAGES.length - 1));
      setCurrentStage(stage);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const visibleStages =
    scrollDir === "down"
      ? [STAGES[currentStage]]
      : STAGES.slice(0, currentStage + 1);

  return (
    <div
      ref={containerRef}
      className="h-[300vh] bg-black text-white flex flex-col items-start justify-center px-10 font-bold text-[10vw] tracking-tight"
    >
      <div className="sticky top-[40vh] h-[20vh] flex flex-col justify-end">
        {visibleStages.map((text, index) => (
          <motion.div
            key={index}
            className="leading-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
