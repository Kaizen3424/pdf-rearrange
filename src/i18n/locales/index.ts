import type { Locale } from '../ui';
import en, { type SiteDictionary } from './en';
import es from './es';
import ja from './ja';
import fr from './fr';
import de from './de';
import ptBr from './pt-br';
import ko from './ko';
import it from './it';

export type { SiteDictionary } from './en';

/**
 * Every locale must provide a complete `SiteDictionary`. Untranslated
 * locales temporarily re-export the English dictionary; as translations
 * land they replace those stubs.
 */
export const dictionaries: Record<Locale, SiteDictionary> = {
  en,
  es,
  ja,
  fr,
  de,
  'pt-br': ptBr,
  ko,
  it,
};
