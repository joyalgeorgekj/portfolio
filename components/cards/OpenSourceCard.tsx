"use client";

import useViewportCheck from "@/hooks/useViewportCheck";
import { Achievement } from "@/types/achievements.type";
import { OpenSource } from "@/types/opensource.type";
import { Project } from "@/types/projects.type";
import Link from "next/link";
import { useRef } from "react";

interface Props {
    opensource: OpenSource;
}

export default function OpenSourceCard({ opensource }: Props) {
    const cardRef = useRef<HTMLAnchorElement | null>(null);
    const isVisible = useViewportCheck(cardRef);

    return (
        <Link
            href={opensource.url}
            ref={cardRef}
            aria-label={
                'Open Source Contributior to "' + opensource.project + '"'
            }
            target="_blank"
            className={`card rounded-2xl border border-typography/10 p-5 flex flex-col gap-2 opacity-0 fade-in ${isVisible ? "in-view" : ""}`}>
            <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold">{opensource.project}</h3>

                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                    {opensource.type}
                </span>
            </div>
            <p className="text-sm text-typography/75">
                {opensource.stack?.join(", ")}
            </p>
            <p className="text-sm leading-6 text-typography/75">
                {opensource.description}
            </p>
        </Link>
    );
}
