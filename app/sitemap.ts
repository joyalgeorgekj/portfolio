import type { MetadataRoute } from "next";
import { BLOGS } from "@/content/blog/blog";
import { BASE_URL } from "@/constants/basic";

export default function sitemap(): MetadataRoute.Sitemap {
    const blogRoutes = BLOGS.map((post) => ({
        url: `${BASE_URL}/blog/${post.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/portfolio`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/lab`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...blogRoutes,
    ];
}
