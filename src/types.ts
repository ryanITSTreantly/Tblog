export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  updatedDate: string;
  author: Author;
  categories: string[];
  tags: string[];
  heroImage: string;
  readTime: string;
  featured?: boolean;
  cornerstone?: boolean;
  faqItems?: FAQItem[];
  relatedSlugs?: string[];
}

export interface Category {
  name: string;
  slug: string;
  count: number;
}
