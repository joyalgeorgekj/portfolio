// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Lab", href: "/lab" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/portfolio#about" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 border-b border-white/10 backdrop-blur-xl bg-transparent`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Joyal<span className="text-cyan-400">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="https://github.com/joyalgeorgekj"
              target="_blank"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              GitHub
            </Link>

            <Link
              href="https://linkedin.com/in/joyalgeorgekj"
              target="_blank"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              LinkedIn
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
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
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl md:hidden">
          <div className="mt-20 space-y-6 px-6">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-lg text-zinc-200"
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t border-white/10 pt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-black"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}