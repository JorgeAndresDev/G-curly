import { motion } from 'framer-motion';

export const FadeIn = ({
  children,
  duration = 0.5,
  delay = 0,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  ...rest
}) => (
  <motion.div
    initial={initial}
    animate={animate}
    transition={{ duration, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);