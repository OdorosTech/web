import React, { ReactNode, CSSProperties } from "react";
import {
  designTokens,
  GlassmorphismTheme,
} from "../../../styles/design-system";

export interface GlassBadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  theme: GlassmorphismTheme;
  glow?: boolean;
  style?: CSSProperties;
}

export const GlassBadge: React.FC<GlassBadgeProps> = ({
  children,
  variant = "primary",
  theme,
  glow = false,
  style = {},
}) => {
  const variantColors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    accent: theme.colors.accent,
  };

  const baseStyles: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: designTokens.spacing.xs,
    padding: "6px 14px",
    background: theme.colors.glass.secondary,
    backdropFilter: designTokens.glass.backdrop.light,
    WebkitBackdropFilter: designTokens.glass.backdrop.light,
    border: `1px solid ${theme.colors.glass.border}`,
    borderRadius: designTokens.borderRadius.pill,
    fontFamily: designTokens.typography.fonts.body,
    fontSize: "13px",
    fontWeight: designTokens.typography.fontWeights.semibold,
    color: variantColors[variant],
    boxShadow: glow ? `0 0 16px ${variantColors[variant]}25` : "none",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
    ...style,
  };

  return <div style={baseStyles}>{children}</div>;
};

export default GlassBadge;
