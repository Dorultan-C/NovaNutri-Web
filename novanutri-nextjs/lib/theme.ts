export const THEME_STORAGE_KEY = "riov-theme";

export type ThemeName = "light" | "dark";

/**
 * Runs from an inline script before paint.
 * System preference applies when nothing is stored; a saved choice wins.
 * Language is a separate cookie (`riov_lang`) and is not read here.
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
  } catch(e) {}
})();`;
