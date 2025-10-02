// Generate unique color themes for each calculator based on its slug
export interface CalculatorTheme {
  primary: string;
  secondary: string;
  gradient: string;
  glow: string;
  shadow: string;
}

// Single premium color palette for all calculators
const colorPalette = { 
  primary: "220 78% 38%", 
  secondary: "230 70% 44%",
  name: "blue"
};

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
  // Use the same palette for all calculators
  const palette = colorPalette;
  
  return {
    primary: `hsl(${palette.primary})`,
    secondary: `hsl(${palette.secondary})`,
    gradient: `linear-gradient(135deg, hsl(${palette.primary}), hsl(${palette.secondary}))`,
    glow: `0 0 40px hsl(${palette.primary} / 0.4), 0 0 80px hsl(${palette.primary} / 0.2)`,
    shadow: `0 20px 60px -15px hsl(${palette.primary} / 0.3), 0 10px 20px -10px hsl(${palette.primary} / 0.2)`,
  };
}
