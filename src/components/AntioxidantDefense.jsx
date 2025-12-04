import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AntioxidantDefense() {
  const antioxidantSystems = [
    { name: "Glutathione", description: "The body's master antioxidant.", searchQuery: "Longevity & Health Optimization > Defense Systems > Antioxidant Defense > Glutathione" },
    { name: "Superoxide Dismutase (SOD)", description: "Protects against oxidative damage.", searchQuery: "Longevity & Health Optimization > Defense Systems > Antioxidant Defense > Superoxide Dismutase (SOD)" },
    { name: "Catalase", description: "Converts hydrogen peroxide to water and oxygen.", searchQuery: "Longevity & Health Optimization > Defense Systems > Antioxidant Defense > Catalase" }
  ];

  const waysToSupportAntioxidants = [
    { name: "Eat colorful fruits and vegetables", icon: <Leaf className="h-6 w-6 text-green-500" /> },
    { name: "Consume antioxidant-rich foods", icon: <Zap className="h-6 w-6 text-yellow-500" /> },
    { name: "Consider antioxidant supplements", icon: <Shield className="h-6 w-6 text-blue-500" /> }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Leaf className="h-16 w-16 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Antioxidant Defense
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Protection against oxidative stress and cell damage caused by free radicals.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Antioxidant Systems
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {antioxidantSystems.map((system, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Link to={`https://www.google.com/search?q=${encodeURIComponent(system.searchQuery)}`} target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
                    {system.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{system.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Ways to Support Antioxidant Defense
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {waysToSupportAntioxidants.map((way, index) => (
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
