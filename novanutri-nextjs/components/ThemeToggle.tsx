"use client";

import { useEffect, useState } from "react";
import { useSiteMessages } from "@/components/LanguageProvider";
import { THEME_STORAGE_KEY, type ThemeName } from "@/lib/theme";

function applyTheme(theme: ThemeName) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* Ignore storage failures. The attribute still updates this visit. */
  }
}

function readDark() {
  return document.documentElement.getAttribute("data-theme") === "dark";
}

export default function ThemeToggle() {
  const t = useSiteMessages();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(readDark());
  }, []);

  return (
    <button
      type="button"
      className="theme-pill"
      role="switch"
      aria-checked={dark}
      aria-label={t.nav.darkMode}
      onClick={() => {
        const next = !readDark();
        applyTheme(next ? "dark" : "light");
        setDark(next);
      }}
    >
      <span className="theme-sky" aria-hidden="true">
        <span className="theme-clouds">
          <span className="cloud cloud-a" />
          <span className="cloud cloud-b" />
          <span className="cloud cloud-c" />
        </span>
        <span className="theme-stars">
          <span className="theme-star star-a" />
          <span className="theme-star star-b" />
          <span className="theme-star star-c" />
          <span className="theme-star star-d" />
          <span className="theme-star star-e" />
        </span>
      </span>
      <span className="theme-knob" aria-hidden="true">
        <span className="theme-gloss" />
        <span className="theme-crater crater-a" />
        <span className="theme-crater crater-b" />
        <span className="theme-crater crater-c" />
      </span>
    </button>
  );
}
