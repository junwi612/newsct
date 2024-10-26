<template>
    <div class="fixed inset-0 z-[-1] overflow-hidden bg-fixed bg-gradient-to-br from-gray-900 to-black">
      <canvas
        ref="canvasRef"
        class="absolute inset-0"
        aria-hidden="true"
      ></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
    import { onMounted, onBeforeUnmount, ref } from "vue";
  
    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
    }
  
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    let particles: Particle[] = [];
  
    const initParticles = (canvas: HTMLCanvasElement) => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `hsl(${Math.random() * 360}, 50%, 50%)`,
          vx: (Math.random() * 2 - 1) * 0.2,
          vy: (Math.random() * 2 - 1) * 0.2,
        });
      }
    };
  
    const resizeCanvas = (canvas: HTMLCanvasElement) => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      if (particles.length === 0) {
        initParticles(canvas);
      } else {
        particles.forEach(p => {
          p.x = (p.x / oldWidth) * canvas.width;
          p.y = (p.y / oldHeight) * canvas.height;
        });
      }
    };
  
    onMounted(() => {
      const canvas = canvasRef.value;
      if (!canvas) return;
  
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      let animationFrameId: number;
      let lastUpdateTime = 0;
      const updateInterval = 20; // 每20毫秒更新一次（20 fps）
  
      const drawParticle = (particle: Particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      };
  
      const updateParticle = (particle: Particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
  
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      };
  
      const drawLines = () => {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
  
            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      };
  
      const animate = (currentTime: number) => {
        if (!ctx) return;
  
        animationFrameId = requestAnimationFrame(animate);
  
        if (currentTime - lastUpdateTime < updateInterval) {
          return;
        }
  
        lastUpdateTime = currentTime;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        particles.forEach((particle) => {
          drawParticle(particle);
          updateParticle(particle);
        });
  
        drawLines();
      };
  
      resizeCanvas(canvas);
      animate(0);
  
      window.addEventListener("resize", () => resizeCanvas(canvas));
  
      onBeforeUnmount(() => {
        window.removeEventListener("resize", () => resizeCanvas(canvas));
        cancelAnimationFrame(animationFrameId);
      });
    });
  </script>
  
  <style scoped></style>
  