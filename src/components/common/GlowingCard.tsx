"use client";
import { ReactNode } from "react";
import * as Icons from "@ant-design/icons";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";
import Link from "next/link";

interface GlowingCardProps {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  color?: string;
  gradient?: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  index?: number;
  slug?: string;
}

export default function GlowingCard({
  title,
  description,
  icon,
  features = [],
  color = "#ac188c",
  gradient = "linear-gradient(135deg, #ac188c 0%, #9333ea 100%)",
  isHovered,
  onMouseEnter,
  onMouseLeave,
  index = 0,
  slug,
}: GlowingCardProps) {
  const IconComponent = icon ? (Icons as any)[icon] : Icons.StarOutlined;
  const { theme } = useTheme();
  const colors = getTheme(theme);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "relative",
        background: theme === "dark" ? "rgba(255, 255, 255, 0.02)" : "#ffffff",
        border: isHovered
          ? `1.5px solid ${color}`
          : theme === "dark"
            ? "1px solid rgba(255, 255, 255, 0.06)"
            : "1px solid rgba(0, 0, 0, 0.06)",
        borderRadius: "20px",
        padding: "36px",
        transition: "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 0, 0, 0.12)"
          : "0 4px 16px rgba(0, 0, 0, 0.01)",
        cursor: "pointer",
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
        overflow: "hidden",
      }}
    >
      {/* Circle Outline Icon Wrap */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: isHovered
            ? `1.5px solid ${color}`
            : theme === "dark"
              ? "1.5px solid rgba(255, 255, 255, 0.1)"
              : "1.5px solid rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          color: color,
          transition: "all 0.3s ease",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      >
        <IconComponent style={{ fontSize: 22 }} />
      </div>

      {/* Title (Outfit font) */}
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: colors.text.primary,
          marginBottom: "12px",
          fontFamily: "var(--font-outfit)",
        }}
      >
        {title}
      </h3>

      {/* Description (Plus Jakarta Sans) */}
      <p
        style={{
          fontSize: "14px",
          color: colors.text.secondary,
          lineHeight: "1.6",
          marginBottom: "20px",
          fontWeight: "500",
          fontFamily: "var(--font-plus-jakarta)",
        }}
      >
        {description}
      </p>

      {/* Divider */}
      {features.length > 0 && (
        <div
          style={{
            height: "1px",
            background:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.06)"
                : "rgba(0, 0, 0, 0.06)",
            margin: "20px 0",
          }}
        />
      )}

      {/* Features list (Plus Jakarta Sans) */}
      {features.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontSize: "13.5px",
                color: colors.text.secondary,
                fontWeight: "500",
                fontFamily: "var(--font-plus-jakarta)",
                transition: "all 0.3s ease",
                transform: isHovered ? "translateX(3px)" : "translateX(0)",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: color,
                  marginRight: "10px",
                  transition: "all 0.3s ease",
                }}
              />
              {feature}
            </div>
          ))}
        </div>
      )}

      {/* Learn More Link */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: color,
          fontSize: "13px",
          fontWeight: "700",
          marginTop: "16px",
          fontFamily: "var(--font-outfit)",
          transition: "all 0.3s ease",
          opacity: isHovered ? 1 : 0.8,
        }}
      >
        <Link key={slug} href={`/services/${slug}`}>
          <span>Learn More</span>
          <span
            style={{
              marginLeft: "6px",
              transition: "transform 0.3s ease",
              transform: isHovered ? "translateX(3px)" : "translateX(0)",
              display: "inline-block",
            }}
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
