"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, ChefHat } from "lucide-react"
import { generateRecipe } from "./actions"

const popularIngredients = [
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
]

export default function HomePage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [recipe, setRecipe] = useState(null)
  const [error, setError] = useState(null)

  async function handleSubmit(formData) {
    setIsGenerating(true)
    setError(null)
    setRecipe(null)

    const result = await generateRecipe(formData)

    if (result.success) {
      setRecipe(result.recipe)
    } else {
      setError(result.error)
    }

    setIsGenerating(false)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 text-orange-600">
          <ChefHat className="h-12 w-12" />
          <Sparkles className="h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Smart Recipe Generator</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your available ingredients into delicious recipes tailored to your taste preferences using AI
        </p>
      </div>

      {/* Popular Ingredients */}
      <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle className="text-orange-700 flex items-center space-x-2">
            <Sparkles className="h-5 w-5" />
            <span>Popular Ingredients</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularIngredients.map((ingredient) => (
              <span
                key={ingredient}
                className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors cursor-pointer"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recipe Generator Form */}
      <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle className="text-orange-700">Generate Your Recipe</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="ingredients" className="text-gray-700 font-medium">
                Available Ingredients *
              </Label>
              <Textarea
                id="ingredients"
                name="ingredients"
                placeholder="Enter your available ingredients (e.g., chicken breast, rice, tomatoes, onions, garlic...)"
                className="min-h-[100px] border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cuisine" className="text-gray-700 font-medium">
                  Cuisine Preference *
                </Label>
                <Select name="cuisine" required>
                  <SelectTrigger className="border-orange-200 focus:border-orange-400 focus:ring-orange-400">
                    <SelectValue placeholder="Select cuisine type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="indian">Indian</SelectItem>
                    <SelectItem value="chinese">Chinese</SelectItem>
                    <SelectItem value="mexican">Mexican</SelectItem>
                    <SelectItem value="thai">Thai</SelectItem>
                    <SelectItem value="mediterranean">Mediterranean</SelectItem>
                    <SelectItem value="american">American</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="japanese">Japanese</SelectItem>
                    <SelectItem value="any">Any Cuisine</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="servings" className="text-gray-700 font-medium">
                  Number of Servings
                </Label>
                <Select name="servings">
                  <SelectTrigger className="border-orange-200 focus:border-orange-400 focus:ring-orange-400">
                    <SelectValue placeholder="Select servings (default: 4)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 person</SelectItem>
                    <SelectItem value="2">2 people</SelectItem>
                    <SelectItem value="4">4 people</SelectItem>
                    <SelectItem value="6">6 people</SelectItem>
                    <SelectItem value="8">8 people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isGenerating}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 text-lg"
            >
              {isGenerating ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating Recipe...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <ChefHat className="h-5 w-5" />
                  <span>Generate Recipe</span>
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Error Display */}
      {error && (
        <Card className="bg-red-50 border-red-200">
          <CardContent className="pt-6">
            <p className="text-red-700">{error}</p>
          </CardContent>
        </Card>
      )}

      {/* Recipe Display */}
      {recipe && (
        <Card className="bg-white/80 backdrop-blur-sm border-green-200">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center space-x-2">
              <ChefHat className="h-5 w-5" />
              <span>Your Generated Recipe</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-orange max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">{recipe}</pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
