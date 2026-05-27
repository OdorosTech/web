"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RocketOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { GlassButton } from "@/components/ui/glass";
import { designTokens } from "@/styles/design-system";

export const HeroActions: React.FC<{
  buttons: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
  theme: any;
}> = ({ buttons, theme }) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "flex",
        gap: designTokens.spacing.md,
        flexWrap: "wrap",
        marginBottom: designTokens.spacing["4xl"],
      }}
    >
      <Link href={buttons.primary.href} style={{ textDecoration: "none" }}>
        <GlassButton
          variant='primary'
          size='lg'
          theme={theme}
          glow
          icon={
            <RocketOutlined
              style={{
                transition:
                  "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                transform:
                  hoveredButton === "primary"
                    ? "translateX(4px) translateY(-4px)"
                    : "translateX(0) translateY(0)",
              }}
            />
          }
          onMouseEnter={() => setHoveredButton("primary")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {buttons.primary.text}
        </GlassButton>
      </Link>

      <Link href={buttons.secondary.href} style={{ textDecoration: "none" }}>
        <GlassButton
          variant='secondary'
          size='lg'
          theme={theme}
          icon={
            <PlayCircleOutlined
              style={{
                transition: "transform 0.3s ease, color 0.3s ease",
                transform:
                  hoveredButton === "secondary" ? "scale(1.1)" : "scale(1)",
                color:
                  hoveredButton === "secondary"
                    ? theme.colors.accent
                    : "inherit",
              }}
            />
          }
          onMouseEnter={() => setHoveredButton("secondary")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {buttons.secondary.text}
        </GlassButton>
      </Link>
    </div>
  );
};

export default HeroActions;
