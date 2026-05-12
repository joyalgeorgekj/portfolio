import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "Joyal George K J",
    description: "React/Next js Developer Portfolio - 2026, Joyal George K J",
    creator: "Joyal George K J",
    category: "portfolio developer",
    keywords: ["frontend", "developer", "portfolio", "javascript", "typescript", "app developer", "website developer", "site developer", "web developer", "programming", "coding"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased w-[99dvw]`}
            >
                <Header />
                <main className="relative w-full bg-black text-white">
                    {/* Background Effects */}
                    <div className="pointer-events-none absolute inset-0 w-full">
                        <div className="sticky left-0 top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                        <div className="sticky left-[95%] top-[40%] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
                        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                        {/* Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
                    </div>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
