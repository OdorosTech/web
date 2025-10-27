"use client";
import { Typography, Row, Col, Card } from "antd";
import {
  RocketOutlined,
  TeamOutlined,
  GlobalOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function About() {
  const values = [
    {
      icon: <RocketOutlined style={{ fontSize: 48, color: "#c026d3" }} />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge AI and data solutions",
    },
    {
      icon: <TeamOutlined style={{ fontSize: 48, color: "#c026d3" }} />,
      title: "Collaboration",
      description: "Working closely with clients to achieve their goals",
    },
    {
      icon: <GlobalOutlined style={{ fontSize: 48, color: "#c026d3" }} />,
      title: "Global Reach",
      description: "Serving clients across industries and continents",
    },
    {
      icon: <SafetyOutlined style={{ fontSize: 48, color: "#c026d3" }} />,
      title: "Trust",
      description:
        "Building lasting relationships through reliability and excellence",
    },
  ];

  return (
    <div style={{ padding: "80px 20px", marginTop: 64 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Title level={1} style={{ textAlign: "center", marginBottom: 60 }}>
          About Odoros Technologies
        </Title>

        <Row gutter={[48, 48]} style={{ marginBottom: 80 }}>
          <Col xs={24} md={12}>
            <Title level={2}>Our Mission</Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
              At Odoros Technologies, we empower businesses to harness the full
              potential of their data through innovative AI and analytics
              solutions. We transform complex challenges into actionable
              insights that drive growth and efficiency.
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Title level={2}>Our Vision</Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
              To be the global leader in AI-driven transformation, enabling
              organizations to make smarter decisions, optimize operations, and
              create sustainable competitive advantages in an increasingly
              data-driven world.
            </Paragraph>
          </Col>
        </Row>

        <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
          Our Values
        </Title>
        <Row gutter={[32, 32]}>
          {values.map((value, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card style={{ textAlign: "center", height: "100%" }} hoverable>
                <div style={{ marginBottom: 20 }}>{value.icon}</div>
                <Title level={4}>{value.title}</Title>
                <Paragraph>{value.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
