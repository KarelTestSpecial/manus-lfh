import React from 'react';
import { Zap, Shield, Activity, Brain } from 'lucide-react';

export const metabolismData = {
  metabolismFactors: [
    {
      name: "Insulin Sensitivity",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      description: "The ability of your cells to respond to insulin, crucial for blood sugar control.",
      searchQuery: "Longevity & Health Optimization > Metabolism > Insulin Sensitivity"
    },
    {
      name: "Mitochondrial Health",
      icon: <Shield className="h-8 w-8 text-green-500" />,
      description: "Efficient mitochondria are essential for energy production and metabolic function.",
      searchQuery: "Longevity & Health Optimization > Metabolism > Mitochondrial Health"
    },
    {
      name: "Hormonal Balance",
      icon: <Activity className="h-8 w-8 text-orange-500" />,
      description: "Hormones like thyroid and cortisol play a significant role in metabolic rate.",
      searchQuery: "Longevity & Health Optimization > Metabolism > Hormonal Balance"
    },
    {
      name: "Gut Microbiome",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      description: "The gut microbiome influences nutrient absorption and energy regulation.",
      searchQuery: "Longevity & Health Optimization > Metabolism > Gut Microbiome"
    }
  ]
};
