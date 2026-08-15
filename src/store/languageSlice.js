/**
 * Language state, kept free of React so it can be tested on its own and
 * dropped into a real store later without changes.
 */

export const LANGUAGES = ['ru', 'en']
export const DEFAULT_LANGUAGE = 'ru'

const STORAGE_KEY = 'chaga-lang'

const isLanguage = (value) => LANGUAGES.includes(value)

export function readStoredLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY)
  return isLanguage(saved) ? saved : DEFAULT_LANGUAGE
}

export const initialState = { lang: DEFAULT_LANGUAGE }

/* lazy init: reads storage once, on mount */
export const initLanguageState = () => ({ lang: readStoredLanguage() })

export const setLanguage = (lang) => ({ type: 'language/set', lang })
export const toggleLanguage = () => ({ type: 'language/toggle' })

export function languageReducer(state, action) {
  switch (action.type) {
    case 'language/set':
      if (!isLanguage(action.lang) || action.lang === state.lang) return state
      return { lang: action.lang }

    case 'language/toggle':
      return { lang: state.lang === 'ru' ? 'en' : 'ru' }

    default:
      return state
  }
}

/* side effects that belong to the language, not to any component */
export function persistLanguage(lang) {
  localStorage.setItem(STORAGE_KEY, lang)
  document.documentElement.lang = lang
}
