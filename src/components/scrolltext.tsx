import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// The stages of the word "REVUE" to be revealed on scroll.
const STAGES = ["R", "RE", "REV", "REVU", "REVUE"];

// ScrollText component handles the animated text effect.
export default function ScrollText() {
  const containerRef = useRef(null);

  // useScroll hook to track the scroll position relative to the container.
  // The offset ensures the scroll tracking starts when the container
  // enters the viewport and ends when it leaves.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // useState hooks to manage the current stage of the word and the scroll direction.
  const [currentStage, setCurrentStage] = useState(0);
  const [scrollDir, setScrollDir] = useState("down");
  const lastScrollTop = useRef(0);

  // useTransform to map the scrollYProgress (0 to 1) to a stage index.
  // This provides a smoother transition between stages than a simple floor function.
  const stageIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, STAGES.length - 1]
  );

  useEffect(() => {
    // Subscribe to changes in the transformed stageIndex.
    const unsubscribe = stageIndex.on("change", (v) => {
      // Determine scroll direction by comparing current value to the last one.
      const newDir = v > lastScrollTop.current ? "down" : "up";
      setScrollDir(newDir);
      lastScrollTop.current = v;

      // Update the current stage by rounding the transformed value.
      setCurrentStage(Math.round(v));
    });
    return () => unsubscribe();
  }, [stageIndex]);

  // Determine which stages to display based on scroll direction.
  const visibleStages =
    scrollDir === "down"
      ? // When scrolling down, only show the current stage to create a reveal effect.
        [STAGES[currentStage]]
      : // When scrolling up, show all previous stages to create a re-reveal effect.
        STAGES.slice(0, currentStage + 1);

  return (
    // The main container for the scroll animation. Its height creates the scrollable area.
    <div
      ref={containerRef}
      className="h-[300vh] bg-black text-white flex flex-col items-start justify-center px-10 font-bold text-[10vw] tracking-tight"
    >
      {/* This sticky div keeps the animated text in place on the screen. */}
      <div className="sticky top-[40vh] h-[20vh] flex flex-col justify-end">
        {visibleStages.map((text, index) => (
          // Framer Motion div for the animation of each stage.
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
