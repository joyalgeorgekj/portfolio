// app/blog/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import BlogCard from "@/components/cards/BlogCard";
import { Blog } from "@/types/blog.type";

export const metadata: Metadata = {
    title: "Blog",
};

export default function BlogPage() {
    const featuredPost = {
        title: "Building Scalable Frontend Systems in 2026",
        excerpt:
            "How to structure modern React applications for growth, maintainability, performance, and real product velocity.",
        category: "Architecture",
        readTime: "8 min read",
        date: "Jan 2026",
    };

    const posts: Blog[] = [
        {
            title: "Optimizing React Performance Without Premature Complexity",
            category: "Performance",
            readingTime: "6 min read",
            publishedAt: "Jan 2026",
            prevDescription: "",
            id: "something",
            slug: ""
        },
        {
            title: "What Freelance Work Taught Me About Product Thinking",
            category: "Career",
            readingTime: "5 min read",
            publishedAt: "Dec 2025",
            prevDescription: "",
            id: "something",
            slug: ""
        },
        {
            title: "How I Built an Internal Tool That Solved Real Problems",
            category: "Case Study",
            readingTime: "7 min read",
            publishedAt: "Dec 2025",
            prevDescription: "",
            id: "something",
            slug: ""
        },
        {
            title: "Open Source Contributions as a Growth Strategy",
            category: "Open Source",
            readingTime: "5 min read",
            publishedAt: "Nov 2025",
            prevDescription: "",
            id: "something",
            slug: ""
        },
        {
            title: "Designing Better UI Systems With Components",
            category: "Architecture",
            readingTime: "9 min read",
            publishedAt: "Nov 2025",
            prevDescription: "",
            id: "something",
            slug: ""
        },
        {
            title: "Why Tailwind + Next.js Is Still a Strong Stack",
            category: "Frontend",
            readingTime: "4 min read",
            publishedAt: "Oct 2025",
            prevDescription: "",
            id: "something",
            slug: ""
        },
    ];

    // const categories = [
    //   "All",
    //   "Architecture",
    //   "Performance",
    //   "Career",
    //   "Case Study",
    //   "Open Source",
    //   "UI Engineering",
    // ];

    return (
        <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-6">
            {/* Hero */}
            <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                    Writing
                </p>

                <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
                    Engineering Thoughts,{" "}
                    <span className="bg-linear-to-r from-primary via-blue-400 to-violet-400 bg-clip-text text-transparent">
                        Lessons & Systems
                    </span>
                </h1>

                <p className="mt-6 text-base leading-7 text-zinc-400 md:text-lg">
                    Notes on frontend engineering, scalable architecture,
                    performance, product thinking, open source, and building
                    real software.
                </p>
            </div>

            {/* Search + Filters
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none placeholder:text-zinc-500 md:max-w-sm"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 transition hover:border-primary/30 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div> */}

            {/* Featured Post */}
            <section className="card mt-10 rounded-3xl border border-white/10 bg-transparent p-8 backdrop-blur-xl grid gap-4">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">
                    Featured Article
                </p>

                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    {featuredPost.title}
                </h2>

                <p className="max-w-2xl leading-7 text-zinc-400">
                    {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                    <span>{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                </div>

                <Link
                    href="/blog/building-scalable-frontend-systems"
                    className="btn btn-primary">
                    Read Article
                </Link>
            </section>

            {/* Posts Grid */}
            <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {posts.map((post, ind) => (<BlogCard post={post} key={ind} />
                ))}
            </section>

            {/* Newsletter */}
            <section className="mt-14 rounded-3xl border border-white/10 bg-transparent backdrop-blur-xl p-8 md:p-10">
                <div className="max-w-2xl">
                    <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                        Newsletter
                    </p>

                    <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                        Get practical frontend insights occasionally.
                    </h3>

                    <p className="mt-4 text-zinc-400">
                        No spam. Only valuable notes on frontend systems,
                        performance, architecture, and building products.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 md:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
                        />

                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </section>
        </section>
    );
}
