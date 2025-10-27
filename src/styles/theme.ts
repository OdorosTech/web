// Theme configuration for light and dark modes

export const lightTheme = {
  background: {
    primary: "#ffffff",
    secondary: "#f0f2f5",
    tertiary: "#fafafa",
    gradient: "linear-gradient(135deg, #fafafa 0%, #f0f2f5 50%, #e6f7ff 100%)",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.88)",
    secondary: "rgba(0, 0, 0, 0.65)",
    tertiary: "rgba(0, 0, 0, 0.45)",
  },
  border: {
    primary: "#f0f0f0",
    secondary: "#d9d9d9",
  },
  glow: {
    primary: "rgba(192, 38, 211, 0.08)",
    secondary: "rgba(59, 130, 246, 0.08)",
    hover: "rgba(192, 38, 211, 0.15)",
  },
  shadow: {
    sm: "0 2px 8px rgba(0, 0, 0, 0.08)",
    md: "0 4px 16px rgba(0, 0, 0, 0.12)",
    lg: "0 8px 24px rgba(0, 0, 0, 0.15)",
  },
};

export const darkTheme = {
  background: {
    primary: "#141414",
    secondary: "#1f1f1f",
    tertiary: "#2a2a2a",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #1a1a2e 100%)",
  },
  text: {
    primary: "rgba(255, 255, 255, 0.88)",
    secondary: "rgba(255, 255, 255, 0.65)",
    tertiary: "rgba(255, 255, 255, 0.45)",
  },
  border: {
    primary: "rgba(255, 255, 255, 0.12)",
    secondary: "rgba(255, 255, 255, 0.2)",
  },
  glow: {
    primary: "rgba(192, 38, 211, 0.15)",
    secondary: "rgba(59, 130, 246, 0.15)",
    hover: "rgba(192, 38, 211, 0.25)",
  },
  shadow: {
    sm: "0 2px 8px rgba(0, 0, 0, 0.45)",
    md: "0 4px 16px rgba(0, 0, 0, 0.55)",
    lg: "0 8px 24px rgba(0, 0, 0, 0.65)",
  },
};

export type ThemeColors = typeof lightTheme;

export function getTheme(mode: "light" | "dark"): ThemeColors {
  return mode === "light" ? lightTheme : darkTheme;
}
