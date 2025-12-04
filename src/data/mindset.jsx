import React from 'react';
import { Zap, Anchor, Users, Smile } from 'lucide-react';

export const mindsetData = {
  pillars: [
    {
      title: "Stress Management",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      description: "Chronic stress increases cortisol, inflammation, and accelerates aging. Learning to manage it is crucial.",
      searchQuery: "Longevity & Health Optimization > Mindset & Mental Health > Pillars > Stress Management"
    },
    {
      title: "Purpose (Ikigai)",
      icon: <Anchor className="h-8 w-8 text-blue-500" />,
      description: "Having a sense of purpose is strongly linked to longevity. It gives you a reason to wake up every morning.",
      searchQuery: "Longevity & Health Optimization > Mindset & Mental Health > Pillars > Purpose (Ikigai)"
    },
    {
      title: "Social Connection",
      icon: <Users className="h-8 w-8 text-green-500" />,
      description: "Loneliness is as damaging to health as smoking. Strong social bonds are a key predictor of a long life.",
      searchQuery: "Longevity & Health Optimization > Mindset & Mental Health > Pillars > Social Connection"
    },
    {
      title: "Optimism & Gratitude",
      icon: <Smile className="h-8 w-8 text-orange-500" />,
      description: "Positive outlook and gratitude practices correlate with better cardiovascular health and immune function.",
      searchQuery: "Longevity & Health Optimization > Mindset & Mental Health > Pillars > Optimism & Gratitude"
    }
  ],
  practices: [
    {
      name: "Meditation / Mindfulness",
      description: "Reduces stress, improves focus, and physically changes the brain (neuroplasticity).",
      time: "10-20 mins/day",
      searchQuery: "Longevity & Health Optimization > Mindset & Mental Health > Daily Practices > Meditation / Mindfulness"
    },
    {
      name: "Breathwork",
      description: "Controlled breathing (e.g., 4-7-8, Box Breathing) can instantly activate the parasympathetic nervous system.",
      time: "5 mins/day",
      searchQuery: "Longevity & Health Optimization > Mindset & Mental Health > Daily Practices > Breathwork"
    },
    {
      name: "Gratitude Journaling",
      description: "Writing down 3 things you are grateful for each day rewires the brain to scan for positives.",
      time: "5 mins/day",
      searchQuery: "Longevity & Health Optimization > Mindset & Mental Health > Daily Practices > Gratitude Journaling"
    },
    {
      name: "Cognitive Reframing",
      description: "Challenging negative thoughts and viewing obstacles as opportunities (Stoicism).",
      time: "Ongoing",
      searchQuery: "Longevity & Health Optimization > Mindset & Mental Health > Daily Practices > Cognitive Reframing"
    }
  ]
};
