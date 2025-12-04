import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Users, ShieldCheck, Heart, Dumbbell, Moon, Utensils } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ImmuneSystem() {
  const immuneCellTypes = [
    { name: "Innate Immune System", description: "First line of defense, non-specific.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Innate Immune System" },
    { name: "Adaptive Immune System", description: "Specific, targeted defense with memory.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Adaptive Immune System" },
    { name: "T-Cells", description: "Cell-mediated immunity.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > T-Cells" },
    { name: "B-Cells", description: "Produce antibodies.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > B-Cells" },
    { name: "Natural Killer (NK) Cells", description: "Kill infected or cancerous cells.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Natural Killer (NK) Cells" },
    { name: "Macrophages", description: "Engulf and digest cellular debris.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Macrophages" }
  ];

  const factorsThatWeakenImmunity = [
    { name: "Chronic Stress", icon: <Zap className="h-5 w-5" />, impact: "High" },
    { name: "Poor Sleep", icon: <Moon className="h-5 w-5" />, impact: "High" },
    { name: "Poor Nutrition", icon: <Utensils className="h-5 w-5" />, impact: "High" },
    { name: "Sedentary Lifestyle", icon: <Dumbbell className="h-5 w-5" />, impact: "Medium" },
    { name: "Excess Alcohol", icon: <Heart className="h-5 w-5" />, impact: "Medium" },
    { name: "Aging (Immunosenescence)", icon: <Users className="h-5 w-5" />, impact: "High" }
  ];

  const waysToSupportImmunity = [
    { name: "Balanced Diet", description: "Rich in vitamins and minerals.", icon: <Utensils className="h-6 w-6 text-green-500" /> },
    { name: "Regular Exercise", description: "Moderate intensity is key.", icon: <Dumbbell className="h-6 w-6 text-blue-500" /> },
    { name: "Quality Sleep", description: "7-9 hours per night.", icon: <Moon className="h-6 w-6 text-indigo-500" /> },
    { name: "Stress Management", description: "Mindfulness, meditation.", icon: <Zap className="h-6 w-6 text-yellow-500" /> },
    { name: "Supplementation", description: "Vitamin D, C, Zinc.", icon: <ShieldCheck className="h-6 w-6 text-purple-500" /> },
    { name: "Hydration", description: "Water is essential for immune function.", icon: <Heart className="h-6 w-6 text-red-500" /> }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Shield className="h-16 w-16 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          The Immune System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your body's primary defense against pathogens. A complex network of cells, tissues, and organs that work together to protect you.
        </p>
      </div>

      {/* Immune Cell Types */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Components of the Immune System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {immuneCellTypes.map((cell, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Link to={`https://www.google.com/search?q=${encodeURIComponent(cell.searchQuery)}`} target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
                    {cell.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{cell.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Factors That Weaken Immunity */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Factors That Weaken Immunity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factorsThatWeakenImmunity.map((factor, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  {factor.icon}
                </div>
                <CardTitle className="text-lg">{factor.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge
                  variant={factor.impact === 'High' ? 'destructive' : 'secondary'}
                >
                  {factor.impact} Impact
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ways to Support Immunity */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Ways to Support a Healthy Immune System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {waysToSupportImmunity.map((way, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  {way.icon}
                  <span className="ml-2">{way.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{way.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
