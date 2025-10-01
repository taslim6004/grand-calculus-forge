import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import * as Icons from "lucide-react";

interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const CategoryCard = ({ id, name, icon, count }: CategoryCardProps) => {
  const Icon = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.Calculator;

  return (
    <Link to={`/category/${id}`}>
      <Card className="group hover:shadow-premium transition-smooth hover:-translate-y-1 cursor-pointer glass border-border/50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg gradient-primary group-hover:shadow-glow transition-smooth">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {count} calculators available
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};