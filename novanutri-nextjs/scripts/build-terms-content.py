#!/usr/bin/env python3
# Regenerates content/terms/*.ts from content/terms/src/*.md (pip install markdown).
# Modeled on scripts/build-privacy-content.py.
import markdown, re, json, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'content' / 'terms' / 'src'
META = {
  'en': {'htmlLang':'en','title':'Terms and Conditions','termsTitle':'Riov Terms and Conditions','lastUpdated':'Last updated: 18 October 2026','version':'Version 2.1','languageName':'English','path':''},
  'es': {'htmlLang':'es','title':'Términos y Condiciones','termsTitle':'Términos y Condiciones de Riov','lastUpdated':'Última actualización: 18 de octubre de 2026','version':'Versión 2.1','languageName':'Español','path':'es'},
  'ca': {'htmlLang':'ca','title':'Termes i condicions','termsTitle':'Termes i condicions de Riov','lastUpdated':"Darrera actualització: 18 d'octubre de 2026",'version':'Versió 2.1','languageName':'Català','path':'ca'},
  'fr': {'htmlLang':'fr','title':"Conditions générales d'utilisation",'termsTitle':"Conditions générales d'utilisation de Riov",'lastUpdated':'Dernière mise à jour : 18 octobre 2026','version':'Version 2.1','languageName':'Français','path':'fr'},
  'it': {'htmlLang':'it','title':'Termini e condizioni','termsTitle':'Termini e condizioni di Riov','lastUpdated':'Ultimo aggiornamento: 18 ottobre 2026','version':'Versione 2.1','languageName':'Italiano','path':'it'},
  'ro': {'htmlLang':'ro','title':'Termeni și condiții','termsTitle':'Termenii și condițiile Riov','lastUpdated':'Ultima actualizare: 18 octombrie 2026','version':'Versiunea 2.1','languageName':'Română','path':'ro'},
  'da': {'htmlLang':'da','title':'Vilkår og betingelser','termsTitle':'Riovs vilkår og betingelser','lastUpdated':'Senest opdateret: 18. oktober 2026','version':'Version 2.1','languageName':'Dansk','path':'da'},
}
SWITCHER = {
  'en':'Language','es':'Idioma','ca':'Idioma','fr':'Langue','it':'Lingua','ro':'Limbă','da':'Sprog'
}

def md_to_html(md: str, meta: dict) -> str:
    lines = md.split('\n')
    # drop H1 (renderer supplies title) and the meta line; check both match META
    assert lines[0] == f"# {meta['termsTitle']}", lines[0]
    assert lines[2] == f"**{meta['lastUpdated']}** · {meta['version']}", lines[2]
    body = '\n'.join(lines[3:])
    # nested list items are indented 2 or 3 spaces in the source; Python-Markdown needs 4
    body = re.sub(r'(?m)^ {2,3}(?=\S)', '    ', body)
    body = re.sub(r'(?m)^(    [^ -].*)\n(- )', r'\1\n\n\2', body)
    html = markdown.markdown(body, extensions=['tables','sane_lists'])
    html = re.sub(r'<a href="http', r'<a target="_blank" rel="noopener noreferrer" href="http', html)
    return html

index = []
for lang, meta in META.items():
    md = (SRC / f'{lang}.md').read_text()
    content = md_to_html(md, meta)
    meta_html = f"<p><strong>{meta['lastUpdated']}</strong> · {meta['version']}</p>"
    obj = {
        'lang': lang,
        'htmlLang': meta['htmlLang'],
        'title': meta['title'],
        'termsTitle': meta['termsTitle'],
        'metaHtml': meta_html,
        'contentHtml': content,
        'switcherLabel': SWITCHER[lang],
        'languageName': meta['languageName'],
        'path': meta['path'],
    }
    out = ROOT / 'content' / 'terms' / f'{lang}.ts'
    out.write_text(
        f"import type {{ TermsLocale }} from '@/lib/terms';\n\n"
        f"const locale: TermsLocale = {json.dumps(obj, ensure_ascii=False, indent=2)};\n\n"
        f"export default locale;\n"
    )
    index.append(lang)
    print('wrote', lang, len(content))

(ROOT / 'content' / 'terms' / 'index.ts').write_text(
'''import type { TermsLocale } from '@/lib/terms';
import en from './en';
import es from './es';
import ca from './ca';
import fr from './fr';
import it from './it';
import ro from './ro';
import da from './da';

export const TERMS_LOCALES: Record<string, TermsLocale> = { en, es, ca, fr, it, ro, da };
export const TRANSLATED_LANGS = ['ca', 'es', 'fr', 'it', 'ro', 'da'] as const;
export type TranslatedLang = (typeof TRANSLATED_LANGS)[number];
export function getTermsLocale(lang: string): TermsLocale | undefined {
  return TERMS_LOCALES[lang];
}
'''
)
print('done')
