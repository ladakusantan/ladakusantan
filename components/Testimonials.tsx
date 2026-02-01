
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const TestimonialCard: React.FC<{ testimonial: any }> = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[260px] md:w-[320px] p-4 md:p-5 mx-3 rounded-xl glass-panel border border-white/5 flex flex-col gap-3 group hover:border-white/20 transition-all duration-500 whitespace-normal">
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-8 h-8 rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10 object-cover"
          />
          <div className="absolute inset-0 bg-cyan-500/10 rounded-full mix-blend-overlay"></div>
        </div>
        <div className="min-w-0">
          <h4 className="font-bold tracking-tight text-[12px] text-white/90 group-hover:text-white transition-colors truncate">
            {testimonial.name}
          </h4>
          <p className="text-[8px] tech-mono uppercase tracking-widest text-white/30 truncate">
            {testimonial.role}
          </p>
        </div>
      </div>

      <div className="relative">
        <p className="text-white/50 text-[11px] font-light leading-relaxed italic group-hover:text-white/70 transition-colors whitespace-normal break-words font-primary">
          "{testimonial.content}"
        </p>
      </div>

      <div className="mt-auto flex justify-between items-center pt-1">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-cyan-500/30 group-hover:bg-cyan-500 transition-colors"></div>
          ))}
        </div>
        <span className="text-[7px] tech-mono text-white/5 tracking-widest uppercase">Node_Verified</span>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const duration = 40;
  const totalItems = 8;
  const doubledTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 md:py-32 bg-[#030303] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="tech-mono text-[10px] text-cyan-500/60 tracking-[0.4em] uppercase font-bold">
            Trusted Intelligence
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight uppercase font-heading">
            OPERATIONAL <span className="text-white/20 italic">FEEDBACK</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-12">
        <div className="marquee-wrapper h-[180px] md:h-[220px]">
          {doubledTestimonials.map((testimonial, idx) => (
            <div
              key={`row1-${idx}`}
              className="marquee-item"
              style={{
                animationDelay: `calc(${duration}s / ${totalItems} * (${totalItems} - ${idx + 1}) * -1)`
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="marquee-wrapper h-[180px] md:h-[220px]">
          {[...doubledTestimonials].reverse().map((testimonial, idx) => (
            <div
              key={`row2-${idx}`}
              className="marquee-item-rev"
              style={{
                animationDelay: `calc(${duration}s / ${totalItems} * (${totalItems} - ${idx + 1}) * -1)`
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="mt-20 container mx-auto px-6 flex justify-center">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          whileHover={{ opacity: 1, borderColor: 'rgba(0,255,204,0.4)', color: '#00ffcc' }}
          className="text-[9px] font-bold uppercase tracking-[0.4em] border border-white/5 px-8 py-4 rounded-sm transition-all duration-500 bg-white/2 tech-mono"
        >
          Access Decrypted Case Files
        </motion.button>
      </div>
    </section>
  );
};

export default Testimonials;
