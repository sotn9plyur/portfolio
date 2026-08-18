import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS } from '../../i18n/translations.js'
import './About.css'

export default function About() {
  const { t, lang } = useLanguage()
  const a = t.about

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="title-row about__head">
          <h2 className="section-title section-title_myportfolio">{a.title}</h2>
          <img className="icon-arrow-sm" src="/SVG/ArrowLittle.svg" alt="" />
        </div>

        <div className="about__card">
          <div className="about__text">
            <p className="about__lead">
              {a.lead[0]} <br />
              {a.lead[1]} <br />
              <mark className="mark mark--orange">{a.accentOrange}</mark> {a.and} <br />
              <mark className="mark mark--blue">{a.accentBlue}</mark> {a.tail}
            </p>
            <span className="about__underline" />
          </div>

          <div className="about__panel">
            <img
              className="about__panel-image"
              src="/portfolios/1.webp"
              alt={lang === 'ru' ? 'Оранжевые стеклянные сферы' : 'Orange glass spheres'}
            />
            <span className="about__panel-badge" aria-hidden="true">
              <img src="/SVG/Cross.svg" alt="" />
            </span>

            <a
              className="about__cta"
              href={LINKS.behance}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={a.button}
            >
              <img src="/buttons/2.png" alt={a.button} />
            </a>
          </div>
        </div>

        <span className="about__rule" />
      </div>
    </section>
  )
}
