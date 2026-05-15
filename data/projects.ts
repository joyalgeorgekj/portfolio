import { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
    {
        title: "Markdown Input Display",
        desc:
        "Reusable markdown editor component with live preview, keyboard shortcuts and no external dependency.",
        stack: [
        "React",
        "Redux",
        "TypeScript",
        ],
        url: "https://github.com/joyalgeorgekj/project",
        metric: "1500+ Downloads",
    },
    {
        title: "PatchMyResume",
        stack: ["React", "Redux", "Tailwind"],
        desc: "ATS-friendly AI-assisted resume generation platform using Gemini AI.",
        metric: "Beta product",
        url: "https://github.com/joyalgeorgekj/project",
    },
    {
        title: "Internal Operations Calculator",
        stack: ["React", "Redux", "Tailwind"],
        desc: "Internal tool reducing recurring calculation mistakes and manual effort.",
        metric: "Used by staff",
        url: "https://github.com/joyalgeorgekj/project",
    },
    {
        title: "Senku.io",
        stack: ["Next.js", "Appwrite"],
        desc: "Open-source decentralized knowledge archive and dependency engine.",
        metric: "Founder Project",
        url: "https://github.com/joyalgeorgekj/project",
        featured: true
    }
];