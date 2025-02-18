import { CoffeeIcon, Sparkles } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface RecommendationHeaderProps {
  className?: string;
}

export function RecommendationHeader({ className }: RecommendationHeaderProps) {
  return (
    <div className={cn("mb-8 text-center", className)}>
      <div className="mb-6 flex justify-center gap-3">
        <div className="rounded-full bg-primary/10 p-2">
          <CoffeeIcon className="h-6 w-6 text-primary" />
        </div>
        <div className="rounded-full bg-secondary/10 p-2">
          <Sparkles className="h-6 w-6 text-secondary" />
        </div>
      </div>
      <Typography.H1 className="mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        AI Coffee Recommendations
      </Typography.H1>
      <Typography.Lead className="mx-auto max-w-2xl text-muted-foreground">
        Discover your perfect cup of coffee with our AI-powered recommendation
        system. Tell us your preferences, and we'll match you with coffees you'll
        love.
      </Typography.Lead>
    </div>
  );
}