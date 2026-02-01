
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-4 transition-all duration-500 ${isScrolled ? 'bg-black/80 md:bg-black/40 md:backdrop-blur-md border-b border-white/5 py-3 md:py-4' : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center tech-mono text-[10px] font-bold bg-white/5">
          S
        </div>
        <span className="text-xs font-black tracking-[0.4em] uppercase opacity-80 select-none tech-mono">SHADOW_OPS</span>
      </div>

      <div className={`hidden md:flex items-center space-x-10 px-8 py-2.5 transition-all duration-500 rounded-sm text-[9px] font-bold tracking-[0.3em] uppercase tech-mono ${isScrolled ? 'opacity-90' : 'bg-white/5 backdrop-blur-xl border border-white/5 opacity-60'
        }`}>
        <a href="#home" className="hover:text-theme theme-transition transition-all duration-300">Node_01</a>
        <a href="#services" className="hover:text-theme theme-transition transition-all duration-300">Capabilities</a>
        <a href="#projects" className="hover:text-theme theme-transition transition-all duration-300">Operations</a>
        <a href="#about" className="hover:text-theme theme-transition transition-all duration-300">ID_Auth</a>
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,1)", color: "black" }}
          whileTap={{ scale: 0.98 }}
          className={`px-6 py-2 border border-white/10 text-[9px] font-bold uppercase tracking-[0.4em] transition-all duration-500 rounded-sm tech-mono ${isScrolled ? 'bg-white/10' : ''
            }`}
        >
          ENCRYPTED CHANNEL
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
