// "use client";
// import { useTheme } from "@/contexts/ThemeContext";
// import { getTheme } from "@/styles/theme";
// import { ArrowRightOutlined, PlayCircleOutlined } from "@ant-design/icons";
// import Link from "next/link";
// import { useState } from "react";

// export default function Hero() {
//   const { theme } = useTheme();
//   const colors = getTheme(theme);
//   const [hoveredButton, setHoveredButton] = useState<string | null>(null);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         // background:
//         //   theme === "dark"
//         //     ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)"
//         //     : "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5a4a7f 100%)",
//         // position: "relative",
//         // overflow: "hidden",
//         padding: "100px 20px 60px",
//       }}
//     >
//       {/* Animated Background Glow */}
//       <div
//         style={{
//           position: "absolute",
//           top: "20%",
//           left: "10%",
//           width: "600px",
//           height: "600px",
//           background:
//             theme === "dark"
//               ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f1419 100%)"
//               : "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5a4a7f 100%)",
//           // background:
//           //   "radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)",
//           borderRadius: "50%",
//           filter: "blur(100px)",
//           animation: "float 15s ease-in-out infinite",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: "10%",
//           right: "10%",
//           width: "500px",
//           height: "500px",
//           background:
//             theme === "dark"
//               ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)"
//               : "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5a4a7f 100%)",
//           // background:
//           //   "radial-gradient(circle, rgba(192, 38, 211, 0.25) 0%, transparent 70%)",
//           borderRadius: "50%",
//           filter: "blur(100px)",
//           animation: "float 12s ease-in-out infinite reverse",
//         }}
//       />

//       {/* Main Content Container */}
//       <div
//         style={{
//           maxWidth: "1400px",
//           margin: "0 auto",
//           width: "100%",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "80px",
//             alignItems: "center",
//           }}
//         >
//           {/* Left Section - Text & CTA */}
//           <div
//             style={{
//               animation: "fadeInLeft 1s ease-out",
//             }}
//           >
//             {/* Badge */}
//             <div
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "12px",
//                 padding: "10px 24px",
//                 // background: "rgba(255, 255, 255, 0.1)",
//                 background:
//                   theme === "dark"
//                     ? "rgba(255, 255, 255, 0.2)"
//                     : "rgba(196, 82, 204, 0.2)",
//                 backdropFilter: "blur(20px)",
//                 WebkitBackdropFilter: "blur(20px)",
//                 border: "1px solid rgba(255, 255, 255, 0.2)",
//                 borderRadius: "50px",
//                 marginBottom: "40px",
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 color: "#ffffff",
//                 boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <span
//                 style={{
//                   padding: "4px 12px",
//                   // background: "rgba(255, 255, 255, 0.2)",
//                   background:
//                     theme === "dark"
//                       ? "rgba(255, 255, 255, 0.2)"
//                       : "rgba(225, 21, 239, 0.2)",
//                   borderRadius: "20px",
//                   fontSize: "12px",
//                   fontWeight: "600",
//                 }}
//               >
//                 New
//               </span>
//               Introducing our advanced AI & Data Analytics platform
//             </div>

//             {/* Main Title */}
//             <h1
//               style={{
//                 fontSize: "clamp(42px, 6vw, 72px)",
//                 fontWeight: "700",
//                 margin: "0 0 32px 0",
//                 lineHeight: "1.1",
//                 letterSpacing: "-0.02em",
//                 color: "#ffffff",
//               }}
//             >
//               Transform Your
//               <br />
//               Business with
//               <br />
//               <span
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #667eea 0%, #c026d3 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 AI & Analytics
//               </span>
//             </h1>

//             {/* Description */}
//             <p
//               style={{
//                 fontSize: "clamp(16px, 2vw, 18px)",
//                 color: "rgba(255, 255, 255, 0.8)",
//                 lineHeight: "1.7",
//                 marginBottom: "48px",
//                 maxWidth: "560px",
//               }}
//             >
//               Odoros Technologies is a leading provider of cutting-edge AI and
//               data analytics solutions, powering the next generation of
//               intelligent business operations and data-driven decision making.
//             </p>

