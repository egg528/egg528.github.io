// TIL Categories (existing content from blog)
export const TIL_CATEGORIES = {
  "toy-project": {
    ko: "토이 프로젝트",
    en: "Toy Project"
  },
  "book": {
    ko: "책",
    en: "Book"
  },
  "data-oriented-programming": {
    ko: "데이터 지향 프로그래밍",
    en: "Data-Oriented Programming"
  },
  "clean-architecture": {
    ko: "만들면서 배우는 클린 아키텍처",
    en: "Clean Architecture"
  },
  "system-design-interview": {
    ko: "가상 면접 사례로 배우는 대규모 시스템 설계 기초 1",
    en: "System Design Interview 1"
  }
} as const;

// Blog Categories (new, can be extended as needed)
export const BLOG_CATEGORIES = {
  // Add new blog categories here
} as const;

export type TilCategoryKey = keyof typeof TIL_CATEGORIES;
export type BlogCategoryKey = keyof typeof BLOG_CATEGORIES;

// Backward compatibility
export const CATEGORIES = TIL_CATEGORIES;
export type CategoryKey = TilCategoryKey;
export const CATEGORY_KEYS = Object.keys(TIL_CATEGORIES) as TilCategoryKey[];

// TIL-specific functions
export function getTilCategoryName(categoryKey: TilCategoryKey, locale: "ko" | "en" = "ko"): string {
  return TIL_CATEGORIES[categoryKey][locale];
}

export function getAllTilCategories(locale: "ko" | "en" = "ko") {
  return Object.keys(TIL_CATEGORIES).map(key => ({
    key,
    name: TIL_CATEGORIES[key as TilCategoryKey][locale]
  }));
}

// Blog-specific functions
export function getBlogCategoryName(categoryKey: BlogCategoryKey, locale: "ko" | "en" = "ko"): string {
  return BLOG_CATEGORIES[categoryKey][locale];
}

export function getAllBlogCategories(locale: "ko" | "en" = "ko") {
  return Object.keys(BLOG_CATEGORIES).map(key => ({
    key,
    name: BLOG_CATEGORIES[key as BlogCategoryKey][locale]
  }));
}

// Backward compatibility functions
export function getCategoryName(categoryKey: CategoryKey, locale: "ko" | "en" = "ko"): string {
  return getTilCategoryName(categoryKey, locale);
}

export function getAllCategories(locale: "ko" | "en" = "ko") {
  return getAllTilCategories(locale);
}