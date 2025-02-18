import { Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CoffeeCardProps {
  name: string;
  description: string;
  roastLevel: string;
  origin: string;
  flavorNotes: string[];
  onSelect: () => void;
}

export function CoffeeCard({
  name,
  description,
  roastLevel,
  origin,
  flavorNotes,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="group h-full transition-all hover:shadow-lg dark:hover:shadow-primary/5">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl text-foreground">{name}</CardTitle>
          <Coffee className="h-5 w-5 text-primary" />
        </div>
        <Badge variant="secondary" className="w-fit">
          {roastLevel}
        </Badge>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between gap-6">
        <div className="space-y-4">
          <Typography.P>{description}</Typography.P>
          <div className="space-y-2">
            <Typography.Small className="text-muted-foreground">
              Origin: {origin}
            </Typography.Small>
            <div className="flex flex-wrap gap-2">
              {flavorNotes.map((note) => (
                <Badge
                  key={note}
                  variant="outline"
                  className="border-primary/20 bg-primary/5 text-foreground"
                >
                  {note}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <Button
          onClick={onSelect}
          className="w-full"
          variant="outline"
        >
          <Coffee className="text-primary" />
          Select This Blend
        </Button>
      </CardContent>
    </Card>
  );
}