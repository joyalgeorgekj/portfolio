import MouseTrack from "../components/ui/MouseTrack";
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./globals.css";
import "./cursor.css";

const baseUrl = process.env.HOSTED_URL
    ? `https://${process.env.HOSTED_URL}`
    : "http://localhost:3000";

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
            url: "https://www.joyalgeorgekj.com",
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
        url: "https://www.joyalgeorgekj.com",
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
        canonical: "https://www.joyalgeorgekj.com",
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
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
            </head>
            <body className={`antialiased w-[99dvw]`}>
                <Header />
                <main className="relative w-full text-typography">
                    {/* Background Effects */}
                    <div className="pointer-events-none absolute inset-0 w-full">
                        <div className="sticky left-0 top-[20%] h-72 w-72 rounded-full bg-cyan-900/30 blur-3xl" />
                        <div className="sticky left-[95%] top-[40%] h-80 w-80 rounded-full bg-violet-900/30 blur-3xl" />
                        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-blue-900/30 blur-3xl" />
                    </div>

                    {/* Mouse Tracer */}
                    <MouseTrack />

                    {/* Background Image */}
                    <div className="effects fixed w-full h-screen top-0 left-0 pointer-events-none"></div>

                    <div className="isolate">{children}</div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
