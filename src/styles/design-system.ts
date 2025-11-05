// Enhanced Design System with Glassmorphism & 3D Effects
export const designTokens = {
  // Spacing System
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "80px",
    "5xl": "96px",
  },

  // Typography Scale
  typography: {
    fontSizes: {
      xs: "clamp(12px, 1vw, 14px)",
      sm: "clamp(14px, 1.2vw, 16px)",
      base: "clamp(16px, 1.5vw, 18px)",
      lg: "clamp(18px, 2vw, 22px)",
      xl: "clamp(24px, 3vw, 32px)",
      "2xl": "clamp(32px, 4vw, 48px)",
      "3xl": "clamp(42px, 6vw, 72px)",
    },
    fontWeights: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    lineHeights: {
      tight: "1.1",
      normal: "1.5",
      relaxed: "1.7",
    },
    letterSpacing: {
      tight: "-0.02em",
      normal: "0",
      wide: "0.02em",
    },
  },

  // Glassmorphism Effects
  glass: {
    blur: {
      sm: "blur(8px)",
      md: "blur(16px)",
      lg: "blur(24px)",
      xl: "blur(40px)",
    },
    backdrop: {
      light: "blur(20px) saturate(180%)",
      medium: "blur(16px) saturate(160%)",
      heavy: "blur(12px) saturate(140%)",
    },
  },

  // Border Radius
  borderRadius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "32px",
    full: "50%",
    pill: "9999px",
  },

  // Animation Curves
  easing: {
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  // 3D Transform Presets
  transforms: {
    perspective: "perspective(1000px)",
    isometric: "rotateX(30deg) rotateY(-15deg)",
    float: "translateY(-8px) scale(1.02)",
  },
};

// Enhanced Theme System
export interface GlassmorphismTheme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      gradient: string;
    };
    glass: {
      primary: string;
      secondary: string;
      tertiary: string;
      border: string;
    };
    glow: {
      primary: string;
      secondary: string;
      accent: string;
      hover: string;
    };
    shadow: {
      sm: string;
      md: string;
      lg: string;
      glow: string;
    };
  };
  effects: {
    glassmorphism: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    neonGlow: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
}

export const lightGlassTheme: GlassmorphismTheme = {
  colors: {
    primary: "#c026d3", // Purple primary
    secondary: "#667eea", // Blue secondary
    accent: "#06b6d4", // Cyan accent
    text: {
      primary: "rgba(0, 0, 0, 0.9)",
      secondary: "rgba(0, 0, 0, 0.7)",
      tertiary: "rgba(0, 0, 0, 0.5)",
    },
    background: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.8)",
      tertiary: "rgba(255, 255, 255, 0.6)",
      gradient:
        "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)",
    },
    glass: {
      primary: "rgba(255, 255, 255, 0.25)",
      secondary: "rgba(255, 255, 255, 0.15)",
      tertiary: "rgba(255, 255, 255, 0.1)",
      border: "rgba(255, 255, 255, 0.3)",
    },
    glow: {
      primary: "rgba(192, 38, 211, 0.15)",
      secondary: "rgba(102, 126, 234, 0.12)",
      accent: "rgba(6, 182, 212, 0.1)",
      hover: "rgba(192, 38, 211, 0.25)",
    },
    shadow: {
      sm: "0 2px 8px rgba(192, 38, 211, 0.08)",
      md: "0 8px 24px rgba(192, 38, 211, 0.12)",
      lg: "0 16px 40px rgba(192, 38, 211, 0.15)",
      glow: "0 0 60px rgba(192, 38, 211, 0.3)",
    },
  },
  effects: {
    glassmorphism: {
      primary:
        "backdrop-filter: blur(20px); background: rgba(255, 255, 255, 0.25); border: 1px solid rgba(255, 255, 255, 0.3);",
      secondary:
        "backdrop-filter: blur(16px); background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.2);",
      tertiary:
        "backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.15);",
    },
    neonGlow: {
      primary:
        "box-shadow: 0 0 20px rgba(192, 38, 211, 0.4), 0 0 40px rgba(192, 38, 211, 0.2), 0 0 80px rgba(192, 38, 211, 0.1);",
      secondary:
        "box-shadow: 0 0 20px rgba(102, 126, 234, 0.4), 0 0 40px rgba(102, 126, 234, 0.2);",
      accent:
        "box-shadow: 0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2);",
    },
  },
};

export const darkGlassTheme: GlassmorphismTheme = {
  colors: {
    primary: "#c026d3",
    secondary: "#667eea",
    accent: "#06b6d4",
    text: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.8)",
      tertiary: "rgba(255, 255, 255, 0.6)",
    },
    background: {
      primary: "rgba(20, 20, 20, 0.4)", // translucent dark glass
      secondary: "rgba(30, 20, 40, 0.3)", // deeper glass layer
      tertiary: "rgba(40, 30, 50, 0.25)", // subtle tinted glass
      gradient:
        "linear-gradient(135deg, rgba(30,20,40,0.5) 0%, rgba(20,20,20,0.35) 50%, rgba(10,10,20,0.25) 100%)",
      //
      // primary: "rgba(15, 15, 25, 0.95)",
      // secondary: "rgba(20, 20, 35, 0.8)",
      // tertiary: "rgba(25, 25, 45, 0.6)",
      // gradient:
      //   "linear-gradient(135deg, rgba(15,15,25,0.9) 0%, rgba(10,10,20,0.8) 100%)",
    },
    glass: {
      primary: "rgba(255, 255, 255, 0.1)",
      secondary: "rgba(255, 255, 255, 0.05)",
      tertiary: "rgba(255, 255, 255, 0.03)",
      border: "rgba(255, 255, 255, 0.15)",
    },
    glow: {
      primary: "rgba(192, 38, 211, 0.25)",
      secondary: "rgba(102, 126, 234, 0.2)",
      accent: "rgba(6, 182, 212, 0.15)",
      hover: "rgba(192, 38, 211, 0.4)",
    },
    shadow: {
      sm: "0 2px 8px rgba(0, 0, 0, 0.3)",
      md: "0 8px 24px rgba(0, 0, 0, 0.4)",
      lg: "0 16px 40px rgba(0, 0, 0, 0.5)",
      glow: "0 0 60px rgba(192, 38, 211, 0.5)",
    },
  },
  effects: {
    glassmorphism: {
      primary:
        "backdrop-filter: blur(20px); background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.15);",
      secondary:
        "backdrop-filter: blur(16px); background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);",
      tertiary:
        "backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08);",
    },
    neonGlow: {
      primary:
        "box-shadow: 0 0 20px rgba(192, 38, 211, 0.6), 0 0 40px rgba(192, 38, 211, 0.4), 0 0 80px rgba(192, 38, 211, 0.2);",
      secondary:
        "box-shadow: 0 0 20px rgba(102, 126, 234, 0.6), 0 0 40px rgba(102, 126, 234, 0.4);",
      accent:
        "box-shadow: 0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.4);",
    },
  },
};

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

export const getGlassTheme = (mode: "light" | "dark"): GlassmorphismTheme => {
  return mode === "light" ? lightGlassTheme : darkGlassTheme;
};
