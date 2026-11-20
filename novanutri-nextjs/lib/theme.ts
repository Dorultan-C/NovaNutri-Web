import { SITE_LANGUAGE_STORAGE_KEY, SITE_LANGUAGES } from "@/lib/site-language";

export const THEME_STORAGE_KEY = "riov-theme";

export type ThemeName = "light" | "dark";

const languageCodes = SITE_LANGUAGES.map((language) => JSON.stringify(language.code)).join(",");

/**
 * Runs from an inline script before paint.
 * System preference applies when nothing is stored; a saved choice wins.
 */
export const themeInitScript = `(function(){
  var d=document.documentElement;
  d.classList.add("js");
  try {
    var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if(t!=="light"&&t!=="dark"){
      t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
    }
    d.setAttribute("data-theme",t);
    d.style.colorScheme=t;
    var langs=[${languageCodes}];
    var lang=localStorage.getItem(${JSON.stringify(SITE_LANGUAGE_STORAGE_KEY)});
    if(langs.indexOf(lang)!==-1) d.setAttribute("data-lang",lang);
  } catch(e) {}
})();`;
