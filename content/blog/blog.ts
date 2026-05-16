import { Blog } from "@/types/blog.type";

export const BLOGS: Blog[] = [
  {
    id: "scalable-frontend",

    title:
      "Building Scalable Frontend Systems",

    description:
      "Structuring React applications for maintainability, scalability, and long-term product evolution.",

    category: "Architecture",

    publishedAt: "Jan 2026",

    readingTime: "8 min read",

    slug: "building-scalable-frontend-systems",

    featured: true,

    tags: [
      "React",
      "Architecture",
      "Frontend",
    ],
  },

  {
    id: "react-performance",

    title:
      "Optimizing React Performance Without Premature Complexity",

    description:
      "Practical frontend optimization techniques that improve UX without unnecessary abstractions.",

    category: "Performance",

    publishedAt: "Jan 2026",

    readingTime: "6 min read",

    slug: "optimizing-react-performance",

    featured: true,
  },
];