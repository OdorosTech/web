"use client";
import { useState, useEffect } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  AppstoreOutlined,
  TeamOutlined,
  PhoneOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { getTheme } from "@/styles/theme";

const { Header: AntHeader } = Layout;

export default function Header() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const colors = getTheme(theme);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/about", label: "About" },
    { key: "/services", label: "Services" },
    { key: "/industries", label: "Industries" },
    { key: "/careers", label: "Careers" },
    { key: "/blog", label: "Blog" },
  ];

  return (
    <>
      <AntHeader
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          padding: "0 24px",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          transition: "all 0.3s ease",
          color: colors.text.primary,
          background:
            theme === "dark"
              ? "rgba(10, 10, 15, 0.75)"
              : "rgba(255, 255, 255, 0.8)",
          borderBottom:
            theme === "dark"
              ? "1px solid rgba(255, 255, 255, 0.08)"
              : "1px solid rgba(0, 0, 0, 0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
          {/* <Link href="/" style={{ textDecoration: "none" }}> */}
          {/* <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  background:
                    "linear-gradient(135deg, #ac188c 0%, #9333ea 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 6px rgba(172, 24, 140, 0.8)",
                }}
              >
                Odoros
              </span>
            </div> */}
          <Link
            href='/'
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Image
              src='/images/odoros.png'
              alt='Odoros Logo'
              // width={180} // 120 + half = 180
              // height={100} // adjust height as needed
              width={270} // 180 + half = 270
              height={150} // 100
              priority // recommended height for header logo
              // priority
            />

            {/* </Link> */}
          </Link>

          {/* Desktop Menu */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className='desktop-menu'
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.key}
                  style={{
                    textDecoration: "none",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 16px",
                      borderRadius: "100px",
                      color: isActive ? "#ac188c" : colors.text.secondary,
                      fontWeight: isActive ? "700" : "600",
                      fontSize: "14px",
                      transition: "all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      fontFamily: "var(--font-outfit)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = colors.text.primary;
                        e.currentTarget.style.background =
                          theme === "dark"
                            ? "rgba(255, 255, 255, 0.04)"
                            : "rgba(0, 0, 0, 0.03)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = colors.text.secondary;
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {item.label}
                  </div>
                </Link>
              );
            })}

            {/* Theme Toggle */}
            <Button
              type='text'
              icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
              onClick={toggleTheme}
              style={{
                color: colors.text.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            />

            {/* Premium Outline Pill Contact Button */}
            <Link href='/contact' style={{ textDecoration: "none" }}>
              <button
                style={{
                  border: "1.5px solid #ac188c",
                  background: "transparent",
                  color: "#ac188c",
                  borderRadius: "100px",
                  height: "40px",
                  padding: "0 20px",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-outfit)",
                  transition: "all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ac188c";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#ac188c";
                }}
              >
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                </svg>
                <span>Contact Us</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='mobile-menu'>
            <Button
              type='text'
              icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
              onClick={toggleTheme}
              style={{
                color: colors.text.primary,
                marginRight: "8px",
              }}
            />
            <Button
              type='text'
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{
                color: colors.text.primary,
              }}
            />
          </div>
        </div>
      </AntHeader>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #ac188c 0%, #9333ea 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}
              >
                O
              </span>
            </div>
            <span style={{ fontSize: "18px", fontWeight: "700" }}>Odoros</span>
          </div>
        }
        placement='right'
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        styles={{
          body: { padding: "24px 0" },
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {menuItems.map((item) => {
            const isActive = pathname === item.key;
            return (
              <Link
                key={item.key}
                href={item.key}
                onClick={() => setDrawerVisible(false)}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 24px",
                    color: isActive ? "#ac188c" : colors.text.secondary,
                    fontWeight: isActive ? "600" : "500",
                    background: isActive
                      ? "rgba(172, 24, 140, 0.08)"
                      : "transparent",
                    borderLeft: isActive
                      ? "3px solid #ac188c"
                      : "3px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span>{item.label}</span>
                </div>
              </Link>
            );
          })}
          <div style={{ padding: "12px 24px" }}>
            <Button
              type='primary'
              block
              style={{
                background: "linear-gradient(135deg, #ac188c 0%, #9333ea 100%)",
                border: "none",
                height: "40px",
                fontWeight: "600",
                boxShadow: "0 0 12px rgba(172, 24, 140, 0.7)",
              }}
            >
              <Link href='/contact' style={{ textDecoration: "none" }}>
                <PhoneOutlined style={{ marginRight: "8px" }} />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </Drawer>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
