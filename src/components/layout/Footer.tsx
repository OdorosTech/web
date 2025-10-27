"use client";
import { Layout, Row, Col, Space, Divider } from "antd";
import {
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";

const { Footer: AntFooter } = Layout;

export default function Footer() {
  const { theme } = useTheme();
  const colors = getTheme(theme);

  const footerLinks = {
    services: [
      { label: "AI & Machine Learning", href: "/services#ai" },
      { label: "Data Analytics", href: "/services#data" },
      { label: "Consulting", href: "/services#consulting" },
      { label: "Software Development", href: "/services#software" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Documentation", href: "/docs" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Whitepapers", href: "/whitepapers" },
      { label: "Support", href: "/support" },
    ],
  };

  const socialLinks = [
    {
      icon: <TwitterOutlined />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <LinkedinOutlined />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    { icon: <GithubOutlined />, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <AntFooter
      style={{
        position: "relative",
        padding: "64px 24px 24px",
        background:
          theme === "dark"
            ? "rgba(20, 20, 20, 0.4)" // dark translucent glass
            : "rgba(255, 255, 255, 0.4)", // light translucent glass
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        // borderTop: `1px solid ${
        //   theme === "dark"
        //     ? "rgba(192, 38, 211, 0.4)"
        //     : "rgba(192, 38, 211, 0.3)"
        // }`,
        borderRadius: "16px 16px 0 0",
        // boxShadow:
        //   theme === "dark"
        //     ? "0 0 30px 4px rgba(192, 38, 211, 0.6)"
        //     : "0 0 20px 3px rgba(192, 38, 211, 0.3)",
        color: colors.text.primary,
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      {/* Glowing background orbs */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "10%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(192, 38, 211, 0.6) 0%, transparent 70%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "10%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(192, 38, 211, 0.4) 0%, transparent 70%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Row gutter={[48, 48]} style={{ marginBottom: "48px" }}>
          {/* Company Info */}
          <Col xs={24} sm={24} md={8} lg={8}>
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 16px rgba(192, 38, 211, 0.6)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#fff",
                      textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    O
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    background:
                      "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 8px rgba(192, 38, 211, 0.8)",
                  }}
                >
                  Odoros Technologies
                </span>
              </div>
              <p
                style={{
                  color: colors.text.secondary,
                  fontSize: "14px",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                }}
              >
                Leading provider of AI/ML, Data Analytics, Consulting, and
                Software Development services. Transforming businesses through
                innovative technology solutions.
              </p>

              {/* Contact Info */}
              <Space
                direction="vertical"
                size="small"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: colors.text.secondary,
                  }}
                >
                  <MailOutlined style={{ color: "#c026d3" }} />
                  <span style={{ fontSize: "14px" }}>info@odoros.tech</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: colors.text.secondary,
                  }}
                >
                  <PhoneOutlined style={{ color: "#c026d3" }} />
                  <span style={{ fontSize: "14px" }}>+1 (555) 123-4567</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: colors.text.secondary,
                  }}
                >
                  <EnvironmentOutlined style={{ color: "#c026d3" }} />
                  <span style={{ fontSize: "14px" }}>San Francisco, CA</span>
                </div>
              </Space>
            </div>
          </Col>

          {/* Services Links */}
          <Col xs={12} sm={8} md={5} lg={5}>
            <h4
              style={{
                color: colors.text.primary,
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Services
            </h4>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              {footerLinks.services.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  style={{
                    color: colors.text.secondary,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#c026d3";
                    e.currentTarget.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.text.secondary;
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Space>
          </Col>

          {/* Company Links */}
          <Col xs={12} sm={8} md={5} lg={5}>
            <h4
              style={{
                color: colors.text.primary,
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Company
            </h4>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              {footerLinks.company.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  style={{
                    color: colors.text.secondary,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#c026d3";
                    e.currentTarget.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.text.secondary;
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Space>
          </Col>

          {/* Resources Links */}
          <Col xs={12} sm={8} md={6} lg={6}>
            <h4
              style={{
                color: colors.text.primary,
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Resources
            </h4>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              {footerLinks.resources.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  style={{
                    color: colors.text.secondary,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#c026d3";
                    e.currentTarget.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.text.secondary;
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Space>
          </Col>
        </Row>

        <Divider
          style={{ borderColor: colors.border.primary, margin: "32px 0" }}
        />

        {/* Bottom Footer */}
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <p
              style={{
                color: colors.text.tertiary,
                fontSize: "14px",
                margin: 0,
                textAlign: "center",
              }}
              className="copyright-text"
            >
              © {new Date().getFullYear()} Odoros Technologies. All rights
              reserved.
            </p>
          </Col>

          <Col xs={24} sm={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
              }}
              className="social-links"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.text.secondary,
                    border: `1px solid ${colors.border.primary}`,
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#c026d3";
                    e.currentTarget.style.borderColor = "#c026d3";
                    e.currentTarget.style.background =
                      theme === "dark"
                        ? "rgba(192, 38, 211, 0.15)"
                        : "rgba(192, 38, 211, 0.08)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(192, 38, 211, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.text.secondary;
                    e.currentTarget.style.borderColor = colors.border.primary;
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Legal Links */}
        <div
          style={{
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          <Space split={<span style={{ color: colors.text.tertiary }}>•</span>}>
            <Link
              href="/privacy"
              style={{
                color: colors.text.tertiary,
                fontSize: "13px",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c026d3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.text.tertiary;
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{
                color: colors.text.tertiary,
                fontSize: "13px",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c026d3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.text.tertiary;
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              style={{
                color: colors.text.tertiary,
                fontSize: "13px",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c026d3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.text.tertiary;
              }}
            >
              Cookie Policy
            </Link>
          </Space>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 576px) {
          .copyright-text,
          .social-links {
            justify-content: center !important;
            text-align: center !important;
          }
        }
        @media (min-width: 577px) {
          .copyright-text {
            text-align: left !important;
          }
          .social-links {
            justify-content: flex-end !important;
          }
        }
      `}</style>
    </AntFooter>
  );
}
