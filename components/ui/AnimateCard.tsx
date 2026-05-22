"use client";

import useViewportCheck from "@/hooks/useViewportCheck";
import { ReactNode, useRef } from "react";

export default function AnimateCard({
    children,
    delayTimes,
}: {
    children: ReactNode;
    delayTimes?: number;
}) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useViewportCheck(cardRef);

    return (
        <div
            ref={cardRef}
            className={`opacity-0 fade-in ${isVisible ? "in-view" : ""}`}
            style={{ animationDelay: `${(delayTimes || 1) * 100}ms` }}>
            {children}
        </div>
    );
}
