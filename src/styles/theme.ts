// // Theme configuration for light and dark modes

// export const lightTheme = {
//   background: {
//     primary: "#ffffff",
//     secondary: "#f0f2f5",
//     tertiary: "#fafafa",
//     gradient: "linear-gradient(135deg, #fafafa 0%, #f0f2f5 50%, #e6f7ff 100%)",
//   },
//   text: {
//     primary: "rgba(0, 0, 0, 0.88)",
//     secondary: "rgba(0, 0, 0, 0.65)",
//     tertiary: "rgba(0, 0, 0, 0.45)",
//   },
//   border: {
//     primary: "#f0f0f0",
//     secondary: "#d9d9d9",
//   },
//   glow: {
//     primary: "rgba(192, 38, 211, 0.08)",
//     secondary: "rgba(59, 130, 246, 0.08)",
//     hover: "rgba(192, 38, 211, 0.15)",
//   },
//   shadow: {
//     sm: "0 2px 8px rgba(0, 0, 0, 0.08)",
//     md: "0 4px 16px rgba(0, 0, 0, 0.12)",
//     lg: "0 8px 24px rgba(0, 0, 0, 0.15)",
//   },
// };

// export const darkTheme = {
//   background: {
//     primary: "#141414",
//     secondary: "#1f1f1f",
//     tertiary: "#2a2a2a",
//     gradient: "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #1a1a2e 100%)",
//   },
//   text: {
//     primary: "rgba(255, 255, 255, 0.88)",
//     secondary: "rgba(255, 255, 255, 0.65)",
//     tertiary: "rgba(255, 255, 255, 0.45)",
//   },
//   border: {
//     primary: "rgba(255, 255, 255, 0.12)",
//     secondary: "rgba(255, 255, 255, 0.2)",
//   },
//   glow: {
//     primary: "rgba(192, 38, 211, 0.15)",
//     secondary: "rgba(59, 130, 246, 0.15)",
//     hover: "rgba(192, 38, 211, 0.25)",
//   },
//   shadow: {
//     sm: "0 2px 8px rgba(0, 0, 0, 0.45)",
//     md: "0 4px 16px rgba(0, 0, 0, 0.55)",
//     lg: "0 8px 24px rgba(0, 0, 0, 0.65)",
//   },
// };

// export type ThemeColors = typeof lightTheme;

// export function getTheme(mode: "light" | "dark"): ThemeColors {
//   return mode === "light" ? lightTheme : darkTheme;
// }

// Theme configuration for light and dark modes with glassy glowing style

export const lightTheme = {
  background: {
    primary: "rgba(255, 255, 255, 0.3)", // translucent white glass
    secondary: "rgba(255, 255, 255, 0.2)", // lighter glass layer
    tertiary: "rgba(255, 255, 255, 0.15)", // subtle glass tint
    gradient:
      "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 100%)",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.85)", // strong but soft black
    secondary: "rgba(0, 0, 0, 0.6)", // medium black
    tertiary: "rgba(0, 0, 0, 0.4)", // subtle black
  },
  border: {
    primary: "rgba(192, 38, 211, 0.3)", // soft purple border
    secondary: "rgba(192, 38, 211, 0.15)", // lighter purple border
  },
  glow: {
    primary: "rgba(192, 38, 211, 0.12)", // very subtle purple glow
    secondary: "rgba(59, 130, 246, 0.1)", // subtle blue glow
    hover: "rgba(192, 38, 211, 0.22)", // stronger glow on hover
  },
  shadow: {
    sm: "0 2px 8px rgba(192, 38, 211, 0.1)", // soft purple shadow
    md: "0 4px 16px rgba(192, 38, 211, 0.15)", // medium shadow
    lg: "0 8px 24px rgba(192, 38, 211, 0.2)", // larger soft shadow
  },
};

export const darkTheme = {
  background: {
    primary: "rgba(20, 20, 20, 0.4)", // translucent dark glass
    secondary: "rgba(30, 20, 40, 0.3)", // deeper glass layer
    tertiary: "rgba(40, 30, 50, 0.25)", // subtle tinted glass
    gradient:
      "linear-gradient(135deg, rgba(30,20,40,0.5) 0%, rgba(20,20,20,0.35) 50%, rgba(10,10,20,0.25) 100%)",
  },
  text: {
    primary: "rgba(255, 255, 255, 0.9)", // bright white
    secondary: "rgba(255, 255, 255, 0.65)", // medium white
    tertiary: "rgba(255, 255, 255, 0.4)", // subtle white
  },
  border: {
    primary: "rgba(192, 38, 211, 0.35)", // soft purple border
    secondary: "rgba(192, 38, 211, 0.2)", // lighter purple border
  },
  glow: {
    primary: "rgba(192, 38, 211, 0.18)", // subtle purple glow
    secondary: "rgba(59, 130, 246, 0.15)", // subtle blue glow
    hover: "rgba(192, 38, 211, 0.3)", // stronger glow on hover
  },
  shadow: {
    sm: "0 2px 8px rgba(192, 38, 211, 0.25)", // soft purple shadow
    md: "0 4px 16px rgba(192, 38, 211, 0.35)", // medium shadow
    lg: "0 8px 24px rgba(192, 38, 211, 0.45)", // larger soft shadow
  },
};

export type ThemeColors = typeof lightTheme;

export function getTheme(mode: "light" | "dark"): ThemeColors {
  return mode === "light" ? lightTheme : darkTheme;
}
