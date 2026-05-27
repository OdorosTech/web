import React, { ReactNode, CSSProperties } from "react";
import {
  designTokens,
  GlassmorphismTheme,
} from "../../../styles/design-system";

export interface GlassButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  shape?: "rounded" | "pill";
  onClick?: () => void;
  disabled?: boolean;
  theme: GlassmorphismTheme;
  icon?: ReactNode;
  loading?: boolean;
  glow?: boolean;
  style?: CSSProperties;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  shape = "pill",
  onClick,
  disabled = false,
  theme,
  icon,
  loading = false,
  glow = false,
  style = {},
  onMouseEnter,
  onMouseLeave,
}) => {
  const sizeStyles = {
    sm: {
      padding: "10px 20px",
      fontSize: designTokens.typography.fontSizes.sm,
    },
    md: {
      padding: "14px 28px",
      fontSize: designTokens.typography.fontSizes.base,
    },
    lg: {
      padding: "18px 36px",
      fontSize: designTokens.typography.fontSizes.lg,
    },
  };

  const variantStyles = {
    primary: {
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      color: "#ffffff",
      border: "none",
      boxShadow: glow ? `0 8px 24px ${theme.colors.glow.primary}` : "none",
    },
    secondary: {
      background: theme.colors.glass.primary,
      color: theme.colors.text.primary,
      border: `1px solid ${theme.colors.glass.border}`,
      backdropFilter: designTokens.glass.backdrop.medium,
      WebkitBackdropFilter: designTokens.glass.backdrop.medium,
      boxShadow: "none",
    },
    ghost: {
      background: "transparent",
      color: theme.colors.text.secondary,
      border: `1px solid ${theme.colors.glass.border}`,
      boxShadow: "none",
    },
  };

  const baseStyles: CSSProperties = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    borderRadius:
      shape === "pill"
        ? designTokens.borderRadius.pill
        : designTokens.borderRadius.md,
    fontFamily: designTokens.typography.fonts.heading,
    fontWeight: designTokens.typography.fontWeights.semibold,
    cursor: disabled || loading ? "not-allowed" : "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: designTokens.spacing.sm,
    position: "relative",
    overflow: "hidden",
    opacity: disabled ? 0.6 : 1,
    borderWidth: variant === "primary" ? 0 : "1px",
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
      if (variant === "primary") {
        e.currentTarget.style.boxShadow = `0 12px 28px ${theme.colors.glow.hover}`;
      } else {
        e.currentTarget.style.background = theme.colors.glass.secondary;
      }
    }
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      if (variant === "primary") {
        e.currentTarget.style.boxShadow = glow
          ? `0 8px 24px ${theme.colors.glow.primary}`
          : "none";
      } else {
        e.currentTarget.style.background = variantStyles[variant].background;
      }
    }
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <button
      style={baseStyles}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {loading ? (
        <div
          style={{
            width: "16px",
            height: "16px",
            border: "2px solid transparent",
            borderTop: `2px solid ${variant === "primary" ? "#ffffff" : theme.colors.text.primary}`,
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
      ) : (
        icon && (
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            {icon}
          </span>
        )
      )}
      <span>{children}</span>

      {/* CSS Animation for Spinner */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
};

export default GlassButton;
