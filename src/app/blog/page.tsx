// app/blog/page.tsx
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PageContainer from "@/components/common/PageContainer";
import PageHeader from "@/components/common/PageHeader";
import StatsSection from "@/components/common/StatsSection";
import CTASection from "@/components/common/CTASection";
import BlogCard from "@/components/blog/BlogCard";
import { useTheme } from "@/contexts/ThemeContext";
import { BlogPost, getBlogPosts } from "@/lib/content";
import { ContentItem, getContentByType } from "@/lib/content";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { theme } = useTheme();
  const router = useRouter();

//   useEffect(() => {
//     getBlogPosts().then(setBlogPosts);
//   }, []);

  useEffect(() => {
    getBlogPosts().then(setBlogPosts);
  }, []);

  console.log({blogPosts})

  const isDarkMode = theme === "dark";

  const stats = [
    {
      number: `${blogPosts.length}+`,
      label: "Articles Published",
      color: isDarkMode ? "#e879f9" : "#c026d3",
    },
    {
      number: "10K+",
      label: "Monthly Readers",
      color: isDarkMode ? "#60a5fa" : "#3b82f6",
    },
    {
      number: "15+",
      label: "Expert Authors",
      color: isDarkMode ? "#34d399" : "#10b981",
    },
    {
      number: "5",
      label: "Categories",
      color: isDarkMode ? "#fb923c" : "#f97316",
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        badge="📚 Knowledge Hub"
        title="Blog & Insights"
        description="Expert insights on data science, AI, and technology trends"
      />

      {/* Blog Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "32px",
          marginBottom: "80px",
        }}
      >
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.slug}
            post={post}
            index={index}
            isHovered={hoveredCard === index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => router.push(`/blog/${post.slug}`)}
          />
        ))}
      </div>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* CTA Section */}
      <CTASection
        title="Stay Updated with Our Latest Insights"
        description="Subscribe to our newsletter and never miss an update"
        buttonText="Subscribe Now →"
        onButtonClick={() => {
          console.log("Subscribe clicked");
        }}
      />
    </PageContainer>
  );
}