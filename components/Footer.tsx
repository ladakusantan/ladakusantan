
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-md">
            <h3 className="text-3xl font-black tracking-tighter mb-4 uppercase font-heading">
              DAF_4FK <span className="italic font-light opacity-60 text-theme theme-transition">STEEL</span>
            </h3>
            <p className="text-white/40 font-light leading-relaxed font-primary">
              Available for specialized contracts, vulnerability assessments, and security architecture design worldwide.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-xs font-bold uppercase tracking-[0.3em] tech-mono">
            <div className="flex flex-col gap-4">
              <span className="text-theme opacity-100 theme-transition">Contact</span>
              <a href="#" className="opacity-40 hover:opacity-100 hover:text-theme transition-all theme-transition">Email</a>
              <a href="#" className="opacity-40 hover:opacity-100 hover:text-theme transition-all theme-transition">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-theme opacity-100 theme-transition">Legal</span>
              <a href="#" className="opacity-40 hover:opacity-100 hover:text-theme transition-all theme-transition">Privacy</a>
              <a href="#" className="opacity-40 hover:opacity-100 hover:text-theme transition-all theme-transition">Security</a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4 opacity-20 text-[10px] uppercase tracking-widest font-medium tech-mono">
          <p>© 2024 Daf_4fk Steel. All rights reserved.</p>
          <p>Encrypted Session: AES-256-GCM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
