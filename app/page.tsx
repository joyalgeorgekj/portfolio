// app/page.tsx
import Link from "next/link";
import ProjectCard from "../components/cards/ProjectCard";
import { PROJECTS } from "@/content/projects/projects";
import { SKILLS } from "@/content/skills/skills";
import { Skill } from "@/types/skill.type";
import SkillCard from "@/components/cards/SkillCard";
import Section from "@/components/layout/Section";
import { OPENSOURCE } from "@/content/opensource/opensource";
import ExploreCard from "@/components/cards/ExploreCard";
import AnimateCard from "@/components/ui/AnimateCard";
import { DESCRIPTION, NAME, STATS, TITLE } from "@/constants/basic";

export default function Home() {
    const stack: Skill[] = SKILLS.core;

    const highlights = [
        {
            title: "Featured Projects",
            desc: "Scalable products, polished UI systems, real-world impact.",
            route: "/portfolio#projects",
        },
        {
            title: "Open Source",
            desc: "Contributions to Appwrite, Docker Docs, BuildKit and more.",
            route: "/portfolio#opensource",
        },
        {
            title: "Skills",
            desc: "React, Next.js, TypeScript, Performance, Architecture.",
            route: "/portfolio#skills",
        },
        {
            title: "Experience",
            desc: "Freelance, contract, production-focused frontend delivery.",
            route: "/portfolio#experience",
        },
        {
            title: "Blog",
            desc: "Engineering insights, architecture, frontend workflows.",
            route: "/blog",
        },
        {
            title: "Lab",
            desc: "Experiments, mini games, interactive playground.",
            route: "/lab",
        },
    ];

    return (
        <>
            {/* Hero */}
            <Section
                id="hero"
                sectionClass="relative mx-auto grid min-h-[88dvh] max-w-7xl items-center gap-14 px-4 py-10 md:grid-cols-2 md:px-6 ">
                {/* Left Content */}
                <div className="grid gap-4">
                    <p className="w-fit inline-flex justify-center items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs text-primary">
                        <span className="animate-pulse bg-primary w-2 h-2 rounded-full"></span>{" "}
                        Available for Opportunities
                    </p>

                    <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-7xl">
                        {NAME}
                    </h1>

                    <h2 className="text-2xl md:text-4xl capitalize text-primary font-extrabold">
                        {TITLE}
                    </h2>

                    <p className=" max-w-xl text-base leading-7 text-typography/75 md:text-lg">
                        {DESCRIPTION}
                    </p>

                    {/* CTA */}
                    <div className="w-full grid md:grid-cols-3 grid-cols-1 *:w-full *:text-center gap-4">
                        <Link href="/portfolio" className="btn btn-primary">
                            Explore Portfolio
                        </Link>

                        <Link
                            href="/portfolio#projects"
                            className="btn btn-common">
                            View Projects
                        </Link>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative custom-cursor">
                    <div className="card bg-background rounded-3xl border border-typography/10 p-5 shadow-2xl">
                        {/* Fake Browser Top */}
                        <div className="mb-5 flex items-center gap-2">
                            <span className="group-hover:animate-pulse h-3 w-3 rounded-full bg-red-400" />
                            <span className="group-hover:animate-pulse h-3 w-3 rounded-full bg-yellow-400" />
                            <span className="group-hover:animate-pulse h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        {/* Mock Dashboard */}
                        <div className="space-y-4">
                            <div className="card rounded-2xl border border-typography/10 bg-background p-4">
                                <p className="text-xs uppercase tracking-widest text-typography/75">
                                    Current Stack
                                </p>
                                <div className="mt-2 grid md:grid-cols-7 grid-cols-3 gap-2 justify-between text-sm text-zinc-200">
                                    {stack.map((skill) => (
                                        <AnimateCard key={skill.title}>
                                            <SkillCard skill={skill} />
                                        </AnimateCard>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <AnimateCard>
                                    <div className="card rounded-2xl border border-typography/10 bg-background p-4">
                                        <p className="text-xs uppercase tracking-widest text-typography/75">
                                            Weekly Users
                                        </p>
                                        <p className="mt-2 text-3xl font-semibold text-primary">
                                            1500+
                                        </p>
                                    </div>
                                </AnimateCard>

                                <AnimateCard>
                                    <div className="card rounded-2xl border border-typography/10 bg-background p-4">
                                        <p className="text-xs uppercase tracking-widest text-typography/75">
                                            OSS Repos
                                        </p>
                                        <p className="mt-2 text-3xl font-semibold text-violet-300">
                                            {OPENSOURCE.length}+
                                        </p>
                                    </div>
                                </AnimateCard>
                            </div>

                            {PROJECTS.filter((val) => val.featured).map(
                                (val) => (
                                    <AnimateCard
                                        key={val.title
                                            .replaceAll(" ", "")
                                            .toLowerCase()}>
                                        <ProjectCard project={val} />
                                    </AnimateCard>
                                )
                            )}

                            {/* Stats */}
                            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                                {STATS.map((item) => (
                                    <AnimateCard key={item}>
                                        <div className="card rounded-2xl border border-typography/10 bg-background px-4 py-4 text-sm text-typography/75 ">
                                            {item}
                                        </div>
                                    </AnimateCard>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Glow Ring */}
                </div>
            </Section>

            {/* Preview Sections */}
            <Section
                id="preview"
                sectionClass="relative mx-auto max-w-7xl px-4 pb-24 md:px-6">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.2em] text-typography/75">
                        Explore
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                        What You’ll Find Inside
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {highlights.map((item, ind) => (
                        <AnimateCard key={ind} delayTimes={ind}>
                            <ExploreCard explore={item} />
                        </AnimateCard>
                    ))}
                </div>
            </Section>

            {/* Bottom CTA */}
            <Section
                id="cta"
                sectionClass="mx-auto max-w-7xl px-4 pb-28 md:px-6">
                <div className="rounded-3xl border border-typography/10 bg-background p-8 md:p-12">
                    <div className="max-w-2xl flex flex-col gap-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-typography/75">
                            Let’s Build
                        </p>

                        <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
                            Need a frontend engineer who ships real products?
                        </h3>

                        <p className="text-typography/75">
                            I help startups, founders, and teams build scalable
                            interfaces, modern web apps, and polished product
                            experiences.
                        </p>

                        <div className="grid grid-cols-2 *:w-full *:text-center md:w-fit gap-4">
                            <Link
                                href="mailto:joyalgeorgekj@gmail.com"
                                className="btn btn-primary">
                                Email Me
                            </Link>

                            <Link
                                href="https://linkedin.com/in/joyalgeorgekj"
                                target="_blank"
                                className="btn btn-common">
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
