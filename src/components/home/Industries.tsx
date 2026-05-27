"use client";
import React, { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";
import { designTokens } from "@/styles/design-system";

export default function Industries() {
  const { theme } = useTheme();
  const colors = getTheme(theme);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const industries = [
    {
      name: "Finance",
      color: "#3b82f6",
      desc: "Distributed ledger nodes, transaction security, and automated fiscal models.",
      icon: (
        <svg
          width='32'
          height='32'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='12' y1='1' x2='12' y2='23' />
          <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
        </svg>
      ),
    },
    {
      name: "Healthcare",
      color: "#10b981",
      desc: "Patient care diagnostic AI, coordinate GIS logistics, and private analytics.",
      icon: (
        <svg
          width='32'
          height='32'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
        </svg>
      ),
    },
    {
      name: "Retail",
      color: "#f97316",
      desc: "Predictive inventory forecasting, demand pipelines, and custom store software.",
      icon: (
        <svg
          width='32'
          height='32'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='9' cy='21' r='1' />
          <circle cx='20' cy='21' r='1' />
          <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
        </svg>
      ),
    },
    {
      name: "Manufacturing",
      color: "#ac188c",
      desc: "Assembly predictive maintenance, routing coordination, and visual automated checks.",
      icon: (
        <svg
          width='32'
          height='32'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='3' />
          <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z' />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        padding: "120px 20px",
        background: colors.background.primary,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background soft ambient halo */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${theme === "dark" ? "rgba(249, 115, 22, 0.06)" : "rgba(249, 115, 22, 0.03)"} 0%, transparent 75%)`,
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
      >
        {/* Header Block with Airbnb-like clean typography spacing */}
        <div
          style={{
            textAlign: "left",
            marginBottom: "72px",
            animation: "fadeInDown 0.8s ease-out",
          }}
        >
          {/* <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              background:
                theme === "dark"
                  ? "rgba(255, 255, 255, 0.06)"
                  : "rgba(0, 0, 0, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "100px",
              marginBottom: "20px",
              fontSize: "12px",
              fontWeight: "700",
              color: colors.text.secondary,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: designTokens.typography.fonts.heading,
            }}
          >
            🌐 Sectors
          </div> */}

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: "800",
              margin: "0 0 16px 0",
              color: colors.text.primary,
              lineHeight: "1.15",
              letterSpacing: "-0.03em",
              fontFamily: designTokens.typography.fonts.heading,
            }}
          >
            Industries we serve.
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: colors.text.secondary,
              maxWidth: "600px",
              lineHeight: "1.6",
              fontWeight: "500",
              margin: 0,
              fontFamily: designTokens.typography.fonts.body,
            }}
          >
            Delivering specialized intelligence networks and scalable
            application layers tailored across diverse industries.
          </p>
        </div>

        {/* Clean Industries Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: "relative",
                padding: "48px 32px",
                background:
                  theme === "dark" ? "rgba(255, 255, 255, 0.02)" : "#ffffff",
                border:
                  hoveredIndex === index
                    ? `1.5px solid ${industry.color}`
                    : theme === "dark"
                      ? "1px solid rgba(255, 255, 255, 0.06)"
                      : "1px solid rgba(0, 0, 0, 0.06)",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
                transform:
                  hoveredIndex === index ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hoveredIndex === index
                    ? "0 20px 40px rgba(0, 0, 0, 0.12)"
                    : "0 4px 16px rgba(0, 0, 0, 0.01)",
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Circular Outline Icon Container */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border:
                    hoveredIndex === index
                      ? `1.5px solid ${industry.color}`
                      : theme === "dark"
                        ? "1.5px solid rgba(255, 255, 255, 0.1)"
                        : "1.5px solid rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color:
                    hoveredIndex === index
                      ? industry.color
                      : colors.text.primary,
                  marginBottom: "28px",
                  transition: "all 0.3s ease",
                  transform:
                    hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                }}
              >
                {industry.icon}
              </div>

              {/* Name */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: colors.text.primary,
                  margin: "0 0 12px 0",
                  fontFamily: designTokens.typography.fonts.heading,
                }}
              >
                {industry.name}
              </h3>

              {/* Desc */}
              <p
                style={{
                  fontSize: "13.5px",
                  color: colors.text.secondary,
                  lineHeight: "1.6",
                  margin: 0,
                  fontWeight: "500",
                  fontFamily: designTokens.typography.fonts.body,
                }}
              >
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
