import BlogCard from "@/components/cards/BlogCard";
import { BLOGS } from "@/content/blog/blog";
import { extractor } from "@/lib/extract";
import { Blog } from "@/types/blog.type";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Option A: Clean up the slug text to look like a title (e.g., "my-first-post" -> "My First Post")
  
    const blog: Blog = BLOGS.filter((blog) => blog.id === slug)[0] ?? false;

  return {
    title: blog.title,
    description: blog.prevDescription,
    keywords: blog.tags,
  };
}

export default async function BlogSlugPage({ params }: Props) {
    const { slug } = await params;
    const blog: Blog = BLOGS.filter((blog) => blog.id === slug)[0] ?? false;

    return (
        <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-6">
            {blog && <BlogCard post={blog} body={extractor(blog.id + ".md")} />}
        </section>
    );
}
