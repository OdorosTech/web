"use client";
import React from "react";
import { GlassText } from "@/components/ui/glass/GlassComponents";
import { designTokens } from "@/styles/design-system";

export const HeroDescription: React.FC<{
  description: string;
  theme: any;
}> = ({ description, theme }) => (
  <GlassText
    variant="body"
    theme={theme}
    style={{
      marginBottom: designTokens.spacing["4xl"],
      maxWidth: "600px",
      color: theme.colors.text.secondary,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    }}
  >
    {description}
  </GlassText>
);

export default HeroDescription;
