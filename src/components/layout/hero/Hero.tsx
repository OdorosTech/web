"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useTheme } from "@/contexts/ThemeContext";
import {
  GlassContainer,
  GlassButton,
  GlassBadge,
  GlassText,
} from "@/components/ui/glass/GlassComponents";
import { Enhanced3DVisualization } from "@/components/ui/3d/Enhanced3DVisualization";
import { getGlassTheme, designTokens } from "../../../styles/design-system";

// Types for better type safety
interface HeroContent {
  badge: {
    label: string;
    text: string;
  };
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
  badge: {
    label: "New",
    text: "Introducing our advanced AI & Data Analytics platform",
  },
  title: {
    main: "Transform Your Business with",
    highlight: "AI & Analytics",
  },
  description:
    "Odoros Technologies is a leading provider of cutting-edge AI and data analytics solutions, powering the next generation of intelligent business operations and data-driven decision making.",
  buttons: {
    primary: {
      text: "Get Started",
      href: "/contact",
    },
    secondary: {
      text: "Contact Us",
      href: "/services",
    },
  },
};

// Background Effects Component - Separation of Concerns
const BackgroundEffects: React.FC<{ theme: any; animated: boolean }> = ({
  theme,
  animated,
}) => (
  <>
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "5%",
        width: "700px",
        height: "700px",
        background: `radial-gradient(circle, ${theme.colors.glow.primary} 0%, transparent 70%)`,
        borderRadius: "50%",
        filter: "blur(120px)",
        animation: animated ? "float 18s ease-in-out infinite" : "none",
        zIndex: -1,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "5%",
        right: "5%",
        width: "600px",
        height: "600px",
        background: `radial-gradient(circle, ${theme.colors.glow.secondary} 0%, transparent 70%)`,
        borderRadius: "50%",
        filter: "blur(100px)",
        animation: animated ? "float 15s ease-in-out infinite reverse" : "none",
        zIndex: -1,
      }}
    />
  </>
);

// Hero Badge Component - Single Responsibility
const HeroBadge: React.FC<{
  badge: HeroContent["badge"];
  theme: any;
}> = ({ badge, theme }) => (
  <GlassContainer
    variant="secondary"
    theme={theme}
    glow
    animated
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: designTokens.spacing.md,
      padding: `${designTokens.spacing.sm} ${designTokens.spacing.lg}`,
      borderRadius: designTokens.borderRadius.pill,
      marginBottom: designTokens.spacing["2xl"],
      fontSize: designTokens.typography.fontSizes.sm,
      fontWeight: designTokens.typography.fontWeights.medium,
    }}
  >
    <span
      style={{
        padding: `${designTokens.spacing.xs} ${designTokens.spacing.md}`,
        background: `linear-gradient(135deg, ${theme.colors.primary}40 0%, ${theme.colors.secondary}40 100%)`,
        borderRadius: designTokens.borderRadius.pill,
        fontSize: designTokens.typography.fontSizes.xs,
        fontWeight: designTokens.typography.fontWeights.semibold,
        color: theme.colors.text.primary,
      }}
    >
      {badge.label}
    </span>
    <span style={{ color: theme.colors.text.secondary }}>{badge.text}</span>
  </GlassContainer>
);

// Hero Title Component - Single Responsibility
const HeroTitle: React.FC<{
  title: HeroContent["title"];
  theme: any;
}> = ({ title, theme }) => (
  <GlassText
    variant="h1"
    theme={theme}
    style={{
      marginBottom: designTokens.spacing.xl,
      maxWidth: "800px",
    }}
  >
    {title.main}
    <br />
    <GlassText
      variant="h1"
      gradient
      theme={theme}
      style={{ display: "inline" }}
    >
      {title.highlight}
    </GlassText>
  </GlassText>
);

// Hero Description Component - Single Responsibility
const HeroDescription: React.FC<{
  description: string;
  theme: any;
}> = ({ description, theme }) => (
  <GlassText
    variant="body"
    theme={theme}
    style={{
      marginBottom: designTokens.spacing["3xl"],
      maxWidth: "600px",
      color: theme.colors.text.secondary,
    }}
  >
    {description}
  </GlassText>
);

// Hero Actions Component - Single Responsibility
const HeroActions: React.FC<{
  buttons: HeroContent["buttons"];
  theme: any;
}> = ({ buttons, theme }) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "flex",
        gap: designTokens.spacing.md,
        flexWrap: "wrap",
        marginBottom: designTokens.spacing["4xl"],
      }}
    >
      <Link href={buttons.primary.href} style={{ textDecoration: "none" }}>
        <GlassButton
          variant="primary"
          size="lg"
          theme={theme}
          glow
          icon={
            <ArrowRightOutlined
              style={{
                transition: "transform 0.3s ease",
                transform:
                  hoveredButton === "primary"
                    ? "translateX(4px)"
                    : "translateX(0)",
              }}
            />
          }
          // onMouseEnter={() => setHoveredButton("primary")}
          // onMouseLeave={() => setHoveredButton(null)}
        >
          {buttons.primary.text}
        </GlassButton>
      </Link>

      <Link href={buttons.secondary.href} style={{ textDecoration: "none" }}>
        <GlassButton
          variant="secondary"
          size="lg"
          theme={theme}
          // onMouseEnter={() => setHoveredButton("secondary")}
          // onMouseLeave={() => setHoveredButton(null)}
        >
          {buttons.secondary.text}
        </GlassButton>
      </Link>
    </div>
  );
};

// Hero Content Component - Composition Pattern
const HeroContent: React.FC<{
  content: HeroContent;
  theme: any;
}> = ({ content, theme }) => (
  <div
    style={{
      animation: "fadeInLeft 1s ease-out",
      maxWidth: "700px",
    }}
  >
    <HeroBadge badge={content.badge} theme={theme} />
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
      badge: { ...defaultContent.badge, ...content.badge },
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
    [content]
  );

  return (
    <GlassContainer
      variant="primary"
      theme={theme}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: `${designTokens.spacing["5xl"]} ${designTokens.spacing.lg} ${designTokens.spacing["3xl"]}`,
        position: "relative",
        overflow: "hidden",
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
            gridTemplateColumns: showVisualization
              ? "repeat(auto-fit, minmax(400px, 1fr))"
              : "1fr",
            gap: designTokens.spacing["4xl"],
            alignItems: "center",
          }}
        >
          {/* Content Section */}
          <HeroContent content={mergedContent} theme={theme} />

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
                complexity="medium"
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
    </GlassContainer>
  );
};

export default Hero;
