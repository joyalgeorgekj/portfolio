// app/blog/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import BlogCard from "@/components/cards/BlogCard";
import { Blog } from "@/types/blog.type";
import { BLOGS } from "@/content/blog/blog";
import Section from "@/components/layout/Section";

export const metadata: Metadata = {
    title: "Blog",
};

export default function BlogPage() {
    const featuredPost: Blog = BLOGS.filter((val) => val.featured)[0];

    const posts: Blog[] = BLOGS.filter((val) => !val.featured);

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
        <div
            id="blogs"
            className="relative mx-auto max-w-7xl px-4 py-12 md:px-6">
            {/* Hero */}
            <Section id="blog-hero" sectionClass="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.22em] text-typography/75">
                    Writing
                </p>

                <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
                    Engineering Thoughts,{" "}
                    <span className="bg-linear-to-r from-primary via-blue-400 to-violet-400 bg-clip-text text-transparent">
                        Lessons & Systems
                    </span>
                </h1>

                <p className="mt-6 text-base leading-7 text-typography/75 md:text-lg">
                    Notes on frontend engineering, scalable architecture,
                    performance, product thinking, open source, and building
                    real software.
                </p>
            </Section>

            {/* Search + Filters
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-2xl border border-typography/10 bg-white/5 px-5 py-3 text-sm text-typography outline-none placeholder:text-typography/75 md:max-w-sm"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                className="rounded-full border border-typography/10 px-4 py-2 text-sm text-typography/75 transition hover:border-primary/30 hover:text-typography"
              >
                {item}
              </button>
            ))}
          </div>
        </div> */}

            {/* Featured Post */}
            <Section id="featured-post" sectionClass="mt-10 gap-4">
                <Link
                    href={"/blog/" + featuredPost.id}
                    aria-label="Featured Blog"
                    className="group card mt-10 rounded-3xl border border-typography/10 bg-background p-8 grid gap-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">
                        Featured Article
                    </p>
                    <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                        {featuredPost.title}
                    </h2>
                    <p className="max-w-2xl leading-7 text-typography/75">
                        {featuredPost.prevDescription}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-typography/75">
                        <span>{featuredPost.category}</span>
                        <span>•</span>
                        <span>{featuredPost.readingTime}</span>
                        <span>•</span>
                        <span>{featuredPost.publishedAt}</span>
                    </div>
                    <span className="btn btn-primary transition group-hover:translate-x-1">
                        Read Article
                    </span>
                </Link>
            </Section>

            {/* Posts Grid */}
            <Section
                id="blog-cards"
                sectionClass="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {posts.map((post, ind) => (
                    <BlogCard post={post} key={ind} />
                ))}
            </Section>

            {/* Newsletter */}
            <Section
                id="newsletter"
                sectionClass="mt-14 rounded-3xl border border-typography/10 bg-background p-8 md:p-10">
                <div className="max-w-2xl">
                    <p className="text-sm uppercase tracking-[0.22em] text-typography/75">
                        Newsletter
                    </p>

                    <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                        Get practical frontend insights occasionally.
                    </h3>

                    <p className="mt-4 text-typography/75">
                        No spam. Only valuable notes on frontend systems,
                        performance, architecture, and building products.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 md:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-2xl border border-typography/10 bg-white/5 px-5 py-3 text-sm text-typography outline-none placeholder:text-typography/75"
                        />

                        <button className="btn btn-primary w-full md:w-fit">
                            Subscribe
                        </button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
