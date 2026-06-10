"use client";

import WelcomeLoader from "@/components/ui/Welcome";
import { Suspense } from "react";

function WelcomePage() {
    return (
        <Suspense fallback={null}>
            <WelcomeLoader />
        </Suspense>
    );
}

export default WelcomePage;
