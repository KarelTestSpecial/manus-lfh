import React from 'react';
import { Heart } from 'lucide-react';
import { DialogCard } from '@/components/ui/DialogCard';
import { circulationData } from '@/data/circulation';

export function Circulation() {
  const { keyAspects } = circulationData;

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Heart className="h-16 w-16 text-red-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Circulation & Cardiovascular Health
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your circulatory system is your body's highway, delivering oxygen and nutrients to every cell. 
          Learn how to keep it healthy and flowing smoothly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {keyAspects.map((aspect, index) => (
          <DialogCard
            key={index}
            icon={aspect.icon}
            title={aspect.name}
            description={aspect.description}
            searchQuery={aspect.searchQuery}
          />
        ))}
      </div>
    </div>
  );
}
