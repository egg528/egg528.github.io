export const CATEGORIES = {
  "toy-project": {
    ko: "토이 프로젝트",
    en: "Toy Project"
  },
  "book": {
    ko: "책",
    en: "Book"
  }
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

export const CATEGORY_KEYS = Object.keys(CATEGORIES) as CategoryKey[];

export function getCategoryName(categoryKey: CategoryKey, locale: "ko" | "en" = "ko"): string {
  return CATEGORIES[categoryKey][locale];
}

export function getAllCategories(locale: "ko" | "en" = "ko") {
  return CATEGORY_KEYS.map(key => ({
    key,
    name: CATEGORIES[key][locale]
  }));
}