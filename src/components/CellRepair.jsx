import React from 'react';
import { Dna } from 'lucide-react';
import { DialogCard } from '@/components/ui/DialogCard';
import { cellRepairData } from '@/data/cell-repair';

export function CellRepair() {
  const { cellRepairMechanisms, waysToSupportCellRepair } = cellRepairData;

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
              searchQuery={way.searchQuery}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
