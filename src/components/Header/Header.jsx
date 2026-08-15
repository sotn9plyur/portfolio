import { useEffect, useState } from 'react'
import { useLanguage, useLanguageActions } from '../../i18n/LanguageContext.jsx'
import { LINKS } from '../../i18n/translations.js'
import './Header.css'

export default function Header() {
  const { t, lang } = useLanguage()
  const { toggleLang } = useLanguageActions()
  const [menuOpen, setMenuOpen] = useState(false)

  /* the burger only exists on narrow screens; close it on Escape and on resize
     so the menu can never stay stuck open after switching back to desktop */
  useEffect(() => {
    if (!menuOpen) return

    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const onResize = () => setMenuOpen(false)

    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  return (
    <header className="header">
      <div className="container header__inner">
        <button
          className="burger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="header-nav"
          aria-label={lang === 'ru' ? 'Меню' : 'Menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="burger__bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav className="header__nav" id="header-nav" data-open={menuOpen}>
          <a
            className="header__btn header__btn--glass"
            href={LINKS.behance}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setMenuOpen(false)}
          >
            {t.header.portfolio}
          </a>

          <a
            className="header__btn header__btn--solid"
            href={LINKS.telegram}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setMenuOpen(false)}
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
