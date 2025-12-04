import React from 'react';
import { antioxidantDefenseData } from '@/data/antioxidant-defense';
import { InfoCard } from '@/components/ui/InfoCard';

export function AntioxidantDefense() {
  const { intro, antioxidantSystems, waysToSupport } = antioxidantDefenseData;

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          {intro.icon}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {intro.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {intro.subtitle}
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Antioxidant Systems
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {antioxidantSystems.map((system, index) => (
            <InfoCard
              key={index}
              icon={system.icon}
              title={system.name}
              description={system.description}
              searchQuery={system.searchQuery}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Ways to Support Antioxidant Defense
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {waysToSupport.map((way, index) => (
            <InfoCard
              key={index}
              icon={way.icon}
              title={way.name}
              description={way.description}
              searchQuery={way.searchQuery}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
