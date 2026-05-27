import React, { ReactNode, CSSProperties } from "react";
import {
  designTokens,
  GlassmorphismTheme,
} from "../../../styles/design-system";

export interface GlassContainerProps {
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

export default GlassContainer;
