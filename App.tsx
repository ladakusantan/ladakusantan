
import React, { useEffect, useState, Suspense, lazy, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceMarquee from './components/ServiceMarquee';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackgroundBackground from './components/BackgroundBackground';

// Lazy load heavy sections
const AboutMe = lazy(() => import('./components/AboutMe'));
const Testimonials = lazy(() => import('./components/Testimonials'));

const THEME_COLORS = [
  { main: '#00ffcc', glow: 'rgba(0, 255, 204, 0.4)', bg: 'rgba(0, 255, 204, 0.02)' },
  { main: '#ff3333', glow: 'rgba(255, 51, 51, 0.4)', bg: 'rgba(255, 51, 51, 0.02)' },
  { main: '#ffff33', glow: 'rgba(255, 255, 51, 0.4)', bg: 'rgba(255, 255, 51, 0.02)' },
  { main: '#33ff33', glow: 'rgba(51, 255, 51, 0.4)', bg: 'rgba(51, 255, 51, 0.02)' },
  { main: '#ff9933', glow: 'rgba(255, 153, 51, 0.4)', bg: 'rgba(255, 153, 51, 0.02)' }
];

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);
  const [isLightning, setIsLightning] = useState(false);
  const [isProjectViewActive, setIsProjectViewActive] = useState(false);
  const [isTourActive, setIsTourActive] = useState(false);
  const [activeTourProjectIndex, setActiveTourProjectIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const tourRef = useRef(false);

  // TOUR ORCHESTRATION LOGIC
  const startTour = async () => {
    if (tourRef.current) {
      tourRef.current = false;
      setIsTourActive(false);
      setActiveTourProjectIndex(null);
      return;
    }

    tourRef.current = true;
    setIsTourActive(true);

    // Jump to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });
    await new Promise(r => setTimeout(r, 1000));

    const projectsContainer = document.getElementById('projects');
    const aboutContainer = document.getElementById('about');
    if (!projectsContainer || !aboutContainer) return;

    const projectsTop = projectsContainer.offsetTop;
    const projectsHeight = projectsContainer.offsetHeight;
    const totalProjects = 5;

    // Correct Progress-to-Scroll mapping
    const scrollRange = projectsHeight - window.innerHeight;
    const focalPoints = Array.from({ length: totalProjects }, (_, i) => {
      const progress = (i + 0.5) / totalProjects;
      return projectsTop + (progress * scrollRange);
    });

    const aboutTop = aboutContainer.offsetTop;
    const destination = aboutTop + 100;

    let currentTargetIndex = 0;
    let isPaused = false;

    const autopilot = () => {
      if (!tourRef.current) return;

      const currentScroll = window.scrollY;

      if (isPaused) return;

      if (currentTargetIndex < totalProjects) {
        // PRECISION TIMING: Target is precisely aligned at 0.5 progress
        const target = focalPoints[currentTargetIndex];
        const dist = target - currentScroll;

        if (dist > 5) { // Stop slightly earlier for a clean landing
          const dynamicSpeed = Math.max(1, Math.min(15, dist / 20));
          window.scrollBy(0, dynamicSpeed);
          requestAnimationFrame(autopilot);
        } else {
          // STEP 1: ARRIVE AT NODE
          isPaused = true;

          // STEP 2: PAUSE FOR READING (Node focus phase)
          setTimeout(() => {
            if (!tourRef.current) return;

            // STEP 3: TRIGGER INSTANT DIVE AT PEAK FOCUS
            setActiveTourProjectIndex(currentTargetIndex);

            // STEP 4: PAUSE INSIDE MODAL (Detailed review phase)
            setTimeout(() => {
              if (!tourRef.current) return;

              // STEP 5: AUTO EXIT
              setActiveTourProjectIndex(null);

              // STEP 6: CONTINUE TO NEXT
              setTimeout(() => {
                if (!tourRef.current) return;
                isPaused = false;
                currentTargetIndex++;
                requestAnimationFrame(autopilot);
              }, 1200); // Wait for modal exit animation
            }, 6000); // 6s to read full details
          }, 2500); // 2.5s to read the node's initial description
        }
      } else if (currentScroll < destination) {
        const distToAbout = destination - currentScroll;
        const speedToAbout = Math.max(2, Math.min(20, distToAbout / 15));
        window.scrollBy(0, speedToAbout);
        requestAnimationFrame(autopilot);
      } else {
        tourRef.current = false;
        setIsTourActive(false);
        setActiveTourProjectIndex(null);
      }
    };

    // Manual Override: Stop tour on wheel/touch
    const stopTour = () => {
      tourRef.current = false;
      setIsTourActive(false);
      setActiveTourProjectIndex(null);
    };
    window.addEventListener('wheel', stopTour, { once: true });
    window.addEventListener('touchmove', stopTour, { once: true });

    autopilot();
  };

  const triggerThemeChange = (index: number) => {
    const newIndex = index % THEME_COLORS.length;
    setColorIndex(newIndex);
    setIsLightning(true);
    setTimeout(() => setIsLightning(false), 500);

    const theme = THEME_COLORS[newIndex];
    document.documentElement.style.setProperty('--theme-color', theme.main);
    document.documentElement.style.setProperty('--theme-glow', theme.glow);
    document.documentElement.style.setProperty('--theme-bg', theme.bg);
  };

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      <div className={`lightning-overlay ${isLightning ? 'active-flash' : ''}`} />

      {/* AUTOPILOT HUD INDICATOR */}
      <AnimatePresence>
        {isTourActive && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-12 top-24 z-[2000] flex items-center gap-4 pointer-events-none"
          >
            <div className="tech-mono text-[9px] text-theme text-right uppercase tracking-[0.4em] leading-relaxed">
              <span className="block font-black">
                {activeTourProjectIndex !== null ? 'SYNCING_PROJECT_INTEL...' : 'Autopilot_Engaged_V2.0'}
              </span>
              <span className="block text-white/40 italic">
                {activeTourProjectIndex !== null ? `DECRYPTING_NODE_0${activeTourProjectIndex + 1}` : 'Guided_Exploration_Mode'}
              </span>
            </div>
            <div className="w-1 h-12 bg-white/5 relative overflow-hidden">
              <motion.div
                animate={{ y: [-48, 48] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-4 bg-theme shadow-theme"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <Navbar onStartTour={startTour} isTourActive={isTourActive} />
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          <Hero />
          <ServiceMarquee />
          <Projects onToggleView={setIsProjectViewActive} activeTourIndex={activeTourProjectIndex} />
          <Suspense fallback={<div className="h-screen bg-black" />}>
            <AboutMe onThemeChange={triggerThemeChange} />
          </Suspense>
          <Suspense fallback={<div className="h-screen bg-black" />}>
            <Testimonials />
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
