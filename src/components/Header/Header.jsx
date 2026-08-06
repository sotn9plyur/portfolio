import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS } from '../../i18n/translations.js'
import './Header.css'

export default function Header() {
  const { t, lang, toggleLang } = useLanguage()

  return (
    <header className="header">
      <div className="container header__inner">
        <nav className="header__nav">
          <a
            className="header__btn header__btn--glass"
            href={LINKS.behance}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t.header.portfolio}
          </a>

          <a
            className="header__btn header__btn--solid"
            href={LINKS.telegram}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t.header.contact}
          </a>

          <button
            className={`lang lang--${lang}`}
            type="button"
            onClick={toggleLang}
            aria-label={lang === 'ru' ? 'Switch to English' : 'Переключить на русский'}
          >
            <span className="lang__knob" aria-hidden="true" />
            <span className={`lang__item ${lang === 'en' ? 'is-active' : ''}`}>EN</span>
            <span className={`lang__item ${lang === 'ru' ? 'is-active' : ''}`}>RU</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
