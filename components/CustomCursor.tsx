
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });
    const scale = useSpring(1, { stiffness: 400, damping: 20 });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);

            const target = e.target as HTMLElement;
            const isSelectable = window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a');

            if (isSelectable) {
                setIsHovering(true);
                scale.set(1.5);
            } else {
                setIsHovering(false);
                scale.set(1);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkMobile);
        };
    }, [mouseX, mouseY, scale]);

    if (isMobile) return null;

    return (
        <>
            <style>{`
        body, a, button {
          cursor: none !important;
        }
      `}</style>
            <motion.div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-theme/50 pointer-events-none z-[9999] mix-blend-difference theme-transition"
                style={{
                    x: mouseX,
                    y: mouseY,
                    scale: scale,
                    boxShadow: isHovering ? '0 0 20px var(--theme-glow)' : 'none',
                    backgroundColor: isHovering ? 'rgba(var(--theme-color-rgb), 0.1)' : 'transparent'
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-1 h-1 bg-theme rounded-full theme-transition ${isHovering ? 'scale-0' : 'scale-100'}`} />
                </div>
            </motion.div>
        </>
    );
};

export default CustomCursor;
