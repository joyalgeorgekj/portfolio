"use client";

import useViewportCheck from "@/hooks/useViewportCheck";
import Link from "next/link";
import { ReactNode, useRef } from "react";

export default function Section({
    children,
    link,
    heading,
    linkNeeded = true,
    id,
    container = "mt-6 space-y-3",
    sectionClass,
}: Readonly<{
    id: string;
    link?: string;
    heading?: string;
    children: ReactNode;
    container?: string;
    linkNeeded?: boolean;
    sectionClass?: string;
}>) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isVisible = useViewportCheck(sectionRef);

    return (
        <section
            id={id}
            className={`${sectionClass ? sectionClass : "rounded-3xl bg-background p-8 scroll-mt-28"} opacity-0 fadeIn ${isVisible ? "in-view" : ""}`}
            ref={sectionRef}>
            {heading && (
                <div className="flex items-center justify-between">
                    <h2 className="text-sm uppercase tracking-[0.2em] text-typography/75">
                        {heading}
                    </h2>
                    {linkNeeded && link && (
                        <Link href={link} className="text-sm text-primary">
                            View More
                        </Link>
                    )}
                </div>
            )}

            {sectionClass ? (
                <>{children}</>
            ) : (
                <div className={container}>{children}</div>
            )}
        </section>
    );
}
