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
    <Card className="group hover:shadow-card transition-smooth hover:-translate-y-1 h-full border-border/50">
      <CardHeader>
        <CardTitle className="text-lg group-hover:text-primary transition-smooth">
          {name}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to={`/calculator/${slug}`}>
          <Button variant="ghost" size="sm" className="w-full justify-between group">
            Open Calculator
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};