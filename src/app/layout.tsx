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
//                 colorPrimary: "#ac188c",
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
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeConfigProvider from "@/components/ThemeConfigProvider";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

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
    <html
      lang='en'
      className={`${outfit.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
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
