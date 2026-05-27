// components/ui/Badge.tsx
"use client";
import React, { useState } from "react";
import { designTokens } from "@/styles/design-system";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";
import { AmbientGlow } from "../ui/AmbientGlow";

interface ReasonItem {
  text: string;
  desc: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const { theme } = useTheme();
  const colors = getTheme(theme);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons: ReasonItem[] = [
    {
      text: "Expert engineers with deep AI & GIS specialization",
      desc: "Our senior technical developers hold specialized background knowledge in intelligence networks and mapping coordinates.",
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='10' />
          <line x1='12' y1='16' x2='12' y2='12' />
          <line x1='12' y1='8' x2='12.01' y2='8' />
        </svg>
      ),
    },
    {
      text: "Proven record of scalable software deployment",
      desc: "Successful production-grade deployments utilizing container systems, microservices, and reliable server architectures.",
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
        </svg>
      ),
    },
    {
      text: "Custom solutions with clear communications",
      desc: "Dedicated project coordinators, sprint outlines, and highly transparent status reporting dashboards.",
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
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
      <AmbientGlow
        position={{ bottom: "-10%", left: "5%" }}
        color='#3b82f6'
        theme={theme}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Typography Layout */}
          <div style={{ animation: "fadeInLeft 0.8s ease-out" }}>
            <h2
              style={{
                fontSize: "clamp(34px, 4.5vw, 46px)",
                fontWeight: "800",
                margin: "0 0 24px 0",
                color: colors.text.primary,
                lineHeight: "1.15",
                letterSpacing: "-0.03em",
                fontFamily: designTokens.typography.fonts.heading,
              }}
            >
              Engineered for absolute impact.
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: colors.text.secondary,
                lineHeight: "1.75",
                margin: 0,
                fontWeight: "500",
                fontFamily: designTokens.typography.fonts.body,
              }}
            >
              Odoros bridges high-level custom AI modeling with robust
              geospatial coordinate positioning and enterprise software
              infrastructure to deliver systems that scale effortlessly.
            </p>
          </div>

          {/* Right Column: Airbnb Interactive List */}
          <div style={{ animation: "fadeInRight 0.8s ease-out" }}>
            <div
              style={{
                padding: "40px",
                background:
                  theme === "dark" ? "rgba(255, 255, 255, 0.01)" : "#ffffff",
                border: `1px solid ${theme === "dark" ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)"}`,
                borderRadius: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    display: "flex",
                    alignItems: "start",
                    gap: "20px",
                    padding: "16px",
                    borderRadius: "16px",
                    background:
                      hoveredIndex === index
                        ? theme === "dark"
                          ? "rgba(255, 255, 255, 0.02)"
                          : "rgba(0, 0, 0, 0.02)"
                        : "transparent",
                    transition: "all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    transform:
                      hoveredIndex === index
                        ? "translateX(6px)"
                        : "translateX(0)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      color:
                        hoveredIndex === index
                          ? "#ac188c"
                          : colors.text.secondary,
                      transition: "color 0.25s ease",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {reason.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "16px",
                        color: colors.text.primary,
                        fontWeight: "700",
                        fontFamily: designTokens.typography.fonts.heading,
                        marginBottom: "6px",
                      }}
                    >
                      {reason.text}
                    </div>
                    <div
                      style={{
                        fontSize: "13.5px",
                        color: colors.text.secondary,
                        lineHeight: "1.55",
                        fontWeight: "500",
                        fontFamily: designTokens.typography.fonts.body,
                      }}
                    >
                      {reason.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
