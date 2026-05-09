import Link from "next/link";
import { ReactNode } from "react";
import { Url } from "url";

export default function Section({
    children, link, heading, linkNeeded = true, id, container = "mt-6 space-y-3"
}: Readonly<{
    id: string;
    link?: string;
    heading: string;
    children: ReactNode;
    container?: string;
    linkNeeded?: boolean;
}>) {
    return (
        <section
            id={id}
            className="rounded-3xl border border-white/10 backdrop-blur-xl bg-transparent p-8 scroll-mt-28"
        >
            <div className="flex items-center justify-between">
                <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    {heading}
                </h2>
                {linkNeeded && link && <Link
                    href={link}
                    className="text-sm text-cyan-300"
                >
                    View More
                </Link>}
            </div>

            <div className={container}>{children}</div>
        </section>
    );
}
