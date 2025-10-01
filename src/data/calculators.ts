export interface Calculator {
  id: string;
  name: string;
  category: string;
  description: string;
  slug: string;
}

export const categories = [
  { id: "math", name: "Math & Algebra", icon: "Calculator" },
  { id: "geometry", name: "Geometry & Trigonometry", icon: "Triangle" },
  { id: "calculus", name: "Calculus & Advanced Math", icon: "TrendingUp" },
  { id: "finance", name: "Finance & Investment", icon: "DollarSign" },
  { id: "realestate", name: "Real Estate & Business", icon: "Building2" },
  { id: "health", name: "Health & Fitness", icon: "Heart" },
  { id: "science", name: "Science & Engineering", icon: "Atom" },
  { id: "computer", name: "Computer Science & Data", icon: "Cpu" },
  { id: "datetime", name: "Date & Time", icon: "Calendar" },
  { id: "conversion", name: "Unit & Conversion", icon: "ArrowRightLeft" },
];

export const calculators: Calculator[] = [
  // Math & Algebra
  { id: "1", name: "Addition Calculator", category: "math", description: "Add numbers with precision", slug: "addition" },
  { id: "2", name: "Subtraction Calculator", category: "math", description: "Subtract numbers easily", slug: "subtraction" },
  { id: "3", name: "Multiplication Calculator", category: "math", description: "Multiply values quickly", slug: "multiplication" },
  { id: "4", name: "Division Calculator", category: "math", description: "Divide numbers accurately", slug: "division" },
  { id: "5", name: "Average Calculator", category: "math", description: "Calculate mean values", slug: "average" },
  { id: "6", name: "Percentage Calculator", category: "math", description: "Compute percentages", slug: "percentage" },
  { id: "7", name: "Fraction Calculator", category: "math", description: "Calculate with fractions", slug: "fraction" },
  { id: "8", name: "Decimal Calculator", category: "math", description: "Work with decimals", slug: "decimal" },
  { id: "9", name: "Ratio Calculator", category: "math", description: "Calculate ratios", slug: "ratio" },
  { id: "10", name: "Proportion Calculator", category: "math", description: "Solve proportions", slug: "proportion" },
  { id: "11", name: "Square Root Calculator", category: "math", description: "Find square roots", slug: "square-root" },
  { id: "12", name: "Cube Root Calculator", category: "math", description: "Calculate cube roots", slug: "cube-root" },
  { id: "13", name: "Exponent Calculator", category: "math", description: "Compute exponents", slug: "exponent" },
  { id: "14", name: "Power Calculator", category: "math", description: "Calculate powers", slug: "power" },
  { id: "15", name: "Factorial Calculator", category: "math", description: "Find factorials", slug: "factorial" },
  { id: "16", name: "Rounding Calculator", category: "math", description: "Round numbers", slug: "rounding" },
  { id: "17", name: "Absolute Value Calculator", category: "math", description: "Get absolute values", slug: "absolute-value" },
  { id: "18", name: "Sign Calculator", category: "math", description: "Determine number signs", slug: "sign" },
  { id: "19", name: "Modulus Calculator", category: "math", description: "Calculate modulus", slug: "modulus" },
  { id: "20", name: "Prime Number Checker", category: "math", description: "Check if prime", slug: "prime-checker" },
  
  // Geometry & Trigonometry
  { id: "51", name: "Square Area Calculator", category: "geometry", description: "Calculate square areas", slug: "square-area" },
  { id: "52", name: "Rectangle Area Calculator", category: "geometry", description: "Find rectangle areas", slug: "rectangle-area" },
  { id: "53", name: "Triangle Area Calculator", category: "geometry", description: "Compute triangle areas", slug: "triangle-area" },
  { id: "54", name: "Circle Area Calculator", category: "geometry", description: "Calculate circle areas", slug: "circle-area" },
  { id: "55", name: "Trapezium Area Calculator", category: "geometry", description: "Find trapezium areas", slug: "trapezium-area" },
  { id: "56", name: "Polygon Area Calculator", category: "geometry", description: "Calculate polygon areas", slug: "polygon-area" },
  { id: "57", name: "Sector Area Calculator", category: "geometry", description: "Find sector areas", slug: "sector-area" },
  { id: "58", name: "Perimeter Calculator", category: "geometry", description: "Calculate perimeters", slug: "perimeter" },
  { id: "59", name: "Diagonal Calculator", category: "geometry", description: "Find diagonals", slug: "diagonal" },
  { id: "60", name: "Pythagoras Calculator", category: "geometry", description: "Apply Pythagorean theorem", slug: "pythagoras" },
  
  // Finance & Investment
  { id: "111", name: "Simple Interest Calculator", category: "finance", description: "Calculate simple interest", slug: "simple-interest" },
  { id: "112", name: "Compound Interest Calculator", category: "finance", description: "Compute compound interest", slug: "compound-interest" },
  { id: "113", name: "Loan EMI Calculator", category: "finance", description: "Calculate loan EMI", slug: "loan-emi" },
  { id: "114", name: "Loan Amortization Calculator", category: "finance", description: "View loan amortization", slug: "loan-amortization" },
  { id: "115", name: "Car Loan Calculator", category: "finance", description: "Calculate car loans", slug: "car-loan" },
  { id: "116", name: "Home Loan Calculator", category: "finance", description: "Compute home loans", slug: "home-loan" },
  { id: "117", name: "Student Loan Calculator", category: "finance", description: "Calculate student loans", slug: "student-loan" },
  { id: "118", name: "Personal Loan Calculator", category: "finance", description: "Personal loan calculator", slug: "personal-loan" },
  { id: "119", name: "Mortgage Calculator", category: "finance", description: "Calculate mortgages", slug: "mortgage" },
  { id: "120", name: "Adjustable Mortgage Calculator", category: "finance", description: "Adjustable mortgage rates", slug: "adjustable-mortgage" },
  
  // Health & Fitness
  { id: "241", name: "BMI Calculator", category: "health", description: "Calculate Body Mass Index", slug: "bmi" },
  { id: "242", name: "BMR Calculator", category: "health", description: "Basal Metabolic Rate", slug: "bmr" },
  { id: "243", name: "Calorie Calculator", category: "health", description: "Calculate calories needed", slug: "calorie" },
  { id: "244", name: "Daily Calorie Intake Calculator", category: "health", description: "Daily calorie needs", slug: "daily-calorie" },
  { id: "245", name: "Macro Split Calculator", category: "health", description: "Calculate macros", slug: "macro-split" },
  { id: "246", name: "Protein Requirement Calculator", category: "health", description: "Protein needs", slug: "protein" },
  { id: "247", name: "Fat Requirement Calculator", category: "health", description: "Calculate fat needs", slug: "fat-requirement" },
  { id: "248", name: "Carb Requirement Calculator", category: "health", description: "Carbohydrate needs", slug: "carb-requirement" },
  { id: "249", name: "Body Fat Calculator", category: "health", description: "Calculate body fat %", slug: "body-fat" },
  { id: "250", name: "Lean Body Mass Calculator", category: "health", description: "Lean body mass", slug: "lean-mass" },
  
  // Add more categories as needed - This demonstrates the structure
  // Total: 500+ calculators will be added following this pattern
];

// Helper to get calculators by category
export const getCalculatorsByCategory = (categoryId: string) => {
  return calculators.filter(calc => calc.category === categoryId);
};

// Helper to get calculator by slug
export const getCalculatorBySlug = (slug: string) => {
  return calculators.find(calc => calc.slug === slug);
};