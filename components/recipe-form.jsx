"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { generateRecipe } from "@/app/actions";

export default function RecipeForm({ setRecipe, setError }) {
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("recipeFormData");
    if (saved) {
      const { ingredients, cuisine } = JSON.parse(saved);
      document.getElementById("ingredients").value = ingredients;
      document.querySelector("select[name='cuisine']").value = cuisine;
    }
  }, []);

  async function handleSubmit(formData) {
    setIsGenerating(true);
    setError(null);
    setRecipe(null);

    const ingredients = formData.get("ingredients");
    const cuisine = formData.get("cuisine");

    localStorage.setItem(
      "recipeFormData",
      JSON.stringify({ ingredients, cuisine })
    );

    const result = await generateRecipe(formData);

    if (result.success) {
      setRecipe(result.recipe);
    } else {
      setError(result.error);
    }

    setIsGenerating(false);
  }

  return (
    <Card className="bg-white/70 backdrop-blur-lg border border-orange-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-orange-700">Generate a Recipe</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="ingredients">Available Ingredients *</Label>
            <Textarea id="ingredients" name="ingredients" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cuisine">Cuisine Preference *</Label>
            <Select name="cuisine" required>
              <SelectTrigger>
                <SelectValue placeholder="Select cuisine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="indian">Indian</SelectItem>
                <SelectItem value="italian">Italian</SelectItem>
                <SelectItem value="chinese">Chinese</SelectItem>
                <SelectItem value="any">Any Cuisine</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" disabled={isGenerating}>
            {isGenerating ? "Generating..." : "Generate Recipe"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
