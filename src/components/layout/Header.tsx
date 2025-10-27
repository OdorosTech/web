// "use client";

// import { Layout, Menu } from "antd";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function Header() {
//   const pathname = usePathname();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const menuItems = [
//     { key: "/", label: <Link href="/">Home</Link> },
//     { key: "/about", label: <Link href="/about">About</Link> },
//     { key: "/services", label: <Link href="/services">Services</Link> },
//     { key: "/industries", label: <Link href="/industries">Industries</Link> },
//     { key: "/careers", label: <Link href="/careers">Careers</Link> },
//     { key: "/contact", label: <Link href="/contact">Contact</Link> },
//   ];

//   return (
//     <Layout.Header
//       style={{
//         position: "fixed",
//         zIndex: 1000,
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         background: "#fff",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//       }}
//     >
//       <div
//         style={{
//           color: "#c026d3",
//           fontSize: 24,
//           fontWeight: "bold",
//           marginRight: 50,
//         }}
//       >
//         ODOROS
//       </div>
//       <Menu
//         mode="horizontal"
//         selectedKeys={mounted ? [pathname] : []}
//         items={menuItems}
//         style={{ flex: 1, minWidth: 0, border: "none" }}
//       />
//     </Layout.Header>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { Layout, Menu, Button, Drawer, Switch } from "antd";
// import {
//   MenuOutlined,
//   HomeOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   PhoneOutlined,
//   SunOutlined,
//   MoonOutlined,
// } from "@ant-design/icons";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useTheme } from "@/contexts/ThemeContext";
// import { getTheme } from "@/styles/theme";

// const { Header: AntHeader } = Layout;

// export default function Header() {
//   const [drawerVisible, setDrawerVisible] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();
//   const { theme, toggleTheme } = useTheme();
//   const colors = getTheme(theme);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     { key: "/", label: "Home", icon: <HomeOutlined /> },
//     { key: "/services", label: "Services", icon: <AppstoreOutlined /> },
//     { key: "/about", label: "About", icon: <TeamOutlined /> },
//     { key: "/contact", label: "Contact", icon: <PhoneOutlined /> },
//   ];

//   return (
//     <>
//       <AntHeader
//         style={{
//           position: "fixed",
//           top: 0,
//           width: "100%",
//           zIndex: 1000,
//           padding: "0 24px",
//           background: scrolled
//             ? theme === "dark"
//               ? "rgba(20, 20, 20, 0.85)"
//               : "rgba(255, 255, 255, 0.85)"
//             : "transparent",
//           backdropFilter: scrolled ? "blur(12px)" : "none",
//           borderBottom: scrolled
//             ? `1px solid ${colors.border.primary}`
//             : "1px solid transparent",
//           transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//           boxShadow: scrolled
//             ? `0 2px 16px ${
//                 theme === "dark"
//                   ? "rgba(192, 38, 211, 0.15)"
//                   : "rgba(0, 0, 0, 0.08)"
//               }`
//             : "none",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "1400px",
//             margin: "0 auto",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             height: "64px",
//           }}
//         >
//           {/* Logo */}
//           <Link href="/" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "12px",
//                 cursor: "pointer",
//               }}
//             >
//               <div
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "10px",
//                   background:
//                     "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: "0 4px 12px rgba(192, 38, 211, 0.3)",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "scale(1.05) rotate(5deg)";
//                   e.currentTarget.style.boxShadow =
//                     "0 6px 20px rgba(192, 38, 211, 0.5)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "scale(1) rotate(0deg)";
//                   e.currentTarget.style.boxShadow =
//                     "0 4px 12px rgba(192, 38, 211, 0.3)";
//                 }}
//               >
//                 <span
//                   style={{
//                     fontSize: "20px",
//                     fontWeight: "bold",
//                     color: "#fff",
//                   }}
//                 >
//                   O
//                 </span>
//               </div>
//               <span
//                 style={{
//                   fontSize: "20px",
//                   fontWeight: "700",
//                   background:
//                     "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Odoros
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "32px",
//             }}
//             className="desktop-menu"
//           >
//             {menuItems.map((item) => {
//               const isActive = pathname === item.key;
//               return (
//                 <Link
//                   key={item.key}
//                   href={item.key}
//                   style={{
//                     textDecoration: "none",
//                     position: "relative",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       padding: "8px 16px",
//                       borderRadius: "8px",
//                       color: isActive ? "#c026d3" : colors.text.secondary,
//                       fontWeight: isActive ? "600" : "500",
//                       fontSize: "15px",
//                       transition: "all 0.3s ease",
//                       background: isActive
//                         ? theme === "dark"
//                           ? "rgba(192, 38, 211, 0.15)"
//                           : "rgba(192, 38, 211, 0.08)"
//                         : "transparent",
//                       cursor: "pointer",
//                     }}
//                     onMouseEnter={(e) => {
//                       if (!isActive) {
//                         e.currentTarget.style.color = "#c026d3";
//                         e.currentTarget.style.background =
//                           theme === "dark"
//                             ? "rgba(192, 38, 211, 0.1)"
//                             : "rgba(192, 38, 211, 0.05)";
//                       }
//                     }}
//                     onMouseLeave={(e) => {
//                       if (!isActive) {
//                         e.currentTarget.style.color = colors.text.secondary;
//                         e.currentTarget.style.background = "transparent";
//                       }
//                     }}
//                   >
//                     {item.icon}
//                     <span>{item.label}</span>
//                   </div>
//                   {isActive && (
//                     <div
//                       style={{
//                         position: "absolute",
//                         bottom: "-8px",
//                         left: "50%",
//                         transform: "translateX(-50%)",
//                         width: "24px",
//                         height: "3px",
//                         borderRadius: "3px",
//                         background:
//                           "linear-gradient(90deg, #c026d3 0%, #9333ea 100%)",
//                         boxShadow: "0 0 12px rgba(192, 38, 211, 0.6)",
//                       }}
//                     />
//                   )}
//                 </Link>
//               );
//             })}

