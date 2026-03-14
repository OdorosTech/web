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
      marginBottom: designTokens.spacing["3xl"],
      maxWidth: "600px",
      color: theme.colors.text.secondary,
    }}
  >
    {description}
  </GlassText>
);

export default HeroDescription;
