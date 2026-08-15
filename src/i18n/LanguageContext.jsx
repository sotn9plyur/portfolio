import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { translations } from './translations'
import {
  initLanguageState,
  initialState,
  languageReducer,
  persistLanguage,
  setLanguage,
  toggleLanguage,
} from '../store/languageSlice'

/* Two contexts on purpose: the actions object never changes, so anything that
   only needs to switch the language does not re-render when it switches. */
const LanguageValueContext = createContext(null)
const LanguageActionsContext = createContext(null)

export function LanguageProvider({ children }) {
  const [{ lang }, dispatch] = useReducer(languageReducer, initialState, initLanguageState)

  useEffect(() => {
    persistLanguage(lang)
  }, [lang])

  const value = useMemo(() => ({ lang, t: translations[lang] }), [lang])

  const actions = useMemo(
    () => ({
      setLang: (next) => dispatch(setLanguage(next)),
      toggleLang: () => dispatch(toggleLanguage()),
    }),
    []
  )

  return (
    <LanguageActionsContext.Provider value={actions}>
      <LanguageValueContext.Provider value={value}>{children}</LanguageValueContext.Provider>
    </LanguageActionsContext.Provider>
  )
}

/* current language and its dictionary — changes on every switch */
export function useLanguage() {
  const ctx = useContext(LanguageValueContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}

/* stable setters — subscribing to these never causes a re-render */
export function useLanguageActions() {
  const ctx = useContext(LanguageActionsContext)
  if (!ctx) throw new Error('useLanguageActions must be used inside <LanguageProvider>')
  return ctx
}
