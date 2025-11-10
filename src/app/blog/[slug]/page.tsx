"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { BlogPost, getBlogPostBySlug } from "@/lib/content";
import ReactMarkdown from "react-markdown";

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const fetchedPost = await getBlogPostBySlug(params.slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error loading blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  const isDarkMode = theme === "dark";

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: isDarkMode
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)",
          color: isDarkMode ? "#fff" : "#0f172a",
        }}
      >
        <div
          style={{
            padding: "40px",
            background: isDarkMode
              ? "rgba(255, 255, 255, 0.03)"
              : "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px)",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "3px solid rgba(139, 92, 246, 0.3)",
              borderTop: "3px solid #8b5cf6",
              borderRadius: "50%",
              margin: "0 auto 20px",
              animation: "spin 1s linear infinite",
            }}
          />
          <style jsx>{`
            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
          Loading article...
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: isDarkMode
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)",
          color: isDarkMode ? "#fff" : "#0f172a",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404</h1>
          <p style={{ marginBottom: "30px" }}>Article not found</p>
          <button
            onClick={() => router.push("/blog")}
            style={{
              padding: "12px 32px",
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
              border: "none",
              borderRadius: "12px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: isDarkMode
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)",
        color: isDarkMode ? "#fff" : "#0f172a",
        padding: "80px 20px 80px",
        position: "relative",
      }}
    >
      {/* Animated Background Orbs */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "500px",
            height: "500px",
            background: isDarkMode
              ? "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "float 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "400px",
            height: "400px",
            background: isDarkMode
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "float 15s ease-in-out infinite reverse",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => router.push("/blog")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            background: isDarkMode
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(10px)",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            color: isDarkMode ? "#fff" : "#0f172a",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            marginBottom: "40px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(-4px)";
            e.currentTarget.style.background = isDarkMode
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(0, 0, 0, 0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.background = isDarkMode
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(0, 0, 0, 0.05)";
          }}
        >
          ← Back to Blog
        </button>

        {/* Article Header Card */}
        <div
          style={{
            padding: "50px",
            background: isDarkMode
              ? "rgba(255, 255, 255, 0.03)"
              : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
            marginBottom: "40px",
            boxShadow: isDarkMode
              ? "0 20px 60px rgba(0, 0, 0, 0.3)"
              : "0 20px 60px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Category Badge */}
          <div
            style={{
              display: "inline-block",
              padding: "8px 20px",
              background: "rgba(139, 92, 246, 0.15)",
              border: "1px solid rgba(139, 92, 246, 0.4)",
              borderRadius: "24px",
              fontSize: "13px",
              fontWeight: "600",
              marginBottom: "24px",
              color: "#a78bfa",
            }}
          >
            {post.category}
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "24px",
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              color: isDarkMode
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(0, 0, 0, 0.7)",
              marginBottom: "32px",
            }}
          >
            {post.excerpt}
          </p>

          {/* Author Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              paddingTop: "32px",
              borderTop: isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "700",
                color: "#fff",
                boxShadow: "0 8px 24px rgba(139, 92, 246, 0.3)",
              }}
            >
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "6px",
                  color: isDarkMode ? "#fff" : "#0f172a",
                }}
              >
                {post.author}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: isDarkMode
                    ? "rgba(255, 255, 255, 0.6)"
                    : "rgba(0, 0, 0, 0.6)",
                }}
              >
                {post.authorRole}
              </div>
            </div>
            <div
              style={{
                fontSize: "14px",
                color: isDarkMode
                  ? "rgba(255, 255, 255, 0.6)"
                  : "rgba(0, 0, 0, 0.6)",
                textAlign: "right",
              }}
            >
              <div style={{ marginBottom: "4px" }}>{post.date}</div>
              <div>{post.readTime}</div>
            </div>
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
              marginBottom: "40px",
              border: isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
              boxShadow: isDarkMode
                ? "0 20px 60px rgba(0, 0, 0, 0.3)"
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
        <article
          style={{
            padding: "60px",
            background: isDarkMode
              ? "rgba(255, 255, 255, 0.03)"
              : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
            marginBottom: "40px",
            boxShadow: isDarkMode
              ? "0 20px 60px rgba(0, 0, 0, 0.3)"
              : "0 20px 60px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    marginTop: "48px",
                    marginBottom: "24px",
                    color: isDarkMode ? "#fff" : "#0f172a",
                    lineHeight: "1.3",
                  }}
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: "600",
                    marginTop: "40px",
                    marginBottom: "20px",
                    color: isDarkMode ? "#fff" : "#0f172a",
                    lineHeight: "1.3",
                  }}
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: "600",
                    marginTop: "32px",
                    marginBottom: "16px",
                    color: isDarkMode ? "#fff" : "#0f172a",
                    lineHeight: "1.4",
                  }}
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                    color: isDarkMode
                      ? "rgba(255, 255, 255, 0.85)"
                      : "rgba(0, 0, 0, 0.85)",
                  }}
                  {...props}
                />
              ),
              strong: ({ node, ...props }) => (
                <strong
                  style={{
                    fontWeight: "600",
                    color: isDarkMode ? "#fff" : "#0f172a",
                  }}
                  {...props}
                />
              ),
              a: ({ node, ...props }) => (
                <a
                  style={{
                    color: "#8b5cf6",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(139, 92, 246, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderBottomColor = "#8b5cf6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderBottomColor =
                      "rgba(139, 92, 246, 0.3)";
                  }}
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                    paddingLeft: "24px",
                    color: isDarkMode
                      ? "rgba(255, 255, 255, 0.85)"
                      : "rgba(0, 0, 0, 0.85)",
                  }}
                  {...props}
                />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                    paddingLeft: "24px",
                    color: isDarkMode
                      ? "rgba(255, 255, 255, 0.85)"
                      : "rgba(0, 0, 0, 0.85)",
                  }}
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li
                  style={{
                    marginBottom: "12px",
                  }}
                  {...props}
                />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  style={{
                    borderLeft: "4px solid #8b5cf6",
                    paddingLeft: "24px",
                    marginLeft: "0",
                    marginBottom: "24px",
                    fontStyle: "italic",
                    color: isDarkMode
                      ? "rgba(255, 255, 255, 0.7)"
                      : "rgba(0, 0, 0, 0.7)",
                  }}
                  {...props}
                />
              ),
              code: ({ node, inline, ...props }: any) =>
                inline ? (
                  <code
                    style={{
                      background: isDarkMode
                        ? "rgba(139, 92, 246, 0.15)"
                        : "rgba(139, 92, 246, 0.1)",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      fontSize: "16px",
                      fontFamily: "monospace",
                      color: "#a78bfa",
                    }}
                    {...props}
                  />
                ) : (
                  <code
                    style={{
                      display: "block",
                      background: isDarkMode
                        ? "rgba(0, 0, 0, 0.3)"
                        : "rgba(0, 0, 0, 0.05)",
                      padding: "20px",
                      borderRadius: "12px",
                      fontSize: "16px",
                      fontFamily: "monospace",
                      overflow: "auto",
                      marginBottom: "24px",
                    }}
                    {...props}
                  />
                ),
              img: ({ node, ...props }) => (
                <figure
                  style={{
                    margin: "40px 0",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "16px",
                      border: isDarkMode
                        ? "1px solid rgba(255, 255, 255, 0.1)"
                        : "1px solid rgba(0, 0, 0, 0.1)",
                      boxShadow: isDarkMode
                        ? "0 12px 40px rgba(0, 0, 0, 0.3)"
                        : "0 12px 40px rgba(0, 0, 0, 0.1)",
                    }}
                    {...props}
                  />
                  {props.alt && (
                    <figcaption
                      style={{
                        textAlign: "center",
                        fontSize: "14px",
                        color: isDarkMode
                          ? "rgba(255, 255, 255, 0.6)"
                          : "rgba(0, 0, 0, 0.6)",
                        marginTop: "12px",
                        fontStyle: "italic",
                      }}
                    >
                      {props.alt}
                    </figcaption>
                  )}
                </figure>
              ),
              hr: ({ node, ...props }) => (
                <hr
                  style={{
                    border: "none",
                    borderTop: isDarkMode
                      ? "1px solid rgba(255, 255, 255, 0.1)"
                      : "1px solid rgba(0, 0, 0, 0.1)",
                    margin: "48px 0",
                  }}
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "60px",
              paddingTop: "40px",
              borderTop: isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            {post.tags?.map((tag, i) => (
              <span
                key={i}
                style={{
                  padding: "10px 20px",
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  borderRadius: "24px",
                  fontSize: "14px",
                  color: "#a78bfa",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(139, 92, 246, 0.2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(139, 92, 246, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Author Bio Card */}
        <div
          style={{
            padding: "40px",
            background: "rgba(139, 92, 246, 0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            borderRadius: "24px",
            marginBottom: "40px",
            boxShadow: "0 12px 40px rgba(139, 92, 246, 0.15)",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "20px",
              color: isDarkMode ? "#fff" : "#0f172a",
            }}
          >
            About the Author
          </h3>
          <div style={{ display: "flex", gap: "24px", alignItems: "start" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: "700",
                color: "#fff",
                flexShrink: 0,
                boxShadow: "0 8px 24px rgba(139, 92, 246, 0.3)",
              }}
            >
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  color: isDarkMode ? "#fff" : "#0f172a",
                }}
              >
                {post.author}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#a78bfa",
                  marginBottom: "12px",
                  fontWeight: "500",
                }}
              >
                {post.authorRole}
              </div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: isDarkMode
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(0, 0, 0, 0.8)",
                }}
              >
                {post.authorBio ||
                  `${post.author} is a ${post.authorRole} at Odoros Technologies, specializing in spatial data analysis, cartography, and data visualization. Combining historical research with modern data science techniques to uncover insights about human geography and development.`}
              </p>
            </div>
          </div>
        </div>

        {/* Share & Navigate */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "32px",
            background: isDarkMode
              ? "rgba(255, 255, 255, 0.03)"
              : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
          }}
        >
          <button
            onClick={() => router.push("/blog")}
            style={{
              padding: "14px 28px",
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
              border: "none",
              borderRadius: "12px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 24px rgba(139, 92, 246, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(139, 92, 246, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(139, 92, 246, 0.3)";
            }}
          >
            ← More Articles
          </button>

          <div style={{ display: "flex", gap: "12px" }}>
            <div
              style={{
                fontSize: "14px",
                color: isDarkMode
                  ? "rgba(255, 255, 255, 0.6)"
                  : "rgba(0, 0, 0, 0.6)",
                marginRight: "12px",
              }}
            >
              Share:
            </div>
            {["Twitter", "LinkedIn", "Facebook"].map((platform) => (
              <button
                key={platform}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: isDarkMode
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.05)",
                  border: isDarkMode
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontSize: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(139, 92, 246, 0.2)";
                  e.currentTarget.style.borderColor = "#8b5cf6";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isDarkMode
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.borderColor = isDarkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onClick={() => {
                  console.log(`Share on ${platform}`);
                }}
              >
                {platform[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}