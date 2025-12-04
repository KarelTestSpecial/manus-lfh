import React from 'react';
import { Leaf, Zap, Shield } from 'lucide-react';

export const detoxificationData = {
  detoxificationPathways: [
    { name: "Liver Phase I & II", description: "Primary hub for neutralizing toxins.", searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Liver Phase I & II" },
    { name: "Kidney Filtration", description: "Filters waste from the blood.", searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Kidney Filtration" },
    { name: "Lymphatic System", description: "Removes toxins and waste from tissues.", searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Lymphatic System" },
    { name: "Sweat", description: "Eliminates toxins through the skin.", searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Sweat" }
  ],
  waysToSupportDetox: [
    { name: "Cruciferous Vegetables", icon: <Leaf className="h-6 w-6 text-green-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Support > Cruciferous Vegetables" },
    { name: "Hydration", icon: <Zap className="h-6 w-6 text-blue-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Support > Hydration" },
    { name: "Sauna/Sweat", icon: <Shield className="h-6 w-6 text-red-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Support > Sauna/Sweat" },
    { name: "Regular Exercise", icon: <Leaf className="h-6 w-6 text-green-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Detoxification > Support > Regular Exercise" }
  ]
};
