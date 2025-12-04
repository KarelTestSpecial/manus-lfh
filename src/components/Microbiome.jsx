import React from 'react';
import { Bug, Shield, Brain, Heart, CheckCircle, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export function Microbiome() {
  const keyBacteria = [
    {
      name: "Akkermansia Muciniphila",
      benefits: [
        "Helps cancer treatment response",
        "Improves metabolic health & gut lining",
        "Lowers inflammation"
      ],
      searchQuery: "Longevity & Health Optimization > Microbiome Health > Key Bacteria for Longevity > Akkermansia Muciniphila"
    },
    {
      name: "Odoribacter",
      benefits: [
        "Improves immune system (against E.coli, etc.)"
      ],
      searchQuery: "Longevity & Health Optimization > Microbiome Health > Key Bacteria for Longevity > Odoribacter"
    },
    {
      name: "Oscillibacter",
      benefits: [
        "Improves lipid profile (lowers LDL, increases HDL)",
        "Improves metabolism (blood sugar, insulin sensitivity)"
      ],
      searchQuery: "Longevity & Health Optimization > Microbiome Health > Key Bacteria for Longevity > Oscillibacter"
    },
    {
      name: "Cristianella",
      benefits: [
        "Supports overall gut health"
      ],
      searchQuery: "Longevity & Health Optimization > Microbiome Health > Key Bacteria for Longevity > Cristianella"
    }
  ];

  const harmfulFactors = [
    "Alcohol",
    "Lack of Good Sleep",
    "Smoking/Vaping",
    "Ultra-Processed Foods & Artificial Ingredients",
    "Unnecessary Antibiotics (collateral damage)"
  ];

  const beneficialFoods = [
    {
      category: "Fermented Foods (Probiotics)",
      items: ["Kefir, Yoghurt", "Kimchi, Sauerkraut", "Kombucha (fermented tea)"]
    },
    {
      category: "Polyphenol-rich Foods",
      items: ["Chili Peppers, Black Vinegar, Matcha", "Concord Grapes, Berries"]
    },
    {
      category: "Resistant Starches (Prebiotics)",
      items: ["Day Old Cooked Rice / Potatoes", "Green Bananas & Plantains", "Oatmeal"]
    },
    {
      category: "Diverse Plant Foods",
      items: ["30+ plant types per week", "Variety of whole foods"]
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Bug className="h-16 w-16 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Microbiome Health
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the 39 trillion bacteria that support your health and learn how to 
          optimize your gut microbiome for longevity and wellness.
        </p>
      </div>

      {/* Importance */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Gut Health Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Immune Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">80% of immune system</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Brain className="h-12 w-12 text-purple-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Brain Connection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Gut-Brain Axis signaling</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Inflammation Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Regulates inflammatory response</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Bug className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Metabolism</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Controls metabolic function</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Bacteria */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Bacteria for Longevity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyBacteria.map((bacteria, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-green-700">
                  <Link to={`https://www.google.com/search?q=${encodeURIComponent(bacteria.searchQuery)}`} target="_blank" rel="noopener noreferrer">
                  {bacteria.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {bacteria.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Harmful Factors */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Factors Harming Gut Bacteria
        </h2>
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center text-red-700">
              <X className="h-6 w-6 mr-2" />
              Avoid These Microbiome Disruptors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {harmfulFactors.map((factor, index) => (
                <Badge key={index} variant="destructive" className="text-center p-3">
                  {factor}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Beneficial Foods */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Foods to Grow Healthy Bacteria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beneficialFoods.map((foodGroup, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-green-700">
                  {foodGroup.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {foodGroup.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Oral Microbiome */}
      <Card className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-700">
            Oral Microbiome Health
          </CardTitle>
          <CardDescription>
            The mouth microbiome is equally important for overall health
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nitric Oxide Production
              </h3>
              <p className="text-gray-700">
                Healthy oral bacteria help produce nitric oxide, which is crucial 
                for cardiovascular health.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Dementia Connection
              </h3>
              <p className="text-gray-700">
                Gum disease has been linked to increased risk of dementia and 
                cognitive decline.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 mb-2">Factors Harming Oral Microbiome:</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="destructive">Fluoride</Badge>
              <Badge variant="destructive">Antiseptic Mouthwash</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Plan */}
      <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">
            Optimize Your Microbiome
          </h3>
          <p className="text-lg text-green-100 mb-6">
            Start nurturing your gut bacteria with these evidence-based strategies 
            for better health and longevity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <Bug className="h-8 w-8 mb-2" />
              <span className="font-semibold">Eat Fermented Foods</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-8 w-8 mb-2" />
              <span className="font-semibold">Diverse Plant Foods</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 mb-2" />
              <span className="font-semibold">Avoid Processed Foods</span>
            </div>
            <div className="flex flex-col items-center">
              <Brain className="h-8 w-8 mb-2" />
              <span className="font-semibold">Manage Stress</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


