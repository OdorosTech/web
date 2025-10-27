"use client";
import ContactForm from "@/components/common/ContactForm";
import { Typography, Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import PageHeader from "@/components/common/PageHeader";
import PageContainer from "@/components/common/PageContainer";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";

const { Title, Paragraph } = Typography;

export default function Contact() {
  const { theme } = useTheme();
  const colors = getTheme(theme);

  return (
    <PageContainer>
      <PageHeader
        badge="📬 Reach Out Today"
        title="Get In Touch"
        description="Let's discuss how we can help transform your business"
      />

      <Row gutter={[48, 48]}>
        <Col xs={24} md={12}>
          <ContactForm />
        </Col>
        <Col xs={24} md={12}>
          <div
            style={{
              background: colors.background.primary,
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderRadius: 16,
              border: `1px solid ${colors.border.primary}`,
              boxShadow: colors.shadow.md,
              padding: 32,
              color: colors.text.primary,
              transition: "all 0.3s ease",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
            }}
          >
            <Title
              level={3}
              style={{
                color: colors.text.primary,
                marginBottom: 24,
                textShadow: `0 0 6px ${colors.glow.primary}`,
              }}
            >
              Contact Information
            </Title>

            <div style={{ marginTop: 16 }}>
              <div
                style={{
                  marginBottom: 24,
                  fontSize: 16,
                  display: "flex",
                  alignItems: "center",
                  color: colors.text.secondary,
                }}
              >
                <MailOutlined
                  style={{ marginRight: 12, color: "#c026d3", fontSize: 20 }}
                />
                <a
                  href="mailto:info@odoros.tech"
                  style={{
                    color: colors.text.secondary,
                    textDecoration: "underline",
                  }}
                >
                  info@odoros.tech
                </a>
              </div>

              <div
                style={{
                  marginBottom: 24,
                  fontSize: 16,
                  display: "flex",
                  alignItems: "center",
                  color: colors.text.secondary,
                }}
              >
                <PhoneOutlined
                  style={{ marginRight: 12, color: "#c026d3", fontSize: 20 }}
                />
                +1 (555) 123-4567
              </div>

              <div
                style={{
                  marginBottom: 24,
                  fontSize: 16,
                  display: "flex",
                  alignItems: "center",
                  color: colors.text.secondary,
                }}
              >
                <EnvironmentOutlined
                  style={{ marginRight: 12, color: "#c026d3", fontSize: 20 }}
                />
                San Francisco, CA
              </div>
            </div>

            <Title
              level={4}
              style={{
                marginTop: 40,
                color: colors.text.primary,
                textShadow: `0 0 4px ${colors.glow.primary}`,
              }}
            >
              Office Hours
            </Title>
            <Paragraph style={{ color: colors.text.secondary, fontSize: 15 }}>
              Monday - Friday: 9:00 AM - 6:00 PM PST
              <br />
              Saturday - Sunday: Closed
            </Paragraph>

            <Title
              level={4}
              style={{
                marginTop: 30,
                color: colors.text.primary,
                textShadow: `0 0 4px ${colors.glow.primary}`,
              }}
            >
              Response Time
            </Title>
            <Paragraph style={{ color: colors.text.secondary, fontSize: 15 }}>
              We typically respond to inquiries within 24 hours during business
              days.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </PageContainer>
  );
}
