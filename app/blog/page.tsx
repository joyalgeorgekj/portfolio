// app/blog/page.tsx
import Link from "next/link";

export default function BlogPage() {
  const featuredPost = {
    title: "Building Scalable Frontend Systems in 2026",
    excerpt:
      "How to structure modern React applications for growth, maintainability, performance, and real product velocity.",
    category: "Architecture",
    readTime: "8 min read",
    date: "Jan 2026",
  };

  const posts = [
    {
      title: "Optimizing React Performance Without Premature Complexity",
      category: "Performance",
      readTime: "6 min read",
      date: "Jan 2026",
    },
    {
      title: "What Freelance Work Taught Me About Product Thinking",
      category: "Career",
      readTime: "5 min read",
      date: "Dec 2025",
    },
    {
      title: "How I Built an Internal Tool That Solved Real Problems",
      category: "Case Study",
      readTime: "7 min read",
      date: "Dec 2025",
    },
    {
      title: "Open Source Contributions as a Growth Strategy",
      category: "Open Source",
      readTime: "5 min read",
      date: "Nov 2025",
    },
    {
      title: "Designing Better UI Systems With Components",
      category: "UI Engineering",
      readTime: "9 min read",
      date: "Nov 2025",
    },
    {
      title: "Why Tailwind + Next.js Is Still a Strong Stack",
      category: "Stack",
      readTime: "4 min read",
      date: "Oct 2025",
    },
  ];

  const categories = [
    "All",
    "Architecture",
    "Performance",
    "Career",
    "Case Study",
    "Open Source",
    "UI Engineering",
  ];

  return (

      <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">
        {/* Hero */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
            Writing
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Engineering Thoughts,{" "}
            <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Lessons & Systems
            </span>
          </h1>

          <p className="mt-6 text-base leading-7 text-zinc-400 md:text-lg">
            Notes on frontend engineering, scalable architecture, performance,
            product thinking, open source, and building real software.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none placeholder:text-zinc-500 md:max-w-sm"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 transition hover:border-cyan-400/30 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Featured Article
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            {featuredPost.title}
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            {featuredPost.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-500">
            <span>{featuredPost.category}</span>
            <span>•</span>
            <span>{featuredPost.readTime}</span>
            <span>•</span>
            <span>{featuredPost.date}</span>
          </div>

          <Link
            href="/blog/building-scalable-frontend-systems"
            className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            Read Article
          </Link>
        </section>

        {/* Posts Grid */}
        <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-linear-to-br from-cyan-400/20 to-violet-400/20" />

              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                {post.category}
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-snug">
                {post.title}
              </h3>

              <div className="mt-5 flex items-center gap-3 text-sm text-zinc-500">
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>

              <Link
                href="#"
                className="mt-6 inline-flex text-sm text-cyan-300 transition group-hover:translate-x-1"
              >
                Read More →
              </Link>
            </article>
          ))}
        </section>

        {/* Newsletter */}
        <section className="mt-14 rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-8 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
              Newsletter
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Get practical frontend insights occasionally.
            </h3>

            <p className="mt-4 text-zinc-400">
              No spam. Only valuable notes on frontend systems, performance,
              architecture, and building products.
            </p>

            <div className="mt-8 flex flex-col gap-3 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
              />

              <button className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-medium text-black">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </section>
  );
}