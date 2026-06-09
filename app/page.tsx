"use client";

import { useState } from "react";
import { getTranslation, type Language } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = getTranslation(lang);

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
        className="fixed inset-0 z-10 flex items-center justify-center p-4 mx-auto"
      >
        <div className="coming-soon-card" style={{ margin: "0 auto" }}>
          <h1 className="coming-soon-title">{t.title}</h1>
          <p className="coming-soon-subtitle">{t.subtitle}</p>
        </div>
      </main>

      {/* Version label - bottom right */}
      <div className="version-label" aria-label="Version 0.13 Beta">
        Version: 0.14 β
      </div>
    </>
  );
}
