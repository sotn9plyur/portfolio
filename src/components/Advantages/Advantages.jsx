import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import './Advantages.css'

export default function Advantages() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => setOpenIndex((prev) => (prev === index ? null : index))

  return (
    <section className="advantages section" id="advantages">
      <div className="container">
        <div className="advantages__head">
          <h2 className="section-title advantages__title">
            <span>{t.advantages.title[0]}</span>
            <span>{t.advantages.title[1]}</span>
          </h2>
          <img className="advantages__head-arrow" src="/SVG/ArrowBig.svg" alt="" />
        </div>

        <ul className="accordion">
          {t.advantages.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <li className={`accordion__item ${isOpen ? 'is-open' : ''}`} key={item.title}>
                <button
                  className="accordion__trigger"
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`advantage-panel-${i}`}
                >
                  <img className="accordion__cross" src="/SVG/Cross.svg" alt="" />
                  <span className="accordion__title">{item.title}</span>
                </button>

                <div
                  className="accordion__panel"
                  id={`advantage-panel-${i}`}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className="accordion__panel-inner">
                    <p className="accordion__text">{item.text}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
