// Premium content and explanations for each calculator category
export const getCalculatorContent = (slug: string) => {
  const contentMap: Record<string, {
    title: string;
    introduction: string;
    howItWorks: string[];
    tips: string[];
    examples: string[];
  }> = {
    // Math & Algebra Calculators
    addition: {
      title: "Professional Addition Calculator",
      introduction: "Our advanced addition calculator provides instant, accurate results for adding multiple numbers. Perfect for accounting, budgeting, and mathematical analysis.",
      howItWorks: [
        "Enter your first numerical value in the designated field",
        "Input your second number for calculation",
        "Click 'Calculate' to instantly receive your sum",
        "Results are displayed with precision formatting",
      ],
      tips: [
        "Use decimal points for precise calculations",
        "Supports both positive and negative numbers",
        "Perfect for financial calculations and data analysis",
      ],
      examples: [
        "Business expense tracking: $1,250 + $890 = $2,140",
        "Inventory management: 340 units + 125 units = 465 units",
        "Grade calculation: 85 + 92 = 177 points",
      ],
    },
    subtraction: {
      title: "Professional Subtraction Calculator",
      introduction: "Calculate differences instantly with our premium subtraction tool. Essential for financial analysis, inventory management, and data comparison.",
      howItWorks: [
        "Input the starting value (minuend)",
        "Enter the value to subtract (subtrahend)",
        "Receive immediate, accurate results",
        "View formatted output for easy reading",
      ],
      tips: [
        "Handles negative results automatically",
        "Ideal for budget variance analysis",
        "Supports decimal precision",
      ],
      examples: [
        "Budget remaining: $5,000 - $3,200 = $1,800",
        "Temperature change: 72°F - 58°F = 14°F",
        "Stock decrease: 500 shares - 150 shares = 350 shares",
      ],
    },
    percentage: {
      title: "Advanced Percentage Calculator",
      introduction: "Calculate percentages, discounts, and increases with professional precision. Essential for retail, finance, and statistical analysis.",
      howItWorks: [
        "Enter the base value or total amount",
        "Input the percentage rate",
        "Get instant percentage calculations",
        "View detailed breakdown of results",
      ],
      tips: [
        "Perfect for discount calculations",
        "Calculate sales tax quickly",
        "Determine profit margins accurately",
      ],
      examples: [
        "20% discount on $150: $30 off, final price $120",
        "15% tip on $85 meal: $12.75 tip",
        "5% sales tax on $200: $10 tax, total $210",
      ],
    },
  };

  // Default content for calculators not explicitly defined
  const defaultContent = {
    title: "Professional Calculator",
    introduction: "Perform accurate calculations with our premium tool. Designed for professionals who demand precision and reliability.",
    howItWorks: [
      "Enter your values in the input fields provided",
      "Select appropriate options if available",
      "Click the Calculate button for instant results",
      "Review detailed output and analysis",
    ],
    tips: [
      "Double-check input values for accuracy",
      "Use decimal points for precise calculations",
      "Results are formatted for easy interpretation",
    ],
    examples: [
      "Professional calculations with guaranteed accuracy",
      "Real-time processing for immediate results",
      "Premium formatting for clear presentation",
    ],
  };

  return contentMap[slug] || defaultContent;
};
