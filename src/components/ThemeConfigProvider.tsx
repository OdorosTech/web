"use client";
import { ConfigProvider, theme as antTheme } from "antd";
import { useTheme } from "@/contexts/ThemeContext";
import { ReactNode } from "react";

export default function ThemeConfigProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "dark" ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#c026d3",
          borderRadius: 8,
          colorBgContainer: theme === "dark" ? "#141414" : "#ffffff",
          colorBgElevated: theme === "dark" ? "#1f1f1f" : "#ffffff",
          colorBorder:
            theme === "dark" ? "rgba(255, 255, 255, 0.12)" : "#f0f0f0",
          colorText:
            theme === "dark"
              ? "rgba(255, 255, 255, 0.88)"
              : "rgba(0, 0, 0, 0.88)",
          colorTextSecondary:
            theme === "dark"
              ? "rgba(255, 255, 255, 0.65)"
              : "rgba(0, 0, 0, 0.65)",
        },
        components: {
          Layout: {
            headerBg: theme === "dark" ? "#141414" : "#ffffff",
            bodyBg: theme === "dark" ? "#0a0a0a" : "#f0f2f5",
            footerBg: theme === "dark" ? "#141414" : "#f0f2f5",
          },
          Menu: {
            darkItemBg: theme === "dark" ? "#141414" : "#001529",
          },
          Card: {
            colorBgContainer: theme === "dark" ? "#1f1f1f" : "#ffffff",
          },
          Button: {
            primaryShadow: "0 4px 12px rgba(192, 38, 211, 0.3)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
