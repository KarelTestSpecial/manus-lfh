import React from 'react';
import { Syringe, Leaf, Zap, Shield } from 'lucide-react';
import { DialogCard } from '@/components/ui/DialogCard';

export function Detoxification() {
  const detoxificationPathways = [
    { name: "Liver Phase I & II", description: "Primary hub for neutralizing toxins.", searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Liver Phase I & II" },
    { name: "Kidney Filtration", description: "Filters waste from the blood.", searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Kidney Filtration" },
    { name: "Lymphatic System", description: "Removes toxins and waste from tissues.", searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Lymphatic System" },
    { name: "Sweat", description: "Eliminates toxins through the skin.", searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Sweat" }
  ];

  const waysToSupportDetox = [
    { name: "Cruciferous Vegetables", icon: <Leaf className="h-6 w-6 text-green-500" /> },
    { name: "Hydration", icon: <Zap className="h-6 w-6 text-blue-500" /> },
    { name: "Sauna/Sweat", icon: <Shield className="h-6 w-6 text-red-500" /> },
    { name: "Regular Exercise", icon: <Leaf className="h-6 w-6 text-green-500" /> }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Syringe className="h-16 w-16 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Detoxification
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The process of neutralizing and eliminating toxins from the body.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Detoxification Pathways
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {detoxificationPathways.map((pathway, index) => (
            <DialogCard
              key={index}
              title={pathway.name}
              description={pathway.description}
              searchQuery={pathway.searchQuery}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Ways to Support Detoxification
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {waysToSupportDetox.map((way, index) => (
            <DialogCard
              key={index}
              icon={way.icon}
              title={way.name}
              searchQuery={`Longevity & Health Optimization > Defense Systems > Detoxification > Support > ${way.name}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
