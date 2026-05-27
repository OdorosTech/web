import React, { ReactNode, CSSProperties } from "react";
import {
  designTokens,
  GlassmorphismTheme,
} from "../../../styles/design-system";

export interface GlassTextProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  gradient?: boolean;
  theme: GlassmorphismTheme;
  className?: string;
  style?: CSSProperties;
}

export const GlassText: React.FC<GlassTextProps> = ({
  children,
  variant = "body",
  gradient = false,
  theme,
  className = "",
  style = {},
}) => {
  const isHeading = variant.startsWith("h");

  const variantStyles = {
    h1: {
      fontFamily: designTokens.typography.fonts.heading,
      fontSize: designTokens.typography.fontSizes["3xl"],
      fontWeight: designTokens.typography.fontWeights.bold,
      lineHeight: designTokens.typography.lineHeights.tight,
      letterSpacing: designTokens.typography.letterSpacing.tight,
    },
    h2: {
      fontFamily: designTokens.typography.fonts.heading,
      fontSize: designTokens.typography.fontSizes["2xl"],
      fontWeight: designTokens.typography.fontWeights.bold,
      lineHeight: designTokens.typography.lineHeights.tight,
      letterSpacing: designTokens.typography.letterSpacing.tight,
    },
    h3: {
      fontFamily: designTokens.typography.fonts.heading,
      fontSize: designTokens.typography.fontSizes.xl,
      fontWeight: designTokens.typography.fontWeights.semibold,
      lineHeight: designTokens.typography.lineHeights.normal,
    },
    body: {
      fontFamily: designTokens.typography.fonts.body,
      fontSize: designTokens.typography.fontSizes.base,
      fontWeight: designTokens.typography.fontWeights.normal,
      lineHeight: designTokens.typography.lineHeights.relaxed,
    },
    caption: {
      fontFamily: designTokens.typography.fonts.body,
      fontSize: designTokens.typography.fontSizes.sm,
      fontWeight: designTokens.typography.fontWeights.medium,
      lineHeight: designTokens.typography.lineHeights.normal,
    },
  };

  const baseStyles: CSSProperties = {
    ...variantStyles[variant],
    color: gradient ? "transparent" : theme.colors.text.primary,
    background: gradient
      ? `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`
      : "none",
    WebkitBackgroundClip: gradient ? "text" : "initial",
    backgroundClip: gradient ? "text" : "initial",
    margin: 0,
    transition: "color 0.3s ease, background 0.3s ease",
    ...style,
  };

  const Component = isHeading ? variant : "p";

  return React.createElement(
    Component,
    { className, style: baseStyles },
    children,
  );
};

export default GlassText;
