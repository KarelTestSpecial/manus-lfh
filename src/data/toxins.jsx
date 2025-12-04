import React from 'react';
import { Skull, FlaskConical, Leaf, Shield } from 'lucide-react';

export const toxinsData = {
  toxinSources: [
    {
      name: "Environmental Toxins",
      icon: <FlaskConical className="h-8 w-8 text-gray-500" />,
      description: "Pollutants in air, water, and soil, including heavy metals and pesticides.",
      searchQuery: "Longevity & Health Optimization > Toxins > Environmental Toxins"
    },
    {
      name: "Food & Water Contaminants",
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      description: "Pesticides, herbicides, microplastics, and other chemicals in our diet.",
      searchQuery: "Longevity & Health Optimization > Toxins > Food & Water Contaminants"
    },
    {
      name: "Household Chemicals",
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      description: "Cleaning products, personal care items, and building materials.",
      searchQuery: "Longevity & Health Optimization > Toxins > Household Chemicals"
    },
    {
      name: "Internal Toxins",
      icon: <Skull className="h-8 w-8 text-red-500" />,
      description: "Byproducts of metabolism, gut dysbiosis, and chronic inflammation.",
      searchQuery: "Longevity & Health Optimization > Toxins > Internal Toxins"
    }
  ]
};
