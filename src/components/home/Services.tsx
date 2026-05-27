"use client";
import React, { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";
import { designTokens } from "@/styles/design-system";

export default function Services() {
  const { theme } = useTheme();
  const colors = getTheme(theme);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "AI & Machine Learning",
      description:
        "Custom AI integrations, deep neural modeling, and automatic intelligence solutions tailored for digital optimization.",
      color: theme === "dark" ? "#ac188c" : "#ac188c",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path
            d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z'
            strokeDasharray='3,3'
          />
          <path d='M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6z' />
          <circle cx='12' cy='12' r='2' fill='currentColor' />
          <path d='M12 2v4M12 18v4M2 12h4M18 12h4' />
        </svg>
      ),
    },
    {
      title: "Data Analytics",
      description:
        "Transform complex big-data pipelines into clean, actionable insights and visual metrics for executive decision-making.",
      color: "#3b82f6",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='18' y1='20' x2='18' y2='10' />
          <line x1='12' y1='20' x2='12' y2='4' />
          <line x1='6' y1='20' x2='6' y2='14' />
          <path d='M3 20h18' />
        </svg>
      ),
    },
    {
      title: "Consulting",
      description:
        "Strategic consulting, framework architecture, and guidance for scalable software infrastructure and digital modernization.",
      color: "#10b981",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='10' />
          <polygon points='16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76' />
        </svg>
      ),
    },
    {
      title: "Software Development",
      description:
        "Building responsive, modern frontend apps, highly scalable microservices, and robust cloud-native architecture.",
      color: "#f97316",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='16 18 22 12 16 6' />
          <polyline points='8 6 2 12 8 18' />
          <line x1='14' y1='4' x2='10' y2='20' />
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
          top: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${theme === "dark" ? "rgba(172, 24, 140, 0.08)" : "rgba(172, 24, 140, 0.04)"} 0%, transparent 75%)`,
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
            ⚡ Services
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
            Our core expertise.
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
            Delivering modular intelligence systems and premium software
            services engineered to elevate and scale your company.
          </p>
        </div>

        {/* Clean, Simple Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: "relative",
                padding: "48px 36px",
                background:
                  theme === "dark" ? "rgba(255, 255, 255, 0.02)" : "#ffffff",
                border:
                  hoveredCard === index
                    ? `1.5px solid ${service.color}`
                    : theme === "dark"
                      ? "1px solid rgba(255, 255, 255, 0.06)"
                      : "1px solid rgba(0, 0, 0, 0.06)",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
                transform:
                  hoveredCard === index ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hoveredCard === index
                    ? "0 20px 40px rgba(0, 0, 0, 0.12)"
                    : "0 4px 16px rgba(0, 0, 0, 0.01)",
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Minimalist Line SVG Icon Container */}
              <div
                style={{
                  color:
                    hoveredCard === index ? service.color : colors.text.primary,
                  marginBottom: "28px",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
                }}
              >
                {service.icon}
              </div>

              {/* Title using Outfit font */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "12px",
                  color: colors.text.primary,
                  letterSpacing: "-0.01em",
                  fontFamily: designTokens.typography.fonts.heading,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: colors.text.secondary,
                  lineHeight: "1.6",
                  margin: 0,
                  fontWeight: "500",
                  fontFamily: designTokens.typography.fonts.body,
                }}
              >
                {service.description}
              </p>

              {/* Minimal Text Action Link */}
              <div
                style={{
                  marginTop: "28px",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: service.color,
                  opacity: hoveredCard === index ? 1 : 0.75,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.3s ease",
                  fontFamily: designTokens.typography.fonts.heading,
                }}
              >
                <span>Learn more</span>
                <span
                  style={{
                    transform:
                      hoveredCard === index
                        ? "translateX(4px)"
                        : "translateX(0)",
                    transition: "transform 0.3s ease",
                    display: "inline-block",
                  }}
                >
                  →
                </span>
              </div>
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
