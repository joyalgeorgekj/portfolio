// app/lab/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import LabCard from "@/components/cards/LabCard";
import { EXPERIMENTS } from "@/content/lab/experiments";

export const metadata: Metadata = {
    title: "Lab",
};

export default function Lab() {
    return (
        <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-6 flex flex-col gap-10">
            {/* Hero */}
            <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.22em] text-typography/75">
                    Experimental Space
                </p>

                <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
                    The{" "}
                    <span className="bg-linear-to-r from-primary via-blue-400 to-violet-400 bg-clip-text text-transparent">
                        Lab
                    </span>
                </h1>

                <p className="mt-6 text-base leading-7 text-typography/75 md:text-lg">
                    A space for experiments, developer tools, interaction
                    concepts, and small ideas that explore frontend engineering,
                    UX, and web experiences outside the main portfolio.
                </p>
            </div>

            {/* Featured Experiments */}
            <section id="experiments">
                <div className="mt-4 grid gap-5 md:grid-cols-2 h-fit">
                    {EXPERIMENTS.map((item, ind) => (
                        <LabCard key={ind} game={item} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="rounded-3xl backdrop-blur-3xl border border-typography/10 p-8 md:p-12">
                <div className="max-w-2xl">
                    <p className="text-sm uppercase tracking-[0.22em] text-typography/75">
                        Build Something Interesting
                    </p>

                    <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                        Ideas deserve prototypes.
                    </h2>

                    <p className="mt-3 leading-7 text-typography/75">
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
