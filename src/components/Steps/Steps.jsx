import { Fragment } from 'react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import './Steps.css'

/* Placeholder until the real step icons are delivered. */
function IconPlaceholder() {
  return (
    <svg className="step__icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
  )
}

function Chevron() {
  return (
    <svg className="steps__chevron" viewBox="0 0 8 12" aria-hidden="true">
      <path
        d="M1.5 1.5 6 6l-4.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Steps() {
  const { t } = useLanguage()
  const items = t.steps.items

  return (
    <section className="steps section" id="steps">
      <div className="container">
        <div className="title-row steps__head">
          <h2 className="section-title">{t.steps.title}</h2>
          <img className="icon-cross" src="/SVG/Cross.svg" alt="" />
        </div>

        <div className="steps__track">
          {items.map((item, i) => (
            <Fragment key={item.title}>
              {i > 0 && <Chevron />}
              <div className={`step ${i === items.length - 1 ? 'step--accent' : ''}`}>
                <div className="step__badge">
                  <IconPlaceholder />
                </div>
                <span className="step__number">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step__title">{item.title}</h3>
                <p className="step__text">{item.text}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
