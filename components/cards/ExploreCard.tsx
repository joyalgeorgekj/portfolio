"use client";

import useViewportCheck from "@/hooks/useViewportCheck";
import {
    FlaskConicalIcon,
    GitPullRequestIcon,
    LibraryBigIcon,
    LucideIcon,
    LuggageIcon,
    StarsIcon,
    WrenchIcon,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface Props {
    title: string;
    desc: string;
    route: string;
}

const ICONS: Record<string, LucideIcon> = {
    "Featured Projects": StarsIcon,
    "Open Source": GitPullRequestIcon,
    Skills: WrenchIcon,
    Experience: LuggageIcon,
    Blog: LibraryBigIcon,
    Lab: FlaskConicalIcon,
};

export default function ExploreCard({ explore }: { explore: Props }) {
    const cardRef = useRef<HTMLAnchorElement | null>(null);
    const isVisible = useViewportCheck(cardRef);

    const Icons = ICONS[explore.title];

    return (
        <Link
            ref={cardRef}
            aria-label={'explore "' + explore.title + '"'}
            target="_blank"
            href={explore.route}
            className={`card group rounded-3xl border border-typography/10 bg-background p-6  flex flex-col gap-4 opacity-0 fade-in ${isVisible ? "in-view" : ""}`}>
            <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-primary/20 to-violet-400/20 flex justify-center items-center">
                <Icons
                    height={24}
                    width={24}
                    className="rounded-2xl group-hover:text-primary"
                />
            </div>

            <h3 className="text-lg font-semibold text-typography">
                {explore.title}
            </h3>

            <p className="text-sm leading-6 text-typography/75">
                {explore.desc}
            </p>

            <span className="text-sm text-primary transition group-hover:translate-x-1">
                Explore →
            </span>
        </Link>
    );
}
