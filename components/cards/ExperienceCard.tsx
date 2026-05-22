"use client";

import { Experience } from "@/types/experience.type";
import Link from "next/link";

export default function ExperienceCard({
    experience,
}: {
    experience: Experience;
}) {
    return (
        <div className={`relative pl-10`}>
            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 h-5.5 w-5.5 rounded-full border border-primary/30 p-1">
                <div className="h-full w-full rounded-full bg-primary" />
            </div>

            {/* Card */}
            <div
                className="card flex flex-col gap-4 rounded-3xl border border-typography/10 p-6 ">
                {/* Top Row */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-semibold text-typography">
                                {experience.role}
                            </h3>

                            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                {experience.employmentType}
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-sm text-typography/75">
                            {experience.url ? (
                                <Link
                                    href={experience.url}
                                    target="_blank"
                                    className="transition hover:text-typography">
                                    {experience.company}
                                </Link>
                            ) : (
                                <span>{experience.company}</span>
                            )}

                            {experience.location && (
                                <>
                                    <span>•</span>
                                    <span>{experience.location}</span>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="rounded-full border border-typography/10 px-4 py-2 text-sm text-typography/75">
                        {experience.startDate} —{" "}
                        {experience.endDate || "Present"}
                    </div>
                </div>

                {/* Description */}
                <p className="leading-7 text-typography/75">
                    {experience.description}
                </p>

                {/* Achievements */}
                {experience.achievements &&
                    experience.achievements.length > 0 && (
                        <div className="">
                            <p className="mb-3 text-sm font-medium text-typography/75">
                                Key Contributions
                            </p>

                            <ul className="space-y-3">
                                {experience.achievements.map((achievement) => (
                                    <li
                                        key={achievement}
                                        className="flex gap-3 text-sm leading-6 text-typography/75">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />

                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                {/* Stack */}
                {experience.stack && experience.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {experience.stack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-typography/10 px-3 py-1 text-xs text-typography/75">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
