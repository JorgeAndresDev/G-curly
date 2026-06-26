import { motion } from 'framer-motion';

export const ScaleIn = ({
  children,
  from = 0.8,
  to = 1,
  duration = 0.5,
  delay = 0,
  ...rest
}) => (
  <motion.div
    initial={{ scale: from }}
    animate={{ scale: to }}
    transition={{ duration, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);