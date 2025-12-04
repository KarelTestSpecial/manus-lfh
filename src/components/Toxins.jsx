import React from 'react';
import { Skull, FlaskConical, Leaf, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export function Toxins() {
  const toxinSources = [
    {
      name: "Environmental Toxins",
      icon: <FlaskConical className="h-8 w-8 text-gray-500" />,
      description: "Pollutants in air, water, and soil, including heavy metals and pesticides.",
      searchQuery: "Longevity & Health Optimization > Toxins > Environmental Toxins"
    },
    {
      name: "Food & Water Contaminants",
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      description: "Pesticides, herbicides, microplastics, and other chemicals in our diet.",
      searchQuery: "Longevity & Health Optimization > Toxins > Food & Water Contaminants"
    },
    {
      name: "Household Chemicals",
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      description: "Cleaning products, personal care items, and building materials.",
      searchQuery: "Longevity & Health Optimization > Toxins > Household Chemicals"
    },
    {
      name: "Internal Toxins",
      icon: <Skull className="h-8 w-8 text-red-500" />,
      description: "Byproducts of metabolism, gut dysbiosis, and chronic inflammation.",
      searchQuery: "Longevity & Health Optimization > Toxins > Internal Toxins"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Skull className="h-16 w-16 text-red-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Toxins
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding and minimizing exposure to toxins is crucial for protecting your health and promoting longevity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {toxinSources.map((source, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <Link to={`https://www.google.com/search?q=${encodeURIComponent(source.searchQuery)}`} target="_blank" rel="noopener noreferrer">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {source.icon}
                  <CardTitle className="ml-3 text-xl">{source.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{source.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}


