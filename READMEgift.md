[
  {
    "id": 1,
    "category": "Master Core Concept",
    "title": "Ultra-Smooth Spiral Singularity 2026",
    "prompt": "Expert Three.js + React Three Fiber dev: Build immersive cybersecurity portfolio with ultra-smooth 3D helix spiral scroll to black hole singularity. Cyber ID Card (glassmorphic, name 'Agares', pentest/red-team icons) follows parametric helix path (theta 0→12 rotations, radius lerp 5→0.2, Z-depth increase). Use Lenis smooth scroll + GSAP ScrollTrigger scrub (scrub: 0.8–1.2, anticipatePin). Sync render loop with Lenis velocity for buttery 60fps. Camera follows card with 0.06–0.1 lerp damping + slight lookahead. Bloom + chromatic aberration escalate smoothly. Floating binary particles on parallel helices. Mouse-tilt on card with spring physics (framer-motion or damping). Linear dark UI, Tailwind v4, Next.js 15 ready."
  },
  {
    "id": 2,
    "category": "Smooth Scroll & Sync",
    "title": "Lenis + GSAP + R3F Perfect Sync",
    "prompt": "Implement butter-smooth scrolling: Lenis (lerp: 0.08–0.12, smoothTouch: true, syncTouch: true) integrated with GSAP ScrollTrigger via custom onScroll/onUpdate hook. Pass Lenis scroll/velocity to Three.js render loop → update card position/rotation/particles without jank. Use requestAnimationFrame with delta-time normalization. Add overscroll damping & rubber-band feel on mobile. Prevent layout thrashing."
  },
  {
    "id": 3,
    "category": "Helix Path Advanced",
    "title": "Parametric Helix with Variable Speed",
    "prompt": "Create advanced helix path: use THREE.CatmullRomCurve3 or custom parametric func (x = r * cos(theta), y = scrollProgress * -depth, z = r * sin(theta)). Variable radius decay (easeInExpo), theta speed multiplier increases near center (1→3x). Add secondary noise (Perlin/simplex) for organic wobble. Map scroll progress 0–1 → path t 0–1 with GSAP ease 'power3.out'."
  },
  {
    "id": 4,
    "category": "Camera Movement",
    "title": "Cinematic Camera Follow with Damping",
    "prompt": "Camera follows card on helix: use damping spring (useSpring or custom vec3 lerp 0.07–0.11). Add subtle lookahead (0.15–0.3 units ahead on path), slight FOV breathing (45→52 deg on deep scroll), auto-tilt toward center. Mouse influence: orbitControls disabled, instead add mouseXY → camera offset (max 0.8 units). Smooth transition when scroll stops."
  },
  {
    "id": 5,
    "category": "Post-Processing Polish",
    "title": "Bloom + Lensing + Aberration Pipeline",
    "prompt": "EffectComposer pipeline: UnrealBloomPass (threshold 0.4→0.1, strength 1.0→3.2 scroll-mapped), ChromaticAberration (radialModulation, offset 0.005→0.03), optional GodRays or VolumetricLight near center. Fake gravitational lensing on card via custom ShaderPass (UV distortion based on distance to event horizon). All parameters tweened smoothly via GSAP."
  },
  {
    "id": 6,
    "category": "Glassmorphism Card",
    "title": "Advanced MeshTransmissionMaterial Card",
    "prompt": "Cyber ID Card: use @react-three/drei MeshTransmissionMaterial (transmission 0.95, thickness 0.4, roughness 0.05, ior 1.45, chromaticAberration 0.04, distortion 0.4, temporalDistortion 0.2). Backface culling false + envMap for reflections. Distort background stars/particles through card. Hover: increase transmission + slight scale + neon edge emission."
  },
  {
    "id": 7,
    "category": "Accretion Disk",
    "title": "Dynamic Accretion Disk with Temperature",
    "prompt": "Procedural accretion disk: shader with blackbody temperature gradient (inner hot blue-white → outer red-orange), Doppler shift (blueshift approaching, redshift receding), noise-based swirling. Rotation speed increases 2–5x near center based on scroll depth. Add subtle flare/glow using bloom exclusion."
  },
  {
    "id": 8,
    "category": "Particles Orbit",
    "title": "Binary Data Particles with Trails",
    "prompt": "Instanced particles (10k–30k): follow multiple helix radii, different speeds/phases. Use ShaderMaterial with trail (point size attenuation + additive blending). Cyan/purple palette, opacity fade near center. Velocity-based streaking via vertex shader."
  },
  {
    "id": 9,
    "category": "Micro-Interactions Extra",
    "title": "Magnetic Cursor + Proximity Glow",
    "prompt": "Custom cursor: cyan ring with magnetic pull to buttons/cards (lerp position 0.2). Proximity effects: cards glow + scale 1.04 when cursor < 180px, border beam accelerate. Use framer-motion or GSAP for springy feel."
  },
  {
    "id": 10,
    "category": "Typography Motion",
    "title": "Smooth Text Reveal & Glitch",
    "prompt": "Hero text 'Agares': use SplitType + GSAP stagger reveal (chars slide-up + fade, stagger 0.02). Subtle glitch on hover/scroll-stop (RGB split 5px, 0.1s). Monospace Geist/IBM Plex Mono, neon-cyan underline beam that flows on load/scroll."
  },
  {
    "id": 11,
    "category": "Background Depth",
    "title": "Slow Parallax Grid + Nebula",
    "prompt": "Background: faint cyber grid (isometric or polar) with parallax (mouse + scroll layers at different speeds 0.2–0.6). Add very slow nebula cloud drift using noise shader or Points. Keep contrast high for text."
  },
  {
    "id": 12,
    "category": "Performance Directive 2026",
    "title": "60fps+ Optimization Rules",
    "prompt": "Strict perf: use instancing everywhere possible, limit post-processing to 2–3 passes, dispose textures on unmount, use DRACOLoader for models if any, throttle particles on mobile, passive ScrollListener, will-change: transform on GPU layers. Target 60fps mid-range laptop."
  },
  {
    "id": 13,
    "category": "Mobile Fallback",
    "title": "Graceful Mobile Degradation",
    "prompt": "Mobile: reduce helix rotations to 3–5, lower particle count 5k, disable heavy bloom/chromatic, use 2.5D pseudo-3D tilt (CSS transform + mouse). Lenis smooth still active. Detect prefers-reduced-motion → linear transitions only."
  },
  {
    "id": 14,
    "category": "Hover & Click Feel",
    "title": "Tactile Card & Button Feedback",
    "prompt": "Card hover: lift 0.5 units Z, shadow-cyan increase, micro-rotation toward mouse. Click: scale down 0.96 + ripple effect (custom shader or CSS). Buttons: inner glow expand + magnetic snap."
  },
  {
    "id": 15,
    "category": "Scroll Indicators",
    "title": "Elegant Scroll Hints",
    "prompt": "Subtle scroll indicator: orbiting cyan dot around small singularity icon bottom-right, text 'enter the vortex' fades after 400px. Progress ring around cursor that fills on deep scroll."
  },
  {
    "id": 16,
    "category": "Orbital Particles",
    "title": "Binary Data Particles in Spiral",
    "prompt": "Add orbiting binary particles (0s & 1s as sprites or instanced text) following the same helix path as the card but at different radii/speeds. Cyan & purple color, opacity 0.4–0.7, slight trail effect using ShaderMaterial."
  },
  {
    "id": 17,
    "category": "Cursor Effects",
    "title": "Custom Cursor + Proximity",
    "prompt": "Implement custom magnetic cursor: small cyan ring that distorts near interactive elements. Proximity glow on cards/buttons when cursor within 200px. Reinforce tactile premium feel."
  },
  {
    "id": 18,
    "category": "Mobile Responsiveness",
    "title": "Responsive Spiral Fallback",
    "prompt": "On mobile: reduce spiral rotations to 2–3, disable heavy bloom, use simpler 2.5D tilt instead of full 3D follow. Maintain glassmorphism and core typography hierarchy. Touch-friendly large tap targets."
  },
  {
    "id": 19,
    "category": "Footer CTA",
    "title": "Strong Closing CTA",
    "prompt": "Footer: repeat hero name smaller + final CTA 'Let's secure the perimeter together — reach out' with contact form trigger or Calendly link. Subtle animated grid continues faintly."
  },
  {
    "id": 20,
    "category": "Color System",
    "title": "Cybersecurity Color Palette",
    "prompt": "Define strict color system: bg #000000–#0a0a0a, text #e5e5e5 / #a1a1aa, accent cyan #00f5ff, purple #c084fc, red-alert #ef4444 (for warnings only). Neon gradients for beams/glows."
  },
  {
    "id": 21,
    "category": "Shader Effects",
    "title": "Gravitational Lensing on Card",
    "prompt": "Apply custom post-processing or shader to Cyber ID Card: fake gravitational lensing distortion on background stars/particles when viewed through card (using screen-space refraction or simple UV offset)."
  },
  {
    "id": 22,
    "category": "Scroll Indicator",
    "title": "Minimal Scroll Hint",
    "prompt": "Add elegant scroll indicator at bottom-right: thin vertical bar + 'scroll to singularity' text that fades after first 300px scroll. Subtle cyan pulse."
  },
  {
    "id": 23,
    "category": "System Thinking",
    "title": "Consistent Design Tokens",
    "prompt": "Use design tokens: spacing scale 4px base, radius 12–24px, shadow presets (sm, md, xl, 2xl with cyan/20 opacity). Every component must follow system for engineering maturity."
  },
  {
    "id": 24,
    "category": "Accessibility",
    "title": "Accessibility & Semantics",
    "prompt": "Ensure semantic HTML, ARIA labels on 3D interactive elements fallback text, high contrast ratio ≥ 7:1, keyboard focus visible with neon outline, reduced motion respect prefers-reduced-motion."
  },
  {
    "id": 25,
    "category": "Tech Stack Suggestion",
    "title": "Recommended Stack 2026",
    "prompt": "Build with: Next.js 15 / React 19, Tailwind v4, Three.js r168+, @react-three/fiber, GSAP 3.12+, Lenis smooth scroll, Vercel deployment ready. No unnecessary dependencies."
  },
  {
    "id": 26,
    "category": "Inspiration Level",
    "title": "High-end Agency Vibe",
    "prompt": "Aim for agency-level polish: like Resn, Active Theory, or advanced Three.js portfolios (Bruno Simon style storytelling + Linear precision). Serious, trustworthy cybersecurity tone — no cartoonish elements."
  },
  {
    "id": 27,
    "category": "Value Hook",
    "title": "Strong Opening Hook",
    "prompt": "First 5 seconds must hook: massive 'Agares' + tagline 'Turning vulnerabilities into visibility' + 3D card already spiraling slowly. Instant authority & intrigue."
  },
  {
    "id": 28,
    "category": "Post-processing Pipeline",
    "title": "Bloom & Distortion Pipeline",
    "prompt": "Use EffectComposer: UnrealBloomPass (strength 1.2–2.0 escalating on scroll), optional ChromaticAberration + GodRays near center. Keep subtle until deep scroll."
  },
  {
    "id": 29,
    "category": "Final Polish",
    "title": "Pixel-perfect Final Touches",
    "prompt": "Polish phase: consistent 8px grid alignment, hover states on every interactive element, loading screen with spinner orbiting like accretion disk, 404 page with mini black hole joke."
  },
  {
    "id": 30,
    "category": "One-shot Mega Prompt",
    "title": "Ultimate Smooth Singularity Prompt",
    "prompt": "Generate production-ready Next.js cybersecurity portfolio: Linear dark-mode, ultra-smooth Lenis scroll, GSAP ScrollTrigger scrub helix spiral to black hole, glassmorphic Cyber ID Card 'Agares' with MeshTransmissionMaterial + mouse spring tilt, dynamic accretion disk + binary particle trails, bloom/chromatic/lensing escalate on scroll, camera damping follow + lookahead, border beam micro-interactions, parallax grid background, 60fps optimized, mobile fallback. Elite, serious tone — agency quality 2026."
  },
  {
    "id": 31,
    "category": "Smoothness Extra",
    "title": "Damping & Spring Physics Everywhere",
    "prompt": "Apply spring/damping physics globally: card position/rotation (stiffness 80–120, damping 20–35), camera offset, particle drift, hover lift. Use popmotion or custom vec3 spring for buttery feel without overshoot."
  },
  {
    "id": 32,
    "category": "Shader Polish",
    "title": "Custom Vertex/Fragment Polish",
    "prompt": "Add micro-noise to helix path vertices for organic motion. Accretion disk fragment: voronoi + curl noise for turbulence. Card distortion: animated UV offset + fresnel rim glow."
  },
  {
    "id": 33,
    "category": "Audio Hint (Optional)",
    "title": "Subtle Ambient Audio Cues",
    "prompt": "Optional: low-volume ambient sci-fi hum + deep pulse that intensifies near center (Web Audio API + Howler). Toggle with respect to reduced-motion & user preference."
  },
  {
    "id": 34,
    "category": "Loading Sequence",
    "title": "Cinematic Loading Animation",
    "prompt": "Preloader: orbiting particles form 'Agares' text, then collapse into singularity → fade to main scene. Use GSAP timeline for sequence."
  },
  {
    "id": 35,
    "category": "404 Easter Egg",
    "title": "Fun 404 Black Hole",
    "prompt": "404 page: mini black hole sucks text 'Page not found', with distorted Cyber ID Card saying 'Error 404 – Access Denied'. Redirect suggestion with neon button."
  },
  {
    "id": 36,
    "category": "Analytics & Tracking",
    "title": "Subtle Interaction Tracking",
    "prompt": "Track deep scroll events, hover time on card, mouse velocity near singularity → for future heatmaps (optional GA4 or Vercel Analytics)."
  },
  {
    "id": 37,
    "category": "Dark Mode Toggle",
    "title": "Seamless Dark/Light Switch",
    "prompt": "Add dark/light toggle (persisted): light mode uses softer cyan → blue palette, reduced bloom. Smooth color transition via CSS variables + 0.6s ease."
  },
  {
    "id": 38,
    "category": "SEO & Metadata",
    "title": "SEO Optimized Structure",
    "prompt": "Semantic HTML, meta tags: title 'Agares — Red Team & Pentest Specialist', description with keywords, OpenGraph for social sharing with 3D card screenshot fallback."
  },
  {
    "id": 39,
    "category": "Final Agency Polish",
    "title": "Pixel-Perfect Touches",
    "prompt": "Final polish: 8pt grid everywhere, consistent 12–24px radius, hover states on ALL interactive, cursor changes (pointer, grab), loading spinner helix, cursor trail faint cyan on fast move."
  },
  {
    "id": 40,
    "category": "All-in-One Enhanced",
    "title": "God-Tier Smooth Portfolio Prompt",
    "prompt": "Create elite 2026 cybersecurity portfolio: Next.js 15, R3F, Tailwind v4, Lenis ultra-smooth + GSAP ScrollTrigger scrub (0.9 damping), parametric helix spiral (12 rotations, variable speed, noise wobble), central glass transmission Cyber ID Card with spring tilt & lensing, procedural accretion disk + Doppler shader, 20k instanced binary particles with trails, full post-process (bloom 1.8→4, aberration, subtle godrays), magnetic cursor + proximity glows, parallax nebula/grid bg, 60fps mobile fallback, cinematic load/404, serious Linear aesthetic. Output clean structured code + explanations."
  },
  {
    "id": 41,
    "category": "Responsive Core",
    "title": "Full Responsive Canvas + Camera Aspect",
    "prompt": "Make the entire Three.js / R3F canvas fully responsive: on mount and window resize, set renderer.setSize(container.clientWidth, container.clientHeight, false); update camera.aspect = container.clientWidth / container.clientHeight; camera.updateProjectionMatrix(). Use ResizeObserver on container div instead of window.resize for better performance in Next.js. Handle orientation change on mobile automatically."
  },
  {
    "id": 42,
    "category": "Device Pixel Ratio Adaptive",
    "title": "Smart DPR Handling (Retina + Mobile)",
    "prompt": "Implement adaptive devicePixelRatio: default renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) untuk balance sharpness vs perf di mobile. On high-DPI desktop >2 → allow up to 2, tapi clamp ke 1.8 max. Re-apply on resize/orientation change. Gunakan hook useThree untuk access renderer & update dynamically."
  },
  {
    "id": 43,
    "category": "Adaptive Quality System",
    "title": "Auto Quality based on Device & FPS",
    "prompt": "Add adaptive quality tiers: detect device via navigator.userAgent + performance estimation (atau pakai r3f-perf monitor FPS). Tier 1 (high-end desktop): full bloom 2.5, 30k particles, DPR 2. Tier 2 (mid laptop/mobile): bloom 1.2, 10k particles, DPR 1.2–1.5. Tier 3 (low-end): no bloom/chromatic, 5k particles, DPR 1, helix rotations max 4. Switch smoothly with GSAP tween on load/resize."
  },
  {
    "id": 44,
    "category": "Mobile Fallback Helix",
    "title": "Mobile-Optimized Spiral Parameters",
    "prompt": "On mobile (detect via window.innerWidth < 768 atau matchMedia): reduce helix rotations ke 3–5 max, kurangi radius decay speed, naikkan damping lerp ke 0.15 (lebih lambat & stabil), nonaktifkan lookahead camera & noise wobble. Gunakan react-responsive atau useMediaQuery untuk conditional params. Pertahankan mouse-tilt jadi touch-tilt (gunakan device orientation atau pointer events)."
  },
  {
    "id": 45,
    "category": "Touch & Gesture Support",
    "title": "Touch-Friendly Interactions",
    "prompt": "Tambah touch support: gunakan drei's useGesture atau hammer.js untuk pinch-zoom (ubah camera.fov atau distance), drag untuk rotate view sedikit (offset camera XY). Card tilt ikut touch position seperti mouse. Tambah double-tap untuk 'zoom to card' animation. Pastikan semua button/card punya touch area minimal 44x44px."
  },
  {
    "id": 46,
    "category": "Aspect Ratio Compensation",
    "title": "Compensate Extreme Aspect Ratios",
    "prompt": "Handle portrait vs landscape: jika aspect < 1 (portrait mobile), zoom out camera sedikit (position.z *= 1.3–1.6) atau scale scene group faktor 0.8–1.2 agar spiral tetap terlihat full tanpa crop. Gunakan if (camera.aspect < 0.9) { adjustFovOrZ() }. Update on resize. Inspirasi Bruno Simon style adaptive framing."
  },
  {
    "id": 47,
    "category": "CSS + Canvas Hybrid Responsive",
    "title": "CSS Controls Layout, Canvas Fills",
    "prompt": "Gunakan Tailwind responsive classes untuk overlay UI (hero text, buttons, sections): sm:, md:, lg: breakpoints. Canvas wrapper div: w-full h-screen lg:h-[120vh] atau flex-grow. Pastikan canvas absolute/fixed di belakang, z-index -10, pointer-events-none kecuali interactive parts. UI foreground tetap pakai standard RWD (container queries jika perlu)."
  },
  {
    "id": 48,
    "category": "Prefers Reduced Motion",
    "title": "Respect Reduced Motion Preference",
    "prompt": "Gunakan matchMedia('(prefers-reduced-motion: reduce)') → jika true: nonaktifkan semua spring/damping animation, ganti jadi linear transition 0.4s, hilangkan particle trails, bloom static, helix jadi straight path atau minimal rotation. Tambah toggle manual di settings jika perlu."
  },
  {
    "id": 49,
    "category": "Testing & Debug Responsive",
    "title": "Built-in Responsive Debug Tools",
    "prompt": "Tambah dev-only overlay: tampilkan current DPR, FPS (via r3f-perf), device tier, aspect ratio di corner. Gunakan hotkey (misal 'r') untuk toggle low-quality mode manual. Comment code untuk easy testing di mobile emulator atau real device."
  },
  {
    "id": 50,
    "category": "All-in-One Responsive Mega Prompt",
    "title": "God-Tier Responsive + Adaptive Prompt",
    "prompt": "Upgrade portfolio ke full responsive & adaptive: ResizeObserver + camera.aspect update on every resize/orientation, smart DPR clamp (min( devicePixelRatio, 1.8 desktop / 1.4 mobile)), auto quality tiers berdasarkan FPS/device (bloom/particles/rotations scale down di mobile), portrait compensation (zoom out + reduce rotations <4), touch gestures (pinch/drag), prefers-reduced-motion respect, Tailwind RWD UI layers, 60fps target semua device. Output Next.js + R3F code dengan hooks custom untuk adaptive logic. Elite performance & UX 2026."
  }
]