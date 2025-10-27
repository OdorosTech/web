"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function WhyChooseUs() {
  const { theme } = useTheme();
  const colors = getTheme(theme);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    {
      text: "Expert team with deep industry knowledge",
      icon: "🎯",
    },
    {
      text: "Proven track record of successful projects",
      icon: "🏆",
    },
    {
      text: "Cutting-edge technology and methodologies",
      icon: "🚀",
    },
    {
      text: "Tailored solutions for your unique needs",
      icon: "✨",
    },
    {
      text: "Ongoing support and maintenance",
      icon: "🛠️",
    },
    {
      text: "Transparent communication and reporting",
      icon: "📊",
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
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <div style={{ animation: "fadeInLeft 0.8s ease-out" }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                borderRadius: "20px",
                marginBottom: "24px",
                fontSize: "13px",
                fontWeight: "600",
                color: "#3b82f6",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              💎 Our Advantage
            </div>

            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: "700",
                margin: "0 0 24px 0",
                color: colors.text.primary,
                lineHeight: "1.2",
              }}
            >
              Why Choose Odoros?
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: colors.text.secondary,
                lineHeight: "1.8",
                marginBottom: "32px",
              }}
            >
              We combine technical expertise with business acumen to deliver
              solutions that drive real results. Our team of experts works
              closely with you to understand your challenges and create custom
              solutions that exceed expectations.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
                marginTop: "40px",
              }}
            >
              {[
                { number: "10+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
              ].map((stat, index) => (
                <div
                  key={index}
                  style={{
                    padding: "20px",
                    background:
                      theme === "dark"
                        ? "rgba(255, 255, 255, 0.03)"
                        : "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${
                      theme === "dark"
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(255, 255, 255, 0.3)"
                    }`,
                    borderRadius: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: "4px",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: colors.text.secondary,
                      fontWeight: "500",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Glass Card */}
          <div style={{ animation: "fadeInRight 0.8s ease-out" }}>
            <div
              style={{
                padding: "48px",
                background:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: `1px solid ${
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(255, 255, 255, 0.3)"
                }`,
                borderRadius: "24px",
                boxShadow:
                  theme === "dark"
                    ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
                    : "0 8px 32px rgba(31, 38, 135, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
              }}
            >
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    marginBottom: index < reasons.length - 1 ? "24px" : "0",
                    display: "flex",
                    alignItems: "center",
                    padding: "16px",
                    borderRadius: "12px",
                    background:
                      hoveredIndex === index
                        ? theme === "dark"
                          ? "rgba(59, 130, 246, 0.1)"
                          : "rgba(59, 130, 246, 0.05)"
                        : "transparent",
                    transition: "all 0.3s ease",
                    transform:
                      hoveredIndex === index
                        ? "translateX(8px)"
                        : "translateX(0)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      marginRight: "16px",
                      filter:
                        hoveredIndex === index
                          ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"
                          : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {reason.icon}
                  </div>
                  <CheckCircleOutlined
                    style={{
                      color: "#3b82f6",
                      fontSize: "20px",
                      marginRight: "16px",
                      filter:
                        hoveredIndex === index
                          ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"
                          : "none",
                      transition: "all 0.3s ease",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "16px",
                      color: colors.text.primary,
                      fontWeight: hoveredIndex === index ? "600" : "500",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {reason.text}
                  </span>
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
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
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
