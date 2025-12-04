import React from 'react';
import { PlusCircle, Heart, Brain, Shield } from 'lucide-react';
import { DialogCard } from '@/components/ui/DialogCard';

export function OtherHealth() {
  const otherHealthTopics = [
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
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <PlusCircle className="h-16 w-16 text-gray-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Other Health Topics
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Beyond the core pillars, various other health topics contribute significantly to overall longevity and well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherHealthTopics.map((topic, index) => (
          <DialogCard
            key={index}
            icon={topic.icon}
            title={topic.name}
            description={topic.description}
            searchQuery={topic.searchQuery}
          />
        ))}
      </div>
    </div>
  );
}
