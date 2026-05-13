"use client";

import { useEffect, useRef } from "react";

export default function MouseTrack() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.setProperty("--x", `${e.clientX}px`);
        cursorRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-9999 h-10 w-10 
                 rounded-full bg-blue-700 mix-blend-color-dodge"
      style={{
        // Use transform for hardware acceleration (smoother than top/left)
        // transform: `translate3d(calc(var(--x) - 20px), calc(var(--y) - 20px), 0)`,
        top: 'calc(var(--y) - 20px)',
        left: 'calc(var(--x) - 20px)'
      }}
    />
  );
}