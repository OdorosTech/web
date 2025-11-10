"use client";
import { CSSProperties } from "react";
import { BlogPost } from "@/lib/content";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";

interface BlogCardProps {
  post: BlogPost;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export default function BlogCard({
  post,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: BlogCardProps) {
  const { theme } = useTheme();
  const colors = getTheme(theme);
  const isDarkMode = theme === "dark";

  // Generate gradient colors based on index for cards without images
  const gradients = [
    "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
    "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
  ];

  const cardStyle: CSSProperties = {
    position: "relative",
    background: isDarkMode
      ? "rgba(255, 255, 255, 0.03)"
      : "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    border: `1px solid ${
      isHovered
        ? "#8b5cf6"
        : isDarkMode
          ? "rgba(255, 255, 255, 0.08)"
          : "rgba(255, 255, 255, 0.3)"
    }`,
    borderRadius: "24px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
    boxShadow: isHovered
      ? "0 20px 40px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
      : isDarkMode
        ? "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
        : "0 4px 16px rgba(31, 38, 135, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
  };

  return (
    <>
      <div
        style={cardStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {/* Glow Effect on Hover */}
        {isHovered && (
          <div
            style={{
              position: "absolute",
              inset: "-2px",
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              borderRadius: "24px",
              opacity: "0.2",
              filter: "blur(20px)",
              zIndex: -1,
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        )}

        {/* Featured Image or Gradient Background */}
        <div
          style={{
            width: "100%",
            height: "220px",
            overflow: "hidden",
            position: "relative",
            background: post.featuredImage
              ? "transparent"
              : gradients[index % gradients.length],
          }}
        >
          {post.featuredImage ? (
            <img
              src={post.featuredImage}
              alt={post.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "64px",
                color: "rgba(255, 255, 255, 0.9)",
                fontWeight: "700",
                transition: "transform 0.4s ease",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            >
              📚
            </div>
          )}

          {/* Category Badge */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              padding: "6px 14px",
              background: "rgba(139, 92, 246, 0.9)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "600",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
            }}
          >
            {post.category}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "24px" }}>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginBottom: "12px",
              lineHeight: "1.4",
              color: colors.text.primary,
              transition: "color 0.3s ease",
            }}
          >
            {post.title}
          </h3>

          <p
            style={{
              fontSize: "14px",
              color: colors.text.secondary,
              marginBottom: "16px",
              lineHeight: "1.6",
            }}
          >
            {post.excerpt}
          </p>

          {/* Author & Meta */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "16px",
              borderTop: isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: colors.text.primary,
                  marginBottom: "4px",
                }}
              >
                {post.author}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: colors.text.secondary,
                }}
              >
                {post.date} • {post.readTime}
              </div>
            </div>

            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(139, 92, 246, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "#8b5cf6",
                transition: "all 0.3s ease",
                transform: isHovered ? "translateX(4px)" : "translateX(0)",
              }}
            >
              →
            </div>
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "16px",
            }}
          >
            {post.tags?.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                style={{
                  padding: "4px 12px",
                  background: isDarkMode
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.05)",
                  border: isDarkMode
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  fontSize: "11px",
                  color: colors.text.secondary,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover Arrow */}
          <div
            style={{
              marginTop: "16px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#8b5cf6",
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateX(0)" : "translateX(-10px)",
              transition: "all 0.3s ease",
            }}
          >
            Read article →
          </div>
        </div>
      </div>

      <style jsx>{`
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
    </>
  );
}