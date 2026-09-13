import { createContext, useContext, type ReactNode } from 'react';
import type { ToolStrings } from '../../i18n/tool/en';
import { getToolStrings } from '../../i18n/tool';

export interface ToolI18n {
  locale: string;
  t: ToolStrings;
}

const ToolI18nContext = createContext<ToolI18n | null>(null);

export function ToolI18nProvider({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) {
  const value: ToolI18n = { locale, t: getToolStrings(locale) };
  return <ToolI18nContext.Provider value={value}>{children}</ToolI18nContext.Provider>;
}

export function useToolI18n(): ToolI18n {
  const context = useContext(ToolI18nContext);
  if (!context) {
    throw new Error('useToolI18n must be used inside <ToolI18nProvider>');
  }
  return context;
}
