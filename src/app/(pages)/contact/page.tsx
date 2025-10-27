"use client";

import ContactForm from "@/components/common/ContactForm";
import { Typography, Row, Col, Card } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Contact() {
  return (
    <div style={{ padding: "80px 20px", marginTop: 64 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Title level={1} style={{ textAlign: "center", marginBottom: 20 }}>
          Get In Touch
        </Title>
        <Paragraph
          style={{ textAlign: "center", fontSize: 18, marginBottom: 60 }}
        >
          Let's discuss how we can help transform your business
        </Paragraph>

        <Row gutter={[48, 48]}>
          <Col xs={24} md={12}>
            <ContactForm />
          </Col>
          <Col xs={24} md={12}>
            <Card>
              <Title level={3}>Contact Information</Title>
              <div style={{ marginTop: 30 }}>
                <div style={{ marginBottom: 24, fontSize: 16 }}>
                  <MailOutlined style={{ marginRight: 12, color: "#c026d3" }} />
                  <a href="mailto:info@odoros.tech">info@odoros.tech</a>
                </div>
                <div style={{ marginBottom: 24, fontSize: 16 }}>
                  <PhoneOutlined
                    style={{ marginRight: 12, color: "#c026d3" }}
                  />
                  +1 (555) 123-4567
                </div>
                <div style={{ marginBottom: 24, fontSize: 16 }}>
                  <EnvironmentOutlined
                    style={{ marginRight: 12, color: "#c026d3" }}
                  />
                  San Francisco, CA
                </div>
              </div>

              <Title level={4} style={{ marginTop: 40 }}>
                Office Hours
              </Title>
              <Paragraph>
                Monday - Friday: 9:00 AM - 6:00 PM PST
                <br />
                Saturday - Sunday: Closed
              </Paragraph>

              <Title level={4} style={{ marginTop: 30 }}>
                Response Time
              </Title>
              <Paragraph>
                We typically respond to inquiries within 24 hours during
                business days.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
