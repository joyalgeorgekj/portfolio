import { Project } from "@/types/projects";
import Link from "next/link";

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <Link
            href={project.url}
            key={project.title}
            className="card rounded-2xl border border-white/10 p-5 flex flex-col gap-2 h-fit">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {project.metric}
            </p>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-zinc-500">{project.stack.join(", ")}</p>
            <p className="text-sm leading-6 text-zinc-400">{project.desc}</p>
        </Link>
    );
}
