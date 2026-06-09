"use client";

import SocialShare from "@/components/ui/SocialShare";
import { BASE_URL } from "@/constants/basic";
import { EXPERIMENTS } from "@/content/lab/experiments";
import { useEffect, useMemo, useState } from "react";

function encode(value: string) {
    return btoa(value.trim())
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

export default function WelcomeLinkGenerator() {
    let experiment = EXPERIMENTS.filter(
        (val) =>
            val.title.split(" ").join("-").toLowerCase() ===
            "welcome-links-generator"
    )[0];

    const [name, setName] = useState("");

    const [copied, setCopied] = useState(false);

    const generatedLink = useMemo(() => {
        if (!name.trim()) return "";

        return `${BASE_URL}/welcome?u=${encode(name)}`;
    }, [name]);

    async function handleCopy() {
        if (!generatedLink) return;

        try {
            await navigator.clipboard.writeText(generatedLink);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 rounded-xl bg-background my-8">
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
                <header className="flex flex-col gap-6">
                    {experiment.status && (
                        <div className="flex items-center gap-3">
                            <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-primary">
                                {experiment.status}
                            </span>
                        </div>
                    )}

                    <div className="flex flex-col gap-5">
                        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-typography md:text-5xl">
                            {experiment.title}
                        </h1>

                        {experiment.desc && (
                            <p className="max-w-2xl text-lg leading-8 text-typography/85">
                                {experiment.desc}
                            </p>
                        )}
                    </div>
                </header>

                <div className="flex flex-col gap-6">
                    <label htmlFor="visitor-name" className="sr-only">
                        Visitor Name
                    </label>

                    <input
                        id="visitor-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter visitor name"
                        className="w-full rounded-2xl border border-typography/10 bg-white/5 px-5 py-4 text-sm text-typography outline-none placeholder:text-typography/50"
                    />

                    {generatedLink ? (
                        <div className="overflow-hidden rounded-2xl border border-typography/10 bg-white/5">
                            <div className="border-b border-typography/10 px-5 py-3">
                                <p className="text-sm text-typography/60">
                                    Generated Link
                                </p>
                            </div>

                            <div className="overflow-x-auto px-5 py-4">
                                <code className="text-sm text-typography/80">
                                    {generatedLink}
                                </code>
                            </div>
                        </div>
                    ) : null}

                    <div className="flex flex-col gap-3 md:flex-row">
                        <button
                            type="button"
                            disabled={!generatedLink}
                            onClick={handleCopy}
                            className="btn btn-primary w-full md:w-fit disabled:cursor-not-allowed disabled:bg-primary/50 disabled:opacity-50">
                            {copied ? "Copied" : "Copy Link"}
                        </button>

                        {generatedLink ? (
                            <a
                                href={generatedLink}
                                target="_blank"
                                className="btn btn-secondary w-full md:w-fit">
                                Open Preview
                            </a>
                        ) : null}
                    </div>
                </div>

                <footer className="mt-16 border-t border-typography/10 pt-8">
                    <div>
                        <SocialShare
                            title={experiment.title}
                            url={`${BASE_URL}/blog/${experiment.title.split(" ").join("-").toLowerCase()}`}
                        />
                    </div>
                </footer>
            </div>
        </section>
    );
}
