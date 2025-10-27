"use client";
import { ReactNode } from "react";
import * as Icons from "@ant-design/icons";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";

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
}

export default function GlowingCard({
  title,
  description,
  icon,
  features = [],
  color = "#c026d3",
  gradient = "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
  isHovered,
  onMouseEnter,
  onMouseLeave,
  index = 0,
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
        background:
          theme === "dark"
            ? "rgba(255, 255, 255, 0.05)" // subtle light tint for dark theme
            : "rgba(255, 255, 255, 0.3)", // subtle white tint for light theme
        border: isHovered
          ? `1px solid ${color}40`
          : `1px solid ${colors.border.primary}`,
        borderRadius: "16px",
        padding: "32px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: isHovered
          ? `0 8px 24px ${color}30` // softer, more transparent glow
          : `0 4px 12px rgba(0,0,0,0.05)`, // subtle shadow when not hovered
        cursor: "pointer",
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
        overflow: "hidden",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Top gradient bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: gradient,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          boxShadow: isHovered ? `0 0 12px ${color}50` : "none", // softer glow
          borderRadius: "0 0 12px 12px",
        }}
      />

      {/* Icon container */}
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "16px",
          background: isHovered ? gradient : `${color}15`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          marginBottom: "20px",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isHovered
            ? "scale(1.05) rotate(3deg)"
            : "scale(1) rotate(0deg)",
          boxShadow: isHovered
            ? `0 6px 16px ${color}30, 0 0 0 3px ${color}10`
            : "none",
          position: "relative",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <span
          style={{
            filter: isHovered ? "brightness(1.1)" : "none",
            transition: "filter 0.3s ease",
          }}
        >
          <IconComponent style={{ fontSize: 48, color: color }} />
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "600",
          color: colors.text.primary,
          marginBottom: "12px",
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
          textShadow: "0 0 4px rgba(0,0,0,0.1)", // subtle text shadow for clarity
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "14px",
          color: colors.text.secondary,
          lineHeight: "1.6",
          marginBottom: "20px",
        }}
      >
        {description}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: `linear-gradient(90deg, transparent 0%, ${colors.border.primary} 50%, transparent 100%)`,
          margin: "20px 0",
        }}
      />

      {/* Features list */}
      {features.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontSize: "14px",
                color: colors.text.secondary,
                transition: "all 0.3s ease",
                transform: isHovered ? "translateX(3px)" : "translateX(0)",
                transitionDelay: `${idx * 0.05}s`,
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: color,
                  marginRight: "12px",
                  boxShadow: isHovered ? `0 0 6px ${color}40` : "none",
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
          fontSize: "14px",
          fontWeight: "500",
          marginTop: "16px",
          transition: "all 0.3s ease",
          opacity: isHovered ? 1 : 0.7,
        }}
      >
        Learn More
        <span
          style={{
            marginLeft: "8px",
            transition: "transform 0.3s ease",
            transform: isHovered ? "translateX(3px)" : "translateX(0)",
            display: "inline-block",
          }}
        >
          →
        </span>
      </div>

      {/* Corner decoration */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      )}
    </div>
  );
}
