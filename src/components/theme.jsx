import { animate, stagger } from "motion";
import SplitType from "split-type";
import { useEffect, useRef } from "react";

const Theme = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      const split = new SplitType(
        containerRef.current.querySelector(".wavy"),
        { types: "chars" }
      );

      const chars = split.chars;
      containerRef.current.style.visibility = "visible";

      const staggerDelay = 0.15;

      animate(
        chars,
        { y: [-20, 20] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(staggerDelay, {
            startDelay: -staggerDelay * chars.length,
          }),
        }
      );
    });
  }, []);

  return (
    <div
      className="text-white text-4xl md:text-5xl font-bold wavy-text"
      ref={containerRef}
    >
       <span className="wavy text-gradient">Full Stack developer.</span>.
      <style>{`
        .split-char {
          will-change: transform, opacity;
        }
        .wavy-text {
          visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default Theme;