//             {/* CTA Buttons */}
//             <div
//               style={{
//                 display: "flex",
//                 gap: "16px",
//                 flexWrap: "wrap",
//                 marginBottom: "64px",
//               }}
//             >
//               <Link href="/contact" style={{ textDecoration: "none" }}>
//                 <button
//                   onMouseEnter={() => setHoveredButton("primary")}
//                   onMouseLeave={() => setHoveredButton(null)}
//                   style={{
//                     padding: "18px 40px",
//                     fontSize: "17px",
//                     fontWeight: "600",
//                     color: "#ffffff",
//                     background:
//                       "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                     border: "none",
//                     borderRadius: "12px",
//                     cursor: "pointer",
//                     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                     transform:
//                       hoveredButton === "primary"
//                         ? "translateY(-2px) scale(1.02)"
//                         : "translateY(0) scale(1)",
//                     boxShadow:
//                       hoveredButton === "primary"
//                         ? "0 20px 40px rgba(102, 126, 234, 0.5), 0 0 60px rgba(102, 126, 234, 0.3)"
//                         : "0 10px 30px rgba(102, 126, 234, 0.3)",
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: "10px",
//                   }}
//                 >
//                   Get Started
//                   <ArrowRightOutlined
//                     style={{
//                       transition: "transform 0.3s ease",
//                       transform:
//                         hoveredButton === "primary"
//                           ? "translateX(4px)"
//                           : "translateX(0)",
//                     }}
//                   />
//                 </button>
//               </Link>

//               <Link href="/services" style={{ textDecoration: "none" }}>
//                 <button
//                   onMouseEnter={() => setHoveredButton("secondary")}
//                   onMouseLeave={() => setHoveredButton(null)}
//                   style={{
//                     padding: "18px 40px",
//                     fontSize: "17px",
//                     fontWeight: "600",
//                     color: "#ffffff",
//                     background: "rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(10px)",
//                     border: "1px solid rgba(255, 255, 255, 0.2)",
//                     borderRadius: "12px",
//                     cursor: "pointer",
//                     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                     transform:
//                       hoveredButton === "secondary"
//                         ? "translateY(-2px) scale(1.02)"
//                         : "translateY(0) scale(1)",
//                     boxShadow:
//                       hoveredButton === "secondary"
//                         ? "0 20px 40px rgba(255, 255, 255, 0.2)"
//                         : "0 10px 30px rgba(0, 0, 0, 0.2)",
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: "10px",
//                   }}
//                 >
//                   Contact Us
//                 </button>
//               </Link>
//             </div>

//             {/* Stats */}
//             {/* <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(3, 1fr)",
//                 gap: "32px",
//                 paddingTop: "32px",
//                 borderTop: "1px solid rgba(255, 255, 255, 0.15)",
//               }}
//             >
//               {[
//                 { number: "500+", label: "Projects" },
//                 { number: "98%", label: "Satisfaction" },
//                 { number: "50+", label: "Experts" },
//               ].map((stat, index) => (
//                 <div key={index}>
//                   <div
//                     style={{
//                       fontSize: "32px",
//                       fontWeight: "700",
//                       color: "#ffffff",
//                       marginBottom: "4px",
//                     }}
//                   >
//                     {stat.number}
//                   </div>
//                   <div
//                     style={{
//                       fontSize: "13px",
//                       color: "rgba(255, 255, 255, 0.7)",
//                       fontWeight: "500",
//                     }}
//                   >
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div> */}
//           </div>

//           {/* Right Section - 3D Isometric Data Visualization */}
//           <div
//             style={{
//               position: "relative",
//               animation: "fadeInRight 1s ease-out",
//               minHeight: "600px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             {/* 3D Isometric Container */}
//             <div
//               style={{
//                 position: "relative",
//                 width: "100%",
//                 maxWidth: "600px",
//                 height: "600px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transform: "perspective(1000px) rotateX(5deg) rotateY(-5deg)",
//                 animation: "float 6s ease-in-out infinite",
//               }}
//             >
//               {/* Central Cube Structure */}
//               <div
//                 style={{
//                   position: "relative",
//                   width: "400px",
//                   height: "400px",
//                   transformStyle: "preserve-3d",
//                   animation: "rotate3d 20s linear infinite",
//                 }}
//               >
//                 {/* Cube Faces - Creating 3D isometric blocks */}
//                 {[
//                   // Top row
//                   { x: -120, y: -120, z: 0, color: "#667eea", delay: 0 },
//                   { x: 0, y: -120, z: 0, color: "#764ba2", delay: 0.1 },
//                   { x: 120, y: -120, z: 0, color: "#c026d3", delay: 0.2 },
//                   // Middle row
//                   { x: -120, y: 0, z: 0, color: "#10b981", delay: 0.3 },
//                   { x: 0, y: 0, z: 0, color: "#3b82f6", delay: 0.4 },
//                   { x: 120, y: 0, z: 0, color: "#f97316", delay: 0.5 },
//                   // Bottom row
//                   { x: -120, y: 120, z: 0, color: "#8b5cf6", delay: 0.6 },
//                   { x: 0, y: 120, z: 0, color: "#ec4899", delay: 0.7 },
//                   { x: 120, y: 120, z: 0, color: "#06b6d4", delay: 0.8 },
//                 ].map((block, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       position: "absolute",
//                       left: "50%",
//                       top: "50%",
//                       width: "100px",
//                       height: "100px",
//                       transform: `translate(-50%, -50%) translate3d(${block.x}px, ${block.y}px, ${block.z}px)`,
//                       transformStyle: "preserve-3d",
//                       animation: `floatBlock 3s ease-in-out infinite`,
//                       animationDelay: `${block.delay}s`,
//                     }}
//                   >
//                     {/* Front Face */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "100%",
//                         background: `linear-gradient(135deg, ${block.color} 0%, ${block.color}CC 100%)`,
//                         backdropFilter: "blur(10px)",
//                         border: `1px solid ${block.color}40`,
//                         borderRadius: "12px",
//                         boxShadow: `0 0 40px ${block.color}60, inset 0 0 20px ${block.color}40`,
//                         transform: "translateZ(50px)",
//                       }}
//                     />
//                     {/* Top Face */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "100%",
//                         background: `linear-gradient(135deg, ${block.color}DD 0%, ${block.color}99 100%)`,
//                         backdropFilter: "blur(10px)",
//                         border: `1px solid ${block.color}40`,
//                         borderRadius: "12px",
//                         boxShadow: `0 0 30px ${block.color}40`,
//                         transform: "rotateX(90deg) translateZ(50px)",
//                       }}
//                     />
//                     {/* Right Face */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "100%",
//                         background: `linear-gradient(135deg, ${block.color}BB 0%, ${block.color}77 100%)`,
//                         backdropFilter: "blur(10px)",
//                         border: `1px solid ${block.color}40`,
//                         borderRadius: "12px",
//                         boxShadow: `0 0 30px ${block.color}40`,
//                         transform: "rotateY(90deg) translateZ(50px)",
//                       }}
//                     />
//                   </div>
//                 ))}

