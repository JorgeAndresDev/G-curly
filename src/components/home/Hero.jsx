import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BRAND } from "../../lib/constants";
import { useRef, useMemo } from "react";
import { useTheme } from "../../hooks";

const Hero = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const gridSvg = useMemo(() => {
    const strokeColor = theme === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.03)";
    return `data:image/svg+xml;base64,${btoa(`<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 0 10 L 40 10 M 10 0 L 10 40 M 0 20 L 40 20 M 20 0 L 20 40 M 0 30 L 40 30 M 30 0 L 30 40" fill="none" stroke="${strokeColor}" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"/></svg>`)}`;
  }, [theme]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-accent dark:bg-deep-green">
      {/* Dynamic Background with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className={`absolute inset-0 transition-colors duration-1000 z-0 ${
          theme === "light" 
            ? "bg-gradient-to-br from-[#E1EAE1] via-[#F8FAF8] to-[#F5EBE6]" 
            : "bg-gradient-to-br from-deep-green via-primary to-terracotta"
        }`} 
      />

      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ 
          opacity: 0.2,
          backgroundImage: theme === "light"
            ? "radial-gradient(circle at 20% 50%, rgba(56,102,65,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(170,143,89,0.08) 0%, transparent 50%)"
            : "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(170,143,89,0.3) 0%, transparent 50%)",
        }}
      />

      <div 
        className="absolute inset-0 opacity-40 z-[2] pointer-events-none transition-all duration-700" 
        style={{ backgroundImage: `url('${gridSvg}')` }}
      />

      {/* Floating Elements - Optimized for Cross-Browser */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[3]">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl will-change-transform transform-gpu ${
              theme === "light" ? "bg-primary/10" : "bg-white/10"
            }`}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 12 + i * 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: 350 + i * 100,
              height: 350 + i * 100,
              left: `${i * 30}%`,
              top: `${(i % 2) * 45}%`,
              opacity: 0.08,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y: textY, opacity: scrollOpacity }}
        className="relative z-10 text-center max-w-5xl px-6 py-12"
      >
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`font-black tracking-[0.5em] uppercase text-[10px] md:text-xs ${
              theme === "light" ? "text-primary/60" : "text-secondary/80"
            }`}
          >
            Bienvenidos a {BRAND.name}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="perspective-1000"
          >
            <h1 
              className={`text-6xl sm:text-7xl md:text-[10rem] font-serif font-bold leading-[0.95] tracking-tighter transition-colors duration-700 ${
                theme === "light" ? "text-primary" : "text-white"
              }`}
              style={{
                textShadow: theme === "light" ? "none" : "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              {BRAND.tagline}
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed italic ${
              theme === "light" ? "text-primary/60" : "text-white/70"
            }`}
          >
            {BRAND.description}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <Link
            to="/tienda"
            className={`group px-12 py-5 backdrop-blur-xl rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-500 shadow-2xl border transform hover:-translate-y-1 ${
              theme === "light" 
                ? "bg-primary/5 text-primary border-primary/20 hover:bg-primary hover:text-white" 
                : "bg-white/5 text-white border-white/20 hover:bg-white hover:text-primary"
            }`}
          >
            <span className="relative z-10">Ver Productos</span>
          </Link>
          <Link
            to="/salon"
            className="group px-12 py-5 bg-secondary text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-terracotta transition-all duration-500 shadow-2xl transform hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Agendar Cita</span>
          </Link>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 opacity-30 ${
            theme === "light" ? "text-primary" : "text-white"
          }`}
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;