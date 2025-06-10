"use client";

import { useState, useRef, useEffect } from "react";
import PopularIngredients from "@/components/popular-ingredients";
import RecipeForm from "@/components/recipe-form";
import { ChefHat, Sparkles } from "lucide-react";

export default function HomePage() {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const recipeRef = useRef(null);

  useEffect(() => {
    if (recipe && recipeRef.current) {
      recipeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 text-orange-600">
          <ChefHat className="h-12 w-12" />
          <Sparkles className="h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Smart Recipe Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your available ingredients into delicious recipes tailored
          to your taste preferences using AI.
        </p>
      </div>

      {/* Popular Ingredients */}
      <PopularIngredients />

      {/* Form */}
      <RecipeForm setRecipe={setRecipe} setError={setError} />

      {/* Error Display */}
      {error && (
        <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded shadow">
          {error}
        </div>
      )}

      {/* Recipe Display */}
      {recipe && (
        <div
          ref={recipeRef}
          className="bg-white/90 backdrop-blur-sm p-6 border border-green-300 rounded-lg shadow"
        >
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            Your AI-Generated Recipe
          </h2>
          <pre className="whitespace-pre-wrap font-sans text-gray-700">
            {recipe}
          </pre>
        </div>
      )}
    </div>
  );
}
