import Link from "next/link";
import { ReactNode } from "react";

export default function Section({
    children,
    link,
    heading,
    linkNeeded = true,
    id,
    container = "mt-6 space-y-3",
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
            className="rounded-3xl bg-background p-8 scroll-mt-28">
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

            <div className={container}>{children}</div>
        </section>
    );
}
