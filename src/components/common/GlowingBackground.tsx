import { useEffect, useState } from "react";

interface GlowingBackgroundProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export default function GlowingBackground({
  primaryColor = "rgba(192, 38, 211, 0.08)",
  secondaryColor = "rgba(59, 130, 246, 0.08)",
}: GlowingBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Animated background gradient */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, #fafafa 0%, #f0f2f5 50%, #e6f7ff 100%)",
          zIndex: 0,
        }}
      />

      {/* Floating gradient orbs */}
      <div
        style={{
          position: "fixed",
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "10%",
          right: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`,
          filter: "blur(60px)",
          animation: "float 10s ease-in-out infinite reverse",
          zIndex: 0,
        }}
      />

      {/* Mouse follower glow */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(192, 38, 211, 0.06) 0%, transparent 100%)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(15px);
          }
        }
      `}</style>
    </>
  );
}
