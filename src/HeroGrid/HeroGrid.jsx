import "./HeroGrid.css";

/**
 * Mesh of thin lines used as a background layer. It is drawn at a very low
 * contrast on purpose — the lines only really read where something bright
 * sits behind them, such as a <LightOval />.
 *
 * <HeroGrid cell={150} x="66%" y="42%" />
 *
 * cell     grid step in px
 * opacity  line opacity, 0..1
 * x, y     centre of the fade mask, so the mesh never hits a hard edge
 * color    line colour
 */
export default function HeroGrid({
  cell = 150,
  opacity = 0.055,
  x = "50%",
  y = "50%",
  color = "#ffffff",
  className = "",
}) {
  return (
    <div
      className={`hero-grid ${className}`}
      aria-hidden="true"
      style={{
        "--grid-cell": `${cell}px`,
        "--grid-opacity": opacity,
        "--grid-x": x,
        "--grid-y": y,
        "--grid-color": color,
      }}
    />
  );
}
