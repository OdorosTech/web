"use client";
import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { Typography, Button, Space, Spin } from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter"; // Parses the --- frontmatter ---
import { ContentItem, getContentByType } from "@/lib/content";

const { Title } = Typography;

export default function CareerPostPage() {
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

    getContentByType("careers").then((data) => {
      const currentPost = data.find((item: any) => item.slug === slug);

      if (currentPost) {
        // gray-matter splits frontmatter attributes into .data and the markdown text into .content
        const { data: frontmatter, content: markdownBody } = matter(
          currentPost.content,
        );

        // Fallback to post properties if frontmatter is missing some fields
        setParsedData({
          data: {
            title: frontmatter.title || currentPost.title,
            location: frontmatter.location || currentPost.location,
            type: frontmatter.type || currentPost.type,
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
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <Title level={2}>Position Not Found</Title>
        <Button type='primary' onClick={() => router.push("/careers")}>
          Back to Careers
        </Button>
      </div>
    );
  }

  const { data: info, content } = parsedData;

  return (
    <div style={{ padding: "80px 20px", marginTop: 64 }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Navigation */}
        <Button
          type='link'
          icon={<ArrowLeftOutlined />}
          onClick={() => router.push("/careers")}
          style={{ paddingLeft: 0, marginBottom: 20, color: "#1677ff" }}
        >
          Back to Open Positions
        </Button>

        {/* Dynamic Header details extracted from Frontmatter */}
        <Title level={1} style={{ marginBottom: 12 }}>
          {info.title}
        </Title>

        <Space
          size='large'
          style={{ marginBottom: 40, color: "#666", fontSize: 15 }}
        >
          <span>
            <EnvironmentOutlined /> {info.location}
          </span>
          <span>
            <ClockCircleOutlined /> {info.type}
          </span>
        </Space>

        <hr
          style={{
            border: "0",
            borderTop: "1px solid #f0f0f0",
            marginBottom: 40,
          }}
        />

        {/* Rendered Clean Markdown Body */}
        <div
          className='markdown-content'
          style={{ fontSize: 16, lineHeight: 1.8 }}
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
