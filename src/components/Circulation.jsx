import React from 'react';
import { Heart, Droplet, Shield, Activity } from 'lucide-react';
import { DialogCard } from '@/components/ui/DialogCard';

export function Circulation() {
  const keyAspects = [
    {
      name: "Endothelial Health",
      icon: <Shield className="h-8 w-8 text-green-500" />,
      description: "The health of the lining of your blood vessels is crucial for proper circulation.",
      searchQuery: "Longevity & Health Optimization > Circulation & Cardiovascular Health > Endothelial Health"
    },
    {
      name: "Nitric Oxide",
      icon: <Droplet className="h-8 w-8 text-blue-500" />,
      description: "A key molecule that helps relax and dilate blood vessels, improving blood flow.",
      searchQuery: "Longevity & Health Optimization > Circulation & Cardiovascular Health > Nitric Oxide"
    },
    {
      name: "Blood Pressure",
      icon: <Activity className="h-8 w-8 text-orange-500" />,
      description: "Maintaining healthy blood pressure is essential for long-term cardiovascular health.",
      searchQuery: "Longevity & Health Optimization > Circulation & Cardiovascular Health > Blood Pressure"
    },
    {
      name: "Cholesterol",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      description: "Managing cholesterol levels helps prevent plaque buildup in the arteries.",
      searchQuery: "Longevity & Health Optimization > Circulation & Cardiovascular Health > Cholesterol"
    }
  ];

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
