// Generate unique color themes for each calculator based on its slug
export interface CalculatorTheme {
  primary: string;
  secondary: string;
  gradient: string;
  glow: string;
  shadow: string;
}

// Predefined premium color palettes
const colorPalettes = [
  // Amber Gold Premium
  { 
    primary: "45 100% 58%", 
    secondary: "30 95% 55%",
    name: "gold"
  },
  // Emerald Green
  { 
    primary: "160 84% 48%", 
    secondary: "140 75% 55%",
    name: "emerald"
  },
  // Ruby Red
  { 
    primary: "350 89% 60%", 
    secondary: "0 84% 65%",
    name: "ruby"
  },
  // Sapphire Blue
  { 
    primary: "210 95% 58%", 
    secondary: "200 90% 62%",
    name: "sapphire"
  },
  // Amethyst Purple
  { 
    primary: "270 65% 62%", 
    secondary: "290 60% 65%",
    name: "amethyst"
  },
  // Coral Pink
  { 
    primary: "10 90% 65%", 
    secondary: "350 85% 68%",
    name: "coral"
  },
  // Turquoise Cyan
  { 
    primary: "180 85% 55%", 
    secondary: "170 80% 60%",
    name: "turquoise"
  },
  // Lime Green
  { 
    primary: "80 75% 55%", 
    secondary: "70 80% 60%",
    name: "lime"
  },
  // Rose Pink
  { 
    primary: "330 85% 62%", 
    secondary: "340 80% 65%",
    name: "rose"
  },
  // Indigo Blue
  { 
    primary: "240 75% 62%", 
    secondary: "250 70% 65%",
    name: "indigo"
  },
  // Teal
  { 
    primary: "175 78% 48%", 
    secondary: "165 75% 52%",
    name: "teal"
  },
  // Orange
  { 
    primary: "25 95% 58%", 
    secondary: "35 90% 60%",
    name: "orange"
  },
  // Violet
  { 
    primary: "260 70% 62%", 
    secondary: "275 65% 65%",
    name: "violet"
  },
  // Magenta
  { 
    primary: "310 75% 62%", 
    secondary: "320 70% 65%",
    name: "magenta"
  },
  // Sky Blue
  { 
    primary: "195 90% 60%", 
    secondary: "205 85% 63%",
    name: "sky"
  },
];

// Hash function to consistently generate a number from a string
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function getCalculatorTheme(slug: string): CalculatorTheme {
  // Use hash to consistently pick the same palette for the same slug
  const paletteIndex = hashString(slug) % colorPalettes.length;
  const palette = colorPalettes[paletteIndex];
  
  return {
    primary: `hsl(${palette.primary})`,
    secondary: `hsl(${palette.secondary})`,
    gradient: `linear-gradient(135deg, hsl(${palette.primary}), hsl(${palette.secondary}))`,
    glow: `0 0 40px hsl(${palette.primary} / 0.4), 0 0 80px hsl(${palette.primary} / 0.2)`,
    shadow: `0 20px 60px -15px hsl(${palette.primary} / 0.3), 0 10px 20px -10px hsl(${palette.primary} / 0.2)`,
  };
}
