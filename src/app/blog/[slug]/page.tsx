"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { BlogPost, getBlogPostBySlug } from "@/lib/content";
import ReactMarkdown from "react-markdown";

import {
  Spin,
  Result,
  Button,
  Card,
  Typography,
  Tag,
  Avatar,
  Divider,
  Space,
  Row,
  Col,
} from "antd";
import { ArrowLeftOutlined, ShareAltOutlined } from "@ant-design/icons";
import PageContainer from "@/components/common/PageContainer";

const { Title, Paragraph, Text } = Typography;

// --- Loader ---
function Loader() {
  return (
    <Row justify='center' align='middle' style={{ minHeight: "100vh" }}>
      <Spin size='large' tip='Loading article...' />
    </Row>
  );
}

// --- NotFound ---
function NotFound({ onBack }: { onBack: () => void }) {
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the article was not found.'
      extra={
        <Button type='primary' onClick={onBack} icon={<ArrowLeftOutlined />}>
          Back to Blog
        </Button>
      }
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    />
  );
}

// --- Article Header ---
function ArticleHeader({ post }: { post: BlogPost }) {
  return (
    <Card
      variant='borderless'
      style={{ marginBottom: 32 }}
      bodyStyle={{ padding: 32 }}
    >
      <Space direction='vertical' size='middle' style={{ width: "100%" }}>
        <Tag color='purple'>{post.category}</Tag>
        <Title
          level={1}
          style={{
            margin: 0,
            background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {post.title}
        </Title>
        <Paragraph type='secondary' style={{ fontSize: 18 }}>
          {post.excerpt}
        </Paragraph>
        <Divider />
        <Row align='middle' gutter={16}>
          <Col>
            <Avatar
              size={56}
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              {post.author
                .split(" ")
                .map((n) => n)
                .join("")}
            </Avatar>
          </Col>
          <Col flex='auto'>
            <Text strong>{post.author}</Text>
            <br />
            <Text type='secondary'>{post.authorRole}</Text>
          </Col>
          <Col>
            <Text type='secondary'>{post.date}</Text>
            <br />
            <Text type='secondary'>{post.readTime}</Text>
          </Col>
        </Row>
      </Space>
    </Card>
  );
}

// --- Author Card ---
function AuthorCard({ post }: { post: BlogPost }) {
  return (
    <Card
      style={{
        background: "rgba(139, 92, 246, 0.08)",
        border: "1px solid rgba(139, 92, 246, 0.3)",
        marginBottom: 32,
      }}
      bodyStyle={{ padding: 32 }}
    >
      <Space align='start'>
        <Avatar
          size={64}
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
            fontWeight: 700,
            fontSize: 32,
          }}
        >
          {post.author
            .split(" ")
            .map((n) => n)
            .join("")}
        </Avatar>
        <div>
          <Text strong style={{ fontSize: 18 }}>
            {post.author}
          </Text>
          <br />
          <Text type='secondary' style={{ color: "#a78bfa" }}>
            {post.authorRole}
          </Text>
          <Paragraph style={{ marginTop: 8 }}>
            {post.authorBio ||
              `${post.author} is a ${post.authorRole} at Odoros Technologies, specializing in spatial data analysis, cartography, and data visualization.`}
          </Paragraph>
        </div>
      </Space>
    </Card>
  );
}

// --- Share Bar ---
function ShareBar({ onBack }: { onBack: () => void }) {
  return (
    <Row justify='space-between' align='middle' style={{ marginBottom: 32 }}>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={onBack}
        style={{ fontWeight: 600 }}
      >
        More Articles
      </Button>
      <Space>
        <Text type='secondary'>Share:</Text>
        {["Twitter", "LinkedIn", "Facebook"].map((platform) => (
          <Button
            key={platform}
            shape='circle'
            icon={<ShareAltOutlined />}
            onClick={() => {
              // Implement share logic here
              window.open(
                `https://www.${platform.toLowerCase()}.com/share?url=${window.location.href}`,
                "_blank"
              );
            }}
          />
        ))}
      </Space>
    </Row>
  );
}

// --- Markdown Content ---
function MarkdownContent({ post }: { post: BlogPost }) {
  return (
    <Card
      style={{ marginBottom: 32 }}
      bodyStyle={{ padding: 32 }}
      cover={
        post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            style={{
              width: "100%",
              height: 400,
              objectFit: "cover",
              borderRadius: 12,
            }}
          />
        )
      }
    >
      <ReactMarkdown
        components={{
          h1: (props) => <Title level={2} {...props} />,
          h2: (props) => <Title level={3} {...props} />,
          h3: (props) => <Title level={4} {...props} />,
          p: (props) => <Paragraph {...props} />,
          strong: (props) => <Text strong {...props} />,
          a: (props) => (
            <a
              style={{ color: "#8b5cf6", textDecoration: "underline" }}
              {...props}
            />
          ),
          ul: (props) => <ul style={{ marginLeft: 24 }} {...props} />,
          ol: (props) => <ol style={{ marginLeft: 24 }} {...props} />,
          li: (props) => <li style={{ marginBottom: 8 }} {...props} />,
          blockquote: (props) => (
            <blockquote
              style={{
                borderLeft: "4px solid #8b5cf6",
                paddingLeft: 16,
                color: "#888",
                fontStyle: "italic",
              }}
              {...props}
            />
          ),
          code: ({ inline, ...props }: any) =>
            inline ? (
              <code
                style={{
                  background: "#f5f2ff",
                  padding: "2px 8px",
                  borderRadius: 4,
                  fontFamily: "monospace",
                }}
                {...props}
              />
            ) : (
              <pre
                style={{
                  background: "#f5f2ff",
                  padding: 16,
                  borderRadius: 8,
                  overflow: "auto",
                }}
              >
                <code {...props} />
              </pre>
            ),
          img: (props) => (
            <img
              style={{
                width: "100%",
                borderRadius: 8,
                margin: "24px 0",
              }}
              {...props}
            />
          ),
          hr: (props) => <Divider {...props} />,
        }}
      >
        {post.content}
      </ReactMarkdown>
      <Divider />
      <Space wrap>
        {post.tags?.map((tag) => (
          <Tag key={tag} color='purple'>
            #{tag}
          </Tag>
        ))}
      </Space>
    </Card>
  );
}

import { use } from "react";

// --- Main Page ---
export default function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const fetchedPost = await getBlogPostBySlug(slug);
        setPost(fetchedPost);
      } catch (error) {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return <Loader />;
  if (!post) return <NotFound onBack={() => router.push("/blog")} />;

  return (
    <div
      style={{
        background: theme === "dark" ? "#0f172a" : "#f8fafc",
        minHeight: "100vh",
        padding: 24,
      }}
    >
      <PageContainer>
        <ShareBar onBack={() => router.push("/blog")} />
        <ArticleHeader post={post} />
        <MarkdownContent post={post} />
        <AuthorCard post={post} />
      </PageContainer>
    </div>
  );
}
