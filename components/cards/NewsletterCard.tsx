"use client";

import { InfoIcon } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => setMessage(""), 5000);
    }, [message]);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (loading) return;

        try {
            setLoading(true);
            setMessage("");
            setError(false);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscribe`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(true);
                setMessage(data.message || "Something went wrong");
                return;
            }

            setMessage(data.message || "Verification email sent");
            setEmail("");
        } catch (error) {
            console.log(error);
            setError(true);
            setMessage("Failed to connect to newsletter server");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 md:flex-row">
                <label htmlFor="email-input" className="sr-only">
                    Enter email you want to get newsletters
                </label>

                <input
                    type="email"
                    id="email-input"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-typography/10 bg-white/5 px-5 py-3 text-sm text-typography outline-none placeholder:text-typography/75"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full md:w-fit disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? "Subscribing..." : "Subscribe"}
                </button>
            </form>

            {message ? (
                <p
                    role="status"
                    aria-live="polite"
                    className={`mt-3 text-sm flex gap-2 items-center ${
                        error ? "text-red-400" : "text-green-400"
                    }`}>
                    <InfoIcon height={16} width={16} />
                    {message}
                </p>
            ) : null}
        </>
    );
}
