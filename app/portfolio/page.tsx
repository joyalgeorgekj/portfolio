// app/portfolio/page.tsx
import Link from "next/link";
import Section from "../../components/layout/Section";
import type { Metadata } from "next";
import { SKILLS } from "@/content/skills/skills";
import { PROJECTS } from "@/content/projects/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import { EXPERIENCE } from "@/content/experience/experience";
import ExperienceCard from "@/components/cards/ExperienceCard";
import { OPENSOURCE } from "@/content/opensource/opensource";
import { ACHIEVEMENTS } from "@/content/achievements/achievements";
import { BLOGS } from "@/content/blog/blog";
import BlogCard from "@/components/cards/BlogCard";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Portfolio",
};

export default function Portfolio() {
    const navItems = [
        { label: "About", id: "" },
        { label: "Skills", id: "skills" },
        { label: "Projects", id: "projects" },
        { label: "Experience", id: "experience" },
        { label: "Open Source", id: "opensource" },
        { label: "Achievements", id: "achievements" },
        { label: "Blog", id: "blog" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-[260px_1fr] md:px-6">
            {/* Sidebar */}
            <aside className="top-28 h-fit md:sticky self-start">
                <div className="rounded-3xl bg-background p-5 ">
                    <p className="mb-5 text-xs uppercase tracking-[0.25em] text-typography/75">
                        Portfolio
                    </p>

                    <nav className="space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="block rounded-xl px-3 py-2 text-sm text-typography/75 transition hover:bg-white/5 hover:text-typography">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-6 border-t border-typography/10 pt-5">
                        <p className="text-xs text-typography/75">Current Focus</p>
                        <p className="mt-2 text-sm text-typography/75">
                            Product UI, scalable frontend systems, open source.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Content */}
            <div className="space-y-10">
                {/* Hero */}
                <section
                    id="about"
                    className="rounded-3xl bg-background p-8 flex flex-col gap-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-typography/75">
                        About
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                        Joyal George K J
                    </h1>

                    <p className="text-lg text-primary">
                        Product-Focused Frontend Engineer
                    </p>

                    <p className="max-w-3xl leading-7 text-typography/75">
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
                                className="card rounded-2xl border border-typography/10 px-4 py-4 text-sm text-typography/75">
                                &gt; {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <Section
                    id="skills"
                    link="https://www.linkedin.com/in/joyalgeorgekj/details/skills/"
                    heading="Skills"
                    container="mt-6 grid gap-5 md:grid-cols-2">
                    {Object.entries(SKILLS)
                        .slice(1)
                        .map(([group, items]) => (
                            <div
                                key={group}
                                className="group card rounded-2xl p-5">
                                <h3 className="capitalize text-sm font-semibold text-typography/75">
                                    {group}
                                </h3>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {items.map((item) => (
                                        <div
                                            key={item.title}
                                            className="bg-white/5 p-4 rounded border border-typography/10 flex justify-center items-center group-hover:border-primary/30 "
                                            title={item.title}>
                                            {item.icon ? (
                                                <Image
                                                    width={32}
                                                    height={32}
                                                    alt={item.title}
                                                    src={
                                                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/" +
                                                        item.icon
                                                    }
                                                    className="w-8 h-8 rounded"
                                                />
                                            ) : (
                                                <span className="rounded-full border-typography/10 px-3 py-1 text-sm text-typography/75 cursor-pointer">
                                                    {item.title}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </Section>

                {/* Projects */}
                <Section
                    id="projects"
                    link="https://www.linkedin.com/in/joyalgeorgekj/details/projects/"
                    heading="Featured Projects"
                    container="mt-6 grid gap-5 md:grid-cols-2">
                    {PROJECTS.map((project) => (
                        <ProjectCard
                            project={project}
                            key={project.title
                                .replaceAll(" ", "")
                                .toLowerCase()}
                        />
                    ))}
                </Section>

                {/* Experience */}
                <Section
                    id="experience"
                    link="https://www.linkedin.com/in/joyalgeorgekj/details/experience/"
                    heading="Experience">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-2.75 top-0 h-full w-px bg-white/10" />

                        <div className="space-y-8">
                            {EXPERIENCE.map((experience) => (
                                <ExperienceCard
                                    experience={experience}
                                    key={experience.id}
                                />
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Open Source */}
                <Section
                    id="opensource"
                    link="https://www.linkedin.com/in/joyalgeorgekj/details/volunteering-experiences/"
                    heading="Open Source Contributions"
                    container="mt-6 grid gap-5 md:grid-cols-2">
                    {OPENSOURCE.map((contribution) => (
                        <div
                            key={contribution.project}
                            className="card rounded-2xl border border-typography/10 p-5 flex flex-col gap-2">
                            <div className="flex flex-wrap items-center gap-3">
                                <h3 className="text-xl font-semibold">
                                    {contribution.project}
                                </h3>

                                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                                    {contribution.type}
                                </span>
                            </div>
                            <p className="text-sm text-typography/75">
                                {contribution.stack?.join(", ")}
                            </p>
                            <p className="text-sm leading-6 text-typography/75">
                                {contribution.description}
                            </p>
                        </div>
                    ))}
                </Section>

                {/* Achievements */}
                <Section
                    id="achievements"
                    linkNeeded={false}
                    heading="Achievements"
                    container="mt-6 grid gap-5 md:grid-cols-1">
                    {ACHIEVEMENTS.map((item) => (
                        <div
                            key={item.id}
                            className="card rounded-2xl border border-typography/10 p-5 flex flex-col gap-2">
                            {/* Left */}
                            <div className="max-w-2xl flex flex-col gap-2">
                                {item.organization && (
                                    <p className="text-sm text-typography/75 uppercase">
                                        {item.organization}
                                    </p>
                                )}

                                <div className="flex flex-wrap items-center gap-3">
                                    <h3 className="text-lg font-semibold">
                                        {item.title}
                                    </h3>

                                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                                        {item.type}
                                    </span>
                                </div>

                                {item.description && (
                                    <p className="leading-7 text-typography/75">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </Section>

                {/* Blog */}
                <Section
                    link="https://www.linkedin.com/in/joyalgeorgekj/recent-activity/all/"
                    heading="Latest Writing"
                    id="blog"
                    container="mt-6 grid gap-5 md:grid-cols-2">
                    {BLOGS.slice().splice(Math.floor(Math.random() * (BLOGS.length - 4)), 4).map((blog) => (
                        <BlogCard key={blog.id} post={blog} />
                    ))}
                </Section>

                {/* Contact */}
                <section
                    id="contact"
                    className="rounded-3xl border border-typography/10 bg-background p-8 scroll-mt-28 grid gap-4 sticky">
                    <h2 className="text-3xl font-semibold">
                        Need a frontend engineer who ships?
                    </h2>

                    <p className="max-w-2xl text-typography/75">
                        Available for frontend engineering roles, freelance
                        work, product collaboration, and startup opportunities.
                    </p>

                    <div className="flex flex-wrap gap-4">
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
                </section>
            </div>
        </div>
    );
}