//             {/* Theme Toggle */}
//             <Button
//               type="text"
//               icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
//               onClick={toggleTheme}
//               style={{
//                 color: colors.text.primary,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "8px",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background =
//                   theme === "dark"
//                     ? "rgba(192, 38, 211, 0.15)"
//                     : "rgba(192, 38, 211, 0.08)";
//                 e.currentTarget.style.color = "#c026d3";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "transparent";
//                 e.currentTarget.style.color = colors.text.primary;
//               }}
//             />

//             {/* CTA Button */}
//             <Button
//               type="primary"
//               style={{
//                 background: "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
//                 border: "none",
//                 borderRadius: "8px",
//                 height: "40px",
//                 padding: "0 24px",
//                 fontWeight: "600",
//                 boxShadow: "0 4px 12px rgba(192, 38, 211, 0.3)",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-2px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 6px 20px rgba(192, 38, 211, 0.5)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow =
//                   "0 4px 12px rgba(192, 38, 211, 0.3)";
//               }}
//             >
//               Get Started
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="mobile-menu">
//             <Button
//               type="text"
//               icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
//               onClick={toggleTheme}
//               style={{
//                 color: colors.text.primary,
//                 marginRight: "8px",
//               }}
//             />
//             <Button
//               type="text"
//               icon={<MenuOutlined />}
//               onClick={() => setDrawerVisible(true)}
//               style={{
//                 color: colors.text.primary,
//               }}
//             />
//           </div>
//         </div>
//       </AntHeader>

//       {/* Mobile Drawer */}
//       <Drawer
//         title={
//           <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//             <div
//               style={{
//                 width: "32px",
//                 height: "32px",
//                 borderRadius: "8px",
//                 background: "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <span
//                 style={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}
//               >
//                 O
//               </span>
//             </div>
//             <span style={{ fontSize: "18px", fontWeight: "700" }}>Odoros</span>
//           </div>
//         }
//         placement="right"
//         onClose={() => setDrawerVisible(false)}
//         open={drawerVisible}
//         styles={{
//           body: { padding: "24px 0" },
//         }}
//       >
//         <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//           {menuItems.map((item) => {
//             const isActive = pathname === item.key;
//             return (
//               <Link
//                 key={item.key}
//                 href={item.key}
//                 onClick={() => setDrawerVisible(false)}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "12px",
//                     padding: "12px 24px",
//                     color: isActive ? "#c026d3" : colors.text.secondary,
//                     fontWeight: isActive ? "600" : "500",
//                     background: isActive
//                       ? "rgba(192, 38, 211, 0.08)"
//                       : "transparent",
//                     borderLeft: isActive
//                       ? "3px solid #c026d3"
//                       : "3px solid transparent",
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </div>
//               </Link>
//             );
//           })}
//           <div style={{ padding: "12px 24px" }}>
//             <Button
//               type="primary"
//               block
//               style={{
//                 background: "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
//                 border: "none",
//                 height: "40px",
//                 fontWeight: "600",
//               }}
//             >
//               Get Started
//             </Button>
//           </div>
//         </div>
//       </Drawer>

