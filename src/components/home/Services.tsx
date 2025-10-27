"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";
import {
  RobotOutlined,
  BarChartOutlined,
  SolutionOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import { useState } from "react";

export default function Services() {
  const { theme } = useTheme();
  const colors = getTheme(theme);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <RobotOutlined />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions tailored to your business needs",
      color: "#c026d3",
      gradient: "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
    },
    {
      icon: <BarChartOutlined />,
      title: "Data Analytics",
      description: "Transform data into actionable insights",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    },
    {
      icon: <SolutionOutlined />,
      title: "Consulting",
      description: "Strategic guidance for digital transformation",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
    {
      icon: <CodeOutlined />,
      title: "Software Development",
      description: "Build scalable, modern applications",
      color: "#f97316",
      gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
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
          top: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(192, 38, 211, 0.15) 0%, transparent 70%)",
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
                "linear-gradient(135deg, rgba(192, 38, 211, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)",
              border: "1px solid rgba(192, 38, 211, 0.3)",
              borderRadius: "20px",
              marginBottom: "24px",
              fontSize: "13px",
              fontWeight: "600",
              color: "#c026d3",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            ⚡ What We Offer
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
            Our Services
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
            Comprehensive solutions designed to accelerate your digital
            transformation
          </p>
        </div>

        {/* Services Grid */}
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
                padding: "40px 32px",
                background:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: `1px solid ${
                  hoveredCard === index
                    ? service.color
                    : theme === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(255, 255, 255, 0.3)"
                }`,
                borderRadius: "24px",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform:
                  hoveredCard === index
                    ? "translateY(-8px) scale(1.02)"
                    : "translateY(0) scale(1)",
                boxShadow:
                  hoveredCard === index
                    ? `0 20px 40px ${service.color}33, 0 0 60px ${service.color}1A, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                    : theme === "dark"
                      ? "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
                      : "0 4px 16px rgba(31, 38, 135, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Glow Effect */}
              {hoveredCard === index && (
                <div
                  style={{
                    position: "absolute",
                    inset: "-2px",
                    background: service.gradient,
                    borderRadius: "24px",
                    opacity: "0.2",
                    filter: "blur(20px)",
                    zIndex: -1,
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
              )}

              {/* Icon */}
              <div
                style={{
                  fontSize: "56px",
                  color: service.color,
                  marginBottom: "24px",
                  filter:
                    hoveredCard === index
                      ? `drop-shadow(0 0 20px ${service.color})`
                      : "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: colors.text.primary,
                  transition: "color 0.3s ease",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "15px",
                  color: colors.text.secondary,
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div
                style={{
                  marginTop: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: service.color,
                  opacity: hoveredCard === index ? 1 : 0,
                  transform:
                    hoveredCard === index
                      ? "translateX(0)"
                      : "translateX(-10px)",
                  transition: "all 0.3s ease",
                }}
              >
                Learn more →
              </div>
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
