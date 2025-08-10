export const CATEGORIES = {
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