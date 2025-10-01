import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { AdPlacement } from "@/components/AdPlacement";
import { SEO } from "@/components/SEO";
import { categories, getCalculatorsByCategory } from "@/data/calculators";
import { Sparkles } from "lucide-react";

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="All Calculator Categories - Browse 500+ Calculators"
        description="Explore 10 comprehensive categories featuring 500+ professional calculators including math, finance, health, science, engineering, and more."
        keywords="calculator categories, math calculators, finance calculators, health calculators, science calculators, engineering calculators"
      />
      <Header />
      
      <main className="flex-1">
        <section className="py-16 gradient-hero border-b border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary/20 mb-4">
                <Sparkles className="h-4 w-4 text-primary animate-glow" />
                <span className="text-sm font-medium">10 Premium Categories</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] pb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                All Calculator Categories
              </h1>
              <p className="text-xl text-muted-foreground">
                Browse through all 10 categories featuring 500+ professional calculators
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdPlacement slot="categories-top" format="horizontal" />
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <CategoryCard
                    id={category.id}
                    name={category.name}
                    icon={category.icon}
                    count={getCalculatorsByCategory(category.id).length}
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

export default Categories;