//                 {/* Data Flow Lines */}
//                 {[...Array(8)].map((_, index) => (
//                   <div
//                     key={`line-${index}`}
//                     style={{
//                       position: "absolute",
//                       left: "50%",
//                       top: "50%",
//                       width: "2px",
//                       height: "150px",
//                       background: `linear-gradient(180deg, rgba(102, 126, 234, 0.8) 0%, transparent 100%)`,
//                       transform: `translate(-50%, -50%) rotate(${
//                         index * 45
//                       }deg) translateY(-100px)`,
//                       animation: "pulse 2s ease-in-out infinite",
//                       animationDelay: `${index * 0.2}s`,
//                       boxShadow: "0 0 10px rgba(102, 126, 234, 0.5)",
//                     }}
//                   />
//                 ))}

//                 {/* Floating Data Points */}
//                 {[...Array(20)].map((_, index) => (
//                   <div
//                     key={`particle-${index}`}
//                     style={{
//                       position: "absolute",
//                       left: `${Math.random() * 100}%`,
//                       top: `${Math.random() * 100}%`,
//                       width: "6px",
//                       height: "6px",
//                       background: "#667eea",
//                       borderRadius: "50%",
//                       boxShadow: "0 0 15px rgba(102, 126, 234, 0.8)",
//                       animation: `twinkle ${
//                         2 + Math.random() * 3
//                       }s ease-in-out infinite`,
//                       animationDelay: `${Math.random() * 2}s`,
//                     }}
//                   />
//                 ))}
//               </div>

//               {/* Glow Effect Behind */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   width: "500px",
//                   height: "500px",
//                   background:
//                     "radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)",
//                   borderRadius: "50%",
//                   filter: "blur(60px)",
//                   animation: "pulse 4s ease-in-out infinite",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes float {
//           0%,
//           100% {
//             transform: perspective(1000px) rotateX(5deg) rotateY(-5deg)
//               translateY(0);
//           }
//           50% {
//             transform: perspective(1000px) rotateX(5deg) rotateY(-5deg)
//               translateY(-20px);
//           }
//         }
//         @keyframes floatBlock {
//           0%,
//           100% {
//             transform: translate(-50%, -50%) translate3d(var(--x), var(--y), 0)
//               translateZ(0);
//           }
//           50% {
//             transform: translate(-50%, -50%) translate3d(var(--x), var(--y), 0)
//               translateZ(20px);
//           }
//         }
//         @keyframes rotate3d {
//           from {
//             transform: rotateY(0deg) rotateX(0deg);
//           }
//           to {
//             transform: rotateY(360deg) rotateX(360deg);
//           }
//         }
//         @keyframes pulse {
//           0%,
//           100% {
//             opacity: 0.4;
//           }
//           50% {
//             opacity: 1;
//           }
//         }
//         @keyframes twinkle {
//           0%,
//           100% {
//             opacity: 0.3;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1.5);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

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
import { getGlassTheme, designTokens } from "@/styles/design-system";

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
    label: "Tijaabo",
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
