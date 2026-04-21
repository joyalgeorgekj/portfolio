import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Joyal George K J",
    description: "React/Next js Developer Portfolio - 2026, Joyal George K J",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased w-[99dvw]`}
            >
                <Header />
                <main className="relative w-full bg-black text-white">
                    {/* Background Effects */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                        <div className="absolute right-5 top-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
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
