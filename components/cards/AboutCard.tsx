import { stats } from "@/constants/stats";

export default function AboutCard() {
    return (
        <>
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
                Frontend engineer with 3+ years of experience building scalable,
                performant, and maintainable React / Next.js applications.
                Strong focus on UI architecture, product quality, state
                management, and shipping features that users actually need.
            </p>

            <div className="grid gap-4 md:grid-cols-4">
                {stats.map((item) => (
                    <div
                        key={item}
                        className="card rounded-2xl border border-typography/10 px-4 py-4 text-sm text-typography/75">
                        &gt; {item}
                    </div>
                ))}
            </div>
        </>
    );
}
