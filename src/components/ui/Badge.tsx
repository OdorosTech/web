import { designTokens } from "@/styles/design-system";
import React from "react";

export function SectionBadge({
  text,
  theme,
  color,
}: {
  text: string;
  theme: string;
  color: string;
}) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "6px 14px",
        background:
          theme === "dark"
            ? "rgba(255, 255, 255, 0.06)"
            : "rgba(0, 0, 0, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "100px",
        marginBottom: "24px",
        fontSize: "12px",
        fontWeight: "700",
        color: color,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontFamily: designTokens.typography.fonts.heading,
      }}
    >
      {text}
    </div>
  );
}
