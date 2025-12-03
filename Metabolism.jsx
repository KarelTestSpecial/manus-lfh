import React from 'react';
import { Zap, Shield, Activity, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export function Metabolism() {
  const metabolismFactors = [
    {
      name: "Insulin Sensitivity",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      description: "The ability of your cells to respond to insulin, crucial for blood sugar control.",
      searchQuery: "Longevity & Health Optimization > Metabolism > Insulin Sensitivity"
    },
    {
      name: "Mitochondrial Health",
      icon: <Shield className="h-8 w-8 text-green-500" />,
      description: "Efficient mitochondria are essential for energy production and metabolic function.",
      searchQuery: "Longevity & Health Optimization > Metabolism > Mitochondrial Health"
    },
    {
      name: "Hormonal Balance",
      icon: <Activity className="h-8 w-8 text-orange-500" />,
      description: "Hormones like thyroid and cortisol play a significant role in metabolic rate.",
      searchQuery: "Longevity & Health Optimization > Metabolism > Hormonal Balance"
    },
    {
      name: "Gut Microbiome",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      description: "The gut microbiome influences nutrient absorption and energy regulation.",
      searchQuery: "Longevity & Health Optimization > Metabolism > Gut Microbiome"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Zap className="h-16 w-16 text-yellow-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Metabolism
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your metabolism is the engine that powers your body. Learn how to optimize it for energy, weight management, and overall health.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {metabolismFactors.map((factor, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <Link to={`https://www.google.com/search?q=${encodeURIComponent(factor.searchQuery)}`} target="_blank" rel="noopener noreferrer">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {factor.icon}
                  <CardTitle className="ml-3 text-xl">{factor.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{factor.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}


