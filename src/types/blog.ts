export interface UpliftMeta {
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  keywords?: string[] | string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[] | string;
}

export interface UpliftFreshnessInfo {
  freshnessScore?: number;
  isFresh?: boolean;
  lastVerifiedAt?: string;
  reviewCadenceDays?: number;
}

export interface BlogPost {
  id?: string;
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  bodyContent?: string;
  featuredImage?: string;
  coverImage?: string;
  image?: string;
  imageUrl?: string;
  categories?: string[] | { name: string; slug?: string }[];
  tags?: string[] | { name: string; slug?: string }[];
  authorName?: string;
  authorUrl?: string;
  authorAvatar?: string;
  author?: {
    name?: string;
    url?: string;
    avatar?: string;
    role?: string;
  };
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  readingTime?: string | number;
  estimatedReadingTime?: string | number;
  seoScore?: number;
  structuredData?: Record<string, any> | string;
  meta?: UpliftMeta;
  freshness?: UpliftFreshnessInfo;
  customFields?: Record<string, any>;
}

export interface NormalizedBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  categories: string[];
  primaryCategory: string;
  tags: string[];
  authorName: string;
  authorUrl?: string;
  authorAvatar?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  seoScore?: number;
  structuredData?: Record<string, any>;
  meta: UpliftMeta;
  freshness?: UpliftFreshnessInfo;
  customFields?: Record<string, any>;
}
