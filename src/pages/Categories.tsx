import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { AdPlacement } from "@/components/AdPlacement";
import { SEO } from "@/components/SEO";
import { categories, getCalculatorsByCategory } from "@/data/calculators";

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
        <section className="py-12 gradient-hero border-b border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                All Calculator Categories
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse through all 10 categories featuring 500+ professional calculators
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdPlacement slot="categories-top" format="horizontal" />
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;