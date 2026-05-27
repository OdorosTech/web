"use client";
import React from "react";
import { GlassText } from "@/components/ui/glass";
import { designTokens } from "@/styles/design-system";

export const HeroTitle: React.FC<{
  title: { main: string; highlight: string };
  theme: any;
}> = ({ title, theme }) => (
  <GlassText
    variant='h1'
    theme={theme}
    style={{
      marginBottom: designTokens.spacing.xl,
      maxWidth: "800px",
      fontSize: "clamp(3rem, 5vw, 4.5rem)",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      fontWeight: 700,
    }}
  >
    {title.main}
    <br />
    <GlassText
      variant='h1'
      gradient
      theme={theme}
      style={{ display: "inline" }}
    >
      {title.highlight}
    </GlassText>
  </GlassText>
);

export default HeroTitle;
