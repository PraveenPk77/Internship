import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, Sparkles, Heart, Users, Clock, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 text-orange-600">
          <Heart className="h-12 w-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">About Smart Recipe Generator</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Revolutionizing home cooking with AI-powered recipe generation
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle className="text-orange-700 flex items-center space-x-2">
            <Sparkles className="h-5 w-5" />
            <span>Our Mission</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            At Smart Recipe Generator, we believe that cooking should be accessible, enjoyable, and creative for
            everyone. Our mission is to eliminate the daily struggle of deciding what to cook by transforming your
            available ingredients into personalized, delicious recipes that match your taste preferences.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Using cutting-edge AI technology, we've created an intelligent cooking assistant that understands your
            pantry and preferences, helping you reduce food waste while discovering new flavors and cuisines.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
          <CardHeader>
            <CardTitle className="text-orange-700 flex items-center space-x-2">
              <ChefHat className="h-5 w-5" />
              <span>AI-Powered Intelligence</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Our advanced AI understands flavor profiles, cooking techniques, and ingredient combinations to create
              recipes that are both delicious and practical for your skill level.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
          <CardHeader>
            <CardTitle className="text-orange-700 flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Personalized Experience</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Every recipe is tailored to your specific ingredients, cuisine preferences, and serving size, ensuring you
              get exactly what you need for your situation.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
          <CardHeader>
            <CardTitle className="text-orange-700 flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Time-Saving</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              No more endless scrolling through recipe websites. Get instant, customized recipes that work with what you
              have, saving you time and reducing decision fatigue.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
          <CardHeader>
            <CardTitle className="text-orange-700 flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Reduce Food Waste</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Make the most of your ingredients and reduce food waste by creating delicious meals with what you already
              have in your kitchen.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Story Section */}
      <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle className="text-orange-700">Our Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Smart Recipe Generator was born from a simple frustration: staring at a fridge full of ingredients and not
            knowing what to cook. Our team of food enthusiasts and technology experts came together to solve this
            universal problem.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We spent months training our AI on thousands of recipes from various cuisines, understanding flavor
            combinations, cooking techniques, and dietary preferences. The result is an intelligent system that thinks
            like a chef but is accessible to everyone.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we're proud to help thousands of home cooks discover new recipes, reduce food waste, and make cooking
            more enjoyable. Whether you're a beginner or an experienced chef, our AI adapts to your needs and helps you
            create amazing meals.
          </p>
        </CardContent>
      </Card>

      {/* Values */}
      <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle className="text-orange-700">Our Values</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Accessibility</h3>
              <p className="text-sm text-gray-600">Making cooking accessible to everyone, regardless of skill level</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Innovation</h3>
              <p className="text-sm text-gray-600">Continuously improving our AI to serve you better</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Community</h3>
              <p className="text-sm text-gray-600">Building a community of passionate home cooks</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
