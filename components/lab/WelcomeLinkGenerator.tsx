"use client";

import { BASE_URL } from "@/constants/basic";
import { useMemo, useState } from "react";

function encode(value: string) {
    return btoa(value.trim())
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

function WelcomeLinkGenerator() {
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
    );
}

export default WelcomeLinkGenerator;
