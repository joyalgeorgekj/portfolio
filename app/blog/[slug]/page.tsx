import BlogCard from "@/components/cards/BlogCard";
import { BLOGS } from "@/content/blog/blog";
import { extractor } from "@/lib/extract";
import { blogStructuredData } from "@/lib/structured-data";
import { Blog } from "@/types/blog.type";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import "./markdown.css";
import Section from "@/components/layout/Section";
import { BASE_URL } from "@/constants/basic";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog: Blog | undefined = BLOGS.find((blog) => blog.id === slug);

    if (!blog) notFound();

    return {
        title: blog.title,
        description: blog.prevDescription,
        keywords: blog.tags,
        alternates: {
            canonical: `/blog/${blog.id}`,
        },
        twitter: {
            images: `/blog/${blog.id}/opengraph-image`,
            card: "summary_large_image",
            creator: "joyalgeorgekj",
            title: blog.title,
            description: blog.prevDescription,
        },
        openGraph: {
            title: blog.title,
            description: blog.prevDescription,
            url: `${BASE_URL}/blog/${blog.id}`,
            images: `/blog/${blog.id}/opengraph-image`,
        },
    };
}

export default async function BlogSlugPage({ params }: Props) {
    const { slug } = await params;
    const blog: Blog | undefined = BLOGS.find((blog) => blog.id === slug);
    if (!blog) notFound();

    const structuredData = blogStructuredData(blog);

    return (
        <>
            <Section
                id="blog"
                sectionClass="relative mx-auto max-w-7xl px-4 py-12 md:px-6">
                <BlogCard post={blog} body={extractor(blog.id + ".md")} />
            </Section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
        </>
    );
}
