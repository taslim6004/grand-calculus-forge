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
      <Card className="group cursor-pointer overflow-hidden glass hover:shadow-glow transition-smooth animate-fade-in">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg gradient-primary shadow-glow group-hover:shadow-premium group-hover:scale-110 transition-smooth transform">
              <Icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-smooth">{name}</h3>
              <p className="text-sm text-muted-foreground">
                {count} calculators
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};