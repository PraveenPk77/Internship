"use server"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function generateRecipe(formData) {
  const ingredients = formData.get("ingredients")
  const cuisine = formData.get("cuisine")
  const servings = formData.get("servings")

  if (!ingredients || !cuisine) {
    return {
      success: false,
      error: "Please provide both ingredients and cuisine preference.",
    }
  }

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      system:
        "You are a professional chef and recipe creator. Create detailed, easy-to-follow recipes that are practical and delicious.",
      prompt: `Create a ${cuisine} recipe using these ingredients: ${ingredients}. 
               The recipe should serve ${servings || "4"} people.
               
               Please format the response as follows:
               **Recipe Name:** [Name]
               
               **Ingredients:**
               - [List all ingredients with measurements]
               
               **Instructions:**
               1. [Step by step instructions]
               
               **Cooking Time:** [Total time]
               **Difficulty:** [Easy/Medium/Hard]
               
               **Chef's Tips:**
               - [Any helpful tips or variations]`,
    })

    return {
      success: true,
      recipe: text,
    }
  } catch (error) {
    return {
      success: false,
      error: "Failed to generate recipe. Please try again.",
    }
  }
}
