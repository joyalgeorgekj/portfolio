// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { label: "Portfolio", href: "/portfolio" },
        { label: "Lab", href: "/lab" },
        { label: "Blog", href: "/blog" },
    ];

    const socialLinks = [
        { url: "https://github.com/joyalgeorgekj", title: "GitHub" },
        { url: "https://linkedin.com/in/joyalgeorgekj", title: "LinkedIn" },
        {
            url: "mailto:joyalgeorgekj@gmail.com",
            title: "Hire Me",
            label: "Open Gmail with reciver set as my email",
            className: "btn btn-secondary",
        },
    ];

    const currentPathname = usePathname();

    return (
        <>
            <header className="sticky top-0 inset-x-0 z-50 transition-all duration-300 border-b border-typography/10 bg-background">
                <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:px-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-lg font-semibold tracking-tight text-typography">
                        Joyal<span className="text-primary">.</span>
                    </Link>
                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((item) => {
                            const isActive = currentPathname === item.href;

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    aria-label={
                                        "Navigate to " + item.label + " page"
                                    }
                                    className={`text-sm text-typography/75 transition hover:text-typography ${isActive ? "font-bold" : ""}`}>
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                    {/* Desktop Right */}
                    <div className="hidden items-center gap-8 md:flex">
                        {socialLinks.map((social, index) => (
                            <Link
                                key={index}
                                href={social.url}
                                target="_blank"
                                aria-label={
                                    social.label ||
                                    `Visit ${social.title} profile`
                                }
                                className={
                                    social.className ||
                                    "text-sm text-typography/75 transition hover:text-typography"
                                }>
                                {social.title}
                            </Link>
                        ))}
                    </div>
                    {/* Mobile Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden"
                        aria-label="Toggle Menu">
                        <div className="space-y-1">
                            <span className="block h-0.5 w-5 bg-white" />
                            <span className="block h-0.5 w-5 bg-white" />
                            <span className="block h-0.5 w-5 bg-white" />
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 bg-background md:hidden">
                    <div className="mt-24 space-y-6 px-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-sm text-zinc-200">
                                {item.label}
                            </Link>
                        ))}

                        <div className="gap-8 md:hidden flex flex-col">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    aria-label={
                                        social.label ||
                                        `Visit ${social.title} profile`
                                    }
                                    className={
                                        social.className ||
                                        "text-sm text-typography/75 transition hover:text-typography"
                                    }>
                                    {social.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
