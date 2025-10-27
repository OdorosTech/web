"use client";
import { useState, useEffect } from "react";
import { ContentItem, getContentByType } from "@/lib/content";
import PageContainer from "@/components/common/PageContainer";
import PageHeader from "@/components/common/PageHeader";
import GlowingCard from "@/components/common/GlowingCard";
import StatsSection from "@/components/common/StatsSection";
import CTASection from "@/components/common/CTASection";
import { getColorScheme } from "@/components/common/ColorUnits";
import { useTheme } from "@/contexts/ThemeContext";

export default function ServicesPage() {
  const [services, setServices] = useState<ContentItem[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    getContentByType("services").then(setServices);
  }, []);

  // Add color schemes to services
  const servicesWithColors = services.map((service, index) => ({
    ...service,
    ...getColorScheme(index),
  }));

  const isDarkMode = theme === "dark";

  const stats = [
    {
      number: "500+",
      label: "Projects Delivered",
      color: isDarkMode ? "#e879f9" : "#c026d3",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      color: isDarkMode ? "#60a5fa" : "#3b82f6",
    },
    {
      number: "50+",
      label: "Expert Team",
      color: isDarkMode ? "#34d399" : "#10b981",
    },
    {
      number: "24/7",
      label: "Support Available",
      color: isDarkMode ? "#fb923c" : "#f97316",
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        badge="✨ What We Offer"
        title="Our Services"
        description="Comprehensive technology solutions designed to accelerate your digital transformation"
      />

      {/* Services Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginBottom: "48px",
        }}
      >
        {servicesWithColors.map((service, index) => (
          <GlowingCard
            key={index}
            title={service.title}
            description={service.description!}
            icon={service.icon}
            features={service.features}
            color={service.color}
            gradient={service.gradient}
            isHovered={hoveredCard === index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            index={index}
          />
        ))}
      </div>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how our solutions can help you achieve your goals"
        buttonText="Get Started Today →"
        onButtonClick={() => {
          console.log("CTA clicked");
        }}
      />
    </PageContainer>
  );
}
