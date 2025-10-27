// import type { Metadata } from "next";
// import { AntdRegistry } from "@ant-design/nextjs-registry";
// import { ConfigProvider } from "antd";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Odoros Technologies - AI & Data Analytics Solutions",
//   description:
//     "Leading provider of AI/ML, Data Analytics, Consulting, and Software Development services",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <AntdRegistry>
//           <ConfigProvider
//             theme={{
//               token: {
//                 colorPrimary: "#c026d3",
//                 borderRadius: 8,
//               },
//             }}
//           >
//             <Header />
//             <main>{children}</main>
//             <Footer />
//           </ConfigProvider>
//         </AntdRegistry>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeConfigProvider from "@/components/ThemeConfigProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odoros Technologies - AI & Data Analytics Solutions",
  description:
    "Leading provider of AI/ML, Data Analytics, Consulting, and Software Development services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AntdRegistry>
          <ThemeProvider>
            <ThemeConfigProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </ThemeConfigProvider>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
