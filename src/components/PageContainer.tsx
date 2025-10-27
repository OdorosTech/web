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
}

export default function PageContainer({
  children,
  maxWidth = "1400px",
  primaryColor,
  secondaryColor,
}: PageContainerProps) {
  const { theme } = useTheme();
  const colors = getTheme(theme);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.background.secondary,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GlowingBackground
        primaryColor={primaryColor || colors.glow.primary}
        secondaryColor={secondaryColor || colors.glow.secondary}
      />

      <div
        style={{
          maxWidth: maxWidth,
          margin: "0 auto",
          padding: "80px 24px 60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
