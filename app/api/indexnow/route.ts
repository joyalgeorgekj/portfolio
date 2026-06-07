import { BASE_URL } from "@/constants/basic";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        // 1. Fetch your live sitemap
        const sitemapResponse = await fetch(`${BASE_URL}/sitemap.xml`);
        const sitemapXml = await sitemapResponse.text();

        // 2. Extract URLs
        const urlMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g) || [];
        const urlList = urlMatches.map((tag) =>
            tag.replace(/<\/?loc>/g, "").trim()
        );

        if (urlList.length === 0) {
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
                    urlList: urlList,
                }),
            }
        );

        if (indexNowResponse.ok) {
            return NextResponse.json({
                success: true,
                urlsSubmitted: urlList.length,
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
