"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
  badgeColor?: string;
}

export default function PageHeader({
  badge = "✨ What We Offer",
  title,
  description,
  badgeColor = "#c026d3",
}: PageHeaderProps) {
  const { theme } = useTheme();
  const colors = getTheme(theme);

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "64px",
        animation: "fadeInDown 0.8s ease-out",
      }}
    >
      {badge && (
        <div
          style={{
            display: "inline-block",
            padding: "6px 16px",
            background: `linear-gradient(135deg, ${badgeColor}1A 0%, ${badgeColor}0D 100%)`,
            border: `1px solid ${badgeColor}33`,
            borderRadius: "16px",
            marginBottom: "24px",
            fontSize: "12px",
            fontWeight: "600",
            color: badgeColor,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            boxShadow: `0 2px 8px ${badgeColor}1A`,
          }}
        >
          {badge}
        </div>
      )}

      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          margin: "0 0 16px 0",
          color: colors.text.primary,
          lineHeight: "1.2",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: colors.text.secondary,
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>
    </div>
  );
}
