import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS } from '../../i18n/translations.js'
import './Footer.css'

/* size / position / timing of the drifting bubbles */
const BUBBLES = [
  { size: 120, left: '6%', top: '18%', duration: 17, delay: 0 },
  { size: 74, left: '17%', top: '62%', duration: 22, delay: -4 },
  { size: 46, left: '31%', top: '30%', duration: 14, delay: -9 },
  { size: 150, left: '58%', top: '12%', duration: 25, delay: -2 },
  { size: 60, left: '73%', top: '58%', duration: 19, delay: -12 },
  { size: 96, left: '88%', top: '26%', duration: 21, delay: -7 },
  { size: 34, left: '46%', top: '74%', duration: 16, delay: -5 },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer" id="footer">
      <div className="footer__bubbles" aria-hidden="true">
        {BUBBLES.map((bubble, i) => (
          <span
            className="bubble"
            key={i}
            style={{
              '--size': `${bubble.size}px`,
              '--left': bubble.left,
              '--top': bubble.top,
              '--duration': `${bubble.duration}s`,
              '--delay': `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container footer__inner">
        <h2 className="footer__name">{t.footer.name}</h2>
        <p className="footer__tagline">{t.footer.tagline}</p>

        <a
          className="footer__cta"
          href={LINKS.telegram}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={t.footer.button}
        >
          <img src="/buttons/1.png" alt={t.footer.button} />
        </a>

        <img className="footer__cross" src="/SVG/Cross.svg" alt="" aria-hidden="true" />
      </div>

      <div className="container footer__bar">
        <span>{t.footer.copyright}</span>
        <span className="footer__made">
          {t.footer.madeWith}
          <img className="footer__heart" src="/footer/Like.svg" alt="" />
        </span>
      </div>
    </footer>
  )
}
