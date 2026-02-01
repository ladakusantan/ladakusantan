
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceMarquee from './components/ServiceMarquee';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BackgroundBackground from './components/BackgroundBackground';

// Theme Colors: Cyan, Red, Yellow, Green, Orange
const THEME_COLORS = [
  { main: '#00ffcc', glow: 'rgba(0, 255, 204, 0.4)', bg: 'rgba(0, 255, 204, 0.02)' }, // Cyan
  { main: '#ff3333', glow: 'rgba(255, 51, 51, 0.4)', bg: 'rgba(255, 51, 51, 0.02)' }, // Red
  { main: '#ffff33', glow: 'rgba(255, 255, 51, 0.4)', bg: 'rgba(255, 255, 51, 0.02)' }, // Yellow
  { main: '#33ff33', glow: 'rgba(51, 255, 51, 0.4)', bg: 'rgba(51, 255, 51, 0.02)' }, // Green
  { main: '#ff9933', glow: 'rgba(255, 153, 51, 0.4)', bg: 'rgba(255, 153, 51, 0.02)' }  // Orange
];

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);
  const [isLightning, setIsLightning] = useState(false);
  const [isProjectViewActive, setIsProjectViewActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const triggerThemeChange = (index: number) => {
    const newIndex = index % THEME_COLORS.length;
    setColorIndex(newIndex);

    setIsLightning(true);
    setTimeout(() => setIsLightning(false), 500);

    // Update CSS Variables for global styling
    const theme = THEME_COLORS[newIndex];
    document.documentElement.style.setProperty('--theme-color', theme.main);
    document.documentElement.style.setProperty('--theme-glow', theme.glow);
    document.documentElement.style.setProperty('--theme-bg', theme.bg);
  };

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      <div className={`lightning-overlay ${isLightning ? 'active-flash' : ''}`} />

      {isLightning && (
        <div className="fixed inset-0 z-[1001] pointer-events-none opacity-40">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d={`M ${Math.random() * 80 + 10} 0 L ${Math.random() * 40 + 30} ${Math.random() * 40 + 20} L ${Math.random() * 60 + 20} ${Math.random() * 30 + 50} L ${Math.random() * 40 + 30} 100`}
              stroke="white"
              strokeWidth="0.5"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>
      )}

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-theme font-black text-2xl tracking-tighter theme-transition"
            >
              DAF_4FK <span className="italic font-light text-white opacity-60">STEEL</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BackgroundBackground />

      <div className="relative z-10 flex flex-col">
        <AnimatePresence>
          {!isProjectViewActive && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 right-0 z-[1000]"
            >
              <Navbar />
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          <Hero />
          <ServiceMarquee />
          <Projects onToggleView={setIsProjectViewActive} />
          <AboutMe onThemeChange={triggerThemeChange} />
          <Testimonials />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
