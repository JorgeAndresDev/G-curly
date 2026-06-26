import { motion, useTransform } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ParallaxContainer = ({
  children,
  speed = 0.5,
  ...rest
}) => {
  const { targetRef, y } = useScrollAnimation();
  const yScaled = useTransform(y, v => v * speed);
  return (
    <motion.div ref={targetRef} style={{ y: yScaled }} {...rest}>
      {children}
    </motion.div>
  );
};