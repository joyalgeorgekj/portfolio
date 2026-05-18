import { baseUrl } from "@/constants/base";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },

        sitemap:
            `${baseUrl}/sitemap.xml`,
    };
}