import { useLanguage } from '../../i18n/LanguageContext.jsx'
import LightOval from '../LightOval/LightOval.jsx'
import './Can.css'

const TECHS = [
  { name: 'JavaScript', src: '/can/JS.svg' },
  { name: 'React', src: '/can/React.svg' },
  { name: 'CSS', src: '/can/CSS.svg' },
  { name: 'HTML', src: '/can/HTML.svg' },
]

export default function Can() {
  const { t } = useLanguage()

  return (
    <section className="can section" id="can">
      {/* pushed off the left edge — only ~60% of the circle stays on screen */}
      <LightOval size={700} x="5%" y="80%" opacity={0.2} />

      <div className="container can__inner">
        <div className="can__head">
          <img className="icon-arrow-sm can__head-arrow" src="/SVG/ArrowLittle.svg" alt="" />
          <h2 className="section-title can__title">
            <span>{t.can.title[0]}</span>
            <span>{t.can.title[1]}</span>
          </h2>
        </div>

        <div className="can__body">
          <div className="can__copy">
            <p className="can__stack">{t.can.stack}</p>
            <p className="can__text">{t.can.text}</p>
          </div>

          <div className="can__grid">
            <ul className="can__cells">
              {TECHS.map((tech) => (
                <li className="can__cell" key={tech.name}>
                  <img className="can__logo" src={tech.src} alt={tech.name} />
                </li>
              ))}
            </ul>

            {/* two rules with a hole in the middle — they must not meet */}
            <span className="can__divider can__divider--v" aria-hidden="true" />
            <span className="can__divider can__divider--h" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
