import React from 'react'
import { Apple, CheckCircle, X, Heart, Leaf } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DialogCard } from '@/components/ui/DialogCard'

export function Nutrition() {
  const goodFoods = [
    "Berries (Antioxidants)",
    "Brassica Vegetables (Sulforaphane)",
    "Coffee (Caffeic Acid)",
    "Dark Chocolate (≥80% Cacao)",
    "Extra Virgin Olive Oil",
    "Leafy Greens (Nitrates)",
    "Omega-3 Fatty Acids",
    "Pomegranate",
    "Green Tea"
  ]

  const avoidFoods = [
    "Added Sugar/Refined Carbs",
    "Ultra-Processed Foods",
    "Excess Salt/Sodium",
    "Fried Foods",
    "Processed Meats",
    "Industrial Seed Oils"
  ]

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <Apple className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Nutrition & Diet
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover evidence-based nutrition strategies to optimize your health and longevity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Foods to Emphasize
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {goodFoods.map((food, index) => (
                <DialogCard
                  key={index}
                  title={food}
                  searchQuery={`Longevity & Health Optimization > Nutrition & Diet > Foods to Emphasize > ${food}`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-700 flex items-center">
              <X className="h-6 w-6 mr-2" />
              Foods to Limit/Avoid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {avoidFoods.map((food, index) => (
                <DialogCard
                  key={index}
                  title={food}
                  searchQuery={`Longevity & Health Optimization > Nutrition & Diet > Foods to Limit/Avoid > ${food}`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Key Nutrition Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <Leaf className="h-8 w-8 mb-2" />
              <span className="font-semibold">Focus on Whole Foods</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-8 w-8 mb-2" />
              <span className="font-semibold">Diversity of Diet</span>
            </div>
            <div className="flex flex-col items-center">
              <Apple className="h-8 w-8 mb-2" />
              <span className="font-semibold">Quality Matters</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
