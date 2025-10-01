import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Info, TrendingUp, BookOpen } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdPlacement } from "@/components/AdPlacement";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getCalculatorBySlug } from "@/data/calculators";
import { getCalculatorContent } from "@/utils/calculatorContent";
import { useState } from "react";

const CalculatorView = () => {
  const { slug } = useParams();
  const calculator = slug ? getCalculatorBySlug(slug) : null;
  const content = slug ? getCalculatorContent(slug) : null;
  const [result, setResult] = useState<string>("");

  // Sample calculator logic
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleCalculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    
    if (isNaN(num1) || isNaN(num2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let calculatedResult = 0;
    switch (calculator?.slug) {
      case "addition":
        calculatedResult = num1 + num2;
        break;
      case "subtraction":
        calculatedResult = num1 - num2;
        break;
      case "multiplication":
        calculatedResult = num1 * num2;
        break;
      case "division":
        calculatedResult = num2 !== 0 ? num1 / num2 : 0;
        break;
      case "percentage":
        calculatedResult = (num1 / 100) * num2;
        break;
      default:
        calculatedResult = num1 + num2;
    }

    setResult(calculatedResult.toFixed(2));
  };

  if (!calculator || !content) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center gradient-hero">
          <div className="text-center space-y-6 p-8">
            <h1 className="text-4xl font-bold">Calculator Not Found</h1>
            <p className="text-muted-foreground">The calculator you're looking for doesn't exist.</p>
            <Link to="/categories">
              <Button variant="hero" size="lg">Browse All Calculators</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`${calculator.name} - UltimateCalcHub`}
        description={calculator.description}
        keywords={`${calculator.name}, calculator, ${calculator.category}`}
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 gradient-hero border-b border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/categories">
              <Button variant="ghost" size="sm" className="mb-6 gap-2 glass">
                <ArrowLeft className="h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
            <div className="max-w-4xl space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.15] pb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {calculator.name}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {content.introduction}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Calculator */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator Card */}
              <Card className="shadow-3d glass-strong animate-scale-in">
                <CardHeader className="border-b border-border/50 gradient-hero">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="p-2 rounded-lg gradient-primary shadow-glow">
                      <TrendingUp className="h-6 w-6 text-primary-foreground" />
                    </div>
                    {content.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Enter your values below for instant, accurate calculations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 pt-8">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="value1" className="text-base font-semibold">First Value</Label>
                      <Input
                        id="value1"
                        type="number"
                        placeholder="Enter first value"
                        value={value1}
                        onChange={(e) => setValue1(e.target.value)}
                        className="h-12 text-lg shadow-card hover:shadow-premium transition-smooth border-2"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="value2" className="text-base font-semibold">Second Value</Label>
                      <Input
                        id="value2"
                        type="number"
                        placeholder="Enter second value"
                        value={value2}
                        onChange={(e) => setValue2(e.target.value)}
                        className="h-12 text-lg shadow-card hover:shadow-premium transition-smooth border-2"
                      />
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="w-full text-lg"
                    onClick={handleCalculate}
                  >
                    Calculate Now
                  </Button>

                  {result && (
                    <div className="p-8 rounded-xl glass-strong border-2 border-primary/30 animate-scale-in shadow-glow">
                      <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Result:</p>
                      <p className="text-5xl font-bold leading-[1.2] pb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{result}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* How It Works */}
              <Card className="shadow-3d glass-strong animate-fade-in">
                <CardHeader className="border-b border-border/50">
                  <CardTitle className="text-xl flex items-center gap-3">
                    <div className="p-2 rounded-lg gradient-primary shadow-glow">
                      <BookOpen className="h-5 w-5 text-primary-foreground" />
                    </div>
                    How It Works
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ol className="space-y-4">
                    {content.howItWorks.map((step, index) => (
                      <li key={index} className="flex gap-4 items-start group">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary text-primary-foreground flex items-center justify-center font-bold shadow-glow group-hover:shadow-premium transition-smooth">
                          {index + 1}
                        </span>
                        <p className="text-muted-foreground pt-1 leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Pro Tips */}
              <Card className="shadow-3d glass-strong animate-fade-in">
                <CardHeader className="border-b border-border/50">
                  <CardTitle className="text-xl flex items-center gap-3">
                    <div className="p-2 rounded-lg gradient-accent shadow-glow">
                      <Info className="h-5 w-5 text-accent-foreground" />
                    </div>
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {content.tips.map((tip, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="text-muted-foreground leading-relaxed">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Examples */}
              <Card className="shadow-3d glass-strong animate-fade-in">
                <CardHeader className="border-b border-border/50">
                  <CardTitle className="text-xl">Real-World Examples</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {content.examples.map((example, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/50 transition-smooth">
                        <p className="text-sm leading-relaxed">{example}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar with Ads */}
            <div className="space-y-8 animate-fade-in">
              <AdPlacement slot={`calc-${slug}-sidebar-1`} format="vertical" />
              <AdPlacement slot={`calc-${slug}-sidebar-2`} format="square" />
            </div>
          </div>
        </div>

        {/* Bottom Ad */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-border/40">
          <AdPlacement slot={`calc-${slug}-bottom`} format="horizontal" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CalculatorView;
