import { Blog } from "@/types/blog.type";
import Link from "next/link";

interface Props {
    post: Blog;
    body?: string;
}

export default function BlogCard({ post, body }: Props) {
    return (
        <article
            key={post.title}
            className="group rounded-3xl border border-white/10 bg-transparent p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/30 flex flex-col gap-4">
            <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-primary/20 to-violet-400/20" />

            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                {post.category}
            </p>

            <h3 className="text-2xl font-semibold leading-tight transition group-hover:text-primary">
                {post.title}
            </h3>

            {body ? (
                <div
                    className="markdown-body"
                    dangerouslySetInnerHTML={{
                        __html: body,
                    }}
                />
            ) : (
                <p className="max-w-2xl leading-7 text-zinc-400">
                    {post.prevDescription}
                </p>
            )}

            <div className="flex items-center gap-3 text-sm text-zinc-500">
                <span>{post.readingTime}</span>
                <span>•</span>
                <span>{post.publishedAt}</span>
            </div>

            {!body && (
                <Link
                    href={"blog/" + post.id}
                    className="inline-flex text-sm text-primary transition group-hover:translate-x-1">
                    Read More →
                </Link>
            )}
        </article>
    );
}
