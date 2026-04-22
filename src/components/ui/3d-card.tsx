"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform, useMotionTemplate, useAnimationFrame } from "framer-motion";
import { cn } from "@/lib/utils";

export const ThreeDCard = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Ultra fluid springs for buttery smooth, fast interaction
  const rotateX = useSpring(10, { stiffness: 150, damping: 20, mass: 0.5 });
  const rotateY = useSpring(-15, { stiffness: 150, damping: 20, mass: 0.5 });

  // Glare effect positioning based on rotation modulo 360
  const glareX = useTransform(rotateY, (v) => {
    const wrapped = ((v % 360) + 360) % 360;
    return `${(wrapped / 360) * 100}%`;
  });
  const glareY = useTransform(rotateX, (v) => {
    const wrapped = ((v % 360) + 360) % 360;
    return `${(wrapped / 360) * 100}%`;
  });
  const background = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.2) 0%, transparent 50%)`;

  const [isHovered, setIsHovered] = useState(false);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;

      const deltaX = e.clientX - lastPos.current.x;
      const deltaY = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };

      // Highly responsive manual rotation, faster follow
      rotateY.set(rotateY.get() + deltaX * 1.8);
      rotateX.set(rotateX.get() - deltaY * 1.8);
    };

    const handlePointerUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        document.body.style.cursor = "default";
        document.body.style.userSelect = "auto";
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [rotateX, rotateY]);

  // Perfectly synced auto-rotation using Framer Motion's render loop
  useAnimationFrame((time, delta) => {
    if (!isDragging.current) {
      // delta is typically ~16.6ms for 60fps.
      // Increased multiplier for faster auto rotation
      rotateY.set(rotateY.get() - delta * 0.03);
    }
  });

  const handleMouseLeave = () => {
    if (!isDragging.current) {
      setIsHovered(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className={cn("flex items-center justify-center relative perspective-[1200px]", containerClassName)}
    >
      <motion.div
        ref={ref}
        onPointerDown={handlePointerDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative cursor-grab active:cursor-grabbing touch-none w-full h-full",
          className
        )}
      >
        {children}
        
        {/* Optional Glare Effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 rounded-xl transition-opacity duration-300"
          style={{
            background,
            opacity: isHovered ? 1 : 0
          }}
        />
      </motion.div>
    </div>
  );
};
