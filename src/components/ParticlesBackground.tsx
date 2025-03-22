"use client";

import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export default function ParticlesBackground({
  count = 30,
  colors = ['#9612d9', '#ff3a5c'],
}: {
  count?: number;
  colors?: string[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);
  
  // Initialize particles
  const initParticles = (width: number, height: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 6 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        color
      });
    }
    particles.current = newParticles;
  };
  
  // Update particles position
  const updateParticles = (width: number, height: number) => {
    particles.current.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > width) {
        particle.speedX *= -1;
      }
      
      if (particle.y < 0 || particle.y > height) {
        particle.speedY *= -1;
      }
    });
  };
  
  // Draw particles on canvas
  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    
    particles.current.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
      ctx.fill();
      
      // Add glow effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = particle.color;
    });
  };
  
  // Animation loop
  const animate = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    updateParticles(dimensions.width, dimensions.height);
    drawParticles(ctx);
    
    animationFrameId.current = requestAnimationFrame(animate);
  };
  
  // Set up canvas dimensions
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height });
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        initParticles(width, height);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [count, colors]);
  
  // Start animation when dimensions are set
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      animate();
    }
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [dimensions]);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-40 pointer-events-none"
    />
  );
} 