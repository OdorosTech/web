"use client";
import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { Spin } from "antd";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { ContentItem, getContentByType } from "@/lib/content";
import PageContainer from "@/components/common/PageContainer";
import PageHeader from "@/components/common/PageHeader";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [parsedData, setParsedData] = React.useState<{
    data: any;
    content: string;
  } | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!slug) return;

    getContentByType("services").then((data) => {
      const currentService = data.find((item: any) => item.slug === slug);

      if (currentService) {
        // Splits YAML frontmatter metadata from markdown body text
        const { data: frontmatter, content: markdownBody } = matter(
          currentService.content,
        );

        setParsedData({
          data: {
            title: frontmatter.title || currentService.title,
            description:
              frontmatter.description || currentService.description || "",
          },
          content: markdownBody,
        });
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size='large' />
      </div>
    );
  }

  if (!parsedData) {
    return (
      <PageContainer>
        <div style={{ padding: "60px 20px", textAlign: "center" }}>
          <h2>Service Not Found</h2>
          <button
            onClick={() => router.push("/services")}
            style={{ marginTop: 20, padding: "10px 20px", cursor: "pointer" }}
          >
            Back to Services
          </button>
        </div>
      </PageContainer>
    );
  }

  const { data: info, content } = parsedData;

  return (
    <PageContainer>
      {/* Back Button */}
      <button
        onClick={() => router.push("/services")}
        style={{
          background: "none",
          border: "none",
          color: "#0070f3",
          cursor: "pointer",
          padding: 0,
          marginBottom: "20px",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        ← Back to Services
      </button>

      {/* Reusing your site's PageHeader layout */}
      <PageHeader title={info.title} description={info.description} />

      <hr
        style={{
          border: "0",
          borderTop: "1px solid #eaeaea",
          margin: "40px 0",
        }}
      />

      {/* Rendered Markdown Body Content */}
      <div
        className='markdown-content'
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "17px",
          lineHeight: "1.8",
        }}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </PageContainer>
  );
}
