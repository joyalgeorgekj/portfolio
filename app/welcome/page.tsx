"use client";

import WelcomeLoader from "@/components/ui/Welcome";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

function page() {
    const router = useRouter();

    setTimeout(() => {
        router.push('/')
    }, 2000)

    return (
        <Suspense fallback={null}>
            <WelcomeLoader />
        </Suspense>
    );
}

export default page;
