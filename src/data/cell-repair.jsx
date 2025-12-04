import React from 'react';
import { Dna, Shield, Zap } from 'lucide-react';

export const cellRepairData = {
  cellRepairMechanisms: [
    { name: "DNA Repair", description: "Corrects damage to the DNA molecules.", searchQuery: "Longevity & Health Optimization > Defense Systems > Cell Repair > DNA Repair" },
    { name: "Autophagy", description: "Cellular recycling of damaged components.", searchQuery: "Longevity & Health Optimization > Aging > Autophagy" },
    { name: "Apoptosis", description: "Programmed cell death for damaged cells.", searchQuery: "Longevity & Health Optimization > Defense Systems > Cell Repair > Apoptosis" }
  ],
  waysToSupportCellRepair: [
    { name: "Get enough sleep", icon: <Shield className="h-6 w-6 text-blue-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Cell Repair > Support > Get enough sleep" },
    { name: "Fasting and caloric restriction", icon: <Zap className="h-6 w-6 text-yellow-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Cell Repair > Support > Fasting and caloric restriction" },
    { name: "Consume nutrient-dense foods", icon: <Dna className="h-6 w-6 text-green-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Cell Repair > Support > Consume nutrient-dense foods" }
  ]
};
