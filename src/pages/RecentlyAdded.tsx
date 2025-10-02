import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Clock, Sparkles } from "lucide-react";

const RecentlyAdded = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SEO
        title="Recently Added Calculators"
        description="Discover the latest calculators added to UltimateCalcHub.com. Stay updated with new tools across finance, health, education, and more."
        keywords="recently added calculators, new calculators, latest tools, calculator updates"
      />
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="h-10 w-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold gradient-text leading-[1.15] pb-1">
                Recently Added
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest calculators added to our platform
            </p>
          </div>

          <div className="glass rounded-2xl p-12 md:p-16 space-y-6 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Sparkles className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Coming Soon!
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We haven't added any new calculators yet, but when we do, they will appear here along with information about which categories they belong to.
            </p>
            
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              This page will showcase our newest additions across all categories including Finance, Health & Fitness, Education, Math & Algebra, Conversions, Technology, and more.
            </p>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground">
                Check back soon for updates! <Sparkles className="inline h-4 w-4 text-primary" />
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecentlyAdded;
