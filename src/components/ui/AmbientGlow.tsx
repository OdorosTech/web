export function AmbientGlow({
  position,
  color,
  theme,
}: {
  position: React.CSSProperties;
  color: string;
  theme: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: "450px",
        height: "450px",
        background: `radial-gradient(circle, ${theme === "dark" ? `${color}0D` : `${color}05`} 0%, transparent 70%)`,
        borderRadius: "50%",
        filter: "blur(90px)",
        pointerEvents: "none",
        ...position,
      }}
    />
  );
}
