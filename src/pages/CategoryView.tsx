import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CalculatorCard } from "@/components/CalculatorCard";
import { AdPlacement } from "@/components/AdPlacement";
import { Button } from "@/components/ui/button";
import { categories, getCalculatorsByCategory } from "@/data/calculators";

const CategoryView = () => {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const calculators = categoryId ? getCalculatorsByCategory(categoryId) : [];

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Category Not Found</h1>
            <Link to="/categories">
              <Button variant="hero">Back to Categories</Button>
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
        <section className="py-12 gradient-hero border-b border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/categories">
              <Button variant="ghost" size="sm" className="mb-6 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                {category.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {calculators.length} professional calculators in this category
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdPlacement slot={`category-${categoryId}`} format="horizontal" />
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculators.map((calc) => (
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
      </main>

      <Footer />
    </div>
  );
};

export default CategoryView;