import {
    personStructuredData,
    websiteStructuredData,
} from "@/lib/structured-data";
import MouseTrack from "../components/ui/MouseTrack";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { baseUrl } from "@/constants/base";
import type { Metadata } from "next";
import "./globals.css";
import "./cursor.css";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Joyal George K J - JavaScript / TypeScript Developer",
        template: "%s | Joyal George K J",
    },
    description:
        "JavaScript / TypeScript Developer specializing in React.js, Next.js, scalable web applications, frontend architecture, UI engineering, and performance optimization.",
    applicationName: "Joyal George K J Portfolio",
    referrer: "origin-when-cross-origin",
    authors: [
        {
            name: "Joyal George K J",
            url: baseUrl,
        },
    ],
    creator: "Joyal George K J",
    publisher: "Joyal George K J",
    category: "Technology",
    keywords: [
        "Joyal",
        "Joyal George",
        "Joyal George K J",
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
        url: baseUrl,
        siteName: "Joyal George K J Portfolio",
        title: "Joyal George K J - Javascript/Typescript Developer",
        description:
            "JavaScript / TypeScript Developer building scalable and performant web applications using React.js and Next.js.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Joyal George K J Portfolio Landing Page",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Joyal George K J - JavaScript / TypeScript Developer",
        description:
            "JavaScript / TypeScript Developer building scalable and performant web applications using React.js and Next.js.",
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
        canonical: baseUrl,
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.png",
    },
    verification: {
        google: "google-site-verification-code",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <Header />
                <main className="relative w-full text-typography">
                    {/* Background Effects */}
                    <div className="effects-wrapper">
                        <div className="sticky left-0 top-[20%] h-72 w-72 rounded-full bg-cyan-900/30 blur-3xl" />
                        <div className="sticky left-[95%] top-[40%] h-80 w-80 rounded-full bg-violet-900/30 blur-3xl" />
                        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-blue-900/30 blur-3xl" />
                    </div>

                    <div className="isolate">{children}</div>
                </main>
                <Footer />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteStructuredData()),
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personStructuredData()),
                    }}
                />
            </body>
        </html>
    );
}
