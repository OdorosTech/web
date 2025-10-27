"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";
import {
  BankOutlined,
  MedicineBoxOutlined,
  ShoppingOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { useState } from "react";

export default function Industries() {
  const { theme } = useTheme();
  const colors = getTheme(theme);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const industries = [
    {
      icon: <BankOutlined />,
      name: "Finance",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    },
    {
      icon: <MedicineBoxOutlined />,
      name: "Healthcare",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
    {
      icon: <ShoppingOutlined />,
      name: "Retail",
      color: "#f97316",
      gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    },
    {
      icon: <CarOutlined />,
      name: "Manufacturing",
      color: "#c026d3",
      gradient: "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
    },
  ];

  return (
    <div
      style={{
        padding: "120px 20px",
        background: colors.background,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
            animation: "fadeInDown 0.8s ease-out",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 20px",
              background:
                "linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(234, 88, 12, 0.2) 100%)",
              border: "1px solid rgba(249, 115, 22, 0.3)",
              borderRadius: "20px",
              marginBottom: "24px",
              fontSize: "13px",
              fontWeight: "600",
              color: "#f97316",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            🌐 Our Expertise
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "700",
              margin: "0 0 16px 0",
              color: colors.text.primary,
              lineHeight: "1.2",
            }}
          >
            Industries We Serve
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: colors.text.secondary,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Delivering specialized solutions across diverse sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "32px",
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
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: `1px solid ${
                  hoveredIndex === index
                    ? industry.color
                    : theme === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(255, 255, 255, 0.3)"
                }`,
                borderRadius: "24px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform:
                  hoveredIndex === index
                    ? "translateY(-12px) scale(1.03)"
                    : "translateY(0) scale(1)",
                boxShadow:
                  hoveredIndex === index
                    ? `0 24px 48px ${industry.color}33, 0 0 80px ${industry.color}1A, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                    : theme === "dark"
                      ? "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
                      : "0 4px 16px rgba(31, 38, 135, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Glow Effect */}
              {hoveredIndex === index && (
                <>
                  <div
                    style={{
                      position: "absolute",
                      inset: "-2px",
                      background: industry.gradient,
                      borderRadius: "24px",
                      opacity: "0.2",
                      filter: "blur(20px)",
                      zIndex: -1,
                      animation: "pulse 2s ease-in-out infinite",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "200px",
                      height: "200px",
                      background: `radial-gradient(circle, ${industry.color}20 0%, transparent 70%)`,
                      borderRadius: "50%",
                      filter: "blur(40px)",
                      zIndex: -1,
                    }}
                  />
                </>
              )}

              {/* Icon */}
              <div
                style={{
                  fontSize: "72px",
                  color: industry.color,
                  marginBottom: "24px",
                  filter:
                    hoveredIndex === index
                      ? `drop-shadow(0 0 24px ${industry.color})`
                      : "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                }}
              >
                {industry.icon}
              </div>

              {/* Name */}
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: colors.text.primary,
                  margin: 0,
                  transition: "all 0.3s ease",
                }}
              >
                {industry.name}
              </h3>

              {/* Decorative Line */}
              <div
                style={{
                  width: hoveredIndex === index ? "60px" : "40px",
                  height: "3px",
                  background: industry.gradient,
                  margin: "20px auto 0",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
