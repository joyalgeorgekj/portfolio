import type { Metadata } from "next";
import "../globals.css";
import "../cursor.css";
import { BASE_URL, DESCRIPTION, NAME, TITLE } from "@/constants/basic";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: `${NAME} - ${TITLE}`,
        template: `%s | ${NAME}`,
    },
    description: DESCRIPTION,
    applicationName: `${NAME} Portfolio`,
    referrer: "origin-when-cross-origin",
    authors: [
        {
            name: NAME,
            url: BASE_URL,
        },
    ],
    creator: NAME,
    publisher: NAME,
    category: "Technology",
    keywords: [
        "Joyal",
        "Joyal George",
        NAME,
        "Frontend Engineer",
        "Frontend Developer",
        "React Developer",
        "Next.js Developer",
        "TypeScript Developer",
        "JavaScript Developer",
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Web Developer",
        "UI Engineer",
        "Frontend Portfolio",
        "Open Source Contributor",
        "Performance Optimization",
        "Scalable Web Applications",
        "Modern Web Development",
        "Product Engineer",
        "Software Engineer",
        "Freelance Frontend Developer",
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: BASE_URL,
        siteName: `${NAME} Portfolio`,
        title: `${NAME} - ${TITLE}`,
        description: DESCRIPTION,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: `${NAME} Portfolio Landing Page`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${NAME} - ${TITLE}`,
        description: DESCRIPTION,
        creator: "@joyalgeorgekj",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: BASE_URL,
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.png",
    },
    verification: {
        google: "google-site-verification-code",
    },
    manifest: "/manifest.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/health`);

    return (
        <html lang="en">
            <head>
                <script type="text/javascript">
                    {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "x097n0tbjg");`}
                </script>

                {/* <!-- Google tag (gtag.js) --> */}
                <GoogleAnalytics gaId="G-GCNKNRKWZBu" />
            </head>
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
