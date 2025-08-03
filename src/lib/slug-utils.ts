import type { CollectionEntry } from "astro:content";
import type { Language } from "./i18n";

export interface BlogSlugInfo {
  category: string;
  id: number;
  language: Language;
}

export function parseBlogSlug(slug: string): BlogSlugInfo | null {
  const parts = slug.split('/');
  
  if (parts.length === 3) {
    const [category, idStr, filename] = parts;
    const id = parseInt(idStr, 10);
    
    if (isNaN(id)) return null;
    
    const language = getLanguageFromFilename(filename);
    if (!language) return null;
    
    return { category, id, language };
  }
  
  return null;
}

export function getLanguageFromFilename(filename: string): Language | null {
  if (filename === "ko" || filename.startsWith("ko.")) return "ko";
  if (filename === "en" || filename.startsWith("en.")) return "en";
  return null;
}

export function createBlogSlug(category: string, id: number): string {
  return `${category}/${id}`;
}

export function getCollectionSlug(entry: CollectionEntry<"blog">): string {
  const slugInfo = parseBlogSlug(entry.slug);
  if (!slugInfo) {
    throw new Error(`Invalid blog entry slug: ${entry.slug}`);
  }
  return createBlogSlug(slugInfo.category, slugInfo.id);
}

export function getBlogEntryLanguage(entry: CollectionEntry<"blog">): Language {
  const slugInfo = parseBlogSlug(entry.slug);
  if (!slugInfo) {
    throw new Error(`Cannot determine language for blog entry: ${entry.slug}`);
  }
  return slugInfo.language;
}

export function getBlogEntryCategory(entry: CollectionEntry<"blog">): string {
  const slugInfo = parseBlogSlug(entry.slug);
  if (!slugInfo) {
    throw new Error(`Cannot determine category for blog entry: ${entry.slug}`);
  }
  return slugInfo.category;
}

// Work collection utilities
export interface WorkSlugInfo {
  company: string;
  language: Language;
}

export function parseWorkSlug(slug: string): WorkSlugInfo | null {
  const parts = slug.split('/');
  
  if (parts.length === 2) {
    const [company, filename] = parts;
    const language = getLanguageFromFilename(filename);
    if (!language) return null;
    
    return { company, language };
  }
  
  return null;
}

export function getWorkEntryLanguage(entry: CollectionEntry<"work">): Language {
  const slugInfo = parseWorkSlug(entry.slug);
  if (!slugInfo) {
    throw new Error(`Cannot determine language for work entry: ${entry.slug}`);
  }
  return slugInfo.language;
}

export function getWorkEntryCompany(entry: CollectionEntry<"work">): string {
  const slugInfo = parseWorkSlug(entry.slug);
  if (!slugInfo) {
    throw new Error(`Cannot determine company for work entry: ${entry.slug}`);
  }
  return slugInfo.company;
}