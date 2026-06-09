"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function WelcomeLoader() {
    const searchParams = useSearchParams();
    const [visitorName, setVisitorName] = useState<string | null>(null);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        // 1. Look for the '?u=' parameter in the URL
        const encodedUser = searchParams.get("u");

        if (encodedUser) {
            try {
                // 2. Decode the Base64 string safely
                const decodedName = atob(encodedUser);
                setVisitorName(decodedName);
                setShowLoader(true);

                // 3. Scrub the URL parameter immediately so it doesn't re-trigger on refresh
            } catch (error) {
                console.error(
                    "WelcomeLoader: Failed to decode 'u' parameter.",
                    error
                );
            }
        }
    }, [searchParams]);

    // If the loader shouldn't be showing, render nothing
    if (!showLoader) return null;

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
