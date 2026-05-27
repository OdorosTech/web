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
  title: "Odoros Technologies - Innovating for a smarter future",
  description:
    "Odoros Technologies delivers custom software solutions with AI, data analytics, and cloud expertise to transform your business.",
  keywords: [
    "AI Development",
    "Data Analytics",
    "Custom Software",
    "Cloud Solutions",
    "Machine Learning",
    "Big Data",
    "Odoros Technologies",
    "Software Consulting",
    "Tech Solutions",
  ],
  authors: [{ name: "Odoros Technologies" }],
  creator: "Odoros Technologies",
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
