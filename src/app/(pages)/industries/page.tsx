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

export default function Industries() {
  const [industries, setIndustries] = useState<ContentItem[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    getContentByType("industries").then(setIndustries);
  }, []);

  // Add color schemes to industries
  const industriesWithColors = industries.map((service, index) => ({
    ...service,
    ...getColorScheme(index),
  }));

  const isDarkMode = theme === "dark";

  // const stats = [
  //   {
  //     number: "500+",
  //     label: "Projects Delivered",
  //     color: isDarkMode ? "#e879f9" : "#c026d3",
  //   },
  //   {
  //     number: "98%",
  //     label: "Client Satisfaction",
  //     color: isDarkMode ? "#60a5fa" : "#3b82f6",
  //   },
  //   {
  //     number: "50+",
  //     label: "Expert Team",
  //     color: isDarkMode ? "#34d399" : "#10b981",
  //   },
  //   {
  //     number: "24/7",
  //     label: "Support Available",
  //     color: isDarkMode ? "#fb923c" : "#f97316",
  //   },
  // ];

  return (
    <PageContainer>
      <PageHeader
        badge="✨ Explore Our Expertise"
        title="Industries We Serve"
        description="Delivering specialized solutions across diverse sectors"
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
        {industriesWithColors.map((industry, index) => (
          <GlowingCard
            key={index}
            title={industry.title}
            description={industry.description!}
            icon={industry.icon}
            features={industry.features}
            color={industry.color}
            gradient={industry.gradient}
            isHovered={hoveredCard === index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            index={index}
          />
        ))}
      </div>

      {/* Stats Section */}
      {/* <StatsSection stats={stats} /> */}

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
