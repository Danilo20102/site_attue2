export type IconName =
  | 'arrow'
  | 'people'
  | 'message'
  | 'document'
  | 'link'
  | 'check'
  | 'plus'
  | 'mail'
  | 'pin'
  | 'phone'
  | 'clock'
  | 'shield'
  | 'search'
  | 'calendar'
  | 'heart';
export interface ContentItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  status: 'placeholder' | 'published';
}
export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Institucional' | 'Comunicados' | 'Participação';
  publishedAt: string | null;
  status: 'placeholder' | 'published';
  illustration: 'collective' | 'dialogue' | 'document';
  paragraphs: string[];
}
export interface ContentRepository {
  getServices(): Promise<ContentItem[]>;
  getBenefits(): Promise<ContentItem[]>;
  getNews(): Promise<NewsArticle[]>;
  getNewsBySlug(slug: string): Promise<NewsArticle | undefined>;
}
