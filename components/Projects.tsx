
import React, { useRef, useState, useEffect, Suspense, lazy } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

// Lazy Load Modal for better initial bundle size
const ProjectModal = lazy(() => import('./ProjectModal'));

const TypingText: React.FC<{ text: string; active: boolean }> = ({ text, active }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplayedText("");
      return;
    }

    let current = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        current += text[i];
        setDisplayedText(current);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [active, text]);

  return (
    <p className="tech-mono text-[10px] md:text-xs text-theme/70 leading-relaxed font-light min-h-[5em] border-l border-theme/20 pl-4 theme-transition">
      {displayedText}
      {active && <span className="inline-block w-1 h-3 bg-theme ml-1 animate-pulse shadow-theme"></span>}
    </p>
  );
};

const CSS3DProjectNode: React.FC<{
  project: any;
  index: number;
  progress: any;
  total: number;
  mouseX: any;
  mouseY: any;
  onSelect: () => void;
}> = ({ project, index, progress, total, mouseX, mouseY, onSelect }) => {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  // Key phases for each node in the spiral
  // Entering -> Helical Descent -> Center Alignment -> Focus State (Pinned) -> Helical Departure -> Exit
  const localInput = [
    start - step * 0.5,
    start,
    start + step * 0.3,  // Approach center
    start + step * 0.45, // Pin start
    start + step * 0.5,  // Absolute center
    start + step * 0.55, // Pin end
    start + step * 0.7,  // Leave center
    end,
    end + step * 0.5
  ];

  // HELIX CALCULATIONS
  const xBase = useTransform(progress, (p: number) => {
    const angle = (p * Math.PI * 8) + (index * (Math.PI * 2 / 5));
    const r = typeof window !== 'undefined' && window.innerWidth < 768 ? 300 : 600;
    return Math.cos(angle) * r;
  });

  const zBase = useTransform(progress, (p: number) => {
    const angle = (p * Math.PI * 8) + (index * (Math.PI * 2 / 5));
    const r = typeof window !== 'undefined' && window.innerWidth < 768 ? 300 : 600;
    return Math.sin(angle) * r;
  });

  // Vertical position along the spiral: Pin at -180 during focus range
  const yBase = useTransform(progress, localInput, [1500, 800, 300, -180, -180, -180, -600, -1200, -2000]);

  // Center override radius logic: Maintain 0 radius during pin
  const radiusControl = useTransform(progress, localInput, [typeof window !== 'undefined' && window.innerWidth < 768 ? 300 : 600, 200, 0, 0, 0, 0, 0, 200, typeof window !== 'undefined' && window.innerWidth < 768 ? 300 : 600]);
  const xFinal = useTransform([progress, radiusControl], ([p, r]) => {
    const angle = (p as number * Math.PI * 6) + (index * (Math.PI * 2 / 3));
    return Math.cos(angle) * (r as number);
  });

  // Adjusted Z-depth: Peak during pin
  const zFinal = useTransform(progress, localInput, [-800, -400, 100, 320, 320, 320, 100, -400, -800]);

  // Rotation logic: Lock rotation at 0 during pin
  const rotateYBase = useTransform(progress, localInput, [720, 360, 45, 0, 0, 0, -45, -360, -720]);

  // Appearance: Max opacity and scale during pin
  const opacity = useTransform(progress, localInput, [0, 0.1, 0.5, 1, 1, 1, 0.5, 0.1, 0]);
  const scale = useTransform(progress, localInput, [0.4, 0.55, 0.75, 1.1, 1.1, 1.1, 0.75, 0.55, 0.4]);
  const blur = useTransform(progress, localInput, [20, 10, 5, 0, 0, 0, 5, 10, 20]);

  // Image Parallax Logic (Lightweight)
  const imageY = useTransform(progress, [start, end], ["-15%", "15%"]);

  // Smoothing springs for "Buttery" weighted transitions
  const springConfig = { stiffness: 40, damping: 35, mass: 1.5, restDelta: 0.001 };
  const sX = useSpring(xFinal, springConfig);
  const sY = useSpring(yBase, springConfig);
  const sZ = useSpring(zFinal, springConfig);
  const sScale = useSpring(scale, springConfig);
  const sRotateY = useSpring(rotateYBase, springConfig);

  // Mouse Interactivity State
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const tX = useMotionValue(0);
  const tY = useMotionValue(0);
  const springTX = useSpring(tX, { stiffness: 40, damping: 25 });
  const springTY = useSpring(tY, { stiffness: 40, damping: 25 });

  const mouseRotateX = useTransform(springTY, [-0.5, 0.5], [15, -15]);
  const mouseRotateY = useTransform(springTX, [-0.5, 0.5], [-15, 15]);

  // Combine Helix + Mouse Rotation
  const combinedRotateY = useTransform([sRotateY, mouseRotateY], ([helix, mouse]: any[]) => (helix as number) + (mouse as number));

  useEffect(() => {
    const unsub = progress.on("change", (latest: number) => {
      // Focus range adjusted to include the pinning dwell (0.45-0.55)
      const active = latest >= start + step * 0.4 && latest <= start + step * 0.6;
      if (active !== isFocused) {
        setIsFocused(active);
        if (!active) {
          tX.set(0);
          tY.set(0);
        }
      }
    });

    const unsubX = mouseX.on("change", (v: number) => { if (isFocused) tX.set(v); });
    const unsubY = mouseY.on("change", (v: number) => { if (isFocused) tY.set(v); });

    return () => { unsub(); unsubX(); unsubY(); };
  }, [progress, isFocused, start, step, mouseX, mouseY]);


  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        x: '-50%',
        y: sY,
        z: sZ,
        rotateY: combinedRotateY,
        rotateX: mouseRotateX,
        scale: sScale,
        opacity,
        filter: useTransform(blur, b => b <= 0.1 ? 'none' : `blur(${b}px)`),
        willChange: 'transform, opacity',
      }}
      className="w-[280px] sm:w-[320px] md:w-[440px] h-[360px] md:h-[480px] preserve-3d cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D CUBE STRUCTURE */}
      <div className="relative w-full h-full preserve-3d">

        {/* TOP FACE */}
        <div className="cube-face bg-black/80 border border-theme/20 shadow-[inset_0_0_50px_rgba(0,255,204,0.1)]" style={{ transform: `rotateX(90deg) translateZ(${typeof window !== "undefined" && window.innerWidth < 768 ? 140 : 220}px)`, height: '80px', top: 'calc(50% - 40px)' }}>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.05)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
        </div>

        {/* BOTTOM FACE */}
        <div className="cube-face bg-black/80 border border-theme/20" style={{ transform: `rotateX(-90deg) translateZ(${typeof window !== "undefined" && window.innerWidth < 768 ? 140 : 220}px)`, height: '80px', top: 'calc(50% - 40px)' }}></div>

        {/* FRONT FACE (CLEANED) */}
        <div
          className={`cube-face glass-panel rounded-lg p-5 md:p-6 flex flex-col gap-3 md:gap-4 preserve-3d ${isFocused ? 'border-theme/60 shadow-[0_0_80px_rgba(0,255,204,0.1)]' : 'border-white/5'}`}
          style={{
            transform: 'translateZ(50px)',
            perspective: '1200px',
            transformStyle: 'preserve-3d'
          }}
        >

          <motion.div
            style={{
              background: useTransform([springTX, springTY], ([x, y]) => `radial-gradient(circle at ${(x as number * 100) + 50}% ${(y as number * 100) + 50}%, rgba(0,255,204,0.12) 0%, transparent 60%)`)
            }}
            className="absolute inset-0 pointer-events-none z-20"
          />

          <div className="relative z-30 flex flex-col h-full pointer-events-none preserve-3d">
            <div className="flex justify-between items-start mb-2">
              <div className="space-y-1">
                <div className="tech-mono text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-theme font-black flex items-center gap-2">
                  <div className={`w-1 h-1 rounded-full ${isFocused ? 'bg-theme animate-ping' : 'bg-white/10'}`}></div>
                  SEC_NODE_{index + 1}
                </div>
                <h3 className="font-heading text-xl md:text-3xl font-black tracking-tighter uppercase leading-tight text-white mt-1">
                  {project.title.split(' ')[0]}<br />
                  <span className="text-white/10">{project.title.split(' ').slice(1).join(' ')}</span>
                </h3>
              </div>
            </div>

            <div className="flex-1">
              <TypingText text={project.description} active={isFocused} />
            </div>

            <div className="mt-auto space-y-3 md:space-y-4 preserve-3d">
              {/* SMOOTH MEDIA CONTAINER */}
              <motion.div
                style={{ transform: useTransform(springTX, () => `translateZ(${isHovered ? 200 : (isFocused ? 60 : 0)}px)`) }}
                className="aspect-video rounded-sm overflow-hidden border border-white/5 relative group-hover:border-theme/30 transition-all duration-1000 bg-black shadow-[0_60px_120px_rgba(0,0,0,0.9)] cursor-pointer pointer-events-auto"
                onClick={onSelect}
              >
                <AnimatePresence mode="wait">
                  {isFocused && project.video ? (
                    <motion.video
                      key="video"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover scale-105"
                    />
                  ) : (
                    <motion.img
                      key="image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isFocused ? 0.3 : 0.1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      src={project.image}
                      alt={project.title}
                      style={{ y: imageY }}
                      className={`w-full h-[140%] object-cover grayscale transition-all duration-1000 ${isFocused ? 'scale-105' : 'scale-100'}`}
                    />
                  )}
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
              </motion.div>

              <div className="flex justify-between items-end">
                <div className="flex flex-wrap gap-1 md:gap-1.5 max-w-[60%]">
                  {project.tags.slice(0, 2).map((tag: string) => (
                    <span key={tag} className="tech-mono text-[6px] text-white/30 border border-white/10 px-1 py-0.5 rounded-none uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ y: -2, boxShadow: '0 5px 20px rgba(0,255,204,0.2)', scale: 1.05 }}
                  onClick={onSelect}
                  className={`px-3 py-1.5 bg-theme text-black tech-mono text-[7px] md:text-[8px] font-black uppercase tracking-widest transition-all duration-500 pointer-events-auto ${isFocused ? 'opacity-100' : 'opacity-20 grayscale'}`}
                >
                  ACCESS
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC<{ onToggleView?: (active: boolean) => void }> = ({ onToggleView }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [divingProject, setDivingProject] = useState<Project | null>(null);
  const [isDiving, setIsDiving] = useState(false);

  const handleProjectSelect = (project: Project) => {
    setDivingProject(project);
    setIsDiving(true);
    // Notify App to hide Navbar
    onToggleView?.(true);

    // Faster, smoother transition delay
    setTimeout(() => {
      setSelectedProject(project);
      setIsDiving(true); // Keep active for modal
      setDivingProject(null);
    }, 1000);
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.5]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.08, 0.9, 1], [1, 0, 0, 1]);
  const headerBlur = useTransform(scrollYProgress, [0, 0.08], [0, 15]);
  const hFilter = useTransform(headerBlur, b => `blur(${b}px)`);

  return (
    <section
      ref={targetRef}
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative bg-[#030303] h-[1000vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-container bg-black">

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300vw] h-[300vw] bg-[radial-gradient(circle,rgba(0,255,204,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] animate-[spin_300s_linear_infinite]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.01),transparent_80%)]"></div>
        </div>

        <motion.div
          style={{ scale: headerScale, opacity: headerOpacity, filter: hFilter }}
          className="relative z-50 text-center pointer-events-none mb-[10vh] md:mb-[15vh]"
        >
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-theme/30 to-transparent"></div>
            <span className="tech-mono text-[8px] md:text-[10px] tracking-[1.5em] uppercase text-theme font-black">Vortex_Sync</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.7] uppercase font-heading">
            SELECTED<br />
            <span className="text-white/5 italic">OPERATIONS</span>
          </h2>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center preserve-3d">
          {PROJECTS.map((project, idx) => (
            <CSS3DProjectNode
              key={project.id}
              project={project}
              index={idx}
              progress={scrollYProgress}
              total={PROJECTS.length}
              mouseX={mouseX}
              mouseY={mouseY}
              onSelect={() => handleProjectSelect(project)}
            />
          ))}
        </div>

        {/* DIVE-IN ANIMATION OVERLAY */}
        <AnimatePresence>
          {isDiving && divingProject && (
            <motion.div
              initial={{ opacity: 1, scale: 1.1, filter: 'blur(0px)' }}
              animate={{
                opacity: [1, 1, 0],
                scale: [1.1, 1.4, 2],
                filter: ['blur(0px)', 'blur(10px)', 'blur(60px)']
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="fixed inset-0 z-[3000] pointer-events-none flex items-center justify-center overflow-hidden"
            >
              {divingProject.video ? (
                <video src={divingProject.video} autoPlay muted loop className="w-full h-full object-cover" />
              ) : (
                <img src={divingProject.image} className="w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-theme/10 mix-blend-overlay"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PROJECT DETAIL MODAL - LAZY LOADED */}
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            onClose={() => {
              setSelectedProject(null);
              setIsDiving(false);
              onToggleView?.(false);
            }}
          />
        </Suspense>

        <div className="absolute left-12 bottom-12 flex flex-col gap-2 tech-mono text-[9px] text-white/10 tracking-[0.5em] uppercase pointer-events-none">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-theme/40 animate-pulse"></div>
            <span className="text-theme/40">Helix_Sync_Active</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white/10"></div>
            <span>Buffer: Optimized</span>
          </div>
        </div>

        <div className="absolute right-12 bottom-12 h-40 w-[2px] bg-white/5 overflow-hidden">
          <motion.div
            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            className="w-full bg-theme shadow-theme origin-bottom"
          />
          <div className="absolute inset-x-0 h-1/4 bg-gradient-to-t from-theme/20 to-transparent bottom-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
