import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { CalculatorCard } from "@/components/CalculatorCard";
import { AdPlacement } from "@/components/AdPlacement";
import { SEO } from "@/components/SEO";
import { categories, calculators, getCalculatorsByCategory } from "@/data/calculators";

const Index = () => {
  const featuredCalculators = calculators.slice(0, 6);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "UltimateCalcHub.com",
    "url": "https://ultimatecalchub.com",
    "description": "500+ professional calculators for math, finance, health, science, and more",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ultimatecalchub.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="500+ Professional Online Calculators - Free & Accurate"
        description="Access 500+ premium calculators for math, finance, health, fitness, science, and more. Fast, accurate, and completely free. Trusted by millions worldwide."
        keywords="calculator, online calculator, free calculator, math calculator, finance calculator, health calculator, BMI calculator, loan calculator, scientific calculator"
        structuredData={structuredData}
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero border-b border-border/40">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-4">
                <Sparkles className="h-4 w-4 text-primary animate-glow" />
                <span className="text-sm font-medium">500+ Premium Calculators</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Calculate Anything,
                <br />
                <span className="bg-clip-text text-transparent gradient-primary">
                  Instantly & Precisely
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Your premium destination for professional-grade calculators. From complex financial models to everyday math, we've got you covered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link to="/categories">
                  <Button variant="hero" size="xl" className="gap-2 group">
                    Explore All Calculators
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </Link>
                <Link to="/popular">
                  <Button variant="outline" size="xl">
                    Popular Calculators
                  </Button>
                </Link>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
              {[
                { icon: TrendingUp, label: "500+ Calculators", value: "Premium" },
                { icon: Zap, label: "Instant Results", value: "Lightning Fast" },
                { icon: Shield, label: "Accurate", value: "100%" },
                { icon: Sparkles, label: "Free to Use", value: "Always" },
              ].map((stat, i) => (
                <div key={i} className="glass-strong rounded-xl p-6 text-center hover:shadow-glow hover:-translate-y-2 transition-smooth animate-scale-in transform" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="p-2 rounded-lg gradient-primary shadow-glow mx-auto w-fit mb-3">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Placement - Top */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdPlacement slot="home-top-banner" format="horizontal" />
        </div>

        {/* Categories Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">10 Categories</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent gradient-primary">
                Explore by Category
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Browse through our carefully organized categories to find the perfect calculator for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  icon={category.icon}
                  count={getCalculatorsByCategory(category.id).length}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/categories">
                <Button variant="hero" size="lg" className="gap-2">
                  View All Categories
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Calculators */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent gradient-primary">
                Featured Calculators
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Quick access to our most popular and useful calculators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCalculators.map((calc) => (
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

        {/* Ad Placement - Bottom */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdPlacement slot="home-bottom-banner" format="horizontal" />
        </div>

        {/* CTA Section */}
        <section className="py-20 gradient-hero border-y border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-3xl mx-auto space-y-8 animate-scale-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary/20 mb-4">
                <Zap className="h-4 w-4 text-primary animate-glow" />
                <span className="text-sm font-medium">Start Calculating Today</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent gradient-primary">
                Ready to Calculate?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join millions of users who trust UltimateCalcHub for accurate, instant calculations
              </p>
              <Link to="/categories">
                <Button variant="premium" size="xl" className="gap-2 group shadow-glow">
                  Get Started Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;