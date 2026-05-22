"use client";

import { Project } from "@/types/projects.type";
import Link from "next/link";

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <Link
            href={project.url}
            aria-label={'Project "' + project.title + '"'}
            target="_blank"
            className={`group card rounded-2xl border border-typography/10 p-5 flex flex-col gap-4 h-fit`}>
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
