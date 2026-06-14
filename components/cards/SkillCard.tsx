"use client";

import { Skill } from "@/types/skill.type";
import Image from "next/image";

export default function SkillCard({ skill }: { skill: Skill }) {
    return (
        <div
            key={skill.title}
            className={`bg-white/5 p-4 rounded border border-typography/10 flex justify-center items-center group-hover:border-primary/30 cursor-pointer`}
            title={skill.title}>
            {skill.icon ? (
                <Image
                    width={32}
                    height={32}
                    alt={skill.title}
                    aria-label={skill.title}
                    src={
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/" +
                        skill.icon
                    }
                    className="rounded"
                />
            ) : (
                <span className="rounded-full border-typography/10 px-3 py-1 text-sm text-typography/75 cursor-pointer">
                    {skill.title}
                </span>
            )}
        </div>
    );
}
