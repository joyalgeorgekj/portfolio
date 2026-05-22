// app/portfolio/page.tsx
import Link from "next/link";
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
import AchievementCard from "@/components/cards/AchievementCard";
import OpenSourceCard from "@/components/cards/OpenSourceCard";
import SkillCategoryCard from "@/components/cards/SkillCategoryCard";
import AboutCard from "@/components/cards/AboutCard";
import Section from "@/components/layout/Section";
import AnimateCard from "@/components/ui/AnimateCard";

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

    const startIndex = new Date().getDate() % Math.max(BLOGS.length - 4, 1);

    return (
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-[260px_1fr] md:px-6">
            {/* Sidebar */}
            <aside className="md:top-28 h-fit grid sticky self-start bg-background rounded-3xl">
                <div className="bg-background p-5 ">
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
                        <p className="text-xs text-typography/75">
                            Current Focus
                        </p>
                        <p className="mt-2 text-sm text-typography/75">
                            Product UI, scalable frontend systems, open source.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Content */}
            <div className="space-y-10">
                {/* Hero */}
                <Section
                    id="about"
                    sectionClass="rounded-3xl bg-background p-8 flex flex-col gap-4">
                    <AnimateCard>
                        <AboutCard />
                    </AnimateCard>
                </Section>

                {/* Skills */}
                <Section
                    id="skills"
                    link="https://www.linkedin.com/in/joyalgeorgekj/details/skills/"
                    heading="Skills"
                    container="mt-6 grid gap-5 md:grid-cols-2">
                    {Object.entries(SKILLS)
                        .slice(1)
                        .map(([group, items], ind) => (
                            <AnimateCard key={group} delayTimes={ind}>
                                <SkillCategoryCard
                                    category={group}
                                    skills={items}
                                />
                            </AnimateCard>
                        ))}
                </Section>

                {/* Projects */}
                <Section
                    id="projects"
                    link="https://www.linkedin.com/in/joyalgeorgekj/details/projects/"
                    heading="Featured Projects"
                    container="mt-6 grid gap-5 md:grid-cols-2">
                    {PROJECTS.map((project, ind) => (
                        <AnimateCard
                            delayTimes={ind}
                            key={project.title
                                .replaceAll(" ", "")
                                .toLowerCase()}>
                            <ProjectCard project={project} />
                        </AnimateCard>
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
                            {EXPERIENCE.map((experience, ind) => (
                                <AnimateCard
                                    key={experience.id}
                                    delayTimes={ind}>
                                    <ExperienceCard experience={experience} />
                                </AnimateCard>
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
                    {OPENSOURCE.map((contribution, ind) => (
                        <AnimateCard key={contribution.id} delayTimes={ind}>
                            <OpenSourceCard opensource={contribution} />
                        </AnimateCard>
                    ))}
                </Section>

                {/* Achievements */}
                <Section
                    id="achievements"
                    linkNeeded={false}
                    heading="Achievements"
                    container="mt-6 grid gap-5 md:grid-cols-1">
                    {ACHIEVEMENTS.map((item, ind) => (
                        <AnimateCard key={item.id} delayTimes={ind}>
                            <AchievementCard achievement={item} />
                        </AnimateCard>
                    ))}
                </Section>

                {/* Blog */}
                <Section
                    link="https://www.linkedin.com/in/joyalgeorgekj/recent-activity/all/"
                    heading="Latest Writing"
                    id="blog"
                    container="mt-6 grid gap-5 md:grid-cols-2">
                    {BLOGS.slice(startIndex, startIndex + 4).map(
                        (blog, ind) => (
                            <AnimateCard key={blog.id} delayTimes={ind}>
                                <BlogCard post={blog} />
                            </AnimateCard>
                        )
                    )}
                </Section>

                {/* Contact */}
                <Section
                    id="contact"
                    sectionClass="rounded-3xl border border-typography/10 bg-background p-8 scroll-mt-28 grid gap-4 sticky">
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
                </Section>
            </div>
        </div>
    );
}
