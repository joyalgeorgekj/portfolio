"use client";

import { Blog } from "@/types/blog.type";
import { BookOpenIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "../layout/Section";
import useViewportCheck from "@/hooks/useViewportCheck";
import { useRef } from "react";

interface Props {
    post: Blog;
    body?: string;
}

export default function BlogCard({ post, body }: Props) {
    const cardRef = useRef<HTMLAnchorElement | null>(null);
    const isVisible = useViewportCheck(cardRef);

    if (!post || body === "") notFound();

    if (body)
        return (
            <Section id="blog" sectionClass="section">
                <article
                    key={post.title}
                    className="group rounded-3xl border border-typography/10 bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 flex flex-col gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-primary/20 to-violet-400/20 flex flex-col justify-center items-center">
                        <BookOpenIcon width={24} height={24} />
                    </div>

                    <p className="text-xs uppercase tracking-[0.18em] text-typography/75">
                        {post.category}
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight transition group-hover:text-primary">
                        {post.title}
                    </h3>

                    <div
                        className="markdown-body"
                        dangerouslySetInnerHTML={{
                            __html: body,
                        }}
                    />

                    <div className="flex items-center gap-3 text-sm text-typography/75">
                        <span>{post.readingTime}</span>
                        <span>•</span>
                        <span>{post.publishedAt}</span>
                    </div>
                </article>
            </Section>
        );

    return (
        <Link
            key={post.title}
            href={"blog/" + post.id}
            ref={cardRef}
            className={`group rounded-3xl border border-typography/10 bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 flex flex-col gap-4 opacity-0 fade-in ${isVisible ? "in-view" : ""}`}>
            <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-primary/20 to-violet-400/20 flex flex-col justify-center items-center">
                <BookOpenIcon width={24} height={24} />
            </div>

            <p className="text-xs uppercase tracking-[0.18em] text-typography/75">
                {post.category}
            </p>

            <h3 className="text-2xl font-semibold leading-tight transition group-hover:text-primary">
                {post.title}
            </h3>

            <p className="max-w-2xl leading-7 text-typography/75">
                {post.prevDescription}
            </p>

            <div className="flex items-center gap-3 text-sm text-typography/75">
                <span>{post.readingTime}</span>
                <span>•</span>
                <span>{post.publishedAt}</span>
            </div>
            <p className="inline-flex text-sm text-primary transition group-hover:translate-x-1">
                Read More →
            </p>
        </Link>
    );
}
