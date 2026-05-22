import { DESCRIPTION, NAME, STATS, TITLE } from "@/constants/basic";

export default function AboutCard() {
    return (
        <>
            <p className="text-sm uppercase tracking-[0.2em] text-typography/75">
                About
            </p>

            <h1 className="text-2xl font-semibold tracking-tight md:text-5xl">
                {NAME}
            </h1>

            <p className="text-lg text-primary">
                {TITLE}
            </p>

            <p className="max-w-3xl leading-7 text-typography/75">
                {DESCRIPTION}
            </p>

            <div className="grid gap-4 md:grid-cols-4">
                {STATS.map((item) => (
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
