import WelcomeLinkGenerator from "@/components/lab/WelcomeLinkGenerator";
import SocialShare from "@/components/ui/SocialShare";
import { BASE_URL } from "@/constants/basic";
import { EXPERIMENTS } from "@/content/lab/experiments";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
    const post = EXPERIMENTS.find(
        (blog) =>
            blog.id ===
            "welcome-links-generator"
    );

    if (!post) notFound();

    return {
        title: post.title,
        description: post.desc,
        alternates: {
            canonical: `/lab/${post.id}`,
        },
        twitter: {
            images: `/lab/${post.id}/opengraph-image`,
            card: "summary_large_image",
            creator: "joyalgeorgekj",
            title: post.title,
            description: post.desc,
        },
        openGraph: {
            type: "website",
            title: post.title,
            description: post.desc,
            url: `${BASE_URL}/lab/${post.id}`,
            images: `/lab/${post.id}/opengraph-image`,
        },
    };
}

export default function Page() {
    const experiment = EXPERIMENTS.filter(
        (val) =>
            val.id ===
            "welcome-links-generator"
    )[0];

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

                <WelcomeLinkGenerator />

                <footer className="mt-16 border-t border-typography/10 pt-8">
                    <div>
                        <SocialShare
                            title={experiment.title}
                            url={`${BASE_URL}/blog/${experiment.id}`}
                        />
                    </div>
                </footer>
            </div>
        </section>
    );
}
