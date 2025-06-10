"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChefHat } from "lucide-react";
import { generateRecipe } from "@/app/actions";
import RecipeCard from "./recipe-card";
import ErrorCard from "./error-card";

export default function RecipeForm() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [ingredientCount, setIngredientCount] = useState(0);

  useEffect(() => {
    if (recipe) {
      console.log("Recipe generated successfully.");
    }
  }, [recipe]);

  useEffect(() => {
    if (error) {
      console.error("Error occurred:", error);
    }
  }, [error]);

  async function handleSubmit(formData) {
    setIsGenerating(true);
    setRecipe(null);
    setError(null);

    const result = await generateRecipe(formData);
    if (result.success) {
      setRecipe(result.recipe);
    } else {
      setError(result.error);
    }
    setIsGenerating(false);
  }

  return (
    <>
      <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle className="text-orange-700">
            Generate Your Recipe
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="ingredients"
                className="text-gray-700 font-medium"
              >
                Available Ingredients *
              </Label>
              <Textarea
                id="ingredients"
                name="ingredients"
                placeholder="e.g., chicken, rice, tomatoes..."
                required
                className="min-h-[100px] border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                onChange={(e) =>
                  setIngredientCount(e.target.value.split(",").length)
                }
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">
                  Cuisine Preference *
                </Label>
                <Select name="cuisine" required>
                  <SelectTrigger className="border-orange-200 focus:border-orange-400 focus:ring-orange-400">
                    <SelectValue placeholder="Select cuisine type" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "italian",
                      "indian",
                      "chinese",
                      "mexican",
                      "thai",
                      "mediterranean",
                      "american",
                      "french",
                      "japanese",
                      "any",
                    ].map((cuisine) => (
                      <SelectItem key={cuisine} value={cuisine}>
                        {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">
                  Number of Servings
                </Label>
                <Select name="servings">
                  <SelectTrigger className="border-orange-200 focus:border-orange-400 focus:ring-orange-400">
                    <SelectValue placeholder="Select servings (default: 4)" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 4, 6, 8].map((n) => (
                      <SelectItem key={n} value={n.toString()}>
                        {n} {n === 1 ? "person" : "people"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isGenerating}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 text-lg"
            >
              {isGenerating ? "Generating..." : "Generate Recipe"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && <ErrorCard message={error} />}
      {recipe && <RecipeCard recipe={recipe} />}
    </>
  );
}
