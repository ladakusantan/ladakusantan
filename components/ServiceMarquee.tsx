
import React from 'react';
import { SERVICES } from '../constants';

const ServiceMarquee: React.FC = () => {
  return (
    <div className="w-full py-12 md:py-20 bg-[#030303] border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {SERVICES.map((service, index) => (
              <div key={index} className="flex items-center mx-10 md:mx-16">
                <span className="w-1.5 h-1.5 rounded-full bg-theme theme-transition shadow-theme mr-4"></span>
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white/80 uppercase font-heading">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceMarquee;
