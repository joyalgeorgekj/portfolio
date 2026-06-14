import { BASE_URL, DESCRIPTION, NAME, TITLE } from "@/constants/basic";
import { Blog } from "@/types/blog.type";
import { Experiment } from "@/types/lab.type";

export function websiteStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: NAME,
        url: BASE_URL,
        description: `${TITLE} - ${DESCRIPTION}`,
        inLanguage: "en",
    };
}

export function personStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: NAME,
        url: BASE_URL,
        image: BASE_URL + "/og-image.png",
        jobTitle: TITLE,
        sameAs: [
            "https://github.com/joyalgeorgekj",
            "https://linkedin.com/in/joyalgeorgekj",
            "https://www.instagram.com/joyalgeorgekj",
            "https://x.com/joyalgeorgekj",
            "https://www.youtube.com/@joyalgeorgekj",
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
            name: NAME,
        },
        publisher: {
            "@type": "Person",
            name: NAME,
        },
        mainEntityOfPage: `${BASE_URL}/blog/${post.id}`,
        url: `${BASE_URL}/blog/${post.id}`,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        image: `${BASE_URL}/blog/${post.id}/opengraph-image`,
    };
}

export function labStructuredData(exp: Experiment) {
    return {
        "@context": "https://schema.org",
        "@type": "labPosting",
        headline: exp.title,
        description: exp.desc,
        author: {
            "@type": "Person",
            name: NAME,
        },
        publisher: {
            "@type": "Person",
            name: NAME,
        },
        mainEntityOfPage: `${BASE_URL}/lab/${exp.id}`,
        url: `${BASE_URL}/lab/${exp.id}`,
        image: `${BASE_URL}/lab/${exp.id}/opengraph-image`,
    };
}
