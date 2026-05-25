"use client";

import { useState } from "react";

const translations = {
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

type Language = keyof typeof translations;

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Animated gradient background */}
      <div className="animated-gradient" aria-hidden="true" />

      {/* Language selector - top right */}
      <div className="fixed top-4 right-4 z-20 sm:top-6 sm:right-6">
        <div className="language-selector">
          <label htmlFor="language-select" className="sr-only">
            Select language
          </label>
          <select
            id="language-select"
            value={lang}
            onChange={(e) => setLang(e.target.value as Language)}
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
        </div>
      </div>

      {/* Main content - centered card */}
      <main
        id="main-content"
        className="relative z-10 flex min-h-screen items-center justify-center px-4"
      >
        <div className="coming-soon-card">
          <h1 className="coming-soon-title">{t.title}</h1>
          <p className="coming-soon-subtitle">{t.subtitle}</p>
        </div>
      </main>

      {/* Version label - bottom right */}
      <div className="version-label" aria-label="Version 0.1 Beta">
        Version: 0.1 Beta
      </div>
    </>
  );
}
