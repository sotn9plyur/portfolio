import { useLanguage } from '../../i18n/LanguageContext.jsx'
import LightOval from '../../LightOval/LightOval.jsx'
import HeroGrid from '../../HeroGrid/HeroGrid.jsx'
import './Hero.css'

const YEARS = ['2016', '2017', '2022', '2026']

/* rotating caption ring — the box is 220px wide, so 1 SVG unit == 1px */
const RING_BOX = 220
const RING_RADIUS = 85
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

/* quality / speed / reliability marker: N half-discs followed by a full disc */
function PillIcon({ index }) {
  const width = 12 + index * 8

  return (
    <svg className="pill__icon" viewBox={`0 0 ${width} 12`} aria-hidden="true">
      {Array.from({ length: index }, (_, i) => (
        <path key={i} d={`M${i * 8 + 6},0 a6,6 0 0,0 0,12 z`} fill="#fff" />
      ))}
      <circle cx={width - 6} cy="6" r="6" fill="#fff" />
    </svg>
  )
}

export default function Hero() {
  const { t, lang } = useLanguage()
  const ring = t.hero.ring

  return (
    <section className="hero section" id="hero">
      {/* glow sits behind the artwork, the grid reads only where the glow lifts it */}
      <div className="hero__backdrop" aria-hidden="true">
        <LightOval size={900} x="66%" y="42%" opacity={0.32} />
        <HeroGrid cell={150} x="66%" y="42%" />
      </div>

      <div className="container hero__inner">
        <div className="hero__top">
          <div className="hero__copy">
            <p className="hero__greeting">
              <span className="hero__greeting-dot" />
              {t.hero.greeting}
            </p>

            <h1 className="hero__name">
              <span>{t.hero.firstName}</span>
              <span>{t.hero.lastName}</span>
            </h1>

            <p className="hero__role">
              <span className="hero__role-design">{t.hero.roleDesign}</span>
              <span className="hero__role-amp"> {t.hero.roleAmp} </span>
              <span className="hero__role-dev">{t.hero.roleDev}</span>
            </p>

            <p className="hero__description">{t.hero.description}</p>
            <p className="hero__tagline">{t.hero.tagline}</p>
          </div>

          <div className="hero__visual">
            <img
              className="hero__image"
              src="/hero/hero.png"
              alt={lang === 'ru' ? 'Планшет, стилус и 3D-сфера' : 'Tablet, stylus and a 3D sphere'}
            />

            {/* rotating badge */}
            <div className="hero__ring" aria-hidden="true">
              {/* the box is 220px wide, so 1 user unit == 1px and font-size is literal */}
              <svg viewBox={`0 0 ${RING_BOX} ${RING_BOX}`}>
                <defs>
                  <path
                    id="heroRingPath"
                    d={`M${RING_BOX / 2},${RING_BOX / 2} m-${RING_RADIUS},0 a${RING_RADIUS},${RING_RADIUS} 0 1,1 ${RING_RADIUS * 2},0 a${RING_RADIUS},${RING_RADIUS} 0 1,1 -${RING_RADIUS * 2},0`}
                  />
                </defs>
                <text className="hero__ring-text">
                  {/* stretched to the full circumference so the ring always closes,
                      whatever the caption length */}
                  <textPath
                    href="#heroRingPath"
                    startOffset="0"
                    textLength={RING_CIRCUMFERENCE}
                    lengthAdjust="spacing"
                  >
                    {ring}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* the rule sits on top, the years hang underneath it */}
        <ul className="timeline">
          {YEARS.map((year) => (
            <li className="timeline__item" key={year}>
              <span className="timeline__year">{year}</span>
            </li>
          ))}
        </ul>

        <div className="hero__bottom">
          <img className="hero__bottom-arrow" src="/SVG/ArrowLittle.svg" alt="" />

          <p className="hero__since">
            <span className="hero__since-rule" />
            {t.hero.since}
          </p>

          <ul className="hero__pills">
            {t.hero.pills.map((pill, i) => (
              <li className="pill" key={pill}>
                <PillIcon index={i} />
                <span>{pill}</span>
              </li>
            ))}
          </ul>

          <p className="hero__scope">{t.hero.scope}</p>
        </div>
      </div>
    </section>
  )
}
