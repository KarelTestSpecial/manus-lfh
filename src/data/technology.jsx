import React from 'react';
import { Watch, Activity, Zap, Sun } from 'lucide-react';

export const technologyData = {
  wearables: [
    {
      name: "Oura Ring",
      type: "Sleep & Recovery Tracker",
      description: "Excellent for sleep staging, HRV, and body temperature trends.",
      icon: <Activity className="h-6 w-6 text-gray-500" />,
      searchQuery: "Longevity & Health Optimization > Health Technology & Biohacking > Wearables & Trackers > Oura Ring"
    },
    {
      name: "Apple Watch / Whoop",
      type: "Activity & Vitals",
      description: "Great for workout tracking, heart rate monitoring, and atrial fibrillation detection.",
      icon: <Watch className="h-6 w-6 text-blue-500" />,
      searchQuery: "Longevity & Health Optimization > Health Technology & Biohacking > Wearables & Trackers > Apple Watch / Whoop"
    },
    {
      name: "CGM (Continuous Glucose Monitor)",
      type: "Metabolic Health",
      description: "Real-time blood sugar data to understand how food affects your body.",
      icon: <Activity className="h-6 w-6 text-green-500" />,
      searchQuery: "Longevity & Health Optimization > Health Technology & Biohacking > Wearables & Trackers > CGM (Continuous Glucose Monitor)"
    }
  ],
  therapies: [
    {
      name: "Red Light Therapy (PBM)",
      benefits: "Skin health, mitochondrial function, reduced inflammation.",
      icon: <Sun className="h-6 w-6 text-red-500" />,
      searchQuery: "Longevity & Health Optimization > Health Technology & Biohacking > Advanced Therapies > Red Light Therapy (PBM)"
    },
    {
      name: "Sauna",
      benefits: "Heat shock proteins, cardiovascular health, detoxification.",
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      searchQuery: "Longevity & Health Optimization > Health Technology & Biohacking > Advanced Therapies > Sauna"
    },
    {
      name: "Cold Plunge",
      benefits: "Dopamine release, reduced inflammation, metabolic boost.",
      icon: <Activity className="h-6 w-6 text-blue-300" />,
      searchQuery: "Longevity & Health Optimization > Health Technology & Biohacking > Advanced Therapies > Cold Plunge"
    },
    {
      name: "Hyperbaric Oxygen (HBOT)",
      benefits: "Wound healing, stem cell mobilization, angiogenesis.",
      icon: <Activity className="h-6 w-6 text-blue-700" />,
      searchQuery: "Longevity & Health Optimization > Health Technology & Biohacking > Advanced Therapies > Hyperbaric Oxygen (HBOT)"
    }
  ],
  apps: [
    { title: "Cronometer / MyFitnessPal", description: "Track macro and micronutrients.", searchQuery: "cronometer vs myfitnesspal" },
    { title: "Zero / Life", description: "Track fasting windows.", searchQuery: "zero vs life fasting app" },
    { title: "Waking Up / Calm", description: "Meditation and mindfulness.", searchQuery: "waking up vs calm app" }
  ]
};
