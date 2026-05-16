export interface Blog {
  id: string;
  title: string;
  description: string;
  category:
    | "Frontend"
    | "Performance"
    | "Architecture"
    | "Open Source"
    | "Career"
    | "Case Study";
  publishedAt: string;
  readingTime: string;
  slug: string;
  featured?: boolean;
  tags?: string[];
  externalUrl?: string;
}