import { Blog } from "@/types/blog.type";

export const BLOGS: Blog[] = [
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
        id: "something",
    },
    {
        title: "How I Built an Internal Tool That Solved Real Problems",
        category: "Case Study",
        readingTime: "7 min read",
        publishedAt: "Dec 2025",
        prevDescription: "",
        id: "something",
    },
    {
        title: "Open Source Contributions as a Growth Strategy",
        category: "Open Source",
        readingTime: "5 min read",
        publishedAt: "Nov 2025",
        prevDescription: "",
        id: "something",
    },
    {
        title: "Designing Better UI Systems With Components",
        category: "Architecture",
        readingTime: "9 min read",
        publishedAt: "Nov 2025",
        prevDescription: "",
        id: "something",
    },
    {
        title: "Why Tailwind + Next.js Is Still a Strong Stack",
        category: "Frontend",
        readingTime: "4 min read",
        publishedAt: "Oct 2025",
        prevDescription: "",
        id: "something",
    },
];
