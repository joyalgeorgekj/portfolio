import { Blog } from "@/types/blog.type";

export const BLOGS: Blog[] = [
    {
        id: "building-a-portfolio-that-can-grow-with-me",
        title: "Building a Portfolio That Can Grow With Me",
        prevDescription:
            "Why I rebuilt my portfolio after outgrowing the old structure and shifted toward a more flexible platform focused on open source, technical writing, experimentation, and long term growth.",
        category: "Architecture",
        publishedAt: "2026-05-23",
        readingTime: "5 min read",
        featured: true,
        tags: [
            "portfolio",
            "architecture",
            "nextjs",
            "developer journey",
            "open source",
            "software development",
        ],
    },
    {
        id: "scalable-frontend",
        title: "Building Scalable Frontend Systems",
        prevDescription:
            "Structuring React applications for maintainability, scalability, and long-term product evolution.",
        category: "Architecture",
        publishedAt: "Jan 2026",
        readingTime: "8 min read",
        featured: true,
        tags: ["React", "Architecture", "Frontend"],
    },
    {
        id: "react-performance",
        title: "Optimizing React Performance Without Premature Complexity",
        prevDescription:
            "Practical frontend optimization techniques that improve UX without unnecessary abstractions.",
        category: "Performance",
        publishedAt: "Jan 2026",
        readingTime: "6 min read",
    },
    {
        title: "What Freelance Work Taught Me About Product Thinking",
        category: "Career",
        readingTime: "5 min read",
        publishedAt: "Dec 2025",
        prevDescription: "",
        id: "something1",
    },
    {
        title: "How I Built an Internal Tool That Solved Real Problems",
        category: "Case Study",
        readingTime: "7 min read",
        publishedAt: "Dec 2025",
        prevDescription: "",
        id: "something2",
    },
    {
        title: "Open Source Contributions as a Growth Strategy",
        category: "Open Source",
        readingTime: "5 min read",
        publishedAt: "Nov 2025",
        prevDescription: "",
        id: "something3",
    },
    {
        title: "Designing Better UI Systems With Components",
        category: "Architecture",
        readingTime: "9 min read",
        publishedAt: "Nov 2025",
        prevDescription: "",
        id: "something4",
    },
    {
        title: "Why Tailwind + Next.js Is Still a Strong Stack",
        category: "Frontend",
        readingTime: "4 min read",
        publishedAt: "Oct 2025",
        prevDescription: "",
        id: "something5",
    },
];
