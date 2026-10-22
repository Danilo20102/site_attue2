import { benefits, news, services } from '@/data/content';
import type { ContentRepository } from '@/types/content';
// Trocar este adaptador por CMS/API sem acoplar páginas à origem dos dados.
export const contentRepository: ContentRepository = {
  async getServices() {
    return structuredClone(services);
  },
  async getBenefits() {
    return structuredClone(benefits);
  },
  async getNews() {
    return structuredClone(news);
  },
  async getNewsBySlug(slug) {
    return structuredClone(news.find((item) => item.slug === slug));
  },
};
