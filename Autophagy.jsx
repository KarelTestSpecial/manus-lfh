import React from 'react'
import { Recycle, Brain, Shield, Clock, Coffee, Dumbbell, Moon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Link } from 'react-router-dom'

export function Autophagy() {
  const benefits = [
    { name: "Brain & Memory Health", icon: <Brain className="h-5 w-5" /> },
    { name: "Cellular Recycling System", icon: <Recycle className="h-5 w-5" /> },
    { name: "Cleans Up Damaged Mitochondria", icon: <Shield className="h-5 w-5" /> },
    { name: "Maintains Cell Health", icon: <Shield className="h-5 w-5" /> },
    { name: "Promotes Longevity", icon: <Clock className="h-5 w-5" /> },
    { name: "Protects Against Disease", icon: <Shield className="h-5 w-5" /> }
  ]

  const stimulators = [
    {
      category: "Fasting",
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      description: "Most potent trigger",
      methods: [
        "Begins after ~12 hours",
        "Increases significantly at 48-72 hours",
        "Intermittent fasting (Time Restricted Eating)",
        "Skipping breakfast",
        "Forces body to become efficient"
      ]
    },
    {
      category: "Exercise",
      icon: <Dumbbell className="h-6 w-6 text-green-500" />,
      description: "Regular physical activity",
      methods: [
        "Moderate intensity exercise",
        "Resistance training",
        "Cardiovascular exercise",
        "Consistent routine"
      ]
    },
    {
      category: "Diet",
      icon: <Coffee className="h-6 w-6 text-orange-500" />,
      description: "Specific foods and patterns",
      methods: [
        "Low sugar/low carbohydrate diet",
        "Moderate protein intake",
        "Limit processed foods",
        "Healthy eating patterns"
      ]
    },
    {
      category: "Phytonutrients",
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      description: "Natural compounds",
      methods: [
        "Coffee",
        "Green tea",
        "Berberine",
        "Adaptogens (Ashwagandha)",
        "Certain mushrooms",
        "Ginger"
      ]
    }
  ]

  const supplements = [
    { name: "Spermidine", description: "Physiological inducer, anti-aging vitamin", searchQuery: "Longevity & Health Optimization > Aging > Autophagy > Supplements > Spermidine" },
    { name: "Mimio", description: "Blend of Spermidine, Nicotinamide, PEA, OEA", searchQuery: "Longevity & Health Optimization > Aging > Autophagy > Supplements > Mimio" },
    { name: "Nicotinamide", description: "NAD+ precursor", searchQuery: "Longevity & Health Optimization > Aging > Autophagy > Supplements > Nicotinamide" },
    { name: "PEA", description: "Palmitoylethanolamide", searchQuery: "Longevity & Health Optimization > Aging > Autophagy > Supplements > PEA" },
    { name: "OEA", description: "Oleoylethanolamide", searchQuery: "Longevity & Health Optimization > Aging > Autophagy > Supplements > OEA" }
  ]

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Recycle className="h-16 w-16 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Autophagy: Cellular Recycling
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how your body's natural recycling system cleans up damaged components, 
          maintains cell health, and promotes longevity.
        </p>
      </div>

      {/* Importance */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Autophagy Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  {benefit.icon}
                  <span className="ml-2">{benefit.name}</span>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Cancer Paradox */}
      <Alert className="mb-12 border-yellow-300 bg-yellow-50">
        <Shield className="h-4 w-4" />
        <AlertDescription className="text-gray-700">
          <strong>Autophagy & Cancer Paradox:</strong> Autophagy is beneficial for preventing cancer 
          by keeping normal cells healthy, but it can potentially speed up advanced cancer progression. 
          This is why cancer treatment sometimes involves autophagy inhibitors.
        </AlertDescription>
      </Alert>

      {/* How to Stimulate Autophagy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          How to Stimulate Autophagy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stimulators.map((stimulator, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {stimulator.icon}
                  <span className="ml-2">{stimulator.category}</span>
                </CardTitle>
                <CardDescription>{stimulator.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {stimulator.methods.map((method, methodIndex) => (
                    <li key={methodIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      {method}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Fasting Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Fasting & Autophagy Timeline
        </h2>
        <Card className="bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">12 Hours</h3>
                <p className="text-gray-600">Autophagy begins to activate</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24-48 Hours</h3>
                <p className="text-gray-600">Significant increase in activity</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">48-72 Hours</h3>
                <p className="text-gray-600">Peak autophagy activation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Supplements */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Autophagy-Supporting Supplements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supplements.map((supplement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-purple-700">
                  <Link to={`https://www.google.com/search?q=${encodeURIComponent(supplement.searchQuery)}`} target="_blank" rel="noopener noreferrer">
                    {supplement.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{supplement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Action Steps */}
      <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">
            Boost Your Cellular Recycling
          </h3>
          <p className="text-lg text-green-100 mb-6">
            Start implementing these autophagy-stimulating strategies to enhance 
            your cellular health and longevity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 mb-2" />
              <span className="font-semibold">Try Intermittent Fasting</span>
            </div>
            <div className="flex flex-col items-center">
              <Dumbbell className="h-8 w-8 mb-2" />
              <span className="font-semibold">Exercise Regularly</span>
            </div>
            <div className="flex flex-col items-center">
              <Coffee className="h-8 w-8 mb-2" />
              <span className="font-semibold">Drink Green Tea</span>
            </div>
            <div className="flex flex-col items-center">
              <Moon className="h-8 w-8 mb-2" />
              <span className="font-semibold">Get Quality Sleep</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

