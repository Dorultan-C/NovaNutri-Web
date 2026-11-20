"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import { SITE_LANGUAGES, type SiteLanguageCode } from "@/lib/site-language";
import { useSiteLanguage } from "@/lib/use-site-language";

function optionHeight(scroller: HTMLElement) {
  const option = scroller.querySelector<HTMLElement>("[data-lang-option]");
  return option?.offsetHeight || 28;
}

export default function LanguageWheel() {
  const { language, setLanguage } = useSiteLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef(language);
  const fromUserScroll = useRef(false);
  const ignoreUntil = useRef(0);
  languageRef.current = language;

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (fromUserScroll.current) {
      fromUserScroll.current = false;
      return;
    }
    const index = SITE_LANGUAGES.findIndex((item) => item.code === language);
    ignoreUntil.current = performance.now() + 80;
    scroller.scrollTop = Math.max(0, index) * optionHeight(scroller);
  }, [language]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const selectFromScroll = () => {
      if (performance.now() < ignoreUntil.current) return;
      const index = Math.round(scroller.scrollTop / optionHeight(scroller));
      const next = SITE_LANGUAGES[Math.max(0, Math.min(SITE_LANGUAGES.length - 1, index))];
      if (!next || next.code === languageRef.current) return;
      fromUserScroll.current = true;
      setLanguage(next.code);
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      scroller.scrollTop += event.deltaY;
    };

    scroller.addEventListener("scroll", selectFromScroll, { passive: true });
    scroller.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      scroller.removeEventListener("scroll", selectFromScroll);
      scroller.removeEventListener("wheel", onWheel);
    };
  }, [setLanguage]);

  const move = (code: SiteLanguageCode) => {
    fromUserScroll.current = false;
    setLanguage(code);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = SITE_LANGUAGES.findIndex((item) => item.code === language);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = SITE_LANGUAGES[Math.min(SITE_LANGUAGES.length - 1, index + 1)];
      if (next) move(next.code);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const next = SITE_LANGUAGES[Math.max(0, index - 1)];
      if (next) move(next.code);
    } else if (event.key === "Home") {
      event.preventDefault();
      move(SITE_LANGUAGES[0].code);
    } else if (event.key === "End") {
      event.preventDefault();
      move(SITE_LANGUAGES[SITE_LANGUAGES.length - 1].code);
    }
  };

  return (
    <div
      className="lang-wheel"
      role="listbox"
      aria-label="Language"
      aria-activedescendant={`lang-${language}`}
      aria-orientation="vertical"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="lang-wheel-window" ref={scrollerRef}>
        <div className="lang-wheel-pad" aria-hidden="true" />
        {SITE_LANGUAGES.map((item) => {
          const selected = item.code === language;
          return (
            <div
              key={item.code}
              id={`lang-${item.code}`}
              data-lang-option=""
              role="option"
              aria-selected={selected}
              className="lang-option"
              onClick={() => move(item.code)}
            >
              {item.label}
            </div>
          );
        })}
        <div className="lang-wheel-pad" aria-hidden="true" />
      </div>
    </div>
  );
}
