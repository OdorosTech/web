"use client";
import { ReactNode } from "react";
import GlowingBackground from "@/components/common/GlowingBackground";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";

interface PageContainerProps {
  children: ReactNode;
  maxWidth?: string;
  primaryColor?: string;
  secondaryColor?: string;
  withGlow?: boolean;
}

export default function PageContainer({
  children,
  maxWidth = "1200px",
  primaryColor,
  secondaryColor,
  withGlow = false,
}: PageContainerProps) {
  const { theme } = useTheme();
  const colors = getTheme(theme);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: withGlow ? colors.background.secondary : colors.background.primary,
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 60px",
        transition: "background 0.3s ease",
      }}
    >
      {withGlow && (
        <GlowingBackground
          primaryColor={primaryColor || colors.glow.primary}
          secondaryColor={secondaryColor || colors.glow.secondary}
        />
      )}

      <div
        style={{
          maxWidth: maxWidth,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
