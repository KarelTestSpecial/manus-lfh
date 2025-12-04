import React from 'react';
import { Zap } from 'lucide-react';
import { DialogCard } from '@/components/ui/DialogCard';
import { metabolismData } from '@/data/metabolism';

export function Metabolism() {
  const { metabolismFactors } = metabolismData;

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
          <DialogCard
            key={index}
            icon={factor.icon}
            title={factor.name}
            description={factor.description}
            searchQuery={factor.searchQuery}
          />
        ))}
      </div>
    </div>
  );
}
