
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 1 }}
          className="text-[25vw] font-black tight-heading uppercase text-white font-heading"
        >
          SILENCE
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-8 items-center pt-10 md:pt-0">
        {/* Left Column: Description & CTA */}
        <div className="md:col-span-6 flex flex-col items-start space-y-8 md:space-y-12 z-20">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex items-center gap-3 text-theme theme-transition tech-mono text-[8px] md:text-[9px] tracking-[0.4em] uppercase font-bold"
            >
              <span className="w-8 h-[1px] bg-theme/50 theme-transition"></span>
              Secure Infrastructure Specialist
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
              className="text-5xl sm:text-6xl md:text-[8rem] font-black tight-heading uppercase tracking-tighter font-heading"
            >
              SHADOW<br />
              <span className="text-white/20 hover:text-white transition-colors duration-700 cursor-default">DEFENSE</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="max-w-md space-y-6 md:space-y-8"
          >
            <p className="text-base md:text-lg text-white/40 leading-relaxed font-light border-l border-white/10 pl-6 font-primary">
              Expert in high-stakes anonymity and defensive cyber operations.
              I design systems that remain invisible while maintaining absolute authority.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 pt-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px var(--theme-glow)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden rounded-sm tech-mono"
              >
                Initiate Protocol
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 3, duration: 1 }}
                whileHover={{ opacity: 1 }}
                className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em] border-b border-white/10 pb-2 hover:border-theme transition-all duration-500 delay-200 theme-transition tech-mono"
              >
                Decrypted Logs
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Center/Right: Hero Image */}
        <div className="md:col-span-6 flex justify-center items-end h-[50vh] sm:h-[60vh] md:h-[90vh] relative">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px) grayscale(1)' }}
            animate={{ opacity: 1, filter: 'blur(0px) grayscale(0.2)' }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
            className="relative w-full h-full flex items-end justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
              alt="Anonymous Professional"
              className="w-full h-[95%] object-contain object-bottom contrast-125 brightness-90 saturate-50"
              style={{ maskImage: 'linear-gradient(to top, transparent 5%, black 40%)' }}
            />

            {/* Dynamic accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-theme/5 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse theme-transition"></div>

            {/* Technical HUD elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-full h-full border border-white/5 rounded-full scale-125 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="absolute bottom-0 left-0 right-0 h-14 md:h-16 border-t border-white/5 flex items-center justify-between px-6 md:px-12 tech-mono text-[8px] md:text-[9px] text-white/20 tracking-widest uppercase bg-black/80 md:bg-black/40 md:backdrop-blur-sm">
        <div className="flex items-center gap-4 md:gap-6">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-theme theme-transition animate-pulse"></span>
            <span className="hidden xs:inline">Sec_Channel</span>
            <span className="xs:hidden">Secure</span>
          </span>
          <span className="hidden md:inline">Uptime: 99.9%</span>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <span className="hidden sm:inline">0x72a...ff01</span>
          <span>AES_256</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
