import Link from "next/link";
import { Blog } from "@/types/blog";

interface Props {
    post: Blog;
}

export default function BlogCard({ post }: Props) {
    return (
        <article className="group card rounded-2xl border border-white/10 p-5 flex flex-col gap-2">
            <Link href={`/blog/${post.id}`} className="block">
                <div className="flex items-center gap-3 text-sm text-zinc-500">
                    {[post.category, post.readingTime, post.publishedAt].map(
                        (val, ind) => (
                            <span key={ind}>{val}</span>
                        )
                    )}
                </div>

                <h3 className="mt-4 text-2xl font-semibold leading-tight transition group-hover:text-primary">
                    {post.title}
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                    {post.description}
                </p>
            </Link>
        </article>
    );
}
