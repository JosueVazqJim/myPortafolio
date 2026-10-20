import en from '../locales/en/common.json'
import es from '../locales/es/common.json'

export const DEFAULT_LOCALE = 'es'
export const LOCALES = ['es', 'en'] as const

export type Locale = (typeof LOCALES)[number]
type Dictionary = typeof es

const dictionaries: Record<Locale, Dictionary> = { es, en }

export function getLocale(currentLocale: string | undefined): Locale {
  return LOCALES.find((locale) => locale === currentLocale) ?? DEFAULT_LOCALE
}

// Devuelve la función t() para el idioma actual. Acepta el prefijo de
// namespace 'common:' por compatibilidad con las claves de i18next.
export function useTranslations(currentLocale: string | undefined) {
  const dictionary = dictionaries[getLocale(currentLocale)]

  return function t<K extends keyof Dictionary>(
    key: K | `common:${K}`
  ): Dictionary[K] {
    return dictionary[key.replace(/^common:/, '') as K]
  }
}
