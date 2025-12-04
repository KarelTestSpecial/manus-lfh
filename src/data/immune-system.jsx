import React from 'react';
import { Shield, Zap, Users, ShieldCheck, Heart, Dumbbell, Moon, Utensils } from 'lucide-react';

export const immuneSystemData = {
  intro: {
    title: "The Immune System",
    subtitle: "Your body's primary defense against pathogens. A complex network of cells, tissues, and organs that work together to protect you.",
    icon: <Shield className="h-16 w-16 text-blue-600" />
  },
  immuneCellTypes: [
    { 
      name: "Innate Immune System", 
      description: "First line of defense, non-specific.", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Innate Immune System",
      icon: <Shield className="h-5 w-5 text-blue-500" />
    },
    { 
      name: "Adaptive Immune System", 
      description: "Specific, targeted defense with memory.", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Adaptive Immune System",
      icon: <ShieldCheck className="h-5 w-5 text-green-500" />
    },
    { 
      name: "T-Cells", 
      description: "Cell-mediated immunity.", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > T-Cells",
      icon: <Users className="h-5 w-5 text-purple-500" />
    },
    { 
      name: "B-Cells", 
      description: "Produce antibodies.", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > B-Cells",
      icon: <Shield className="h-5 w-5 text-indigo-500" />
    },
    { 
      name: "Natural Killer (NK) Cells", 
      description: "Kill infected or cancerous cells.", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Natural Killer (NK) Cells",
      icon: <Zap className="h-5 w-5 text-yellow-500" />
    },
    { 
      name: "Macrophages", 
      description: "Engulf and digest cellular debris.", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Macrophages",
      icon: <Utensils className="h-5 w-5 text-orange-500" />
    }
  ],
  factorsThatWeakenImmunity: [
    { 
      name: "Chronic Stress", 
      icon: <Zap className="h-5 w-5" />, 
      impact: "High", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Chronic Stress" 
    },
    { 
      name: "Poor Sleep", 
      icon: <Moon className="h-5 w-5" />, 
      impact: "High", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Poor Sleep" 
    },
    { 
      name: "Poor Nutrition", 
      icon: <Utensils className="h-5 w-5" />, 
      impact: "High", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Poor Nutrition" 
    },
    { 
      name: "Sedentary Lifestyle", 
      icon: <Dumbbell className="h-5 w-5" />, 
      impact: "Medium", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Sedentary Lifestyle" 
    },
    { 
      name: "Excess Alcohol", 
      icon: <Heart className="h-5 w-5" />, 
      impact: "Medium", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Excess Alcohol" 
    },
    { 
      name: "Aging (Immunosenescence)", 
      icon: <Users className="h-5 w-5" />, 
      impact: "High", 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Aging (Immunosenescence)" 
    }
  ],
  waysToSupportImmunity: [
    { 
      name: "Balanced Diet", 
      description: "Rich in vitamins and minerals.", 
      icon: <Utensils className="h-6 w-6 text-green-500" />, 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Balanced Diet" 
    },
    { 
      name: "Regular Exercise", 
      description: "Moderate intensity is key.", 
      icon: <Dumbbell className="h-6 w-6 text-blue-500" />, 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Regular Exercise" 
    },
    { 
      name: "Quality Sleep", 
      description: "7-9 hours per night.", 
      icon: <Moon className="h-6 w-6 text-indigo-500" />, 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Quality Sleep" 
    },
    { 
      name: "Stress Management", 
      description: "Mindfulness, meditation.", 
      icon: <Zap className="h-6 w-6 text-yellow-500" />, 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Stress Management" 
    },
    { 
      name: "Supplementation", 
      description: "Vitamin D, C, Zinc.", 
      icon: <ShieldCheck className="h-6 w-6 text-purple-500" />, 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Supplementation" 
    },
    { 
      name: "Hydration", 
      description: "Water is essential for immune function.", 
      icon: <Heart className="h-6 w-6 text-red-500" />, 
      searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Hydration" 
    }
  ]
};
