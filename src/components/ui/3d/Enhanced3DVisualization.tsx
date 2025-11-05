import React, { useMemo, useEffect, useRef } from "react";
import { GlassmorphismTheme } from "@/styles/design-system";

interface DataNode {
  id: string;
  x: number;
  y: number;
  z: number;
  color: string;
  size: number;
  intensity: number;
  delay: number;
}

interface Enhanced3DVisualizationProps {
  theme: GlassmorphismTheme;
  animated?: boolean;
  interactive?: boolean;
  complexity?: "simple" | "medium" | "complex";
}

export const Enhanced3DVisualization: React.FC<
  Enhanced3DVisualizationProps
> = ({ theme, animated = true, interactive = true, complexity = "medium" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Generate data nodes based on complexity
  const dataNodes = useMemo(() => {
    const nodeCount = {
      simple: 12,
      medium: 24,
      complex: 48,
    }[complexity];

    const colors = [
      theme.colors.primary,
      theme.colors.secondary,
      theme.colors.accent,
      "#10b981", // Emerald
      "#f97316", // Orange
      "#8b5cf6", // Violet
      "#ec4899", // Pink
      "#06b6d4", // Cyan
    ];

    return Array.from({ length: nodeCount }, (_, i) => ({
      id: `node-${i}`,
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
      z: (Math.random() - 0.5) * 200,
      color: colors[i % colors.length],
      size: 60 + Math.random() * 40,
      intensity: 0.6 + Math.random() * 0.4,
      delay: Math.random() * 2,
    }));
  }, [complexity, theme]);

  // Mouse interaction handler
  useEffect(() => {
    if (!interactive || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mousePosition.current = {
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        };
      }
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [interactive]);

  // Neural Network Connections
  const connections = useMemo(() => {
    const connectionCount = Math.min(dataNodes.length * 2, 32);
    return Array.from({ length: connectionCount }, (_, i) => {
      const nodeA = dataNodes[Math.floor(Math.random() * dataNodes.length)];
      const nodeB = dataNodes[Math.floor(Math.random() * dataNodes.length)];

      if (nodeA.id === nodeB.id) return null;

      return {
        id: `connection-${i}`,
        from: nodeA,
        to: nodeB,
        opacity: 0.3 + Math.random() * 0.4,
        delay: Math.random() * 3,
      };
    }).filter(Boolean);
  }, [dataNodes]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1200px",
        overflow: "hidden",
      }}
    >
      {/* Ambient Glow Background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: `radial-gradient(circle, ${theme.colors.glow.primary} 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(100px)",
          animation: animated ? "pulse 8s ease-in-out infinite" : "none",
          zIndex: -2,
        }}
      />

      {/* Secondary Glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "20%",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${theme.colors.glow.secondary} 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: animated
            ? "float 12s ease-in-out infinite reverse"
            : "none",
          zIndex: -2,
        }}
      />

      {/* Main 3D Container */}
      <div
        style={{
          position: "relative",
          width: "500px",
          height: "500px",
          transformStyle: "preserve-3d",
          transform: interactive
            ? `rotateX(${mousePosition.current.y * 10}deg) rotateY(${mousePosition.current.x * 10}deg)`
            : "rotateX(5deg) rotateY(-5deg)",
          animation: animated ? "rotate3d 30s linear infinite" : "none",
          transition: interactive ? "transform 0.1s ease-out" : "none",
        }}
      >
        {/* Neural Network Connections */}
        <svg
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          viewBox="-250 -250 500 500"
        >
          {connections.map((connection, index) => {
            if (!connection) return null;

            return (
              <line
                key={connection.id}
                x1={connection.from.x}
                y1={connection.from.y}
                x2={connection.to.x}
                y2={connection.to.y}
                stroke={`url(#gradient-${index})`}
                strokeWidth="1"
                opacity={connection.opacity}
                style={{
                  animation: animated
                    ? `pulse 3s ease-in-out infinite ${connection.delay}s`
                    : "none",
                }}
              />
            );
          })}

          {/* Gradient Definitions */}
          <defs>
            {connections.map((connection, index) => {
              if (!connection) return null;

              return (
                <linearGradient
                  key={`gradient-${index}`}
                  id={`gradient-${index}`}
                >
                  <stop
                    offset="0%"
                    stopColor={connection.from.color}
                    stopOpacity="0.8"
                  />
                  <stop
                    offset="50%"
                    stopColor={theme.colors.accent}
                    stopOpacity="0.4"
                  />
                  <stop
                    offset="100%"
                    stopColor={connection.to.color}
                    stopOpacity="0.8"
                  />
                </linearGradient>
              );
            })}
          </defs>
        </svg>

        {/* Data Nodes */}
        {dataNodes.map((node) => (
          <div
            key={node.id}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: `${node.size}px`,
              height: `${node.size}px`,
              transform: `translate(-50%, -50%) translate3d(${node.x}px, ${node.y}px, ${node.z}px)`,
              transformStyle: "preserve-3d",
              animation: animated
                ? `floatNode 4s ease-in-out infinite ${node.delay}s`
                : "none",
              zIndex: 2,
            }}
          >
            {/* Node Core */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: `linear-gradient(135deg, ${node.color}${Math.floor(
                  node.intensity * 255
                )
                  .toString(16)
                  .padStart(2, "0")} 0%, ${node.color}80 100%)`,
                borderRadius: "50%",
                backdropFilter: "blur(8px)",
                border: `1px solid ${node.color}60`,
                boxShadow: `
                  0 0 20px ${node.color}60,
                  0 0 40px ${node.color}40,
                  inset 0 0 20px ${node.color}20
                `,
                transform: "translateZ(0)",
              }}
            />

            {/* Node Glow Ring */}
            <div
              style={{
                position: "absolute",
                top: "-25%",
                left: "-25%",
                width: "150%",
                height: "150%",
                background: `radial-gradient(circle, ${node.color}20 0%, transparent 70%)`,
                borderRadius: "50%",
                animation: animated
                  ? `pulse 2s ease-in-out infinite ${node.delay}s`
                  : "none",
                transform: "translateZ(-10px)",
              }}
            />

            {/* Data Particles */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`particle-${i}`}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "4px",
                  height: "4px",
                  background: node.color,
                  borderRadius: "50%",
                  transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateY(-${node.size * 0.8}px)`,
                  boxShadow: `0 0 10px ${node.color}`,
                  animation: animated
                    ? `orbit 3s linear infinite ${i * 0.5}s`
                    : "none",
                }}
              />
            ))}
          </div>
        ))}

        {/* Central Core */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "120px",
            height: "120px",
            transform: "translate(-50%, -50%) translateZ(50px)",
            background: `linear-gradient(135deg, ${theme.colors.primary}40 0%, ${theme.colors.secondary}40 100%)`,
            borderRadius: "50%",
            backdropFilter: "blur(20px)",
            border: `2px solid ${theme.colors.glass.border}`,
            boxShadow: `
              0 0 40px ${theme.colors.primary}60,
              0 0 80px ${theme.colors.secondary}40,
              inset 0 0 40px ${theme.colors.glass.primary}
            `,
            animation: animated ? "pulse 4s ease-in-out infinite" : "none",
            zIndex: 3,
          }}
        >
          {/* Core Inner Ring */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "60%",
              height: "60%",
              transform: "translate(-50%, -50%)",
              background: `linear-gradient(135deg, ${theme.colors.accent}60 0%, transparent 100%)`,
              borderRadius: "50%",
              animation: animated ? "rotate 10s linear infinite" : "none",
            }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes rotate3d {
          from {
            transform: rotateX(5deg) rotateY(-5deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(5deg) rotateY(-5deg) rotateZ(360deg);
          }
        }

        @keyframes floatNode {
          0%,
          100% {
            transform: translate(-50%, -50%)
              translate3d(var(--x), var(--y), var(--z)) translateZ(0);
          }
          50% {
            transform: translate(-50%, -50%)
              translate3d(var(--x), var(--y), var(--z)) translateZ(30px);
          }
        }

        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateY(-60px);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateY(-60px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
