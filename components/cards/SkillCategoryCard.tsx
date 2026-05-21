"use client";

import useViewportCheck from "@/hooks/useViewportCheck";
import { Skill } from "@/types/skill.type";
import { useRef } from "react";
import SkillCard from "./SkillCard";

interface Props {
    category: string;
    skills: Skill[];
}

export default function SkillCategoryCard({ category, skills }: Props) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useViewportCheck(cardRef);

    return (
        <div
            ref={cardRef}
            aria-label={'Skill Category "' + category + '"'}
            className={`group card rounded-2xl p-5 opacity-0 fade-in ${isVisible ? "in-view" : ""}`}>
            <h3 className="capitalize text-sm font-semibold text-typography/75">
                {category}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((item) => (
                    <SkillCard skill={item} key={item.title} />
                ))}
            </div>
        </div>
    );
}
