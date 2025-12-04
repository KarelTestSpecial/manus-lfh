import React from 'react';
import { Scale, Brain, Heart, Dumbbell } from 'lucide-react';

export const boneHealthData = {
  risks: [
    { name: "Fragility", searchQuery: "Longevity & Health Optimization > Bone Health > Risks > Fragility" },
    { name: "Osteopenia", searchQuery: "Longevity & Health Optimization > Bone Health > Risks > Osteopenia" },
    { name: "Osteoporosis", searchQuery: "Longevity & Health Optimization > Bone Health > Risks > Osteoporosis" },
    { name: "Fracture", searchQuery: "Longevity & Health Optimization > Bone Health > Risks > Fracture" },
    { name: "Frailty", searchQuery: "Longevity & Health Optimization > Bone Health > Risks > Frailty" }
  ],
  buildingStrategies: [
    {
      name: "Weight-Bearing Exercise",
      icon: <Dumbbell className="h-6 w-6 text-blue-500" />,
      description: "Crucial for bone density and strength",
      searchQuery: "Longevity & Health Optimization > Bone Health > Building Strategies > Weight-Bearing Exercise"
    },
    {
      name: "Resistance Training",
      icon: <Scale className="h-6 w-6 text-green-500" />,
      description: "Lifting heavy weights stimulates bone growth",
      searchQuery: "Longevity & Health Optimization > Bone Health > Building Strategies > Resistance Training"
    },
    {
      name: "Nutritional Support",
      icon: <Heart className="h-6 w-6 text-red-500" />,
      description: "Adequate calcium, magnesium, vitamin D3 & K2",
      searchQuery: "Longevity & Health Optimization > Bone Health > Building Strategies > Nutritional Support"
    },
    {
      name: "Impact Sports",
      icon: <Dumbbell className="h-6 w-6 text-purple-500" />,
      description: "Running, jumping, and other high-impact activities",
      searchQuery: "Longevity & Health Optimization > Bone Health > Building Strategies > Impact Sports"
    }
  ],
  boneRoles: [
    {
      name: "Brain & Cognition",
      icon: <Brain className="h-6 w-6 mr-2" />,
      description: "The hippocampus, a brain region vital for memory, is connected to bone health.",
      searchQuery: "Longevity & Health Optimization > Bone Health > Role in Body > Brain & Cognition"
    },
    {
      name: "Mineral Storage",
      icon: <Scale className="h-6 w-6 mr-2" />,
      description: "Bones act as a storehouse for essential minerals like calcium and phosphorus.",
      searchQuery: "Longevity & Health Optimization > Bone Health > Role in Body > Mineral Storage"
    }
  ]
};
