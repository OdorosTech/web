"use client";
import React, { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";
import { designTokens } from "@/styles/design-system";
import Link from "next/link";
import { AmbientGlow } from "../ui/AmbientGlow";
import { SectionBadge } from "../ui/Badge";

export default function CTA() {
  const { theme } = useTheme();
  const colors = getTheme(theme);
  const [isHovered, setIsHovered] = useState(false);

  const keypoints = [
    {
      text: "Fast Response",
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2' />
        </svg>
      ),
    },
    {
      text: "Secure & Private",
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
          <path d='M7 11V7a5 5 0 0 1 10 0v4' />
        </svg>
      ),
    },
    {
      text: "Free Consultation",
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        padding: "80px 20px 120px 20px",
        background: colors.background.primary,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AmbientGlow
        position={{ top: "15%", right: "10%" }}
        color='#ac188c'
        theme={theme}
      />

      <div
        style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}
      >
        <div
          style={{
            padding: "80px 48px",
            background:
              theme === "dark" ? "rgba(255, 255, 255, 0.01)" : "#ffffff",
            border: `1px solid ${theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}`,
            borderRadius: "36px",
            textAlign: "center",
            boxShadow:
              theme === "dark"
                ? "0 20px 50px rgba(0, 0, 0, 0.25)"
                : "0 20px 50px rgba(0, 0, 0, 0.03)",
            animation: "fadeInScale 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <SectionBadge
            text="🚀 Let's Get Started"
            theme={theme}
            color={colors.text.secondary}
          />

          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 48px)",
              fontWeight: "800",
              margin: "0 0 20px 0",
              color: colors.text.primary,
              lineHeight: "1.15",
              letterSpacing: "-0.03em",
              fontFamily: designTokens.typography.fonts.heading,
            }}
          >
            Ready to transform your business?
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: colors.text.secondary,
              lineHeight: "1.65",
              maxWidth: "620px",
              margin: "0 auto 40px",
              fontWeight: "500",
              fontFamily: designTokens.typography.fonts.body,
            }}
          >
            Discuss your challenge with our engineers. We build custom
            intelligence engines, data analytical layers, and custom software
            designed to scale.
          </p>

          <Link href='/contact' style={{ textDecoration: "none" }}>
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                padding: "18px 40px",
                fontSize: "15px",
                fontWeight: "700",
                color: "#ffffff",
                background: "#ac188c",
                border: "none",
                borderRadius: "100px",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                boxShadow: isHovered
                  ? "0 12px 32px rgba(172, 24, 140, 0.4)"
                  : "0 4px 14px rgba(172, 24, 140, 0.15)",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: designTokens.typography.fonts.heading,
              }}
            >
              <span>Contact Us Today</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                style={{
                  transition: "transform 0.25s ease",
                  transform: isHovered ? "translateX(4px)" : "translateX(0)",
                }}
              >
                <line x1='5' y1='12' x2='19' y2='12' />
                <polyline points='12 5 19 12 12 19' />
              </svg>
            </button>
          </Link>

          {/* Bottom Grid Split */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              marginTop: "64px",
              paddingTop: "36px",
              borderTop: `1px solid ${theme === "dark" ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)"}`,
              flexWrap: "wrap",
            }}
          >
            {keypoints.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: colors.text.secondary,
                  fontWeight: "600",
                  fontFamily: designTokens.typography.fonts.body,
                }}
              >
                <span style={{ color: "#ac188c", display: "inline-flex" }}>
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
