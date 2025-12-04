import React from 'react';
import { Leaf, Zap, Microscope } from 'lucide-react';

export const microbiomeBalanceData = {
  microbiomeFunctions: [
    { name: "Digestion and Nutrient Absorption", description: "Breaks down food and produces essential vitamins.", searchQuery: "Longevity & Health Optimization > Defense Systems > Microbiome Balance > Digestion and Nutrient Absorption" },
    { name: "Immune System Modulation", description: "Trains and supports the immune system.", searchQuery: "Longevity & Health Optimization > Defense Systems > Microbiome Balance > Immune System Modulation" },
    { name: "Gut-Brain Axis", description: "Communicates with the brain to influence mood and health.", searchQuery: "Longevity & Health Optimization > Defense Systems > Microbiome Balance > Gut-Brain Axis" }
  ],
  waysToSupportMicrobiome: [
    { name: "Eat a diverse range of plant foods", icon: <Leaf className="h-6 w-6 text-green-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Microbiome Balance > Support > Eat a diverse range of plant foods" },
    { name: "Consume prebiotics and probiotics", icon: <Zap className="h-6 w-6 text-yellow-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Microbiome Balance > Support > Consume prebiotics and probiotics" },
    { name: "Avoid unnecessary antibiotics", icon: <Microscope className="h-6 w-6 text-blue-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Microbiome Balance > Support > Avoid unnecessary antibiotics" }
  ]
};
