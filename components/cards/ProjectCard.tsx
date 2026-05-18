import { Project } from "@/types/projects.type";
import Link from "next/link";

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <Link
            href={project.url}
            key={project.title}
            className="card rounded-2xl border border-typography/10 p-5 flex flex-col gap-2 h-fit">
            <p className="text-xs uppercase tracking-[0.2em] text-typography/75">
                {project.metric}
            </p>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-typography/75">
                {project.stack.join(", ")}
            </p>
            <p className="text-sm leading-6 text-typography/75">
                {project.desc}
            </p>
        </Link>
    );
}
