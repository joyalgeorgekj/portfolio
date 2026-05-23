import { OpenSource } from "@/types/opensource.type";

export const OPENSOURCE: OpenSource[] = [
    {
        id: "appwrite-theme",
        project: "Appwrite",
        description:
            "Resolved UI rendering inconsistencies and session behavior issues.",
        type: "UI Improvement",
        stack: ["Svelte", "JavaScript", "Frontend", "UI"],
        url: "https://github.com/appwrite/console",
    },
    {
        id: "docker-docs",
        project: "Docker Docs",
        description: "UX Improvement",
        type: "UX Improvement",
        stack: ["CSS"],
        url: "https://github.com/docker/docs",
    },
    {
        id: "build-kit",
        project: "Build Kit",
        description: "Documentation clarity enhanced",
        type: "Documentation",
        stack: ["CSS"],
        url: "https://github.com/moby/buildkit",
    },
    {
        id: "self-so",
        project: "Self.so",
        description: "Clean-up and Enhancement",
        type: "UI Improvement",
        stack: ["CSS"],
        url: "https://github.com/Nutlope/self.so",
    },
];