//       <style jsx global>{`
//         @media (max-width: 768px) {
//           .desktop-menu {
//             display: none !important;
//           }
//         }
//         @media (min-width: 769px) {
//           .mobile-menu {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

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
    { key: "/", label: "Home", icon: <HomeOutlined /> },
    { key: "/services", label: "Services", icon: <AppstoreOutlined /> },
    { key: "/about", label: "About", icon: <TeamOutlined /> },
    { key: "/contact", label: "Contact", icon: <PhoneOutlined /> },
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
          background: scrolled
            ? theme === "dark"
              ? "rgba(30, 20, 40, 0.3)" // dark glass tint
              : "rgba(255, 255, 255, 0.3)" // light glass tint
            : "transparent",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "0 0 16px 16px",
          // border: scrolled
          //   ? theme === "dark"
          //     ? "1px solid rgba(192, 38, 211, 0.4)"
          //     : "1px solid rgba(192, 38, 211, 0.3)"
          //   : "1px solid transparent",
          // boxShadow: scrolled
          //   ? `0 0 20px 2px ${
          //       theme === "dark"
          //         ? "rgba(192, 38, 211, 0.6)"
          //         : "rgba(192, 38, 211, 0.3)"
          //     }`
          //   : "none",
          transition: "all 0.4s ease",
          color: colors.text.primary,
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
          <Link href="/" style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 12px rgba(192, 38, 211, 0.7)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05) rotate(5deg)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(192, 38, 211, 1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                  e.currentTarget.style.boxShadow =
                    "0 0 12px rgba(192, 38, 211, 0.7)";
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#fff",
                    textShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  O
                </span>
              </div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  background:
                    "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 6px rgba(192, 38, 211, 0.8)",
                }}
              >
                Odoros
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="desktop-menu"
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
                      borderRadius: "8px",
                      color: isActive ? "#c026d3" : colors.text.secondary,
                      fontWeight: isActive ? "600" : "500",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      background: isActive
                        ? theme === "dark"
                          ? "rgba(192, 38, 211, 0.15)"
                          : "rgba(192, 38, 211, 0.08)"
                        : "transparent",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#c026d3";
                        e.currentTarget.style.background =
                          theme === "dark"
                            ? "rgba(192, 38, 211, 0.1)"
                            : "rgba(192, 38, 211, 0.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = colors.text.secondary;
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-8px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "24px",
                        height: "3px",
                        borderRadius: "3px",
                        background:
                          "linear-gradient(90deg, #c026d3 0%, #9333ea 100%)",
                        boxShadow: "0 0 12px rgba(192, 38, 211, 0.6)",
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Theme Toggle */}
            <Button
              type="text"
              icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
              onClick={toggleTheme}
              style={{
                color: colors.text.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  theme === "dark"
                    ? "rgba(192, 38, 211, 0.15)"
                    : "rgba(192, 38, 211, 0.08)";
                e.currentTarget.style.color = "#c026d3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = colors.text.primary;
              }}
            />

            {/* CTA Button */}
            <Button
              type="primary"
              style={{
                background: "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
                border: "none",
                borderRadius: "8px",
                height: "40px",
                padding: "0 24px",
                fontWeight: "600",
                boxShadow: "0 0 12px rgba(192, 38, 211, 0.7)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(192, 38, 211, 1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 0 12px rgba(192, 38, 211, 0.7)";
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu">
            <Button
              type="text"
              icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
              onClick={toggleTheme}
              style={{
                color: colors.text.primary,
                marginRight: "8px",
              }}
            />
            <Button
              type="text"
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
                background: "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
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
        placement="right"
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
                    color: isActive ? "#c026d3" : colors.text.secondary,
                    fontWeight: isActive ? "600" : "500",
                    background: isActive
                      ? "rgba(192, 38, 211, 0.08)"
                      : "transparent",
                    borderLeft: isActive
                      ? "3px solid #c026d3"
                      : "3px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              </Link>
            );
          })}
          <div style={{ padding: "12px 24px" }}>
            <Button
              type="primary"
              block
              style={{
                background: "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
                border: "none",
                height: "40px",
                fontWeight: "600",
                boxShadow: "0 0 12px rgba(192, 38, 211, 0.7)",
              }}
            >
              Get Started
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
