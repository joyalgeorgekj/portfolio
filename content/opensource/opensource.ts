import { OpenSource } from "@/types/opensource.type";

export const OPENSOURCE: OpenSource[] = [
    {
        id: "appwrite-theme",
        project: "Appwrite",
        description:
            "Resolved session-related bugs, fixed documentation issues, and collaborated with maintainers to investigate and improve platform behavior.",
        type: "Bug Fix & Documentation",
        stack: ["Svelte", "JavaScript", "Frontend", "Documentation"],
        url: "https://github.com/appwrite/console",
    },
    {
        id: "docker-docs",
        project: "Docker Docs",
        description:
            "Identified and fixed a theme contrast issue that blocked content visibility in documentation pages.",
        type: "UX Improvement",
        stack: ["CSS", "Documentation", "Frontend"],
        url: "https://github.com/docker/docs",
    },
    {
        id: "build-kit",
        project: "Build Kit",
        description:
            "Contributed improvements to Docker BuildKit documentation by refining and expanding technical content.",
        type: "Documentation",
        stack: ["Markdown", "Documentation", "Docker"],
        url: "https://github.com/moby/buildkit",
    },
    {
        id: "self-so",
        project: "Self.so",
        description:
            "Worked directly with the project owner to improve AI output quality, resolve time conversion issues, and enhance integration reliability.",
        type: "Feature Improvement",
        stack: ["TypeScript", "AI", "Frontend", "Debugging"],
        url: "https://github.com/Nutlope/self.so",
    },
];
