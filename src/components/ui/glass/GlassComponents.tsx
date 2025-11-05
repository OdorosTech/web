import React, { ReactNode, CSSProperties } from "react";
import {
  designTokens,
  GlassmorphismTheme,
} from "../../../styles/design-system";

// Base Glass Container Component
interface GlassContainerProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  style?: CSSProperties;
  theme: GlassmorphismTheme;
  glow?: boolean;
  animated?: boolean;
}

export const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  variant = "primary",
  className = "",
  style = {},
  theme,
  glow = false,
  animated = false,
}) => {
  const baseStyles: CSSProperties = {
    backdropFilter: designTokens.glass.backdrop.light,
    WebkitBackdropFilter: designTokens.glass.backdrop.light,
    background: theme.colors.glass[variant],
    border: `1px solid ${theme.colors.glass.border}`,
    borderRadius: designTokens.borderRadius.lg,
    // boxShadow: glow ? theme.shadow.glow : theme.shadow.md,
    transition: animated ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
    position: "relative" as const,
    overflow: "hidden" as const,
    ...style,
  };

  return (
    <div className={className} style={baseStyles}>
      {children}
      {glow && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 50%, ${theme.colors.glow.primary}, transparent 70%)`,
            opacity: 0.1,
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      )}
    </div>
  );
};

// Enhanced Button Component
interface GlassButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  theme: GlassmorphismTheme;
  icon?: ReactNode;
  loading?: boolean;
  glow?: boolean;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  theme,
  icon,
  loading = false,
  glow = false,
}) => {
  const sizeStyles = {
    sm: {
      padding: "12px 24px",
      fontSize: designTokens.typography.fontSizes.sm,
    },
    md: {
      padding: "16px 32px",
      fontSize: designTokens.typography.fontSizes.base,
    },
    lg: {
      padding: "20px 40px",
      fontSize: designTokens.typography.fontSizes.lg,
    },
  };

  const variantStyles = {
    primary: {
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      color: theme.colors.text.primary,
      border: "none",
    },
    secondary: {
      background: theme.colors.glass.primary,
      color: theme.colors.text.primary,
      border: `1px solid ${theme.colors.glass.border}`,
      backdropFilter: designTokens.glass.backdrop.medium,
    },
    ghost: {
      background: "transparent",
      color: theme.colors.text.secondary,
      border: `1px solid ${theme.colors.glass.border}`,
    },
  };

  const baseStyles: CSSProperties = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    borderRadius: designTokens.borderRadius.md,
    fontWeight: designTokens.typography.fontWeights.semibold,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "inline-flex",
    alignItems: "center",
    gap: designTokens.spacing.sm,
    position: "relative",
    overflow: "hidden",
    opacity: disabled ? 0.6 : 1,
    // boxShadow: glow ? theme.shadow.glow : theme.shadow.sm,
    transform: "translateY(0) scale(1)",
  };

  const hoverStyles: CSSProperties = {
    transform: "translateY(-2px) scale(1.02)",
    // boxShadow: glow ? theme.shadow.glow : theme.shadow.lg,
  };

  return (
    <button
      style={baseStyles}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          Object.assign(e.currentTarget.style, hoverStyles);
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !loading) {
          Object.assign(e.currentTarget.style, baseStyles);
        }
      }}
    >
      {loading ? (
        <div
          style={{
            width: "16px",
            height: "16px",
            border: "2px solid transparent",
            borderTop: `2px solid ${theme.colors.text.primary}`,
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
      ) : (
        icon
      )}
      {children}
    </button>
  );
};

// Badge Component
interface GlassBadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  theme: GlassmorphismTheme;
  glow?: boolean;
}

export const GlassBadge: React.FC<GlassBadgeProps> = ({
  children,
  variant = "primary",
  theme,
  glow = false,
}) => {
  const variantColors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    accent: theme.colors.accent,
  };

  const baseStyles: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: designTokens.spacing.sm,
    padding: `${designTokens.spacing.sm} ${designTokens.spacing.lg}`,
    background: theme.colors.glass.primary,
    backdropFilter: designTokens.glass.backdrop.light,
    border: `1px solid ${theme.colors.glass.border}`,
    borderRadius: designTokens.borderRadius.pill,
    fontSize: designTokens.typography.fontSizes.sm,
    fontWeight: designTokens.typography.fontWeights.medium,
    color: theme.colors.text.primary,
    // boxShadow: glow ? `0 0 20px ${variantColors[variant]}40` : theme.shadow.sm,
  };

  return <div style={baseStyles}>{children}</div>;
};

// Typography Components
interface GlassTextProps {
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
  const variantStyles = {
    h1: {
      fontSize: designTokens.typography.fontSizes["3xl"],
      fontWeight: designTokens.typography.fontWeights.bold,
      lineHeight: designTokens.typography.lineHeights.tight,
      letterSpacing: designTokens.typography.letterSpacing.tight,
    },
    h2: {
      fontSize: designTokens.typography.fontSizes["2xl"],
      fontWeight: designTokens.typography.fontWeights.bold,
      lineHeight: designTokens.typography.lineHeights.tight,
    },
    h3: {
      fontSize: designTokens.typography.fontSizes.xl,
      fontWeight: designTokens.typography.fontWeights.semibold,
      lineHeight: designTokens.typography.lineHeights.normal,
    },
    body: {
      fontSize: designTokens.typography.fontSizes.base,
      fontWeight: designTokens.typography.fontWeights.normal,
      lineHeight: designTokens.typography.lineHeights.relaxed,
    },
    caption: {
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
    ...style,
  };

  const Component = variant.startsWith("h") ? variant : "p";

  return React.createElement(
    Component,
    { className, style: baseStyles },
    children
  );
};
