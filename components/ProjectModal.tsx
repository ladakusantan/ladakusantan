
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Terminal, Cpu, Info, Globe, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8">
                {/* BACKDROP BLUR */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
                />

                {/* MODAL CONTAINER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-6xl h-full max-h-[95vh] md:max-h-[90vh] bg-[#050505] border border-theme/20 rounded-lg overflow-hidden shadow-[0_0_100px_rgba(0,255,204,0.1)] flex flex-col md:flex-row"
                >
                    {/* MOBILE CLOSE BUTTON - TOP RIGHT */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-[3000] p-2 bg-theme text-black md:hidden rounded-full shadow-lg"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* LEFT SIDE: CINEMATIC FEED */}
                    <div className="relative w-full md:w-2/3 h-64 md:h-full bg-black overflow-hidden group flex-shrink-0">
                        {project.video ? (
                            <video
                                src={project.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000"
                            />
                        ) : (
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40" />
                        )}

                        {/* SCANLINE OVERLAY */}
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50.5%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />

                        {/* HUD ELEMENTS */}
                        <div className="absolute top-6 left-6 tech-mono text-[8px] text-theme/40 space-y-1 hidden sm:block">
                            <div>LIVE_INTEL_FEED :: ACTIVE</div>
                            <div>ENCRYPTION :: AES-4096</div>
                        </div>

                        <div className="absolute bottom-6 left-6 tech-mono">
                            <div className="text-theme text-[9px] font-black uppercase tracking-[0.3em] mb-2">SYSTEM_TARGET</div>
                            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none font-heading">
                                {project.title.split(' ')[0]}<br />
                                <span className="text-white/20">{project.title.split(' ').slice(1).join(' ')}</span>
                            </h2>
                        </div>
                    </div>

                    {/* RIGHT SIDE: DATA & INTEL */}
                    <div className="flex-1 flex flex-col h-full bg-black/40 backdrop-blur-md overflow-hidden border-l border-theme/10">
                        <div className="hidden md:flex p-6 border-b border-theme/10 justify-between items-center">
                            <div className="tech-mono text-[10px] text-theme/60 flex items-center gap-2 font-bold uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-none bg-theme animate-pulse"></div>
                                OPERATION_REPORT // {project.category}
                            </div>
                            <button onClick={onClose} className="p-1 hover:bg-theme group transition-all duration-300">
                                <X className="w-4 h-4 text-white/40 group-hover:text-black transition-colors" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 space-y-8 no-scrollbar">
                            {/* OVERVIEW */}
                            <section className="space-y-4">
                                <div className="flex items-center gap-2 text-theme/40 tech-mono text-[10px] uppercase font-bold">
                                    <Info className="w-3 h-3" /> Mission Briefing
                                </div>
                                <p className="text-white/70 text-sm md:text-base leading-relaxed tracking-wide font-light font-primary">
                                    {project.description}
                                </p>
                            </section>

                            {/* TECHNICAL SPECS (TAGS) */}
                            <section className="space-y-4">
                                <div className="flex items-center gap-2 text-theme/40 tech-mono text-[10px] uppercase font-bold">
                                    <Cpu className="w-3 h-3" /> Tech Stack Analysis
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <div key={tag} className="px-3 py-1.5 bg-theme/5 border border-theme/20 rounded-none tech-mono text-[10px] text-theme/80 uppercase">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* REPUTATION STATS (DYNAMIC PLACEHOLDERS) */}
                            <section className="space-y-4 pt-4 border-t border-white/5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-4 space-y-2 border border-white/5">
                                        <div className="tech-mono text-[8px] text-white/30 uppercase">Threat Mitigated</div>
                                        <div className="text-2xl font-black text-theme tracking-tighter tech-mono">99.9%</div>
                                    </div>
                                    <div className="bg-white/5 p-4 space-y-2 border border-white/5">
                                        <div className="tech-mono text-[8px] text-white/30 uppercase">Node Uptime</div>
                                        <div className="text-2xl font-black text-theme tracking-tighter tech-mono">100.0%</div>
                                    </div>
                                </div>
                            </section>

                            {/* CTA */}
                            <div className="pt-6">
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="w-full py-4 bg-theme text-black font-heading text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-500"
                                >
                                    DEPLOY SECURE NODE <ChevronRight className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </div>

                        {/* FOOTER STATS */}
                        <div className="p-4 bg-black/60 border-t border-theme/10 tech-mono text-[7px] text-white/20 flex justify-between">
                            <span>0xDAF_4FK_ENCRYPTION_V2</span>
                            <span>SYSTEM_STATUS :: OPTIMAL</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectModal;
