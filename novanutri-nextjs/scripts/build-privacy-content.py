#!/usr/bin/env python3
# Regenerates content/privacy/*.ts from content/privacy/src/*.md (pip install markdown).
import markdown, re, json, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'content' / 'privacy' / 'src'
META = {
  'en': {'htmlLang':'en','title':'Privacy Policy','policyTitle':'Riov Privacy Policy','lastUpdated':'Last updated: DATE-ON-MERGE','version':'Version 2.4','languageName':'English','path':''},
  'es': {'htmlLang':'es','title':'Política de privacidad','policyTitle':'Política de privacidad de Riov','lastUpdated':'Última actualización: DATE-ON-MERGE','version':'Versión 2.4','languageName':'Español','path':'es'},
  'ca': {'htmlLang':'ca','title':'Política de privadesa','policyTitle':'Política de privadesa de Riov','lastUpdated':"Darrera actualització: DATE-ON-MERGE",'version':'Versió 2.4','languageName':'Català','path':'ca'},
  'fr': {'htmlLang':'fr','title':'Politique de confidentialité','policyTitle':'Politique de confidentialité de Riov','lastUpdated':'Dernière mise à jour : DATE-ON-MERGE','version':'Version 2.4','languageName':'Français','path':'fr'},
  'it': {'htmlLang':'it','title':'Informativa sulla privacy','policyTitle':'Informativa sulla privacy di Riov','lastUpdated':'Ultimo aggiornamento: DATE-ON-MERGE','version':'Versione 2.4','languageName':'Italiano','path':'it'},
  'ro': {'htmlLang':'ro','title':'Politică de confidențialitate','policyTitle':'Politica de confidențialitate Riov','lastUpdated':'Ultima actualizare: DATE-ON-MERGE','version':'Versiunea 2.4','languageName':'Română','path':'ro'},
  'da': {'htmlLang':'da','title':'Privatlivspolitik','policyTitle':'Riovs privatlivspolitik','lastUpdated':'Senest opdateret: DATE-ON-MERGE','version':'Version 2.4','languageName':'Dansk','path':'da'},
}
SWITCHER = {
  'en':'Language','es':'Idioma','ca':'Idioma','fr':'Langue','it':'Lingua','ro':'Limbă','da':'Sprog'
}

def md_to_html(md: str) -> str:
    lines = md.split('\n')
    # drop H1 (renderer supplies title) and the meta line
    assert lines[0].startswith('# ')
    body = '\n'.join(lines[3:])
    body = re.sub(r'(?m)^  (?=\S)', '    ', body)
    body = re.sub(r'(?m)^(    [^ -].*)\n(- )', r'\1\n\n\2', body)
    html = markdown.markdown(body, extensions=['tables','sane_lists'])
    html = re.sub(r'<a href="http', r'<a target="_blank" rel="noopener noreferrer" href="http', html)
    return html

index = []
for lang, meta in META.items():
    md = (SRC / f'{lang}.md').read_text()
    content = md_to_html(md)
    meta_html = f"<p><strong>{meta['lastUpdated']}</strong> · {meta['version']}</p>"
    obj = {
        'lang': lang,
        'htmlLang': meta['htmlLang'],
        'title': meta['title'],
        'policyTitle': meta['policyTitle'],
        'metaHtml': meta_html,
        'contentHtml': content,
        'switcherLabel': SWITCHER[lang],
        'languageName': meta['languageName'],
        'path': meta['path'],
    }
    out = ROOT / 'content' / 'privacy' / f'{lang}.ts'
    out.write_text(
        f"import type {{ PrivacyLocale }} from '@/lib/privacy';\n\n"
        f"const locale: PrivacyLocale = {json.dumps(obj, ensure_ascii=False, indent=2)};\n\n"
        f"export default locale;\n"
    )
    index.append(lang)
    print('wrote', lang, len(content))

(ROOT / 'content' / 'privacy' / 'index.ts').write_text(
'''import type { PrivacyLocale } from '@/lib/privacy';
import en from './en';
import es from './es';
import ca from './ca';
import fr from './fr';
import it from './it';
import ro from './ro';
import da from './da';

export const PRIVACY_LOCALES: Record<string, PrivacyLocale> = { en, es, ca, fr, it, ro, da };
export const TRANSLATED_LANGS = ['ca', 'es', 'fr', 'it', 'ro', 'da'] as const;
export type TranslatedLang = (typeof TRANSLATED_LANGS)[number];
export function getPrivacyLocale(lang: string): PrivacyLocale | undefined {
  return PRIVACY_LOCALES[lang];
}
'''
)
print('done')
