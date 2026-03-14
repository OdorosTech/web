"use client";
import React from "react";

export const BackgroundEffects: React.FC<{ theme: any; animated: boolean }> = ({
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

export default BackgroundEffects;
