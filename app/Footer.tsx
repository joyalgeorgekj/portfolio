import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Joyal<span className="text-cyan-400">.</span>
          </h3>
          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Building performant, scalable, and polished digital products with
            React, Next.js, and TypeScript.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-white">Navigation</h4>
          <div className="mt-4 space-y-3 text-sm text-zinc-400">
            <Link href="/portfolio" className="block hover:text-white">
              Portfolio
            </Link>
            <Link href="/portfolio#projects" className="block hover:text-white">
              Projects
            </Link>
            <Link href="/portfolio#experience" className="block hover:text-white">
              Experience
            </Link>
            <Link href="/blog" className="block hover:text-white">
              Blog
            </Link>
            <Link href="/lab" className="block hover:text-white">
              Lab
            </Link>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-sm font-semibold text-white">Connect</h4>
          <div className="mt-4 space-y-3 text-sm text-zinc-400">
            <Link
              href="https://github.com/joyalgeorgekj"
              target="_blank"
              className="block hover:text-white"
            >
              GitHub
            </Link>

            <Link
              href="https://linkedin.com/in/joyalgeorgekj"
              target="_blank"
              className="block hover:text-white"
            >
              LinkedIn
            </Link>

            <Link
              href="mailto:joyalgeorgekj@gmail.com"
              className="block hover:text-white"
            >
              Email
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-sm font-semibold text-white">Let’s Build</h4>
          <p className="mt-4 text-sm text-zinc-400">
            Have a project in mind? Let’s discuss and create something impactful.
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© 2026 Joyal George K J. All rights reserved.</p>
          <p>Built with Next.js · Tailwind CSS v4</p>
        </div>
      </div>
    </footer>
  );
}