import { motion, useReducedMotion } from "framer-motion";

const SPIRAL =
  "M50 50 A4 4 0 0 1 54 54 A8 8 0 0 1 46 46 A12 12 0 0 1 58 58 A16 16 0 0 1 42 42 A20 20 0 0 1 62 62 A24 24 0 0 1 38 38 A28 28 0 0 1 66 66 A32 32 0 0 1 34 34";

const Coil = ({
  className = "",
  strokeWidth = 2,
  animate = false,
  delay = 0,
  duration = 1.6,
  ...props
}) => {
  const reduce = useReducedMotion();
  const shouldAnimate = animate && !reduce;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {shouldAnimate ? (
        <motion.path
          d={SPIRAL}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          pathLength={1}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration, delay, ease: "easeInOut" }}
        />
      ) : (
        <path
          d={SPIRAL}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      )}
    </svg>
  );
};

export default Coil;
