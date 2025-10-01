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
        "bg-muted/30 border border-border/50 rounded-lg flex items-center justify-center",
        formatClasses[format],
        className
      )}
    >
      <div className="text-center space-y-2">
        <p className="text-xs text-muted-foreground">Advertisement</p>
        <p className="text-xs text-muted-foreground font-mono">Google Adsense Slot: {slot}</p>
      </div>
    </div>
  );
};