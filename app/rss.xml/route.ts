import { BASE_URL, DESCRIPTION, NAME } from "@/constants/basic";
import { BLOGS } from "@/content/blog/blog";

export async function GET() {
    const posts = BLOGS.map(
        (post) => `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <description><![CDATA[${post.prevDescription}]]></description>
            <link>${BASE_URL}/blog/${post.id}</link>
            <guid>${BASE_URL}/blog/${post.id}</guid>
            <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        </item>
    `
    ).join("");

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
        
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <channel>
                <title>${NAME}</title>
                <description>${DESCRIPTION}</description>
                <link>${BASE_URL}</link>
                <language>en-us</language>
                <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
                ${posts}
            </channel>
        </rss>
    `;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
