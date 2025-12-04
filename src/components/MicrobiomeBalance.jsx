import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Leaf, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MicrobiomeBalance() {
  const microbiomeFunctions = [
    { name: "Digestion and Nutrient Absorption", description: "Breaks down food and produces essential vitamins.", searchQuery: "Longevity & Health Optimization > Defense Systems > Microbiome Balance > Digestion and Nutrient Absorption" },
    { name: "Immune System Modulation", description: "Trains and supports the immune system.", searchQuery: "Longevity & Health Optimization > Defense Systems > Microbiome Balance > Immune System Modulation" },
    { name: "Gut-Brain Axis", description: "Communicates with the brain to influence mood and health.", searchQuery: "Longevity & Health Optimization > Defense Systems > Microbiome Balance > Gut-Brain Axis" }
  ];

  const waysToSupportMicrobiome = [
    { name: "Eat a diverse range of plant foods", icon: <Leaf className="h-6 w-6 text-green-500" /> },
    { name: "Consume prebiotics and probiotics", icon: <Zap className="h-6 w-6 text-yellow-500" /> },
    { name: "Avoid unnecessary antibiotics", icon: <Microscope className="h-6 w-6 text-blue-500" /> }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Microscope className="h-16 w-16 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Microbiome Balance
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The role of beneficial microorganisms in protecting the host.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Microbiome Functions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {microbiomeFunctions.map((func, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Link to={`https://www.google.com/search?q=${encodeURIComponent(func.searchQuery)}`} target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
                    {func.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{func.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Ways to Support a Healthy Microbiome
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {waysToSupportMicrobiome.map((way, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  {way.icon}
                  <span className="ml-2">{way.name}</span>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
