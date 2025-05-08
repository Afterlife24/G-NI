



// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const Preloader = ({ onComplete }: { onComplete: () => void }) => {
//   const preloaderRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const textContainerRef = useRef<HTMLDivElement>(null);
  
//   // Color definitions
//   const colors = {
//     navy: '#0a192f',
//     gold: '#d4af37',
//     goldGlow: 'rgba(212, 175, 55, 0.7)',
//     navyParticle: 'rgba(10, 25, 47, 0.6)',
//     goldParticle: 'rgba(212, 175, 55, 0.8)'
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Resize handler
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     // Create particles
//     const particles = Array.from({ length: 100 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 1.5,
//       vy: (Math.random() - 0.5) * 1.5,
//       radius: Math.random() * 2 + 1,
//       color: Math.random() > 0.7 ? colors.goldParticle : colors.navyParticle
//     }));

//     // Animation loop
//     let animationId: number;
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Draw particles
//       particles.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.fill();
//       });

//       // Draw connections
//       particles.forEach((a, i) => {
//         particles.slice(i + 1).forEach(b => {
//           const dx = a.x - b.x;
//           const dy = a.y - b.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < 120) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(212, 175, 55, ${0.7 - distance / 120})`;
//             ctx.lineWidth = 0.8;
//             ctx.moveTo(a.x, a.y);
//             ctx.lineTo(b.x, b.y);
//             ctx.stroke();
//           }
//         });
//       });

//       // Update particles
//       particles.forEach(p => {
//         p.x += p.vx;
//         p.y += p.vy;
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
//       });

//       animationId = requestAnimationFrame(animate);
//     };
//     animate();

//     // GSAP Animation
//     const tl = gsap.timeline();
    
//     // Initial state - entire text set deep in 3D space
//     gsap.set(textContainerRef.current, {
//       opacity: 0,
//       y: 50,
//       rotationX: 15,
//       rotationY: 10,
//       z: -800,
//       transformPerspective: 1000,
//       transformOrigin: "center center",
//       scale: 0.7
//     });

//     // Animate entire text set coming forward with increasing size
//     tl.to(textContainerRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       rotationY: 0,
//       z: 300, // Come forward dramatically
//       scale: 1.5, // Increase size
//       duration: 1.8,
//       ease: "power3.out"
//     })
//     // Then settle back to normal position
//     .to(textContainerRef.current, {
//       z: 0,
//       scale: 1,
//       duration: 1.2,
//       ease: "elastic.out(1, 0.5)"
//     })
//     // Add a subtle pulse effect
//     .to(textContainerRef.current, {
//       scale: 1.05,
//       duration: 0.5,
//       repeat: 1,
//       yoyo: true,
//       ease: "sine.inOut"
//     })
//     // Final exit animation
//     .to(contentRef.current, {
//       scale: 0.8,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.inOut",
//       delay: 0.5,
//       onComplete: () => {
//         if (preloaderRef.current) {
//           preloaderRef.current.style.pointerEvents = 'none';
//           gsap.set(preloaderRef.current, { opacity: 0 });
//         }
//         onComplete();
//       }
//     });

//     // Cleanup
//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', resizeCanvas);
//       tl.kill();
//     };
//   }, [onComplete]);

//   return (
//     <div 
//       ref={preloaderRef}
//       className="fixed inset-0 z-[9999] flex items-center justify-center"
//       style={{ backgroundColor: colors.navy }}
//     >
//       <canvas 
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//       />
      
//       <div ref={contentRef} className="relative z-10 flex items-center justify-center">
//         <div 
//           ref={textContainerRef}
//           className="text-7xl md:text-8xl lg:text-9xl font-bold flex items-center"
//           style={{
//             willChange: 'transform, opacity',
//             transformStyle: 'preserve-3d',
//             textShadow: `0 0 20px ${colors.goldGlow}`
//           }}
//         >
//           <span style={{ color: colors.gold }}>G</span>
//           <span style={{ color: colors.gold }} className="mx-2 md:mx-4">-</span>
//           <span style={{ color: colors.gold }}>N</span>
//           <span style={{ color: colors.gold }}>I</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Preloader;




