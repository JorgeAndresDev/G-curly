import { useState, useEffect } from "react";

export function useAtTop(offset = 20) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastValue = true;
    const handleScroll = () => {
      const atTop = window.scrollY < offset;
      if (atTop !== lastValue) {
        setIsAtTop(atTop);
        lastValue = atTop;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return isAtTop;
}

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}