"use client";

import useViewportCheck from "@/hooks/useViewportCheck";
import { Skill } from "@/types/skill.type";
import Image from "next/image";
import { useRef } from "react";

export default function SkillCard({ skill }: { skill: Skill }) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useViewportCheck(cardRef);

    return (
        <div
            key={skill.title}
            ref={cardRef}
            className={`bg-white/5 p-4 rounded border border-typography/10 flex justify-center items-center group-hover:border-primary/30 opacity-0 fade-in ${isVisible ? "in-view" : ""}`}
            title={skill.title}>
            {skill.icon ? (
                <Image
                    width={32}
                    height={32}
                    alt={skill.title}
                    src={
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/" +
                        skill.icon
                    }
                    className="w-8 h-8 rounded"
                />
            ) : (
                <span className="rounded-full border-typography/10 px-3 py-1 text-sm text-typography/75 cursor-pointer">
                    {skill.title}
                </span>
            )}
        </div>
    );
}
