import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdPlacement } from "@/components/AdPlacement";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getCalculatorBySlug } from "@/data/calculators";
import { useState } from "react";

const CalculatorView = () => {
  const { slug } = useParams();
  const calculator = slug ? getCalculatorBySlug(slug) : null;
  const [result, setResult] = useState<string>("");

  // Sample calculator logic for demonstration
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleCalculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    
    if (isNaN(num1) || isNaN(num2)) {
      setResult("Please enter valid numbers");
      return;
    }

    // Different calculation based on calculator type
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

  if (!calculator) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Calculator Not Found</h1>
            <Link to="/categories">
              <Button variant="hero">Browse All Calculators</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-8 gradient-hero border-b border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/categories">
              <Button variant="ghost" size="sm" className="mb-6 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                {calculator.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {calculator.description}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Calculator */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Calculator</CardTitle>
                  <CardDescription>Enter your values below to calculate</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="value1">First Value</Label>
                      <Input
                        id="value1"
                        type="number"
                        placeholder="Enter first value"
                        value={value1}
                        onChange={(e) => setValue1(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="value2">Second Value</Label>
                      <Input
                        id="value2"
                        type="number"
                        placeholder="Enter second value"
                        value={value2}
                        onChange={(e) => setValue2(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={handleCalculate}
                  >
                    Calculate
                  </Button>

                  {result && (
                    <div className="p-6 rounded-lg gradient-hero border border-primary/20 animate-scale-in">
                      <p className="text-sm text-muted-foreground mb-2">Result:</p>
                      <p className="text-3xl font-bold text-primary">{result}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* How to Use */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>How to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Enter your first value in the first input field</li>
                    <li>Enter your second value in the second input field</li>
                    <li>Click the Calculate button to see your result</li>
                    <li>The result will be displayed in the result section</li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar with Ads */}
            <div className="space-y-6">
              <AdPlacement slot={`calc-${slug}-sidebar-1`} format="vertical" />
              <AdPlacement slot={`calc-${slug}-sidebar-2`} format="square" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdPlacement slot={`calc-${slug}-bottom`} format="horizontal" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CalculatorView;