import { motion } from 'framer-motion';

export const SlideIn = ({
  children,
  from = { x: -100, opacity: 0 },
  to = { x: 0, opacity: 1 },
  duration = 0.5,
  delay = 0,
  ...rest
}) => (
  <motion.div
    initial={from}
    animate={to}
    transition={{ duration, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);