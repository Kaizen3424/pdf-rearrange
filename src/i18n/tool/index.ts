import type { Locale } from '../ui';
import en, { type ToolStrings } from './en';
import es from './es';
import ja from './ja';
import fr from './fr';
import de from './de';
import ptBr from './pt-br';
import ko from './ko';
import it from './it';

export type { ToolStrings } from './en';

/**
 * Tool UI strings for every locale. This module is imported by the client
 * bundle (the React tool), so it must stay free of the long-form site copy
 * that lives in `src/i18n/locales/`.
 */
export const toolDictionaries: Record<Locale, ToolStrings> = {
  en,
  es,
  ja,
  fr,
  de,
  'pt-br': ptBr,
  ko,
  it,
};

export function getToolStrings(locale: string): ToolStrings {
  return toolDictionaries[locale as Locale] ?? en;
}
