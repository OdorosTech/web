"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Typography, Row, Col, Card } from "antd";
import { ContentItem, getContentByType } from "@/lib/content";
import * as Icons from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Industries() {
  const [industries, setIndustries] = useState<ContentItem[]>([]);

  useEffect(() => {
    getContentByType("industries").then(setIndustries);
  }, []);

  return (
    <div style={{ padding: "80px 20px", marginTop: 64 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Title level={1} style={{ textAlign: "center", marginBottom: 20 }}>
          Industries We Serve
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
          Delivering specialized solutions across diverse sectors
        </Paragraph>

        <Row gutter={[32, 32]}>
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
              ? (Icons as any)[industry.icon]
              : Icons.StarOutlined;

            return (
              <Col xs={24} md={12} lg={6} key={index}>
                <Card style={{ height: "100%" }} hoverable>
                  <div style={{ marginBottom: 20 }}>
                    <IconComponent style={{ fontSize: 48, color: "#c026d3" }} />
                  </div>
                  <Title level={3}>{industry.title}</Title>
                  <Paragraph style={{ marginBottom: 20 }}>
                    {industry.description}
                  </Paragraph>
                  {industry.solutions && (
                    <ul style={{ paddingLeft: 20 }}>
                      {industry.solutions.map(
                        (solution: string, idx: number) => (
                          <li key={idx} style={{ marginBottom: 8 }}>
                            {solution}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
