import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CalculatorCard } from "@/components/CalculatorCard";
import { AdPlacement } from "@/components/AdPlacement";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { categories, getCalculatorsByCategory } from "@/data/calculators";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

const CategoryView = () => {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const calculators = categoryId ? getCalculatorsByCategory(categoryId) : [];

  const Icon = category ? ((Icons[category.icon as keyof typeof Icons] as LucideIcon) || Icons.Calculator) : Icons.Calculator;

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center gradient-hero">
          <div className="text-center space-y-6 p-8">
            <h1 className="text-4xl font-bold">Category Not Found</h1>
            <p className="text-muted-foreground">The category you're looking for doesn't exist.</p>
            <Link to="/categories">
              <Button variant="hero" size="lg">Back to Categories</Button>
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
        title={`${category.name} Calculators - UltimateCalcHub`}
        description={`Explore ${calculators.length} professional ${category.name.toLowerCase()} calculators. Free, accurate, and instant calculations.`}
        keywords={`${category.name}, calculators, ${category.name.toLowerCase()} tools`}
      />
      <Header />
      
      <main className="flex-1">
        <section className="py-16 gradient-hero border-b border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/categories">
              <Button variant="ghost" size="sm" className="mb-6 gap-2 glass">
                <ArrowLeft className="h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
            <div className="max-w-4xl space-y-6 animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl gradient-primary shadow-glow">
                  <Icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary/20">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{calculators.length} Calculators</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent gradient-primary">
                {category.name}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Access {calculators.length} professional-grade calculators designed for precision and reliability
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdPlacement slot={`category-${categoryId}`} format="horizontal" />
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {calculators.map((calc, index) => (
                <div key={calc.id} className="animate-fade-in" style={{ animationDelay: `${index * 30}ms` }}>
                  <CalculatorCard
                    name={calc.name}
                    description={calc.description}
                    slug={calc.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryView;