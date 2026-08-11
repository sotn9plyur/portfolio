import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext.jsx";
import LightOval from "../LightOval/LightOval.jsx";
import "./ForU.css";

const SLIDES = [
  {
    wallpaper: "/foru/img/wallpaper/1.png",
    obj: "/foru/img/obj/01_ux_ui_design.png",
  },
  {
    wallpaper: "/foru/img/wallpaper/2.png",
    obj: "/foru/img/obj/02_motion_design.png",
  },
  {
    wallpaper: "/foru/img/wallpaper/3.png",
    obj: "/foru/img/obj/03_presentations.png",
  },
  {
    wallpaper: "/foru/img/wallpaper/4.png",
    obj: "/foru/img/obj/04_3d_design.png",
  },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function ForU() {
  const { t } = useLanguage();
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  /* The section is a tall track with a sticky pin inside. Scroll position within
     the track picks the slide, so the page keeps its native scrolling — the next
     section simply cannot be reached until the track is scrolled past. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = clamp(
        -track.getBoundingClientRect().top / scrollable,
        0,
        1,
      );
      const next = clamp(
        Math.floor(progress * SLIDES.length),
        0,
        SLIDES.length - 1,
      );
      setActive((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const slideState = (index) =>
    index === active ? "active" : index < active ? "past" : "next";

  return (
    <section className="foru" id="foru">
      <div
        className="foru__track"
        ref={trackRef}
        style={{ "--slides": SLIDES.length }}
      >
        <div className="foru__pin">
          <LightOval size={620} x="6%" y="45%" opacity={0.16} />

          <div className="container foru__inner">
            <div className="title-row foru__head">
              <h2 className="section-title">{t.foru.title}</h2>
              <img className="icon-cross" src="/SVG/Cross.svg" alt="" />
            </div>

            {/* wallpapers slide in from the right, the outgoing one leaves to the left */}
            <div className="foru__banner">
              {SLIDES.map((slide, i) => (
                <img
                  key={slide.wallpaper}
                  className="foru__wallpaper"
                  src={slide.wallpaper}
                  data-state={slideState(i)}
                  alt=""
                  aria-hidden="true"
                />
              ))}
            </div>

            <div className="foru__body">
              <div className="foru__figure">
                {SLIDES.map((slide, i) => (
                  <img
                    key={slide.obj}
                    className="foru__obj"
                    src={slide.obj}
                    data-state={i === active ? "active" : "hidden"}
                    alt={i === active ? t.foru.slides[i].heading : ""}
                    aria-hidden={i !== active}
                  />
                ))}
              </div>

              <div className="foru__content">
                {/* every slide's copy is stacked in place, so the rule below never shifts */}
                <div className="foru__texts">
                  {t.foru.slides.map((slide, i) => (
                    <div
                      className="foru__text-slide"
                      key={slide.heading}
                      data-state={i === active ? "active" : "hidden"}
                      aria-hidden={i !== active}
                    >
                      <div className="foru__heading">
                        <img
                          className="icon-arrow-sm foru__heading-arrow"
                          src="/SVG/ArrowLittle.svg"
                          alt=""
                        />
                        <h3>{slide.heading}</h3>
                      </div>
                      <p className="foru__text">{slide.text}</p>
                    </div>
                  ))}
                </div>

                <span className="foru__divider" />

                <div className="foru__counter">
                  <img
                    className="foru__counter-arrow"
                    src="/SVG/ArrowForU.svg"
                    alt=""
                  />

                  <div className="foru__counter-window">
                    <div
                      className="foru__counter-strip"
                      style={{
                        transform: `translateY(-${(active * 100) / SLIDES.length}%)`,
                      }}
                    >
                      {SLIDES.map((slide, i) => (
                        <span
                          className="foru__counter-value"
                          key={slide.wallpaper}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="foru__pagination">
                  <div className="dots" style={{ "--active": active }}>
                    {SLIDES.map((slide) => (
                      <span className="dots__dot" key={slide.wallpaper} />
                    ))}
                    <span className="dots__knob" />
                  </div>
                  <span className="foru__total">/{SLIDES.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
