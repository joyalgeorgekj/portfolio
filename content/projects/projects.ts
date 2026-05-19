import { Project } from "@/types/projects.type";

export const PROJECTS: Project[] = [
    {
        title: "Markdown Input Display",
        desc: "A minimal and customizable Markdown editor & previewer built in React/Next.js with TypeScript! no external dependencies.",
        stack: ["React", "Redux", "TypeScript"],
        url: "https://github.com/joyalgeorgekj/markdown-input-display",
        metric: "1500+ Downloads",
    },
    {
        title: "PatchMyResume",
        stack: ["Next.js", "Redux", "Tailwind", "TypeScript", "Gemini API"],
        desc: "[Beta]: ATS-proof resume tailoring. Uses Gemini AI to optimize user resumes against job descriptions. Built with Next.js, Appwrite & TypeScript.",
        metric: "Beta product",
        url: "https://github.com/joyalgeorgekj/patchmyresume",
    },
    {
        title: "Melodri",
        stack: ["React", "Node.js", "Tailwind", "Express.js", "N8N", "Docker", "Gemini API", "Linux"],
        desc: "Melodri is a media processing pipeline that uses Gemini 3 as a reasoning engine to identify soundtracks within video files.",
        metric: "Google Gemini AI Hackathon",
        url: "https://github.com/joyalgeorgekj/melodri",
    },
    {
        title: "Senku.io",
        stack: ["Next.js", "Git", "CI/CD", "Markdown"],
        desc: "An open-source knowledge store and dependency engine. We map the technological \"Tech Tree\" of humanity from the first stone tool to modern semicon",
        metric: "Founder Project",
        url: "https://github.com/senku-io",
        featured: true,
    },
];
