"use client";

import { Blog } from "@/types/blog.type";
import { BookOpenIcon, CalendarDaysIcon, Clock3Icon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "../layout/Section";

interface Props {
    post: Blog;
    body?: string;
}

export default function BlogCard({ post, body }: Props) {
    if (!post || body === "") notFound();

    if (body)
        return (
            <section className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 rounded-xl bg-background">
                {/* Background Glow */}
                <div className="pointer-events-none absolute inset-0 overflow-clip">
                    <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                </div>

                <article className="relative mx-auto max-w-3xl">
                    {/* Header */}
                    <header className="mb-14 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-primary">
                                {post.category}
                            </span>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-typography md:text-5xl">
                                {post.title}
                            </h1>

                            {post.prevDescription && (
                                <p className="max-w-2xl text-lg leading-8 text-typography/75">
                                    {post.prevDescription}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-5 text-sm text-typography/60">
                            <div className="flex items-center gap-2">
                                <Clock3Icon size={16} />
                                <span>{post.readingTime}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <CalendarDaysIcon size={16} />
                                <time dateTime={post.publishedAt}>
                                    {post.publishedAt}
                                </time>
                            </div>
                        </div>
                    </header>

                    {/* Divider */}
                    <div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-typography/10 to-transparent" />

                    {/* Markdown */}
                    <div
                        className="markdown-body"
                        dangerouslySetInnerHTML={{
                            __html: body,
                        }}
                    />

                    {/* Footer */}
                    {post.tags && post.tags.length > 0 && (
                        <footer className="mt-16 border-t border-typography/10 pt-8">
                            <div className="flex flex-wrap gap-3">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-typography/10 bg-background/40 px-4 py-2 text-sm text-typography/70 backdrop-blur-md">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </footer>
                    )}
                </article>
            </section>
        );

    return (
        <Link
            key={post.title}
            href={"blog/" + post.id}
            className={`group rounded-3xl border border-typography/10 bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 flex flex-col gap-4`}>
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
