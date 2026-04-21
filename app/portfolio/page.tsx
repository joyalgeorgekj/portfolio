// app/portfolio/page.tsx
import Link from "next/link";

export default function Portfolio() {
    const navItems = [
        { label: "About", id: "about" },
        { label: "Skills", id: "skills" },
        { label: "Projects", id: "projects" },
        { label: "Experience", id: "experience" },
        { label: "Open Source", id: "opensource" },
        { label: "Achievements", id: "achievements" },
        { label: "Testimonials", id: "testimonials" },
        { label: "Blog", id: "blog" },
        { label: "Contact", id: "contact" },
    ];

    const skills = {
        frontend: ["React", "Next.js", "TypeScript", "Redux", "JavaScript"],
        styling: ["Tailwind CSS", "shadcn/ui", "Framer Motion", "GSAP"],
        quality: ["Performance", "Accessibility", "SEO", "Responsive UI"],
        tooling: ["Git", "Docker", "Appwrite", "Linux", "Vercel"],
    };

    const projects = [
        {
            title: "Markdown Input Display",
            stack: ["React", "Redux", "TypeScript"],
            desc: "Reusable markdown editor package with live preview and keyboard shortcuts.",
            metric: "1000+ weekly npm users",
        },
        {
            title: "PatchMyResume",
            stack: ["React", "Redux", "Tailwind"],
            desc: "ATS-friendly AI-assisted resume generation platform.",
            metric: "Beta product",
        },
        {
            title: "Internal Operations Calculator",
            stack: ["React", "Redux", "Tailwind"],
            desc: "Internal tool reducing recurring calculation mistakes and manual effort.",
            metric: "Used by staff",
        },
        {
            title: "Senku.io",
            stack: ["Next.js", "Appwrite"],
            desc: "Open-source decentralized knowledge archive and dependency engine.",
            metric: "Founder Project",
        },
    ];

    const oss = [
        "Appwrite",
        "Docker Docs",
        "Moby BuildKit",
        "React Bits",
        "Self.so",
        "devFind",
    ];

    const posts = [
        "Building scalable frontend systems",
        "How to optimize React performance",
        "Shipping products as a solo developer",
        "Lessons from open source contributions",
    ];

    return (
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[260px_1fr] md:px-6">
            {/* Sidebar */}
            <aside className="top-28 h-fit sticky self-start">
                <div className="rounded-3xl border border-white/10 bg-transparent p-5 backdrop-blur-xl">
                    <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-500">
                        Portfolio
                    </p>

                    <nav className="space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="block rounded-xl px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-6 border-t border-white/10 pt-5">
                        <p className="text-xs text-zinc-500">Current Focus</p>
                        <p className="mt-2 text-sm text-zinc-300">
                            Product UI, scalable frontend systems, open source.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Content */}
            <div className="space-y-6">
                {/* Hero */}
                <section
                    id="about"
                    className="rounded-3xl border border-white/10 backdrop-blur-xl bg-transparent p-8 scroll-mt-28 flex flex-col gap-4"
                >
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                        About
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                        Joyal George K J
                    </h1>

                    <p className="text-lg text-cyan-300">
                        Product-Focused Frontend Engineer
                    </p>

                    <p className="max-w-3xl leading-7 text-zinc-400">
                        Frontend engineer with 3+ years of experience building
                        scalable, performant, and maintainable React / Next.js
                        applications. Strong focus on UI architecture, product
                        quality, state management, and shipping features that
                        users actually need.
                    </p>

                    <div className="grid gap-4 md:grid-cols-4">
                        {[
                            "3+ Years Experience",
                            "1000+ npm Users",
                            "OSS Contributor",
                            "Production Apps",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-zinc-300"
                            >
                                &gt; {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section
                    id="skills"
                    className="rounded-3xl border border-white/10 backdrop-blur-xl bg-transparent p-8 scroll-mt-28"
                >
                    <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">Skills</h2>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                        {Object.entries(skills).map(([group, items]) => (
                            <div
                                key={group}
                                className="rounded-2xl border border-white/10 bg-black/30 p-5"
                            >
                                <h3 className="capitalize text-sm font-semibold text-zinc-300">
                                    {group}
                                </h3>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-400 cursor-pointer"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section
                    id="projects"
                    className="rounded-3xl border border-white/10 backdrop-blur-xl bg-transparent p-8 scroll-mt-28"
                >
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                            Featured Projects
                        </h2>
                        <Link
                            href="/projects"
                            className="text-sm text-cyan-300 hover:text-cyan-200"
                        >
                            View All →
                        </Link>
                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="rounded-2xl border border-white/10 bg-black/30 p-5"
                            >
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                                    {project.metric}
                                </p>

                                <h3 className="mt-3 text-lg font-semibold">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-sm text-zinc-400">
                                    {project.stack.join(", ")}
                                </p>

                                <p className="mt-4 text-sm leading-6 text-zinc-400">
                                    {project.desc}
                                </p>

                                <div className="mt-5 text-sm text-cyan-300">
                                    Case Study →
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section
                    id="experience"
                    className="rounded-3xl border border-white/10 backdrop-blur-xl bg-transparent p-8 scroll-mt-28"
                >
                    <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">Experience</h2>

                    <div className="mt-6 space-y-5">
                        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                            <p className="text-sm text-zinc-500">
                                2023 — Present
                            </p>
                            <h3 className="mt-2 text-lg font-semibold">
                                Freelance & Contract Frontend Developer
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                Built and maintained React / Next.js
                                applications, integrated APIs, improved
                                performance, and collaborated with product /
                                backend teams on production releases.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                            <p className="text-sm text-zinc-500">
                                Earlier Experience
                            </p>
                            <h3 className="mt-2 text-lg font-semibold">
                                Operations + Problem Solving Roles
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                Identified workflow inefficiencies and
                                independently built internal tools to reduce
                                friction and recurring errors.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Open Source */}
                <section
                    id="opensource"
                    className="rounded-3xl border border-white/10 backdrop-blur-xl bg-transparent p-8 scroll-mt-28"
                >
                    <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                        Open Source Contributions
                    </h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {oss.map((repo) => (
                            <div
                                key={repo}
                                className="rounded-2xl border border-white/10 bg-black/30 p-5"
                            >
                                <h3 className="font-medium">{repo}</h3>
                                <p className="mt-2 text-sm text-zinc-400">
                                    Fixes, UI improvements, documentation, issue
                                    resolution.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Achievements */}
                <section
                    id="achievements"
                    className="rounded-3xl border border-white/10 backdrop-blur-xl bg-transparent p-8 scroll-mt-28"
                >
                    <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">Achievements</h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {[
                            "Hacktoberfest 2025 Super Contributor",
                            "Winner - Web Designing Competition",
                            "Built 5+ real-world applications",
                            "1000+ weekly active npm users",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-white/10 bg-black/30 p-5 text-zinc-300"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section
                    id="testimonials"
                    className="rounded-3xl border border-white/10 backdrop-blur-xl bg-transparent p-8 scroll-mt-28"
                >
                    <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">Testimonials</h2>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                        {[
                            "Reliable developer who delivers polished UI quickly.",
                            "Strong ownership and problem-solving mindset.",
                        ].map((quote) => (
                            <div
                                key={quote}
                                className="rounded-2xl border border-white/10 bg-black/30 p-5"
                            >
                                <p className="leading-7 text-zinc-300">
                                    “{quote}”
                                </p>
                                <p className="mt-4 text-sm text-zinc-500">
                                    — Client / Collaborator
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Blog */}
                <section
                    id="blog"
                    className="rounded-3xl border border-white/10 backdrop-blur-xl bg-transparent p-8 scroll-mt-28"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                            Latest Writing
                        </h2>
                        <Link href="/blog" className="text-sm text-cyan-300">
                            View All →
                        </Link>
                    </div>

                    <div className="mt-6 space-y-3">
                        {posts.map((post) => (
                            <div
                                key={post}
                                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-zinc-300"
                            >
                                {post}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact */}
                <section
                    id="contact"
                    className="rounded-3xl border border-white/10 backdrop-blur-xl bg-transparent p-8 scroll-mt-28"
                >
                    <h2 className="text-3xl font-semibold">
                        Need a frontend engineer who ships?
                    </h2>

                    <p className="mt-4 max-w-2xl text-zinc-400">
                        Available for frontend engineering roles, freelance
                        work, product collaboration, and startup opportunities.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="mailto:joyalgeorgekj@gmail.com"
                            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black"
                        >
                            Email Me
                        </Link>

                        <Link
                            href="https://linkedin.com/in/joyalgeorgekj"
                            target="_blank"
                            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/5"
                        >
                            LinkedIn
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
