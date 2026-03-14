"use client";
import React from "react";
import { GlassContainer } from "@/components/ui/glass/GlassComponents";
import { designTokens } from "@/styles/design-system";

export const HeroBadge: React.FC<{
  badge: { label: string; text: string };
  theme: any;
}> = ({ badge, theme }) => (
  <GlassContainer
    variant="secondary"
    theme={theme}
    glow
    animated
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: designTokens.spacing.md,
      padding: `${designTokens.spacing.sm} ${designTokens.spacing.lg}`,
      borderRadius: designTokens.borderRadius.pill,
      marginBottom: designTokens.spacing["2xl"],
      fontSize: designTokens.typography.fontSizes.sm,
      fontWeight: designTokens.typography.fontWeights.medium,
    }}
  >
    <span
      style={{
        padding: `${designTokens.spacing.xs} ${designTokens.spacing.md}`,
        background: `linear-gradient(135deg, ${theme.colors.primary}40 0%, ${theme.colors.secondary}40 100%)`,
        borderRadius: designTokens.borderRadius.pill,
        fontSize: designTokens.typography.fontSizes.xs,
        fontWeight: designTokens.typography.fontWeights.semibold,
        color: theme.colors.text.primary,
      }}
    >
      {badge.label}
    </span>
    <span style={{ color: theme.colors.text.secondary }}>{badge.text}</span>
  </GlassContainer>
);

export default HeroBadge;
