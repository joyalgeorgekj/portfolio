import { BASE_URL } from "@/constants/basic";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },

        sitemap: `${BASE_URL}/sitemap.xml`,

        host: BASE_URL,
    };
}
