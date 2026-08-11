import "./LightOval.css";

/**
 * Ambient glowing circle, positioned against the nearest positioned ancestor.
 *
 * <LightOval size={900} x="66%" y="42%" opacity={0.32} />
 *
 * size     diameter in px
 * x, y     centre of the circle, any CSS length or percentage
 * opacity  strength at the centre, 0..1
 * blur     extra blur in px on top of the gradient falloff
 * color    any CSS colour; defaults to the brand glow colour
 */
export default function LightOval({
  size = 600,
  x = "50%",
  y = "50%",
  opacity = 0.35,
  blur = 0,
  color,
  className = "",
}) {
  return (
    <span
      className={`light-oval ${className}`}
      aria-hidden="true"
      style={{
        "--oval-size": `${size}px`,
        "--oval-x": x,
        "--oval-y": y,
        "--oval-opacity": opacity,
        "--oval-blur": `${blur}px`,
        ...(color ? { "--oval-color": color } : null),
      }}
    />
  );
}
