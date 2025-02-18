import { useState } from "react";
import { z } from "zod";
import { ModeToggle } from "@/components/mode-toggle";
import { PreferenceForm } from "@/components/preference-form";
import { RecommendationHeader } from "@/components/recommendation-header";
import { CoffeeCard } from "@/components/coffee-card";

const coffeeData = [
  {
    name: "Ethiopian Yirgacheffe",
    description:
      "A bright and complex coffee with floral notes and citrus undertones. Perfect for those who enjoy a light, sophisticated cup.",
    roastLevel: "Light Roast",
    origin: "Ethiopia",
    flavorNotes: ["Floral", "Citrus", "Bergamot"],
  },
  {
    name: "Colombian Supremo",
    description:
      "A well-balanced coffee with caramel sweetness and a nutty finish. Medium roasted to bring out the best characteristics.",
    roastLevel: "Medium Roast",
    origin: "Colombia",
    flavorNotes: ["Caramel", "Nuts", "Chocolate"],
  },
  {
    name: "Sumatra Mandheling",
    description:
      "A full-bodied, dark roasted coffee with earthy tones and a smooth finish. Rich and complex with low acidity.",
    roastLevel: "Dark Roast",
    origin: "Indonesia",
    flavorNotes: ["Earthy", "Spicy", "Dark Chocolate"],
  },
];

export function Home() {
  const [recommendations, setRecommendations] = useState<typeof coffeeData>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handlePreferenceSubmit = (
    values: z.infer<typeof PreferenceForm["formSchema"]>
  ) => {
    // In a real app, this would make an API call to get AI recommendations
    // For now, we'll simulate recommendations based on roast preference
    const filtered = coffeeData.filter((coffee) => {
      if (values.roastPreference === "light") {
        return coffee.roastLevel === "Light Roast";
      }
      if (values.roastPreference === "medium") {
        return coffee.roastLevel === "Medium Roast";
      }
      if (values.roastPreference === "dark") {
        return coffee.roastLevel === "Dark Roast";
      }
      return true;
    });

    setRecommendations(filtered);
    setShowRecommendations(true);
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      <header className="container flex items-center justify-end p-4">
        <ModeToggle />
      </header>

      <main className="container mx-auto px-4">
        <RecommendationHeader className="mb-8" />

        <div className="mx-auto max-w-2xl">
          <PreferenceForm onSubmit={handlePreferenceSubmit} />
        </div>

        {showRecommendations && (
          <section className="mt-16">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-foreground">
                Your Personalized Coffee Matches
              </h2>
              <p className="mt-2 text-muted-foreground">
                Based on your preferences, we think you'll love these coffees
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommendations.map((coffee) => (
                <CoffeeCard
                  key={coffee.name}
                  {...coffee}
                  onSelect={() => {
                    // Handle coffee selection
                    console.log(`Selected: ${coffee.name}`);
                  }}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}