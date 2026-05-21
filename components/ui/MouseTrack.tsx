"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useRef } from "react";

export default function MouseTrack() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const desktop = useMediaQuery("(pointer: fine)");

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.setProperty("--x", `${e.clientX}px`);
                cursorRef.current.style.setProperty("--y", `${e.clientY}px`);
            }
        };

        if (desktop) {
            window.addEventListener("mousemove", moveCursor);

            return () => window.removeEventListener("mousemove", moveCursor);
        }
    });

    return (
        <div
            ref={cursorRef}
            className="hidden md:flex pointer-events-none fixed left-0 top-0 z-9999 h-10 w-10 
                 rounded-full bg-typography mix-blend-difference"
            style={{
                // Use transform for hardware acceleration (smoother than top/left)
                top: "calc(var(--y) - 20px)",
                left: "calc(var(--x) - 20px)",
            }}
        />
    );
}
