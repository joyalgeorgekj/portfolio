import { BASE_URL } from "@/constants/basic";
import { Blog } from "@/types/blog.type";

export function websiteStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Joyal George K J",
        url: BASE_URL,
        description: "JavaScript / TypeScript Developer Portfolio",
        inLanguage: "en",
    };
}

export function personStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Joyal George K J",
        url: BASE_URL,
        image: BASE_URL + "/og-image.png",
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
        mainEntityOfPage: `${BASE_URL}/blog/${post.id}`,
        url: `${BASE_URL}/blog/${post.id}`,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        image: `${BASE_URL}/blog/${post.id}/opengraph-image`,
    };
}
