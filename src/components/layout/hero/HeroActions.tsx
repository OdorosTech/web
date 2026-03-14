"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { GlassButton } from "@/components/ui/glass/GlassComponents";
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
          variant="primary"
          size="lg"
          theme={theme}
          glow
          icon={
            <ArrowRightOutlined
              style={{
                transition: "transform 0.3s ease",
                transform:
                  hoveredButton === "primary"
                    ? "translateX(4px)"
                    : "translateX(0)",
              }}
            />
          }
          // onMouseEnter={() => setHoveredButton("primary")}
          // onMouseLeave={() => setHoveredButton(null)}
        >
          {buttons.primary.text}
        </GlassButton>
      </Link>

      <Link href={buttons.secondary.href} style={{ textDecoration: "none" }}>
        <GlassButton
          variant="secondary"
          size="lg"
          theme={theme}
          // onMouseEnter={() => setHoveredButton("secondary")}
          // onMouseLeave={() => setHoveredButton(null)}
        >
          {buttons.secondary.text}
        </GlassButton>
      </Link>
    </div>
  );
};

export default HeroActions;
