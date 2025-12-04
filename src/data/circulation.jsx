import React from 'react';
import { Heart, Droplet, Shield, Activity } from 'lucide-react';

export const circulationData = {
  keyAspects: [
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
  ]
};
