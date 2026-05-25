"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import useViewportCheck from "@/hooks/useViewportCheck";
import { ReactNode, useRef } from "react";

export default function AnimateCard({
    children,
    delayTimes,
    className,
}: {
    children: ReactNode;
    delayTimes?: number;
    className?: string;
}) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useViewportCheck(cardRef);
    const isMotionReduced = useMediaQuery("(prefers-reduced-motion: reduce)");

    return (
        <div
            ref={cardRef}
            className={`${className ? className + " " : ""}opacity-0 fade-in ${isVisible ? "in-view" : ""}`}
            style={
                isMotionReduced
                    ? {}
                    : {
                          animationDelay: `${(delayTimes || 1) * 100}ms`,
                      }
            }>
            {children}
        </div>
    );
}
