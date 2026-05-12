"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="
          fixed
          top-0
          left-0
          z-[9999]
          w-[7px]
          h-[7px]
          rounded-full
          bg-[#c9ba9b]
          pointer-events-none
          -translate-x-1/2
          -translate-y-1/2
        "
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="
          fixed
          top-0
          left-0
          z-[9998]
          w-[38px]
          h-[38px]
          rounded-full
          border
          border-[#c9ba9b66]
          pointer-events-none
          -translate-x-1/2
          -translate-y-1/2
        "
      />
    </>
  );
}