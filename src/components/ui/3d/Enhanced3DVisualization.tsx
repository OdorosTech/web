import React, { useMemo, useEffect, useRef } from "react";
import { GlassmorphismTheme } from "@/styles/design-system";

interface Enhanced3DVisualizationProps {
  theme: GlassmorphismTheme;
  animated?: boolean;
  interactive?: boolean;
}

export const Enhanced3DVisualization: React.FC<
  Enhanced3DVisualizationProps
> = ({ theme, animated = true, interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

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
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [interactive]);

  // Cylinder Configuration
  const cylinders = useMemo(
    () => [
      { id: 1, y: -100 },
      { id: 2, y: 0 },
      { id: 3, y: 100 },
    ],
    [],
  );

  const R = 80; // Radius of cylinders
  const H = 60; // Height of cylinders
  const numFaces = 32;
  const faceWidth = 17; // slightly overlapping 2 * R * Math.tan(PI / numFaces)

  // Data nodes randomly floating around the cylinders
  const nodes = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => {
      const radius = 160 + Math.random() * 120;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 400;
      return {
        id: `node-${i}`,
        x: Math.cos(angle) * radius,
        y: height,
        z: Math.sin(angle) * radius,
        color:
          i % 3 === 0
            ? theme.colors.accent
            : i % 2 === 0
              ? theme.colors.primary
              : theme.colors.secondary,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 4,
      };
    });
  }, [theme]);

  // Connections between nodes (to form a data network)
  const connections = useMemo(() => {
    const lines: any[] = [];
    nodes.forEach((node) => {
      // Connect to 1-2 other close nodes
      const siblings = [...nodes]
        .filter((n) => n.id !== node.id)
        .map((n) => ({
          node: n,
          dist: Math.sqrt(
            Math.pow(n.x - node.x, 2) +
              Math.pow(n.y - node.y, 2) +
              Math.pow(n.z - node.z, 2),
          ),
        }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 1 + Math.floor(Math.random() * 2)); // 1 or 2 connections

      siblings.forEach((sibling) => {
        const to = sibling.node;
        const dx = to.x - node.x;
        const dy = to.y - node.y;
        const dz = to.z - node.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const horizDist = Math.sqrt(dx * dx + dz * dz);
        const angleY = Math.atan2(dz, dx) * (180 / Math.PI);
        const angleZ = Math.atan2(dy, horizDist) * (180 / Math.PI);

        lines.push({
          id: `${node.id}-${to.id}`,
          from: node,
          dist,
          angleY: -angleY,
          angleZ,
          color: theme.colors.primary,
          delay: Math.random() * 3,
          flowing: Math.random() > 0.5,
        });
      });

      // Connect some nodes directly to the database center (Data streams IN/OUT)
      if (Math.random() > 0.6) {
        const cyl = cylinders[Math.floor(Math.random() * cylinders.length)];
        // Connect to the edge of the cylinder instead of center for realism
        const angle = Math.atan2(node.z, node.x);
        const to = { x: R * Math.cos(angle), y: cyl.y, z: R * Math.sin(angle) };
        const dx = to.x - node.x;
        const dy = to.y - node.y;
        const dz = to.z - node.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const horizDist = Math.sqrt(dx * dx + dz * dz);
        const angleY = Math.atan2(dz, dx) * (180 / Math.PI);
        const angleZ = Math.atan2(dy, horizDist) * (180 / Math.PI);

        lines.push({
          id: `${node.id}-cyl-${cyl.id}`,
          from: node,
          dist,
          angleY: -angleY,
          angleZ,
          color: theme.colors.accent,
          delay: Math.random() * 2,
          flowing: true,
        });
      }
    });

    // De-duplicate lines
    const uniqueLines: any[] = [];
    const seen = new Set();
    for (const line of lines) {
      if (!seen.has(line.id)) {
        seen.add(line.id);
        const reverseId = line.id.split("-").reverse().join("-");
        seen.add(reverseId);
        uniqueLines.push(line);
      }
    }

    return uniqueLines;
  }, [nodes, cylinders, theme, R]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1200px",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      {/* Background Ambience */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background: `radial-gradient(circle, ${theme.colors.glow.primary} 0%, transparent 60%)`,
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.5,
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: "relative",
          width: "600px",
          height: "600px",
          transformStyle: "preserve-3d",
          transform: interactive
            ? `rotateX(${mousePosition.current.y * 20 + 20}deg) rotateY(${mousePosition.current.x * 30 - 20}deg)`
            : "rotateX(20deg) rotateY(-20deg)",
          transition: "transform 0.1s ease-out",
          animation: animated ? "floatXYZ 8s ease-in-out infinite" : "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transformStyle: "preserve-3d",
            animation: animated ? "rotateScene 40s linear infinite" : "none",
          }}
        >
          {/* Central Data Stream Base (Server Core) */}
          <div
            style={{
              position: "absolute",
              width: "4px",
              height: "500px",
              background: `linear-gradient(to bottom, transparent, ${theme.colors.accent}, transparent)`,
              transform: "translate(-50%, -50%)",
              opacity: 0.9,
              boxShadow: `0 0 20px 4px ${theme.colors.accent}`,
            }}
          />

          {/* The Stacked Cylinders */}
          {cylinders.map((cyl, i) => (
            <div
              key={`cyl-${cyl.id}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                transform: `translate3d(0, ${cyl.y}px, 0)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Top Cap */}
              <div
                style={{
                  position: "absolute",
                  width: `${R * 2}px`,
                  height: `${R * 2}px`,
                  transform: `translate(-50%, -50%) rotateX(90deg) translateZ(${H / 2}px)`,
                  background: theme.colors.glass.primary,
                  border: `2px solid ${theme.colors.primary}`,
                  borderRadius: "50%",
                  backdropFilter: "blur(6px)",
                  boxShadow: `inset 0 0 30px ${theme.colors.primary}60`,
                }}
              >
                {/* Cylinder Center Ring Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "60%",
                    height: "60%",
                    transform: "translate(-50%, -50%)",
                    border: `2px dashed ${theme.colors.accent}`,
                    borderRadius: "50%",
                    opacity: 0.8,
                    animation: animated ? "spinZ 10s linear infinite" : "none",
                  }}
                />
              </div>

              {/* Bottom Cap */}
              <div
                style={{
                  position: "absolute",
                  width: `${R * 2}px`,
                  height: `${R * 2}px`,
                  transform: `translate(-50%, -50%) rotateX(-90deg) translateZ(${H / 2}px)`,
                  background: theme.colors.glass.primary,
                  border: `2px solid ${theme.colors.primary}90`,
                  borderRadius: "50%",
                  boxShadow: `0 0 40px ${theme.colors.primary}40`,
                }}
              />

              {/* Side Faces (Vertical Walls) */}
              {Array.from({ length: numFaces }).map((_, fIndex) => (
                <div
                  key={`face-${i}-${fIndex}`}
                  style={{
                    position: "absolute",
                    width: `${faceWidth}px`,
                    height: `${H}px`,
                    transform: `translate(-50%, -50%) rotateY(${(fIndex * 360) / numFaces}deg) translateZ(${R}px)`,
                    background: `linear-gradient(to bottom, ${theme.colors.primary}60 0%, ${theme.colors.secondary}10 50%, ${theme.colors.primary}80 100%)`,
                    borderLeft: `1px solid ${theme.colors.primary}60`,
                    borderRight: `1px solid ${theme.colors.primary}60`,
                    opacity: 0.8,
                  }}
                />
              ))}

              {/* Inner Flowing Data Streams (Glowing Ring moving down the cylinder wall) */}
              <div
                style={{
                  position: "absolute",
                  width: `${R * 2 + 10}px`,
                  height: `${R * 2 + 10}px`,
                  top: 0,
                  left: 0,
                  transform: `translate(-50%, -50%) rotateX(90deg)`,
                  border: `3px solid ${theme.colors.accent}`,
                  borderRadius: "50%",
                  boxShadow: `0 0 20px ${theme.colors.accent}, inset 0 0 10px ${theme.colors.accent}`,
                  // @ts-ignore
                  "--start-z": `${H / 2 + 5}px`,
                  "--end-z": `${-H / 2 - 5}px`,
                  animation: animated
                    ? "scanRing 3s ease-in-out infinite alternate"
                    : "none",
                  animationDelay: `${i * 0.8}s`,
                }}
              />
            </div>
          ))}

          {/* Data Connections */}
          {connections.map((line, i) => (
            <div
              key={`conn-${i}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${line.dist}px`,
                height: "2px",
                background: `linear-gradient(90deg, ${line.color}80, ${theme.colors.secondary}80)`,
                transformOrigin: "0 50%",
                transform: `translate3d(${line.from.x}px, ${line.from.y}px, ${line.from.z}px) rotateY(${line.angleY}deg) rotateZ(${line.angleZ}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Flowing Data Stream Particle */}
              {animated && line.flowing && (
                <div
                  style={{
                    width: "12px",
                    height: "2px",
                    background: theme.colors.accent,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    boxShadow: `0 0 10px 2px ${theme.colors.accent}`,
                    animation: `flowLine 2s linear infinite ${line.delay}s`,
                    opacity: 0, // hide until animation starts
                  }}
                />
              )}
            </div>
          ))}

          {/* Data Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${node.size}px`,
                height: `${node.size}px`,
                background: node.color,
                borderRadius: "50%",
                transform: `translate3d(${node.x}px, ${node.y}px, ${node.z}px) translate(-50%, -50%)`,
                boxShadow: `0 0 15px 2px ${node.color}`,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "300%",
                  height: "300%",
                  top: "-100%",
                  left: "-100%",
                  borderRadius: "50%",
                  border: `1px solid ${node.color}`,
                  animation: animated
                    ? "pulseNode 2s infinite ease-out"
                    : "none",
                  animationDelay: `${node.delay}s`,
                  opacity: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes flowLine {
          0% {
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        @keyframes floatXYZ {
          0%,
          100% {
            transform: rotateX(20deg) rotateY(-20deg) translateY(0);
          }
          50% {
            transform: rotateX(23deg) rotateY(-15deg) translateY(-25px);
          }
        }
        @keyframes rotateScene {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        @keyframes spinZ {
          from {
            transform: translate(-50%, -50%) rotateZ(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotateZ(360deg);
          }
        }
        @keyframes scanRing {
          0% {
            transform: translate(-50%, -50%) rotateX(90deg)
              translateZ(var(--start-z)) scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) rotateX(90deg)
              translateZ(var(--end-z)) scale(1);
            opacity: 0.2;
          }
        }
        @keyframes pulseNode {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
