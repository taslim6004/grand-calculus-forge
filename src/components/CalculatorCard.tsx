import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CalculatorCardProps {
  name: string;
  description: string;
  slug: string;
}

export const CalculatorCard = ({ name, description, slug }: CalculatorCardProps) => {
  return (
    <Link to={`/calculator/${slug}`}>
      <Card className="group cursor-pointer h-full glass hover:shadow-glow transition-smooth animate-fade-in">
        <CardHeader className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-100 transition-smooth" />
          <CardTitle className="text-lg group-hover:text-primary transition-smooth relative z-10 transform group-hover:translate-x-1">
            {name}
          </CardTitle>
          <CardDescription className="line-clamp-2 relative z-10">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};