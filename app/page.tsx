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

    const stack = [
        "Typescript",
        "Javascript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
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
        <>
            {/* Hero */}
            <section className="relative mx-auto grid min-h-[88dvh] max-w-7xl items-center gap-14 px-4 py-28 md:grid-cols-2 md:px-6">
                {/* Left Content */}
                <div className="grid gap-4 *:w-fit">
                    <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                        Available for Frontend Opportunities
                    </p>

                    <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                        Joyal George K J <br />
                    </h1>
                    <h2 className="text-3xl bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent font-bold">
                        Product-Focused Frontend Engineer
                    </h2>

                    <p className=" max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
                        Building scalable, performant, and production-ready web
                        experiences using React, Next.js, and TypeScript.
                        Helping teams ship polished products users love.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/portfolio"
                            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                        >
                            Explore Portfolio
                        </Link>

                        <Link
                            href="/portfolio#projects"
                            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5 backdrop-blur-xl bg-transparent"
                        >
                            View Projects
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5 backdrop-blur-xl bg-transparent"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative">
                    <div className="rounded-3xl border border-white/10  p-5 backdrop-blur-xl shadow-2xl">
                        {/* Fake Browser Top */}
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-400" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400" />
                            <span className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        {/* Mock Dashboard */}
                        <div className="space-y-4">
                            <div className="rounded-2xl border border-white/10 backdrop-blur-xl bg-transparent p-4">
                                <p className="text-xs uppercase tracking-widest text-zinc-500">
                                    Current Stack
                                </p>
                                <p className="mt-2 text-sm text-zinc-200">
                                    {stack.join(", ")}
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 backdrop-blur-xl bg-transparent p-4">
                                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                                        Weekly Users
                                    </p>
                                    <p className="mt-2 text-3xl font-semibold text-cyan-300">
                                        1000+
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 backdrop-blur-xl bg-transparent p-4">
                                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                                        OSS Repos
                                    </p>
                                    <p className="mt-2 text-3xl font-semibold text-violet-300">
                                        6+
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 backdrop-blur-xl bg-transparent p-4">
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
                <div className="rounded-3xl border border-white/10 backdrop-blur-xl bg-transparent p-8 md:p-12">
                    <div className="max-w-2xl flex flex-col gap-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                            Let’s Build
                        </p>

                        <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
                            Need a frontend engineer who ships real products?
                        </h3>

                        <p className="text-zinc-400">
                            I help startups, founders, and teams build scalable
                            interfaces, modern web apps, and polished product
                            experiences.
                        </p>

                        <div className="flex flex-wrap gap-4">
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
                    </div>
                </div>
            </section>
        </>
    );
}
