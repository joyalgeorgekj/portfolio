// app/lab/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { Gamepad2Icon } from "lucide-react";

export const metadata: Metadata = {
    title: "Lab",
};

export default function Lab() {
    const experiments = [
        {
            title: "Developer Terminal",
            desc: "Interactive command palette inspired by modern developer tooling.",
            status: "Prototype",
        },
        {
            title: "React Rendering Visualizer",
            desc: "Experimental UI for understanding component rendering behavior.",
            status: "In Progress",
        },
        {
            title: "Realtime Global Chat",
            desc: "Anonymous realtime discussion space built with Appwrite.",
            status: "Planned",
        },
        {
            title: "Portfolio Theme Engine",
            desc: "Dynamic theming system with runtime color personalization.",
            status: "Research",
        },
    ];

    const miniGames = [
        {
            title: "Bug Squash",
            desc: "Catch and eliminate production bugs before deployment.",
        },
        {
            title: "Typing Race",
            desc: "Developer-focused typing speed challenge using code snippets.",
        },
        {
            title: "Memory Match",
            desc: "Match frontend frameworks, tools, and technologies.",
        },
    ];

    const tools = [
        "Color Generator",
        "JSON Formatter",
        "Regex Playground",
        "Markdown Preview",
        "Gradient Generator",
        "Animation Playground",
    ];

    return (
        <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-6 flex flex-col gap-10">
            {/* Hero */}
            <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                    Experimental Space
                </p>

                <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
                    The{" "}
                    <span className="bg-linear-to-r from-primary via-blue-400 to-violet-400 bg-clip-text text-transparent">
                        Lab
                    </span>
                </h1>

                <p className="mt-6 text-base leading-7 text-zinc-400 md:text-lg">
                    A playground for experiments, prototypes, mini games,
                    developer tools, interaction concepts, and ideas that don’t
                    belong in the main portfolio.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="/portfolio" className="btn btn-common">
                        Back to Portfolio
                    </Link>

                    <button className="btn btn-primary">
                        Explore Experiments
                    </button>
                </div>
            </div>

            {/* Featured Experiments */}
            <section>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                            Featured
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                            Experiments & Concepts
                        </h2>
                    </div>

                    <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/5">
                        View All
                    </button>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2 h-fit">
                    {experiments.map((item) => (
                        <div
                            key={item.title}
                            className="group rounded-3xl border border-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/30 grid gap-3">
                            <div className="flex items-start justify-between gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-primary/20 to-violet-400/20 flex justify-center items-center">
                                    <Gamepad2Icon
                                        height={24}
                                        width={24}
                                        className="rounded-2xl group-hover:text-primary"
                                    />
                                </div>

                                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                                    {item.status}
                                </span>
                            </div>

                            <h3 className="mt-3 text-xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="leading-7 text-zinc-400">
                                {item.desc}
                            </p>

                            <Link
                                href={""}
                                className="text-sm text-primary transition group-hover:translate-x-1">
                                Open Experiment
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mini Games */}
            <section>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Interactive
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                    Mini Games
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                    {miniGames.map((game) => (
                        <div
                            key={game.title}
                            className="group rounded-3xl border border-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/30">
                            <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-primary/20 to-violet-400/20 flex justify-center items-center">
                                <Gamepad2Icon
                                    height={24}
                                    width={24}
                                    className="rounded-2xl group-hover:text-primary"
                                />
                            </div>
                            <h3 className="mt-5 text-xl font-semibold">
                                {game.title}
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-400">
                                {game.desc}
                            </p>

                            <button className="mt-3 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/5 cursor-pointer group-hover:translate-x-1 transition group-hover:bg-white/2">
                                Play
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools */}
            <section>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Utilities
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                    Developer Tools
                </h2>

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {tools.map((tool) => (
                        <button
                            key={tool}
                            className="flex items-center justify-between rounded-2xl border backdrop-blur-xl border-white/10 px-5 py-4 text-left text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-primary/30">
                            <span>{tool}</span>

                            <span className="text-primary">↗</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Terminal Section */}
            {/* <section className="mt-18 rounded-3xl border border-white/10 bg-[#050505] p-6 shadow-2xl"> */}
            {/* Terminal Header */}
            {/* <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />

            <p className="ml-4 text-sm text-zinc-500">
              terminal@joyal.dev
            </p>
          </div> */}

            {/* Terminal Body */}
            {/* <div className="mt-6 space-y-4 font-mono text-sm">
            <p className="text-zinc-500">
              Type commands to explore hidden features.
            </p>

            <div>
              <span className="text-primary">$</span>{" "}
              <span className="text-zinc-300">help</span>
            </div>

            <div className="grid gap-2 text-zinc-400 md:grid-cols-2">
              <p>projects</p>
              <p>skills</p>
              <p>opensource</p>
              <p>games</p>
              <p>contact</p>
              <p>clear</p>
            </div>

            <div>
              <span className="text-primary">$</span>{" "}
              <span className="animate-pulse text-zinc-300">_</span>
            </div>
          </div>
        </section> */}

            {/* CTA */}
            <section className="rounded-3xl backdrop-blur-xl border border-white/10 p-8 md:p-12">
                <div className="max-w-2xl">
                    <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                        Build Something Interesting
                    </p>

                    <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                        Ideas deserve prototypes.
                    </h2>

                    <p className="mt-3 leading-7 text-zinc-400">
                        The lab is where concepts become experiments and
                        experiments become products.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4">
                        <button className="btn btn-primary">
                            Start Exploring
                        </button>

                        <Link href="/portfolio" className="btn btn-common">
                            Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
}
