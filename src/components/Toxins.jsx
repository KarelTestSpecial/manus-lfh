import React from 'react';
import { Skull } from 'lucide-react';
import { DialogCard } from '@/components/ui/DialogCard';
import { toxinsData } from '@/data/toxins';

export function Toxins() {
  const { toxinSources } = toxinsData;

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
          <DialogCard
            key={index}
            icon={source.icon}
            title={source.name}
            description={source.description}
            searchQuery={source.searchQuery}
          />
        ))}
      </div>
    </div>
  );
}
