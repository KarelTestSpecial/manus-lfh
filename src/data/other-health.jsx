import React from 'react';
import { PlusCircle, Heart, Brain, Shield } from 'lucide-react';

export const otherHealthData = {
  otherHealthTopics: [
    {
      name: "Hormonal Balance",
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      description: "Maintaining optimal hormone levels for overall well-being and longevity.",
      searchQuery: "Longevity & Health Optimization > Other Health > Hormonal Balance"
    },
    {
      name: "Oral Health",
      icon: <Shield className="h-8 w-8 text-teal-500" />,
      description: "The connection between oral health and systemic diseases.",
      searchQuery: "Longevity & Health Optimization > Other Health > Oral Health"
    },
    {
      name: "Eye Health",
      icon: <Brain className="h-8 w-8 text-indigo-500" />,
      description: "Strategies to maintain vision and prevent age-related eye conditions.",
      searchQuery: "Longevity & Health Optimization > Other Health > Eye Health"
    },
    {
      name: "Hearing Health",
      icon: <PlusCircle className="h-8 w-8 text-gray-500" />,
      description: "Protecting your hearing and addressing age-related hearing loss.",
      searchQuery: "Longevity & Health Optimization > Other Health > Hearing Health"
    }
  ]
};
