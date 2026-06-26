import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Returns refs and motion values for use in components.
export const useScrollAnimation = (
  offset = ['start start', 'end start']
) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return { targetRef, scrollYProgress, y, opacity };
};