// import React, { useEffect, useRef } from 'react';

// const ParticleBackground: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
  
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;
    
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
    
//     // Consistent colors
//     const particleColor = 'rgba(212, 175, 55, 0.8)'; // Gold color
//     const connectionColor = 'rgba(212, 175, 55, 0.3)'; // Gold with lower opacity
    
//     const mouse = {
//       x: null as number | null,
//       y: null as number | null,
//     };
    
//     function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }
    
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);
    
//     // Create particles with consistent color
//     for (let i = 0; i < numParticles; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 1.5,
//         vy: (Math.random() - 0.5) * 1.5,
//         radius: Math.random() * 2 + 1,
//         color: particleColor
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
//             ctx.strokeStyle = connectionColor;
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
    
//     animate();
    
//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, []);
  
//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full pointer-events-none"
//       style={{ background: 'transparent' }}
//     />
//   );
// };

// export default ParticleBackground;



import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];
    
    // Adjust particle count based on screen size
    const isMobile = window.innerWidth < 768;
    const numParticles = isMobile ? 50 : 100;
    const maxDistance = isMobile ? 80 : 120;
    
    // Consistent colors
    const particleColor = 'rgba(212, 175, 55, 0.8)'; // Gold color
    const connectionColor = 'rgba(212, 175, 55, 0.3)'; // Gold with lower opacity
    
    const mouse = {
      x: null as number | null,
      y: null as number | null,
    };
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize particles on resize if switching between mobile/desktop
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        particles.length = 0;
        initializeParticles(newIsMobile);
      }
    }
    
    function initializeParticles(isMobileView: boolean) {
      const count = isMobileView ? 50 : 100;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (isMobileView ? 1 : 1.5),
          vy: (Math.random() - 0.5) * (isMobileView ? 1 : 1.5),
          radius: Math.random() * (isMobileView ? 1.5 : 2) + 1,
          color: particleColor
        });
      }
    }
    
    resizeCanvas();
    initializeParticles(isMobile);
    window.addEventListener('resize', resizeCanvas);
    
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
      const currentMaxDistance = window.innerWidth < 768 ? 80 : maxDistance;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < currentMaxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    function updateParticles() {
      const isCurrentlyMobile = window.innerWidth < 768;
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        if (mouse.x && mouse.y) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < (isCurrentlyMobile ? 80 : 100)) {
            p.vx += dx / (isCurrentlyMobile ? 1500 : 1000);
            p.vy += dy / (isCurrentlyMobile ? 1500 : 1000);
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
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;