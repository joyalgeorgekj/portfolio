import { baseUrl } from "@/constants/base";
import { Blog } from "@/types/blog.type";

export function websiteStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Joyal George K J",
        url: baseUrl,
        description: "JavaScript / TypeScript Developer Portfolio",
        inLanguage: "en",
    };
}

export function personStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Joyal George K J",
        url: baseUrl,
        image: baseUrl + "/og-image.png",
        jobTitle: "JavaScript / TypeScript Developer",
        sameAs: [
            "https://github.com/joyalgeorgekj",
            "https://linkedin.com/in/joyalgeorgekj",
        ],
        knowsAbout: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Frontend Engineering",
            "Web Development",
        ],
    };
}

export function blogStructuredData(post: Blog) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.prevDescription,
        author: {
            "@type": "Person",
            name: "Joyal George K J",
        },
        publisher: {
            "@type": "Person",
            name: "Joyal George K J",
        },
        mainEntityOfPage: `${baseUrl}/blog/${post.id}`,
        url: `${baseUrl}/blog/${post.id}`,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        image: `${baseUrl}/blog/${post.id}/opengraph-image`,
    };
}
