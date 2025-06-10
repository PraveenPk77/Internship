"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const ingredients = [
  "Chicken",
  "Rice",
  "Tomatoes",
  "Onions",
  "Garlic",
  "Pasta",
  "Cheese",
  "Eggs",
  "Potatoes",
  "Bell Peppers",
  "Spinach",
  "Mushrooms",
  "Carrots",
  "Broccoli",
];

export default function PopularIngredients() {
  return (
    <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
      <CardHeader>
        <CardTitle className="text-orange-700 flex items-center space-x-2">
          <Sparkles className="h-5 w-5" />
          <span>Popular Ingredients</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {ingredients.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
