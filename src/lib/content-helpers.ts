import { type CollectionEntry, getCollection } from "astro:content";
import type { Language } from "./i18n";
import { getCategoryName, type CategoryKey } from "./categories";
import { getBlogEntryLanguage, getBlogEntryCategory } from "./slug-utils";

export type BlogPost = CollectionEntry<"blog">;
export type PostsByYear = Record<string, BlogPost[]>;
export type PostsByCategory = Record<string, BlogPost[]>;

export async function getBlogPostsByLocale(locale: Language): Promise<BlogPost[]> {
  const allPosts = await getCollection("blog");
  
  return allPosts
    .filter((post) => {
      if (post.data.draft) return false;
      
      try {
        const postLanguage = getBlogEntryLanguage(post);
        return postLanguage === locale;
      } catch {
        return false;
      }
    })
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function groupPostsByYear(posts: BlogPost[]): PostsByYear {
  return posts.reduce((acc: PostsByYear, post) => {
    const year = post.data.date.getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
}

export function groupPostsByCategory(posts: BlogPost[], locale: Language): PostsByCategory {
  const grouped = posts.reduce((acc: PostsByCategory, post) => {
    try {
      const category = getBlogEntryCategory(post);
      const categoryName = getCategoryName(category as CategoryKey, locale);
      
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(post);
    } catch {
      // Skip posts with invalid category
    }
    return acc;
  }, {});

  Object.keys(grouped).forEach(category => {
    grouped[category].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  });

  return grouped;
}

export function getSortedYears(postsByYear: PostsByYear): string[] {
  return Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a));
}

export function getSortedCategories(postsByCategory: PostsByCategory): string[] {
  return Object.keys(postsByCategory).sort();
}