
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const IDENTITY_CARDS = [
  {
    tag: "Identity_Record",
    title: "OVERVIEW_REPORT",
    content: "Engineering invisible defenses for high-stakes digital environments. Specializing in the architecture of resilience—securing high-integrity networks through unconventional protocols.",
    subtext: "Operating at the intersection of architectural security and defensive deployment. My approach merges technical precision with tactical foresight."
  },
  {
    tag: "Neural_Defense",
    title: "STRATEGIC_VISION",
    content: "Predictive threat modeling using decentralized intelligence nodes. We don't just react to incursions; we neutralize the intent before the execution phase begins.",
    subtext: "Implementing zero-latency response protocols that autonomously harden perimeters based on heuristic anomaly detection."
  },
  {
    tag: "Technical_Stack",
    title: "TACTICAL_ARSENAL",
    content: "Proficient in low-level systems hardening (C/Rust), kernel-space monitoring, and complex cryptographic implementation. Every line of code is a defensive layer.",
    subtext: "Mastery of eBPF, Advanced OSINT, and Binary Exploitation mitigation strategies for modern infrastructure."
  },
  {
    tag: "Intelligence_V3",
    title: "GLOBAL_THREAT_INTEL",
    content: "Monitoring the dark-web horizon for emerging exploit vectors. Maintaining a comprehensive database of state-sponsored actor patterns and zero-day signatures.",
    subtext: "Providing actionable insights that allow for the construction of immutable digital fortresses."
  },
  {
    tag: "Crypto_Protocols",
    title: "QUANTUM_STABILITY",
    content: "Preparing legacy systems for the post-quantum era. Transitioning sensitive data stores to lattice-based encryption and NIST-approved high-entropy standards.",
    subtext: "Future-proofing integrity through forward-secrecy and mathematical certainty."
  },
  {
    tag: "Future_Ops",
    title: "PROJECTED_TRAJECTORY",
    content: "Expanding into autonomous security agents and neural-mesh protection. The next generation of defense is self-healing and fundamentally unhackable.",
    subtext: "Leading the transition from reactive security to proactive, self-defending digital ecosystems."
  }
];

const AboutMe: React.FC<{ onThemeChange: (index: number) => void }> = ({ onThemeChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const [activeIndex, setActiveIndex] = useState(0);

  // Mouse Drag Logic
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollXProgress.on("change", (latest) => {
      const index = Math.round(latest * (IDENTITY_CARDS.length - 1));
      if (index !== activeIndex) {
        setActiveIndex(index);
        onThemeChange(index);
      }
    });
    return () => unsubscribe();
  }, [scrollXProgress, activeIndex, onThemeChange]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="about" className="relative min-h-screen bg-[#030303] overflow-hidden flex flex-col justify-center py-32 border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-theme/5 blur-[150px] rounded-full theme-transition"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="tech-mono text-[9px] tracking-[0.6em] uppercase text-theme theme-transition font-bold">Registry_Access_Level: Alpha</span>
        </motion.div>
      </div>

      {/* Horizontal Card Swiper - Focused on card interaction via mouse drag */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollBehavior: isDown ? 'auto' : 'smooth' }}
      >
        <div className="flex px-[10vw] md:px-[25vw] gap-8 pb-12">
          {IDENTITY_CARDS.map((card, idx) => (
            <div key={idx} className="snap-center flex-shrink-0 w-[80vw] md:w-[50vw] pointer-events-none md:pointer-events-auto">
              <motion.div
                animate={{
                  opacity: activeIndex === idx ? 1 : 0.1,
                  scale: activeIndex === idx ? 1 : 0.92,
                  filter: activeIndex === idx ? 'blur(0px)' : 'blur(8px)'
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-8 md:p-16 rounded-3xl border border-white/5 flex flex-col gap-10 relative overflow-hidden h-[500px] md:h-[600px] justify-center select-none"
              >
                {/* ID Overlay */}
                <div className="absolute top-0 right-0 p-8 tech-mono text-[10px] text-white/5 uppercase tracking-[0.5em] rotate-90 origin-top-right">
                  ENTRY_NODE_{idx + 1}
                </div>

                <div className="space-y-4">
                  <h4 className="tech-mono text-[11px] text-theme theme-transition tracking-widest uppercase font-black">{card.tag}</h4>
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] text-white font-heading">
                    {card.title.split('_')[0]}<br />
                    <span className="text-white/20 italic">{card.title.split('_')[1]}</span>
                  </h2>
                </div>

                <div className="space-y-6 max-w-xl">
                  <p className="text-white/70 text-lg md:text-2xl leading-tight font-light tracking-tight border-l border-theme/20 pl-6 theme-transition font-primary">
                    {card.content}
                  </p>
                  <p className="text-white/40 text-sm md:text-lg leading-relaxed font-light pl-6 font-primary">
                    {card.subtext}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Pure aesthetic UI footer - no indicators as requested */}
      <div className="container mx-auto px-6 mt-12 flex justify-between items-center opacity-5 pointer-events-none select-none">
        <div className="tech-mono text-[9px] uppercase tracking-[1em]">SYSTEM_ID_VERIFIED_PROTOCOL_ACTIVE</div>
        <div className="tech-mono text-[9px] uppercase tracking-[1em]">END_OF_SEGMENT</div>
      </div>
    </section>
  );
};

export default AboutMe;
