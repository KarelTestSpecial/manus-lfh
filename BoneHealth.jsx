import React from 'react';
import { Bone, Scale, Shield, Brain, Heart, Dumbbell, AlertTriangle, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function BoneHealth() {
  const risks = [
    "fragility",
    "osteopenia",
    "osteoporosis",
    "fracture",
    "frailty"
  ];

  const buildingStrategies = [
    {
      name: "Weight-Bearing Exercise",
      icon: <Dumbbell className="h-6 w-6 text-blue-500" />,
      description: "Crucial for bone density and strength"
    },
    {
      name: "Resistance Training",
      icon: <Scale className="h-6 w-6 text-green-500" />,
      description: "Lifting heavy weights stimulates bone growth"
    },
    {
      name: "Nutritional Support",
      icon: <Heart className="h-6 w-6 text-red-500" />,
      description: "Adequate calcium, magnesium, vitamin D3 & K2"
    },
    {
      name: "Impact Sports",
      icon: <Dumbbell className="h-6 w-6 text-purple-500" />,
      description: "Running, jumping, and other high-impact activities"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Bone className="h-16 w-16 text-orange-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Bone Health
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bone is not static; it's a dynamic tissue that responds to the demands placed upon it. 
          Learn how to build and maintain strong bones for a lifetime of health.
        </p>
      </div>

      {/* Importance */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Bone Health Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-700 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Crucial for Longevity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Strong bones are essential for mobility, independence, and overall quality of life as we age.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Consequences of Poor Bone Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                {risks.map((risk, index) => (
                  <li key={index} className="flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                    {risk}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bone's Role in the Body */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bone's Role in the Body</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-700 flex items-center">
                <Brain className="h-6 w-6 mr-2" />
                Brain & Cognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The hippocampus, a brain region vital for memory, is connected to bone health.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-700 flex items-center">
                <Scale className="h-6 w-6 mr-2" />
                Mineral Storage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Bones act as a storehouse for essential minerals like calcium and phosphorus.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Building & Maintaining Bone Health */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Building & Maintaining Bone Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {buildingStrategies.map((strategy, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {strategy.icon}
                  <span className="ml-2">{strategy.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{strategy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Action Plan */}
      <Card className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
        <CardContent className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">
            Invest in Your Skeletal Strength
          </h3>
          <p className="text-lg text-orange-100 mb-6">
            Start implementing these bone-building strategies today for a stronger, more resilient future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <Dumbbell className="h-8 w-8 mb-2" />
              <span className="font-semibold">Weight-Bearing Exercise</span>
            </div>
            <div className="flex flex-col items-center">
              <Scale className="h-8 w-8 mb-2" />
              <span className="font-semibold">Resistance Training</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-8 w-8 mb-2" />
              <span className="font-semibold">Nutrient-Rich Diet</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 mb-2" />
              <span className="font-semibold">Avoid Smoking</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


