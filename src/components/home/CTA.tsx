"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";

export default function CTA() {
  const { theme } = useTheme();
  const colors = getTheme(theme);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        padding: "120px 20px",
        background: colors.background,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(118, 75, 162, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      <div
        style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}
      >
        {/* Glass Card */}
        <div
          style={{
            padding: "80px 60px",
            background:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: `1px solid ${
              theme === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(255, 255, 255, 0.3)"
            }`,
            borderRadius: "32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              theme === "dark"
                ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                : "0 8px 32px rgba(31, 38, 135, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
            animation: "fadeInScale 0.8s ease-out",
          }}
        >
          {/* Inner Glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(60px)",
              pointerEvents: "none",
              animation: "pulse 4s ease-in-out infinite",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background:
                  "linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)",
                border: "1px solid rgba(102, 126, 234, 0.3)",
                borderRadius: "20px",
                marginBottom: "24px",
                fontSize: "13px",
                fontWeight: "600",
                color: "#667eea",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              🚀 Let's Get Started
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: "700",
                margin: "0 0 24px 0",
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #c026d3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "1.2",
              }}
            >
              Ready to Transform Your Business?
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "18px",
                color: colors.text.secondary,
                marginBottom: "40px",
                lineHeight: "1.7",
                maxWidth: "600px",
                margin: "0 auto 40px",
              }}
            >
              Let's discuss how our AI and data analytics solutions can help you
              achieve your goals and drive innovation
            </p>

            {/* Button */}
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  padding: "18px 40px",
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#ffffff",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  border: "none",
                  borderRadius: "16px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: isHovered
                    ? "translateY(-2px) scale(1.05)"
                    : "translateY(0) scale(1)",
                  boxShadow: isHovered
                    ? "0 16px 40px rgba(102, 126, 234, 0.4), 0 0 60px rgba(102, 126, 234, 0.3)"
                    : "0 8px 24px rgba(102, 126, 234, 0.3)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                Contact Us Today
                <ArrowRightOutlined
                  style={{
                    transition: "transform 0.3s ease",
                    transform: isHovered ? "translateX(4px)" : "translateX(0)",
                  }}
                />
              </button>
            </Link>

            {/* Trust Indicators */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: `1px solid ${
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.1)"
                }`,
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: "⚡", text: "Fast Response" },
                { icon: "🔒", text: "Secure & Private" },
                { icon: "💬", text: "Free Consultation" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    color: colors.text.secondary,
                    fontWeight: "500",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(30px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.15;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.25;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
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
