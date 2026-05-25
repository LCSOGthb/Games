export const translations: Record<
  string,
  { title: string; subtitle: string; language: string }
> = {
  en: {
    title: "Coming Soon",
    subtitle: "Something amazing is on the way",
    language: "English",
  },
  zh: {
    title: "即将上线",
    subtitle: "精彩内容即将呈现",
    language: "中文",
  },
};

export type Language = keyof typeof translations;

export function getTranslation(lang: string) {
  return translations[lang] ?? translations["en"];
}

export function getAvailableLanguages(): string[] {
  return Object.keys(translations);
}
