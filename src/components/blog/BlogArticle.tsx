// components/blog/BlogArticle.tsx
"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme} from "@/styles/theme";
import { BlogPost } from "@/lib/content";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import { ArrowLeftOutlined, ClockCircleOutlined, CalendarOutlined, UserOutlined } from "@ant-design/icons";

interface BlogArticleProps {
  post: BlogPost;
}

export default function BlogArticle({ post }: BlogArticleProps) {
  const { theme } = useTheme();
  const colors = getTheme(theme);
  const isDarkMode = theme === "dark";
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.background.primary,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Effects */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Back Button */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px 20px",
        }}
      >
        <button
          onClick={() => router.push("/blog")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            background: isDarkMode
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            color: colors.text.primary,
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(-4px)";
            e.currentTarget.style.borderColor = "#8b5cf6";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.borderColor = isDarkMode
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)";
          }}
        >
          <ArrowLeftOutlined /> Back to Blog
        </button>
      </div>

      {/* Article Container */}
      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        {/* Category Badge */}
        <div
          style={{
            display: "inline-block",
            padding: "8px 20px",
            background: "rgba(139, 92, 246, 0.2)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            borderRadius: "20px",
            marginBottom: "24px",
            fontSize: "13px",
            fontWeight: "600",
            color: "#8b5cf6",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          {post.category}
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: "700",
            lineHeight: "1.2",
            color: colors.text.primary,
            marginBottom: "24px",
          }}
        >
          {post.title}
        </h1>

        {/* Meta Information */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "center",
            paddingBottom: "32px",
            borderBottom: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
            marginBottom: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <UserOutlined style={{ color: colors.text.secondary }} />
            <div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                {post.author}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: colors.text.secondary,
                }}
              >
                {post.authorRole}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <CalendarOutlined style={{ color: colors.text.secondary }} />
            <span
              style={{
                fontSize: "14px",
                color: colors.text.secondary,
              }}
            >
              {post.date}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <ClockCircleOutlined style={{ color: colors.text.secondary }} />
            <span
              style={{
                fontSize: "14px",
                color: colors.text.secondary,
              }}
            >
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "24px",
              overflow: "hidden",
              marginBottom: "48px",
              border: isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
              boxShadow: isDarkMode
                ? "0 20px 60px rgba(0, 0, 0, 0.5)"
                : "0 20px 60px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={post.featuredImage}
              alt={post.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        {/* Article Content */}
        <div
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: colors.text.primary,
          }}
          className="markdown-content"
        >
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1
                  style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    marginTop: "48px",
                    marginBottom: "24px",
                    color: colors.text.primary,
                    lineHeight: "1.3",
                  }}
                >
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: "600",
                    marginTop: "40px",
                    marginBottom: "20px",
                    color: colors.text.primary,
                    lineHeight: "1.4",
                  }}
                >
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    marginTop: "32px",
                    marginBottom: "16px",
                    color: colors.text.primary,
                    lineHeight: "1.5",
                  }}
                >
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p
                  style={{
                    marginBottom: "24px",
                    color: colors.text.primary,
                    lineHeight: "1.8",
                  }}
                >
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul
                  style={{
                    marginBottom: "24px",
                    paddingLeft: "24px",
                    color: colors.text.primary,
                  }}
                >
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol
                  style={{
                    marginBottom: "24px",
                    paddingLeft: "24px",
                    color: colors.text.primary,
                  }}
                >
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li
                  style={{
                    marginBottom: "12px",
                    color: colors.text.primary,
                  }}
                >
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote
                  style={{
                    borderLeft: "4px solid #8b5cf6",
                    paddingLeft: "24px",
                    marginLeft: "0",
                    marginBottom: "24px",
                    fontStyle: "italic",
                    color: colors.text.secondary,
                  }}
                >
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code
                  style={{
                    background: isDarkMode
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.05)",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    fontSize: "16px",
                    fontFamily: "monospace",
                    color: "#8b5cf6",
                  }}
                >
                  {children}
                </code>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  style={{
                    color: "#8b5cf6",
                    textDecoration: "none",
                    borderBottom: "1px solid #8b5cf6",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderBottomWidth = "2px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderBottomWidth = "1px";
                  }}
                >
                  {children}
                </a>
              ),
              img: ({ src, alt }) => (
                <figure style={{ margin: "40px 0" }}>
                  <img
                    src={src}
                    alt={alt}
                    style={{
                      width: "100%",
                      borderRadius: "16px",
                      border: isDarkMode
                        ? "1px solid rgba(255, 255, 255, 0.1)"
                        : "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  {alt && (
                    <figcaption
                      style={{
                        textAlign: "center",
                        marginTop: "12px",
                        fontSize: "14px",
                        color: colors.text.secondary,
                        fontStyle: "italic",
                      }}
                    >
                      {alt}
                    </figcaption>
                  )}
                </figure>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          {post.tags?.map((tag, i) => (
            <span
              key={i}
              style={{
                padding: "8px 16px",
                background: isDarkMode
                  ? "rgba(139, 92, 246, 0.1)"
                  : "rgba(139, 92, 246, 0.05)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: "500",
                color: "#8b5cf6",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}