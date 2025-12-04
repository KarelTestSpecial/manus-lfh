import React from 'react';
import { Dna, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DialogCard } from '@/components/ui/DialogCard';

export function CellRepair() {
  const cellRepairMechanisms = [
    { name: "DNA Repair", description: "Corrects damage to the DNA molecules.", searchQuery: "Longevity & Health Optimization > Defense Systems > Cell Repair > DNA Repair" },
    { name: "Autophagy", description: "Cellular recycling of damaged components.", searchQuery: "Longevity & Health Optimization > Aging > Autophagy" },
    { name: "Apoptosis", description: "Programmed cell death for damaged cells.", searchQuery: "Longevity & Health Optimization > Defense Systems > Cell Repair > Apoptosis" }
  ];

  const waysToSupportCellRepair = [
    { name: "Get enough sleep", icon: <Shield className="h-6 w-6 text-blue-500" /> },
    { name: "Fasting and caloric restriction", icon: <Zap className="h-6 w-6 text-yellow-500" /> },
    { name: "Consume nutrient-dense foods", icon: <Dna className="h-6 w-6 text-green-500" /> }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Dna className="h-16 w-16 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Cell Repair and Regeneration
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Mechanisms for repairing damaged cells and tissues to maintain health.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Cell Repair Mechanisms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cellRepairMechanisms.map((mechanism, index) => (
            <DialogCard
              key={index}
              title={mechanism.name}
              description={mechanism.description}
              searchQuery={mechanism.searchQuery}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Ways to Support Cell Repair
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {waysToSupportCellRepair.map((way, index) => (
            <DialogCard
              key={index}
              icon={way.icon}
              title={way.name}
              searchQuery={`Longevity & Health Optimization > Defense Systems > Cell Repair > Support > ${way.name}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
