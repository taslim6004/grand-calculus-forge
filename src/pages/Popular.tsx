import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CalculatorCard } from "@/components/CalculatorCard";
import { AdPlacement } from "@/components/AdPlacement";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { calculators } from "@/data/calculators";

const Popular = () => {
  // Get the first 50 calculators as "popular" ones
  const popularCalculators = calculators.slice(0, 50);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Popular Calculators - Most Used Tools"
        description="Access our most popular and frequently used calculators including BMI, loan, mortgage, percentage, and compound interest calculators."
        keywords="popular calculators, most used calculators, trending calculators, best calculators"
      />
      <Header />
      
      <main className="flex-1">
        <section className="py-12 gradient-hero border-b border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-6 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg gradient-primary shadow-glow">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Popular Calculators
                </h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Our most used and trusted calculators, chosen by millions of users worldwide
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdPlacement slot="popular-top" format="horizontal" />
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularCalculators.map((calc) => (
                <CalculatorCard
                  key={calc.id}
                  name={calc.name}
                  description={calc.description}
                  slug={calc.slug}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdPlacement slot="popular-bottom" format="horizontal" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Popular;
