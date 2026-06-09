"use client";

import { useSearchParams } from "next/navigation";

export default function WelcomeLoader() {
    const searchParams = useSearchParams();
    let visitorName = "________";

    const encodedUser = searchParams.get("u");

    if (encodedUser) {
        try {
            // 2. Decode the Base64 string safely
            visitorName = atob(encodedUser);

            // 3. Scrub the URL parameter immediately so it doesn't re-trigger on refresh
        } catch (error) {
            console.error(
                "WelcomeLoader: Failed to decode 'u' parameter.",
                error
            );
        }
    }

    return (
        <div className="fixed inset-0 z-9999 flex min-h-screen items-center justify-center bg-background px-6 text-center text-typography transition-opacity duration-500">
            <div className="max-w-xl space-y-8">
                {/* Loading Spinner */}
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary"></div>
                {/* Personal Message */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-semibold tracking-tight text-typography md:text-5xl">
                        Hi {visitorName ?? "Visitor"},
                    </h1>
                    <p className="mx-auto text-base leading-8 text-typography/70 md:text-lg">
                        Thanks for stopping by and taking the time to explore my
                        work.
                    </p>
                </div>
            </div>
        </div>
    );
}
