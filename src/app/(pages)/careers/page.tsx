"use client";
import * as React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { ContentItem, getContentByType } from "@/lib/content";

const { Title, Paragraph } = Typography;

export default function Careers() {
  // const positions = getContentByType("careers");
  const [positions, setPositions] = React.useState<ContentItem[]>([]);

  React.useEffect(() => {
    getContentByType("careers").then(setPositions);
  }, []);

  const benefits = [
    "Competitive salary and equity",
    "Flexible remote work",
    "Health and wellness benefits",
    "Professional development budget",
    "Latest tech equipment",
    "Collaborative team culture",
  ];

  return (
    <div style={{ padding: "80px 20px", marginTop: 64 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Title level={1} style={{ textAlign: "center", marginBottom: 20 }}>
          Join Our Team
        </Title>
        <Paragraph
          style={{
            textAlign: "center",
            fontSize: 18,
            marginBottom: 60,
            maxWidth: 800,
            margin: "0 auto 60px",
          }}
        >
          Be part of a team that's shaping the future of AI and data analytics
        </Paragraph>

        <Row gutter={[48, 48]} style={{ marginBottom: 80 }}>
          <Col xs={24} md={12}>
            <Title level={2}>Why Odoros?</Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
              At Odoros, you'll work on challenging projects with cutting-edge
              technologies, collaborate with talented professionals, and make a
              real impact on businesses worldwide.
            </Paragraph>
            <Title level={4} style={{ marginTop: 30 }}>
              Benefits
            </Title>
            <ul style={{ fontSize: 16, lineHeight: 2 }}>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ background: "#f5f5f5" }}>
              <Title level={3}>Our Culture</Title>
              <Paragraph>
                We foster an environment of innovation, continuous learning, and
                collaboration. Our team is passionate about technology and
                committed to delivering excellence.
              </Paragraph>
              <Paragraph>
                We believe in work-life balance, professional growth, and
                creating solutions that make a difference.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Title level={2} style={{ marginBottom: 40 }}>
          Open Positions
        </Title>
        <Row gutter={[32, 32]}>
          {positions.map((position, index) => (
            <Col xs={24} md={12} key={index}>
              <Card hoverable>
                <Title level={4}>{position.title}</Title>
                <div style={{ marginBottom: 10 }}>
                  <EnvironmentOutlined /> {position.location}
                  <span style={{ marginLeft: 20 }}>
                    <ClockCircleOutlined /> {position.type}
                  </span>
                </div>
                <Paragraph>
                  {position.description ||
                    position.content.substring(0, 150) + "..."}
                </Paragraph>
                <Link href="/contact">
                  <Button type="primary">Apply Now</Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
