import BlogCard from "@/components/cards/BlogCard";
import { BLOGS } from "@/content/blog/blog";
import { extractor } from "@/lib/extract";
import { Blog } from "@/types/blog.type";

interface Props {
    params: Promise<{
        slug: string;
    }>;
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