// ashrith

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const Preloader = ({ onComplete }: { onComplete: () => void }) => {
//   const preloaderRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
  
//   // Letter refs
//   const letterGRef = useRef<HTMLSpanElement>(null);
//   const hyphenRef = useRef<HTMLSpanElement>(null);
//   const letterNRef = useRef<HTMLSpanElement>(null);
//   const letterIRef = useRef<HTMLSpanElement>(null);

//   // Color definitions
//   const colors = {
//     navy: '#0a192f',      // Deep navy blue
//     gold: '#d4af37',      // Warm gold
//     goldGlow: 'rgba(212, 175, 55, 0.7)',
//     navyParticle: 'rgba(10, 25, 47, 0.6)',
//     goldParticle: 'rgba(212, 175, 55, 0.8)'
//   };

//   useEffect(() => {
//     // Canvas setup
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Resize handler
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     // Create particles
//     const particles = Array.from({ length: 100 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 1.5,
//       vy: (Math.random() - 0.5) * 1.5,
//       radius: Math.random() * 2 + 1,
//       color: Math.random() > 0.7 ? colors.goldParticle : colors.navyParticle
//     }));

//     // Animation loop
//     let animationId: number;
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Draw particles
//       particles.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.fill();
//       });

//       // Draw connections
//       particles.forEach((a, i) => {
//         particles.slice(i + 1).forEach(b => {
//           const dx = a.x - b.x;
//           const dy = a.y - b.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < 120) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(212, 175, 55, ${0.7 - distance / 120})`;
//             ctx.lineWidth = 0.8;
//             ctx.moveTo(a.x, a.y);
//             ctx.lineTo(b.x, b.y);
//             ctx.stroke();
//           }
//         });
//       });

//       // Update particles
//       particles.forEach(p => {
//         p.x += p.vx;
//         p.y += p.vy;
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
//       });

//       animationId = requestAnimationFrame(animate);
//     };
//     animate();

//     // GSAP Animation
//     const tl = gsap.timeline();
    
//     // Initial state
//     gsap.set([letterGRef.current, hyphenRef.current, letterNRef.current, letterIRef.current], {
//       opacity: 0,
//       y: 80,
//       rotationX: 90
//     });

//     // Animate letters
//     tl.to(letterGRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1.2,
//       ease: "elastic.out(1, 0.5)"
//     })
//     .to(hyphenRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(letterNRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(letterIRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(preloaderRef.current, {
//       opacity: 0,
//       duration: 0.05,
//       delay: 0,
//       onComplete: () => {
//         onComplete();
//         if (preloaderRef.current) {
//           preloaderRef.current.style.display = 'none';
//         }
//       }
//     });

//     // Cleanup
//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', resizeCanvas);
//       tl.kill();
//     };
//   }, [onComplete]);

//   return (
//     <div 
//       ref={preloaderRef}
//       className="fixed inset-0 z-[9999] flex items-center justify-center"
//       style={{ backgroundColor: colors.navy }}
//     >
//       <canvas 
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//       />
      
//       <div className="relative z-10 flex items-center justify-center text-7xl md:text-8xl lg:text-9xl font-bold">
//         <span 
//           ref={letterGRef}
//           className="inline-block"
//           style={{ 
//             color: colors.gold,
//             textShadow: `0 0 15px ${colors.goldGlow}`,
//             willChange: 'transform, opacity'
//           }}
//         >
//           G
//         </span>
//         <span 
//           ref={hyphenRef}
//           className="inline-block mx-2 md:mx-4"
//           style={{ 
//             color: colors.gold,
//             textShadow: `0 0 10px ${colors.goldGlow}`,
//             willChange: 'transform, opacity'
//           }}
//         >
//           -
//         </span>
//         <span 
//           ref={letterNRef}
//           className="inline-block"
//           style={{ 
//             color: colors.gold,
//             textShadow: `0 0 15px ${colors.goldGlow}`,
//             willChange: 'transform, opacity'
//           }}
//         >
//           N
//         </span>
//         <span 
//           ref={letterIRef}
//           className="inline-block"
//           style={{ 
//             color: colors.gold,
//             textShadow: `0 0 15px ${colors.goldGlow}`,
//             willChange: 'transform, opacity'
//           }}
//         >
//           I
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Preloader;




// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const Preloader = ({ onComplete }: { onComplete: () => void }) => {
//   const preloaderRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
  
//   // Letter refs
//   const letterGRef = useRef<HTMLSpanElement>(null);
//   const hyphenRef = useRef<HTMLSpanElement>(null);
//   const letterNRef = useRef<HTMLSpanElement>(null);
//   const letterIRef = useRef<HTMLSpanElement>(null);

//   // Color definitions
//   const colors = {
//     navy: '#0a192f',      // Deep navy blue
//     gold: '#d4af37',      // Warm gold
//     goldGlow: 'rgba(212, 175, 55, 0.7)',
//     goldParticle: 'rgba(212, 175, 55, 0.8)', // Same as original
//     connectionColor: 'rgba(212, 175, 55, 0.3)' // Same as original
//   };

//   useEffect(() => {
//     // Canvas setup
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Resize handler (same as original)
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     // Particle system (identical to original)
//     const particles: Array<{
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       radius: number;
//       color: string;
//     }> = [];
    
//     const numParticles = 100;
//     const maxDistance = 120;
    
//     const mouse = {
//       x: null as number | null,
//       y: null as number | null,
//     };
    
//     // Create particles with consistent color (same as original)
//     for (let i = 0; i < numParticles; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 1.5,
//         vy: (Math.random() - 0.5) * 1.5,
//         radius: Math.random() * 2 + 1,
//         color: colors.goldParticle // Using the same gold color
//       });
//     }
    
//     function drawParticles() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.fill();
//       });
      
//       connectParticles();
//     }
    
//     function connectParticles() {
//       for (let a = 0; a < particles.length; a++) {
//         for (let b = a + 1; b < particles.length; b++) {
//           const dx = particles[a].x - particles[b].x;
//           const dy = particles[a].y - particles[b].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < maxDistance) {
//             ctx.beginPath();
//             ctx.strokeStyle = colors.connectionColor;
//             ctx.lineWidth = 0.8;
//             ctx.moveTo(particles[a].x, particles[a].y);
//             ctx.lineTo(particles[b].x, particles[b].y);
//             ctx.stroke();
//           }
//         }
//       }
//     }
    
//     function updateParticles() {
//       particles.forEach(p => {
//         p.x += p.vx;
//         p.y += p.vy;
        
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
//         if (mouse.x && mouse.y) {
//           const dx = p.x - mouse.x;
//           const dy = p.y - mouse.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 100) {
//             p.vx += dx / 1000;
//             p.vy += dy / 1000;
//           }
//         }
//       });
//     }
    
//     function animate() {
//       drawParticles();
//       updateParticles();
//       requestAnimationFrame(animate);
//     }
    
//     // Mouse interaction (same as original)
//     canvas.addEventListener('mousemove', (e) => {
//       const rect = canvas.getBoundingClientRect();
//       mouse.x = e.clientX - rect.left;
//       mouse.y = e.clientY - rect.top;
//     });
    
//     canvas.addEventListener('mouseleave', () => {
//       mouse.x = null;
//       mouse.y = null;
//     });
    
//     // Start particle animation
//     const particleAnimationId = requestAnimationFrame(animate);

//     // GSAP Animation (your original animation code)
//     const tl = gsap.timeline();
    
//     // Initial state
//     gsap.set([letterGRef.current, hyphenRef.current, letterNRef.current, letterIRef.current], {
//       opacity: 0,
//       y: 80,
//       rotationX: 90
//     });

//     // Animate letters
//     tl.to(letterGRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1.2,
//       ease: "elastic.out(1, 0.5)"
//     })
//     .to(hyphenRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(letterNRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(letterIRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(preloaderRef.current, {
//       opacity: 0,
//       duration: 0.05,
//       delay: 0,
//       onComplete: () => {
//         onComplete();
//         if (preloaderRef.current) {
//           preloaderRef.current.style.display = 'none';
//         }
//       }
//     });

//     // Cleanup
//     return () => {
//       cancelAnimationFrame(particleAnimationId);
//       window.removeEventListener('resize', resizeCanvas);
//       tl.kill();
      
//       // Remove mouse event listeners
//       canvas.removeEventListener('mousemove', () => {});
//       canvas.removeEventListener('mouseleave', () => {});
//     };
//   }, [onComplete]);

//   return (
//     <div 
//       ref={preloaderRef}
//       className="fixed inset-0 z-[9999] flex items-center justify-center"
//       style={{ backgroundColor: colors.navy }}
//     >
//       <canvas 
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//       />
      
//       <div className="relative z-10 flex items-center justify-center text-7xl md:text-8xl lg:text-9xl font-bold">
//         <span 
//           ref={letterGRef}
//           className="inline-block"
//           style={{ 
//             color: colors.gold,
//             textShadow: `0 0 15px ${colors.goldGlow}`,
//             willChange: 'transform, opacity'
//           }}
//         >
//           G
//         </span>
//         <span 
//           ref={hyphenRef}
//           className="inline-block mx-2 md:mx-4"
//           style={{ 
//             color: colors.gold,
//             textShadow: `0 0 10px ${colors.goldGlow}`,
//             willChange: 'transform, opacity'
//           }}
//         >
//           -
//         </span>
//         <span 
//           ref={letterNRef}
//           className="inline-block"
//           style={{ 
//             color: colors.gold,
//             textShadow: `0 0 15px ${colors.goldGlow}`,
//             willChange: 'transform, opacity'
//           }}
//         >
//           N
//         </span>
//         <span 
//           ref={letterIRef}
//           className="inline-block"
//           style={{ 
//             color: colors.gold,
//             textShadow: `0 0 15px ${colors.goldGlow}`,
//             willChange: 'transform, opacity'
//           }}
//         >
//           I
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Preloader;












// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import yourImage from '../preloader/gni (1).png'; // Adjust the import path to your image

// const Preloader = ({ onComplete }: { onComplete: () => void }) => {
//   const preloaderRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const imageRef = useRef<HTMLImageElement>(null); // Ref for the image
  
//   // Letter refs
//   const letterGRef = useRef<HTMLSpanElement>(null);
//   const hyphenRef = useRef<HTMLSpanElement>(null);
//   const letterNRef = useRef<HTMLSpanElement>(null);
//   const letterIRef = useRef<HTMLSpanElement>(null);

//   // Color definitions
//   const colors = {
//     navy: '#0a192f',
//     gold: '#d4af37',
//     goldGlow: 'rgba(212, 175, 55, 0.7)',
//     goldParticle: 'rgba(212, 175, 55, 0.8)',
//     connectionColor: 'rgba(212, 175, 55, 0.3)'
//   };

//   useEffect(() => {
//     // Canvas setup and particle system (same as before)
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     const particles: Array<{
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       radius: number;
//       color: string;
//     }> = [];
    
//     const numParticles = 100;
//     const maxDistance = 120;
    
//     const mouse = {
//       x: null as number | null,
//       y: null as number | null,
//     };
    
//     for (let i = 0; i < numParticles; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 1.5,
//         vy: (Math.random() - 0.5) * 1.5,
//         radius: Math.random() * 2 + 1,
//         color: colors.goldParticle
//       });
//     }
    
//     function drawParticles() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.fill();
//       });
      
//       connectParticles();
//     }
    
//     function connectParticles() {
//       for (let a = 0; a < particles.length; a++) {
//         for (let b = a + 1; b < particles.length; b++) {
//           const dx = particles[a].x - particles[b].x;
//           const dy = particles[a].y - particles[b].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < maxDistance) {
//             ctx.beginPath();
//             ctx.strokeStyle = colors.connectionColor;
//             ctx.lineWidth = 0.8;
//             ctx.moveTo(particles[a].x, particles[a].y);
//             ctx.lineTo(particles[b].x, particles[b].y);
//             ctx.stroke();
//           }
//         }
//       }
//     }
    
//     function updateParticles() {
//       particles.forEach(p => {
//         p.x += p.vx;
//         p.y += p.vy;
        
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
//         if (mouse.x && mouse.y) {
//           const dx = p.x - mouse.x;
//           const dy = p.y - mouse.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 100) {
//             p.vx += dx / 1000;
//             p.vy += dy / 1000;
//           }
//         }
//       });
//     }
    
//     function animate() {
//       drawParticles();
//       updateParticles();
//       requestAnimationFrame(animate);
//     }
    
//     canvas.addEventListener('mousemove', (e) => {
//       const rect = canvas.getBoundingClientRect();
//       mouse.x = e.clientX - rect.left;
//       mouse.y = e.clientY - rect.top;
//     });
    
//     canvas.addEventListener('mouseleave', () => {
//       mouse.x = null;
//       mouse.y = null;
//     });
    
//     const particleAnimationId = requestAnimationFrame(animate);

//     // GSAP Animation - now includes the image
//     const tl = gsap.timeline();
    
//     // Initial state (include the image)
//     gsap.set([imageRef.current, letterGRef.current, hyphenRef.current, letterNRef.current, letterIRef.current], {
//       opacity: 0,
//       y: 80,
//       rotationX: 90
//     });

//     // Animate image first, then letters
//     tl.to(imageRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1.2,
//       ease: "elastic.out(1, 0.5)"
//     })
//     .to(letterGRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1.2,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(hyphenRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(letterNRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(letterIRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(preloaderRef.current, {
//       opacity: 0,
//       duration: 0.05,
//       delay: 0,
//       onComplete: () => {
//         onComplete();
//         if (preloaderRef.current) {
//           preloaderRef.current.style.display = 'none';
//         }
//       }
//     });

//     return () => {
//       cancelAnimationFrame(particleAnimationId);
//       window.removeEventListener('resize', resizeCanvas);
//       tl.kill();
//       canvas.removeEventListener('mousemove', () => {});
//       canvas.removeEventListener('mouseleave', () => {});
//     };
//   }, [onComplete]);

//   return (
//     <div 
//       ref={preloaderRef}
//       className="fixed inset-0 z-[9999] flex items-center justify-center"
//       style={{ backgroundColor: colors.navy }}
//     >
//       <canvas 
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//       />
      
//       <div className="relative z-10 flex items-center justify-center">
//         {/* Image placed left of the G */}
//         <img
//           ref={imageRef}
//           src={yourImage}
//           alt="Preloader Logo"
//           className="mr-4 h-25 md:h-80 lg:h-80 object-contain"
//           style={{
//             willChange: 'transform, opacity',
            
//           }}
//         />
        
//         <div className="flex items-center justify-center text-7xl md:text-8xl lg:text-9xl font-bold">
//           <span 
//             ref={letterGRef}
//             className="inline-block"
//             style={{ 
//               color: colors.gold,
//               textShadow: `0 0 15px ${colors.goldGlow}`,
//               willChange: 'transform, opacity'
//             }}
//           >
//             G
//           </span>
//           <span 
//             ref={hyphenRef}
//             className="inline-block mx-2 md:mx-4"
//             style={{ 
//               color: colors.gold,
//               textShadow: `0 0 10px ${colors.goldGlow}`,
//               willChange: 'transform, opacity'
//             }}
//           >
//             -
//           </span>
//           <span 
//             ref={letterNRef}
//             className="inline-block"
//             style={{ 
//               color: colors.gold,
//               textShadow: `0 0 15px ${colors.goldGlow}`,
//               willChange: 'transform, opacity'
//             }}
//           >
//             N
//           </span>
//           <span 
//             ref={letterIRef}
//             className="inline-block"
//             style={{ 
//               color: colors.gold,
//               textShadow: `0 0 15px ${colors.goldGlow}`,
//               willChange: 'transform, opacity'
//             }}
//           >
//             I
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Preloader;
































































































// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
//  // Adjust the import path to your image

// const Preloader = ({ onComplete }: { onComplete: () => void }) => {
//   const preloaderRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
  
//   // Letter refs
//   const letterGRef = useRef<HTMLSpanElement>(null);
//   const hyphenRef = useRef<HTMLSpanElement>(null);
//   const letterNRef = useRef<HTMLSpanElement>(null);
//   const letterIRef = useRef<HTMLSpanElement>(null);

//   // Color definitions
//   const colors = {
//     navy: '#1F5AAA',
//     gold: '#d4af37',
//     goldGlow: 'rgba(212, 175, 55, 0.7)',
//     goldParticle: 'rgba(212, 175, 55, 0.8)',
//     connectionColor: 'rgba(212, 175, 55, 0.3)'
//   };

//   useEffect(() => {
//     // Check if mobile device
//     const isMobile = window.innerWidth <= 768;
    
//     // Canvas setup and particle system
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     const particles: Array<{
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       radius: number;
//       color: string;
//     }> = [];
    
//     // Adjust particle settings based on device
//     const numParticles = isMobile ? 50 : 100;
//     const maxDistance = isMobile ? 80 : 120;
//     const particleOpacity = isMobile ? 0.5 : 0.8;
//     const connectionOpacity = isMobile ? 0.2 : 0.3;
    
//     const mouse = {
//       x: null as number | null,
//       y: null as number | null,
//     };
    
//     for (let i = 0; i < numParticles; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * (isMobile ? 1 : 1.5),
//         vy: (Math.random() - 0.5) * (isMobile ? 1 : 1.5),
//         radius: Math.random() * (isMobile ? 1.5 : 2) + 1,
//         color: `rgba(212, 175, 55, ${particleOpacity})`
//       });
//     }
    
//     function drawParticles() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.fill();
//       });
      
//       connectParticles();
//     }
    
//     function connectParticles() {
//       for (let a = 0; a < particles.length; a++) {
//         for (let b = a + 1; b < particles.length; b++) {
//           const dx = particles[a].x - particles[b].x;
//           const dy = particles[a].y - particles[b].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < maxDistance) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(212, 175, 55, ${connectionOpacity})`;
//             ctx.lineWidth = isMobile ? 0.5 : 0.8;
//             ctx.moveTo(particles[a].x, particles[a].y);
//             ctx.lineTo(particles[b].x, particles[b].y);
//             ctx.stroke();
//           }
//         }
//       }
//     }
    
//     function updateParticles() {
//       particles.forEach(p => {
//         p.x += p.vx;
//         p.y += p.vy;
        
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
//         if (mouse.x && mouse.y) {
//           const dx = p.x - mouse.x;
//           const dy = p.y - mouse.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 100) {
//             p.vx += dx / 1000;
//             p.vy += dy / 1000;
//           }
//         }
//       });
//     }
    
//     function animate() {
//       drawParticles();
//       updateParticles();
//       requestAnimationFrame(animate);
//     }
    
//     canvas.addEventListener('mousemove', (e) => {
//       const rect = canvas.getBoundingClientRect();
//       mouse.x = e.clientX - rect.left;
//       mouse.y = e.clientY - rect.top;
//     });
    
//     canvas.addEventListener('mouseleave', () => {
//       mouse.x = null;
//       mouse.y = null;
//     });
    
//     const particleAnimationId = requestAnimationFrame(animate);

//     // GSAP Animation
//     const tl = gsap.timeline();
    
//     // Initial state
//     gsap.set([ letterGRef.current, hyphenRef.current, letterNRef.current, letterIRef.current], {
//       opacity: 0,
//       y: 80,
//       rotationX: 90
//     });

//     // Animate image first, then letters
//     tl.to(letterGRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 2,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(hyphenRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(letterNRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(letterIRef.current, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1.5,
//       ease: "elastic.out(1, 0.5)"
//     }, "-=0.8")
//     .to(preloaderRef.current, {
//       opacity: 0,
//       duration: 0.05,
//       delay: 0,
//       onComplete: () => {
//         onComplete();
//         if (preloaderRef.current) {
//           preloaderRef.current.style.display = 'none';
//         }
//       }
//     });

//     return () => {
//       cancelAnimationFrame(particleAnimationId);
//       window.removeEventListener('resize', resizeCanvas);
//       tl.kill();
//       canvas.removeEventListener('mousemove', () => {});
//       canvas.removeEventListener('mouseleave', () => {});
//     };
//   }, [onComplete]);

//   return (
//     <div 
//       ref={preloaderRef}
//       className="fixed inset-0 z-[9999] flex items-center justify-center"
//       style={{ backgroundColor: colors.navy }}
      
//     >
//       <canvas 
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//       />
      
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-center">
//         {/* Image on top for mobile, left for desktop */}
        
        
// <div 
//   className="flex items-center justify-center text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold"
//   style={{ fontFamily: 'glitten', color: colors.gold }}
// >  <span 
//     ref={letterGRef}
//     className="inline-block"
//     style={{ 
//       color: colors.gold,
//       textShadow: `0 0 ${window.innerWidth <= 768 ? '8px' : '15px'} ${colors.goldGlow}`,
//       willChange: 'transform, opacity'
//     }}
//   >
//     G
//   </span>
//           <span 
//             ref={hyphenRef}
//             className="inline-block mx-1 sm:mx-2 md:mx-4"
//             style={{ 
//               color: colors.gold,
//               textShadow: `0 0 ${window.innerWidth <= 768 ? '5px' : '10px'} ${colors.goldGlow}`,
//               willChange: 'transform, opacity'
//             }}
//           >
//             -
//           </span>
//           <span 
//             ref={letterNRef}
//             className="inline-block"
//             style={{ 
//               color: colors.gold,
//               textShadow: `0 0 ${window.innerWidth <= 768 ? '8px' : '15px'} ${colors.goldGlow}`,
//               willChange: 'transform, opacity'
//             }}
//           >
//             N
//           </span>
//           <span 
//             ref={letterIRef}
//             className="inline-block"
//             style={{ 
//               color: colors.gold,
//               textShadow: `0 0 ${window.innerWidth <= 768 ? '8px' : '15px'} ${colors.goldGlow}`,
//               willChange: 'transform, opacity'
//             }}
//           >
//             I
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Preloader;





import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import backgroundImage from '../preloader/pexels-olly-3769138.jpg'; // Adjust the import path to your image

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Letter refs
  const letterGRef = useRef<HTMLSpanElement>(null);
  const hyphenRef = useRef<HTMLSpanElement>(null);
  const letterNRef = useRef<HTMLSpanElement>(null);
  const letterIRef = useRef<HTMLSpanElement>(null);

  // Color definitions
  const colors = {
    navy: '#1F5AAA',
    gold: 'rgba(175, 212, 55, 0.7)',
    goldGlow: 'rgba(212, 175, 55, 0.7)',
    goldParticle: 'rgba(212, 175, 55, 0.8)',
    connectionColor: 'rgba(212, 175, 55, 0.3)'
  };

  useEffect(() => {
    // Check if mobile device
    const isMobile = window.innerWidth <= 768;
    
    // Canvas setup and particle system
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];
    
    // Adjust particle settings based on device
    const numParticles = isMobile ? 50 : 100;
    const maxDistance = isMobile ? 80 : 120;
    const particleOpacity = isMobile ? 0.5 : 0.8;
    const connectionOpacity = isMobile ? 0.2 : 0.3;
    
    const mouse = {
      x: null as number | null,
      y: null as number | null,
    };
    
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 1 : 1.5),
        vy: (Math.random() - 0.5) * (isMobile ? 1 : 1.5),
        radius: Math.random() * (isMobile ? 1.5 : 2) + 1,
        color: `rgba(212, 175, 55, ${particleOpacity})`
      });
    }
    
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      
      connectParticles();
    }
    
    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${connectionOpacity})`;
            ctx.lineWidth = isMobile ? 0.5 : 0.8;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    function updateParticles() {
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        if (mouse.x && mouse.y) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            p.vx += dx / 1000;
            p.vy += dy / 1000;
          }
        }
      });
    }
    
    function animate() {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animate);
    }
    
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    
    canvas.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });
    
    const particleAnimationId = requestAnimationFrame(animate);

    // GSAP Animation
    const tl = gsap.timeline();
    
    // Initial state
    gsap.set([ letterGRef.current, hyphenRef.current, letterNRef.current, letterIRef.current], {
      opacity: 0,
      y: 80,
      rotationX: 90
    });

    // Animate image first, then letters
    tl.to(letterGRef.current, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 2,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.8")
    .to(hyphenRef.current, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.8")
    .to(letterNRef.current, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.8")
    .to(letterIRef.current, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.8")
    .to(preloaderRef.current, {
      opacity: 0,
      duration: 0.05,
      delay: 0,
      onComplete: () => {
        onComplete();
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
      }
    });

    return () => {
      cancelAnimationFrame(particleAnimationId);
      window.removeEventListener('resize', resizeCanvas);
      tl.kill();
      canvas.removeEventListener('mousemove', () => {});
      canvas.removeEventListener('mouseleave', () => {});
    };
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ 
        backgroundColor: colors.navy,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div 
        className="absolute inset-0 bg-black opacity-50" 
        style={{ zIndex: 1 }}
      />
      
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 2 }}
      />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center" style={{ zIndex: 3 }}>
        <div 
  className="flex items-center justify-center px-4 py-8 text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-center break-words"
  style={{ fontFamily: 'glitten', color: colors.gold }}
>

          <span 
            ref={letterGRef}
            className="inline-block"
            style={{ 
              color: colors.gold,
              textShadow: `0 0 ${window.innerWidth <= 768 ? '8px' : '15px'} ${colors.goldGlow}`,
              willChange: 'transform, opacity'
            }}
          >
            G
          </span>
          <span 
            ref={hyphenRef}
            className="inline-block mx-1 sm:mx-2 md:mx-4"
            style={{ 
              color: colors.gold,
              textShadow: `0 0 ${window.innerWidth <= 768 ? '5px' : '10px'} ${colors.goldGlow}`,
              willChange: 'transform, opacity'
            }}
          >
            -
          </span>
          <span 
            ref={letterNRef}
            className="inline-block"
            style={{ 
              color: colors.gold,
              textShadow: `0 0 ${window.innerWidth <= 768 ? '8px' : '15px'} ${colors.goldGlow}`,
              willChange: 'transform, opacity'
            }}
          >
            N
          </span>
          <span 
            ref={letterIRef}
            className="inline-block"
            style={{ 
              color: colors.gold,
              textShadow: `0 0 ${window.innerWidth <= 768 ? '8px' : '15px'} ${colors.goldGlow}`,
              willChange: 'transform, opacity'
            }}
          >
            I
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;