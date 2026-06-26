import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { BRAND } from "../../lib/constants";
import { useRef } from "react";
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
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className={`absolute inset-0 transition-colors duration-700 z-0 ${
          theme === "light" 
            ? "bg-gradient-to-br from-[#E8F0E8] via-accent to-[#F2E6E1]" 
            : "bg-gradient-to-br from-deep-green via-primary to-terracotta"
        }`} 
      />

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            theme === "light"
              ? "radial-gradient(circle at 20% 50%, rgba(56,102,65,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(170,143,89,0.1) 0%, transparent 50%)"
              : "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(170,143,89,0.4) 0%, transparent 50%)",
        }}
      />

      <div className={`absolute inset-0 opacity-30 mix-blend-overlay ${
        theme === "light" ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" : "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"
      }`} />

      {/* Floating Elements for Premium Feel - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl will-change-transform transform-gpu ${
              theme === "light" ? "bg-primary/10" : "bg-white/10"
            }`}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: 300 + i * 150,
              height: 300 + i * 150,
              left: `${i * 35}%`,
              top: `${(i % 2) * 40}%`,
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 text-center max-w-4xl px-6 py-12"
      >
        <div className="space-y-4 md:space-y-6 mb-10 md:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`font-black tracking-[0.4em] uppercase text-xs md:text-sm ${
              theme === "light" ? "text-primary" : "text-secondary"
            }`}
          >
            Bienvenidos a {BRAND.name}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-6xl sm:text-7xl md:text-9xl font-serif font-bold leading-[1.05] ${
              theme === "light" ? "text-primary dark:text-white" : "text-white"
            } drop-shadow-sm`}
          >
            {BRAND.tagline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed italic ${
              theme === "light" ? "text-primary/70" : "text-white/80"
            }`}
          >
            {BRAND.description}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            to="/tienda"
            className={`px-10 py-4 backdrop-blur-xl rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 shadow-2xl border transform hover:scale-105 ${
              theme === "light" 
                ? "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white" 
                : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary"
            }`}
          >
            Ver Productos
          </Link>
          <Link
            to="/salon"
            className="px-10 py-4 bg-secondary text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-terracotta transition-all duration-500 shadow-2xl transform hover:scale-105"
          >
            Agendar Cita
          </Link>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 opacity-40 ${
            theme === "light" ? "text-primary" : "text-white"
          }`}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};


export default Hero;