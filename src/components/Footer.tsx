import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 rounded-lg gradient-primary">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">UltimateCalcHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your premium destination for 500+ professional calculators. Trusted by millions worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/categories" className="text-muted-foreground hover:text-primary transition-smooth">All Categories</Link></li>
              <li><Link to="/popular" className="text-muted-foreground hover:text-primary transition-smooth">Popular Calculators</Link></li>
              <li><Link to="/recent" className="text-muted-foreground hover:text-primary transition-smooth">Recently Added</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Top Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/finance" className="text-muted-foreground hover:text-primary transition-smooth">Finance</Link></li>
              <li><Link to="/category/health" className="text-muted-foreground hover:text-primary transition-smooth">Health & Fitness</Link></li>
              <li><Link to="/category/math" className="text-muted-foreground hover:text-primary transition-smooth">Math & Algebra</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth">Terms of Service</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} UltimateCalcHub.com - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};