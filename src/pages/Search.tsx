import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Search as SearchIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CalculatorCard } from "@/components/CalculatorCard";
import { AdPlacement } from "@/components/AdPlacement";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { calculators } from "@/data/calculators";

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(queryParam);

  const filteredCalculators = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return calculators.filter(calc => 
      calc.name.toLowerCase().includes(query) ||
      calc.description.toLowerCase().includes(query) ||
      calc.slug.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
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
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg gradient-primary shadow-glow">
                  <SearchIcon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Search Calculators
                </h1>
              </div>
              
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search from 500+ calculators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg glass border-primary/20"
                  autoFocus
                />
              </div>

              {searchQuery && (
                <p className="text-muted-foreground">
                  Found {filteredCalculators.length} calculator{filteredCalculators.length !== 1 ? 's' : ''} matching "{searchQuery}"
                </p>
              )}
            </div>
          </div>
        </section>

        {searchQuery && (
          <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <AdPlacement slot="search-top" format="horizontal" />
            </div>

            <section className="py-12">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {filteredCalculators.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCalculators.map((calc) => (
                      <CalculatorCard
                        key={calc.id}
                        name={calc.name}
                        description={calc.description}
                        slug={calc.slug}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="inline-flex p-6 rounded-full glass mb-6">
                      <SearchIcon className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">No calculators found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try a different search term or browse our categories
                    </p>
                    <Link to="/categories">
                      <Button variant="hero">Browse All Categories</Button>
                    </Link>
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {!searchQuery && (
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex p-6 rounded-full glass mb-6">
                <SearchIcon className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Start Your Search</h3>
              <p className="text-muted-foreground mb-6">
                Enter a keyword to search through our 500+ professional calculators
              </p>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Search;
