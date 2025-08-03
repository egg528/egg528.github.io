export const LANGUAGES = {
  ko: { code: "ko", label: "한국어" },
  en: { code: "en", label: "English" }
} as const;

export type Language = keyof typeof LANGUAGES;
export type LanguageInfo = typeof LANGUAGES[Language];

export const DEFAULT_LANGUAGE: Language = "ko";

export function isValidLanguage(lang: string): lang is Language {
  return lang in LANGUAGES;
}

export function normalizeLanguage(lang: string): Language {
  return isValidLanguage(lang) ? lang : DEFAULT_LANGUAGE;
}

export function getLocaleFromPath(pathname: string): Language {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  return isValidLanguage(firstSegment) ? firstSegment : DEFAULT_LANGUAGE;
}

export function createLocalizedUrl(path: string, lang: Language): string {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return lang === DEFAULT_LANGUAGE ? `/${cleanPath}` : `/${lang}/${cleanPath}`;
}

function cleanPath(path: string): string {
  return path.startsWith("/") ? path.slice(1) : path;
}

function removeLocalePrefix(path: string): string {
  return path.replace(/^en\//, "");
}

export function getAlternateLanguageUrl(currentPath: string, targetLocale: Language): string {
  const cleaned = cleanPath(currentPath);
  
  if (targetLocale === DEFAULT_LANGUAGE) {
    return "/" + removeLocalePrefix(cleaned);
  }
  
  return cleaned.startsWith("en/") ? "/" + cleaned : "/en/" + cleaned;
}