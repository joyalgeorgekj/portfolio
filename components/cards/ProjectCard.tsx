"use client";

import useViewportCheck from "@/hooks/useViewportCheck";
import { Project } from "@/types/projects.type";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    const cardRef = useRef<HTMLAnchorElement | null>(null);
    const isVisible = useViewportCheck(cardRef);
    
    return (
        <Link
            href={project.url}
            key={project.title}
            ref={cardRef}
            className={`group card rounded-2xl border border-typography/10 p-5 flex flex-col gap-4 h-fit opacity-0 fade-in ${isVisible ? "in-view" : ""}`}>
            <p className="text-xs uppercase tracking-[0.2em] text-typography/75">
                {project.metric}
            </p>
            <h3 className="text-2xl font-semibold leading-tight transition group-hover:text-primary">
                {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full border border-typography/10 px-3 py-1 text-xs text-typography/75">
                        {tech}
                    </span>
                ))}
            </div>
            <p className="text-sm leading-6 text-typography/75">
                {project.desc}
            </p>

            <p className="inline-flex text-sm text-primary transition group-hover:translate-x-1">
                Read More →
            </p>
        </Link>
    );
}
