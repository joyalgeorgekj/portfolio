// app/page.tsx
import Link from "next/link";
import {
    FlaskConicalIcon,
    GitPullRequestIcon,
    LibraryBigIcon,
    LuggageIcon,
    StarsIcon,
    WrenchIcon,
} from "lucide-react";

export default function Home() {
    const stats = [
        "3+ Years Experience",
        "1000+ Weekly npm Users",
        "Open Source Contributor",
        "Production React Apps",
    ];

    const highlights = [
        {
            title: "Featured Projects",
            icon: StarsIcon,
            desc: "Scalable products, polished UI systems, real-world impact.",
            route: "/portfolio#projects",
        },
        {
            title: "Open Source",
            icon: GitPullRequestIcon,
            desc: "Contributions to Appwrite, Docker Docs, BuildKit and more.",
            route: "/portfolio#opensource",
        },
        {
            title: "Skills",
            icon: WrenchIcon,
            desc: "React, Next.js, TypeScript, Performance, Architecture.",
            route: "/portfolio#skills",
        },
        {
            title: "Experience",
            icon: LuggageIcon,
            desc: "Freelance, contract, production-focused frontend delivery.",
            route: "/portfolio#experience",
        },
        {
            title: "Blog",
            icon: LibraryBigIcon,
            desc: "Engineering insights, architecture, frontend workflows.",
            route: "/blog",
        },
        {
            title: "Lab",
            icon: FlaskConicalIcon,
            desc: "Experiments, mini games, interactive playground.",
            route: "/lab",
        },
    ];

    return (
        <main className="relative overflow-hidden bg-black text-white">
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-30 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -right-25 top-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
                <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
            </div>

            {/* Hero */}
            <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-4 py-28 md:grid-cols-2 md:px-6">
                {/* Left Content */}
                <div>
                    <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                        Available for Frontend Opportunities
                    </p>

                    <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                        Joyal George K J <br />
                        <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                            Product-Focused Frontend Engineer
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
                        Building scalable, performant, and production-ready web
                        experiences using React, Next.js, and TypeScript.
                        Helping teams ship polished products users love.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/portfolio"
                            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                        >
                            Explore Portfolio
                        </Link>

                        <Link
                            href="/portfolio#projects"
                            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5"
                        >
                            View Projects
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">
                        {/* Fake Browser Top */}
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-400" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400" />
                            <span className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        {/* Mock Dashboard */}
                        <div className="space-y-4">
                            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
                                <p className="text-xs uppercase tracking-widest text-zinc-500">
                                    Current Stack
                                </p>
                                <p className="mt-2 text-sm text-zinc-200">
                                    React · Next.js · TypeScript · JavaScript ·
                                    Tailwind
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
                                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                                        Weekly Users
                                    </p>
                                    <p className="mt-2 text-3xl font-semibold text-cyan-300">
                                        1000+
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
                                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                                        OSS Repos
                                    </p>
                                    <p className="mt-2 text-3xl font-semibold text-violet-300">
                                        6+
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
                                <p className="text-xs uppercase tracking-widest text-zinc-500">
                                    Featured Project
                                </p>
                                <p className="mt-2 text-sm font-medium text-white">
                                    Senku.io
                                </p>
                                <p className="mt-1 text-sm text-zinc-400">
                                    To index human technological progress as a
                                    version-controlled, functional library.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                                {stats.map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-sm text-zinc-300 backdrop-blur-md"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Glow Ring */}
                    <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>
            </section>

            {/* Preview Sections */}
            <section className="relative mx-auto max-w-7xl px-4 pb-24 md:px-6">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                        Explore
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                        What You’ll Find Inside
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {highlights.map((item) => (
                        <div
                            key={item.title}
                            className="group rounded-3xl border border-white/10 bg-transparent p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/8 cursor-pointer flex flex-col gap-4"
                        >
                            <item.icon
                                height={24}
                                width={24}
                                className="rounded-2xl hover:text-cyan-400"
                            />

                            <h3 className="text-lg font-semibold text-white">
                                {item.title}
                            </h3>

                            <p className="text-sm leading-6 text-zinc-400">
                                {item.desc}
                            </p>

                            <Link
                                href={item.route}
                                className="text-sm text-cyan-300 transition group-hover:translate-x-1"
                            >
                                Explore →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="mx-auto max-w-7xl px-4 pb-28 md:px-6">
                <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-8 md:p-12">
                    <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                            Let’s Build
                        </p>

                        <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                            Need a frontend engineer who ships real products?
                        </h3>

                        <p className="mt-5 text-zinc-400">
                            I help startups, founders, and teams build scalable
                            interfaces, modern web apps, and polished product
                            experiences.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black"
                            >
                                Start a Conversation
                            </Link>

                            <Link
                                href="/portfolio"
                                className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/5"
                            >
                                View Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
