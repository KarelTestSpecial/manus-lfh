import React from 'react';
import { Leaf, Zap, Shield, Droplets } from 'lucide-react';

export const antioxidantDefenseData = {
  intro: {
    title: "Antioxidant Defense",
    subtitle: "Protection against oxidative stress and cell damage caused by free radicals.",
    icon: <Leaf className="h-16 w-16 text-green-600" />
  },
  antioxidantSystems: [
    { 
      name: "Glutathione", 
      description: "The body's master antioxidant. It is crucial for immune function and controlling inflammation.", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Antioxidant Defense > Glutathione",
      icon: <Droplets className="h-5 w-5 text-blue-500" />
    },
    { 
      name: "Superoxide Dismutase (SOD)", 
      description: "Protects against oxidative damage by breaking down harmful superoxide radicals.", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Antioxidant Defense > Superoxide Dismutase (SOD)",
      icon: <Shield className="h-5 w-5 text-purple-500" />
    },
    { 
      name: "Catalase", 
      description: "Converts hydrogen peroxide into water and oxygen, preventing cell damage.", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Antioxidant Defense > Catalase",
      icon: <Zap className="h-5 w-5 text-yellow-500" />
    }
  ],
  waysToSupport: [
    { 
      name: "Eat colorful fruits and vegetables", 
      description: "Polyphenols and vitamins in plants act as exogenous antioxidants.",
      searchQuery: "Antioxidant rich foods fruits vegetables",
      icon: <Leaf className="h-6 w-6 text-green-500" /> 
    },
    { 
      name: "Consume antioxidant-rich foods", 
      description: "Berries, dark chocolate, nuts, and green tea are excellent sources.",
      searchQuery: "Best antioxidant rich foods list",
      icon: <Zap className="h-6 w-6 text-yellow-500" /> 
    },
    { 
      name: "Consider antioxidant supplements", 
      description: "Supplements like Vitamin C, E, and CoQ10 can support defense systems.",
      searchQuery: "Antioxidant supplements benefits risks",
      icon: <Shield className="h-6 w-6 text-blue-500" /> 
    }
  ]
};
