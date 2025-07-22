import { useEffect, useRef } from "react";
import "../HorizontalScroll.css"; // for styling

const HorizontalScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(-${window.scrollY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set body height equal to scroll width of the content
    const contentWidth = scrollRef.current.scrollWidth;
    document.body.style.height = `${contentWidth}px`;

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="horizontal-scroll-wrapper" ref={scrollRef}>
      <section>Section 1</section>
      <section>Section 2</section>
      <section>Section 3</section>
      <section>Section 4</section>
    </div>
  );
};

export default HorizontalScroll;
