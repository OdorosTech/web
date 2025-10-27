// Color utility functions for generating consistent color schemes

export const colorSchemes = {
  purple: {
    color: "#c026d3",
    gradient: "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
  },
  blue: {
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
  },
  green: {
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
  },
  orange: {
    color: "#f97316",
    gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
  },
  pink: {
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
  },
  indigo: {
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  },
};

export type ColorScheme = keyof typeof colorSchemes;

export function getColorScheme(index: number): {
  color: string;
  gradient: string;
} {
  const schemes = Object.values(colorSchemes);
  return schemes[index % schemes.length];
}

export function getColorByName(name: ColorScheme) {
  return colorSchemes[name] || colorSchemes.purple;
}
