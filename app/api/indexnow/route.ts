import { BASE_URL } from "@/constants/basic";
import { BLOGS } from "@/content/blog/blog";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const COMMON_URL = [BASE_URL, `${BASE_URL}/portfolio`, `${BASE_URL}/lab`, `${BASE_URL}/blog`];
        const BLOG_URLS = BLOGS.map((post) => `${BASE_URL}/blog/${post.id}`)
        const URL_LIST = [...COMMON_URL, ...BLOG_URLS];

        if (URL_LIST.length === 0) {
            return NextResponse.json({ message: "Sitemap is empty." });
        }

        // 3. Ping IndexNow directly
        const indexNowResponse = await fetch(
            "https://api.indexnow.org/indexnow",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    host: new URL(BASE_URL).host,
                    key: process.env.INDEXNOW_KEY,
                    keyLocation: `${BASE_URL}/${process.env.INDEXNOW_KEY}.txt`,
                    urlList: URL_LIST,
                }),
            }
        );

        if (indexNowResponse.ok) {
            return NextResponse.json({
                success: true,
                urlsSubmitted: URL_LIST.length,
            });
        } else {
            const errorText = await indexNowResponse.text();
            return NextResponse.json(
                { error: "IndexNow rejected request", details: errorText },
                { status: 400 }
            );
        }
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : String(error);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
