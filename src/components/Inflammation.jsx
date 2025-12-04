import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, AlertTriangle, CheckCircle, X, Heart, Brain, Dumbbell, Moon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export function Inflammation() {
  const causes = [
    "Excess Visceral Fat",
    "High Blood Sugar",
    "AGES (Advanced Glycation End Products)",
    "Stress",
    "Poor Sleep",
    "Oxidative Stress",
    "Damaged Mitochondria",
    "Certain Toxins/Chemicals (Microplastics)",
    "Imbalances in Gut Bacteria",
    "Lack of Exercise",
    "Alcohol",
    "Smoking/Vaping"
  ];

  const consequences = [
    { name: "Chronic Disease", severity: "high" },
    { name: "Cancer Growth", severity: "high" },
    { name: "Blood Vessel Damage", severity: "high" },
    { name: "Increased Pain (Arthralgia)", severity: "medium" },
    { name: "Metabolic Dysfunction", severity: "high" },
    { name: "Neurological Issues", severity: "high" }
  ];

  const solutions = [
    {
      category: "Diet",
      icon: <Heart className="h-5 w-5 text-green-500" />,
      items: [
        "Anti-inflammatory foods",
        "Less added sugar/refined carbs",
        "Less ultra-processed foods",
        "Omega-3 fatty acids",
        "Polyphenol-rich foods"
      ]
    },
    {
      category: "Lifestyle",
      icon: <Dumbbell className="h-5 w-5 text-blue-500" />,
      items: [
        "Moderate exercise",
        "Getting enough sleep",
        "Managing stress",
        "Maintaining healthy weight"
      ]
    },
    {
      category: "Specific Foods",
      icon: <CheckCircle className="h-5 w-5 text-purple-500" />,
      items: [
        "Brassica vegetables (Sulforaphane)",
        "Curcumin/Turmeric",
        "Pomegranate juice",
        "Extra virgin olive oil",
        "Green tea"
      ]
    },
    {
      category: "Supplements",
      icon: <Brain className="h-5 w-5 text-orange-500" />,
      items: [
        { name: "Hydrogen water", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > Hydrogen water" },
        { name: "PEA (Palmitoylethanolamide)", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > PEA (Palmitoylethanolamide)" },
        { name: "Spermidine", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > Spermidine" },
        { name: "Nicotinamide", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > Nicotinamide" },
        { name: "Astaxanthin", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > Astaxanthin" },
        { name: "Glutathione", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > Glutathione" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Flame className="h-16 w-16 text-red-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Understanding Inflammation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn the difference between beneficial acute inflammation and harmful chronic 
          inflammation, and discover evidence-based strategies to reduce it.
        </p>
      </div>

      {/* Acute vs Chronic */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Acute vs. Chronic Inflammation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-700 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Acute Inflammation
              </CardTitle>
              <CardDescription>Beneficial and necessary</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Short-term response to injury or infection</li>
                <li>• Helps heal damaged tissues</li>
                <li>• Part of normal immune function</li>
                <li>• Resolves when threat is eliminated</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center">
                <X className="h-6 w-6 mr-2" />
                Chronic Inflammation
              </CardTitle>
              <CardDescription>Harmful and destructive</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Long-term, persistent inflammation</li>
                <li>• Damages healthy tissues</li>
                <li>• Contributes to chronic diseases</li>
                <li>• Requires intervention to resolve</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Causes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Causes of Chronic Inflammation
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-red-600">
              <AlertTriangle className="h-6 w-6 mr-2" />
              Common Inflammatory Triggers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {causes.map((cause, index) => (
                <Badge key={index} variant="destructive" className="text-center p-3">
                  {cause}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Consequences */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Health Consequences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consequences.map((consequence, index) => (
            <Card key={index} className={`${
              consequence.severity === 'high' 
                ? 'border-red-300 bg-red-50' 
                : 'border-orange-300 bg-orange-50'
            }`}>
              <CardHeader>
                <CardTitle className={`${
                  consequence.severity === 'high' ? 'text-red-700' : 'text-orange-700'
                }`}>
                  {consequence.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge 
                  variant={consequence.severity === 'high' ? 'destructive' : 'secondary'}
                >
                  {consequence.severity === 'high' ? 'High Risk' : 'Medium Risk'}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Reducing Inflammation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {solution.icon}
                  <span className="ml-2">{solution.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      {solution.category === "Supplements" ? (
                        <Link to={`https://www.google.com/search?q=${encodeURIComponent(item.searchQuery)}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {item.name}
                        </Link>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Action Plan */}
      <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">
            Your Anti-Inflammatory Action Plan
          </h3>
          <p className="text-lg text-green-100 mb-6">
            Start implementing these evidence-based strategies to reduce chronic inflammation 
            and protect your long-term health.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <Heart className="h-8 w-8 mb-2" />
              <span className="font-semibold">Eat Anti-Inflammatory Foods</span>
            </div>
            <div className="flex flex-col items-center">
              <Dumbbell className="h-8 w-8 mb-2" />
              <span className="font-semibold">Exercise Regularly</span>
            </div>
            <div className="flex flex-col items-center">
              <Moon className="h-8 w-8 mb-2" />
              <span className="font-semibold">Prioritize Sleep</span>
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


