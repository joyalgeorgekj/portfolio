"use client";

import useViewportCheck from "@/hooks/useViewportCheck";
import { Achievement } from "@/types/achievements.type";
import { useRef } from "react";

interface Props {
    achievement: Achievement;
}

export default function AchievementCard({ achievement }: Props) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useViewportCheck(cardRef);

    return (
        <div
            key={achievement.id}
            ref={cardRef}
            aria-label={'Project "' + achievement.title + '"'}
            className={`card rounded-2xl border border-typography/10 p-5 flex flex-col gap-2 opacity-0 fade-in ${isVisible ? "in-view" : ""}`}>
            {/* Left */}
            <div className="max-w-2xl flex flex-col gap-2">
                {achievement.organization && (
                    <p className="text-sm text-typography/75 uppercase">
                        {achievement.organization}
                    </p>
                )}

                <div className="flex flex-wrap items-center gap-3 group-hover:text-primary">
                    <h3 className="text-lg font-semibold">
                        {achievement.title}
                    </h3>

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                        {achievement.type}
                    </span>
                </div>

                {achievement.description && (
                    <p className="leading-7 text-typography/75">
                        {achievement.description}
                    </p>
                )}
            </div>
        </div>
    );
}
