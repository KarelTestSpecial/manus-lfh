import React from 'react';
import { Microscope } from 'lucide-react';
import { DialogCard } from '@/components/ui/DialogCard';
import { microbiomeBalanceData } from '@/data/microbiome-balance';

export function MicrobiomeBalance() {
  const { microbiomeFunctions, waysToSupportMicrobiome } = microbiomeBalanceData;

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
            <DialogCard
              key={index}
              title={func.name}
              description={func.description}
              searchQuery={func.searchQuery}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Ways to Support a Healthy Microbiome
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {waysToSupportMicrobiome.map((way, index) => (
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
