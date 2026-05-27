"use client";
import React, { useMemo } from "react";
import { useTheme } from "@/contexts/ThemeContext";

import { Enhanced3DVisualization } from "@/components/ui/3d/Enhanced3DVisualization";
import { getGlassTheme, designTokens } from "@/styles/design-system";

import {
  HeroTitle,
  HeroDescription,
  HeroActions,
  BackgroundEffects,
} from "@/components/layout/hero";

// Types for better type safety
interface HeroContent {
  title: {
    main: string;
    highlight: string;
  };
  description: string;
  buttons: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

interface HeroProps {
  content?: Partial<HeroContent>;
  showVisualization?: boolean;
  animationEnabled?: boolean;
  interactiveMode?: boolean;
}

// Default content - following Single Responsibility Principle
const defaultContent: HeroContent = {
  title: {
    main: "Transform Your Business with",
    highlight: "AI & Analytics",
  },
  description:
    "Odoros Technologies is a leading provider of cutting-edge AI and data analytics solutions, powering the next generation of intelligent business operations and data-driven decision making.",
  buttons: {
    primary: {
      text: "Get Started",
      href: "/services",
    },
    secondary: {
      text: "Contact Us",
      href: "/contact",
    },
  },
};

// Hero Content Component - Composition Pattern
const HeroContentBlock: React.FC<{
  content: HeroContent;
  theme: any;
}> = ({ content, theme }) => (
  <div
    style={{
      animation: "fadeInLeft 1s ease-out",
      maxWidth: "700px",
    }}
  >
    <HeroTitle title={content.title} theme={theme} />
    <HeroDescription description={content.description} theme={theme} />
    <HeroActions buttons={content.buttons} theme={theme} />
  </div>
);

// Main Hero Component - Open/Closed Principle
export const Hero: React.FC<HeroProps> = ({
  content = {},
  showVisualization = true,
  animationEnabled = true,
  interactiveMode = true,
}) => {
  const { theme: themeMode } = useTheme();

  // Memoized theme to prevent unnecessary re-renders
  const theme = useMemo(() => getGlassTheme(themeMode), [themeMode]);

  // Merged content with defaults - Dependency Inversion
  const mergedContent = useMemo(
    () => ({
      ...defaultContent,
      ...content,
      title: { ...defaultContent.title, ...content.title },
      buttons: {
        ...defaultContent.buttons,
        ...content.buttons,
        primary: {
          ...defaultContent.buttons.primary,
          ...content.buttons?.primary,
        },
        secondary: {
          ...defaultContent.buttons.secondary,
          ...content.buttons?.secondary,
        },
      },
    }),
    [content],
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: `${designTokens.spacing["5xl"]} ${designTokens.spacing.lg} ${designTokens.spacing["3xl"]}`,
        position: "relative",
        overflow: "hidden",
        width: "100%",
        background: "transparent",
      }}
    >
      {/* Background Effects */}
      <BackgroundEffects theme={theme} animated={animationEnabled} />

      {/* Main Content Container */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: showVisualization ? "1.2fr 1fr" : "1fr",
            gap: designTokens.spacing["4xl"],
            alignItems: "center",
          }}
        >
          {/* Content Section */}
          <HeroContentBlock content={mergedContent} theme={theme} />

          {/* 3D Visualization Section */}
          {showVisualization && (
            <div
              style={{
                position: "relative",
                animation: animationEnabled
                  ? "fadeInRight 1s ease-out"
                  : "none",
                minHeight: "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Enhanced3DVisualization
                theme={theme}
                animated={animationEnabled}
                interactive={interactiveMode}
              />
            </div>
          )}
        </div>
      </div>

      {/* Global Animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
