import { cn } from "@/lib/utils";

interface AdPlacementProps {
  slot: string;
  format?: "horizontal" | "vertical" | "square";
  className?: string;
}

export const AdPlacement = ({ slot, format = "horizontal", className }: AdPlacementProps) => {
  const formatClasses = {
    horizontal: "h-24 md:h-32",
    vertical: "h-96 w-full max-w-xs",
    square: "aspect-square w-full max-w-sm"
  };

  return (
    <div 
      className={cn(
        "rounded-xl border-2 border-dashed border-border/40 bg-muted/10 backdrop-blur-sm flex items-center justify-center transition-smooth hover:border-primary/30 shadow-card",
        formatClasses[format],
        className
      )}
    >
      <div className="text-center space-y-2 p-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border/30">
          <span className="text-xs font-medium text-muted-foreground">Ad Space</span>
        </div>
        <p className="text-xs text-muted-foreground/60 font-mono">Google Adsense: {slot}</p>
      </div>
    </div>
  );
};