"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  const { theme } = useTheme();
  const colors = getTheme(theme);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.background,
        padding: "80px 24px 40px",
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
