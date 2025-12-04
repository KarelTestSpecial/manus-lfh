import React from 'react';
import { Moon, Sun, Clock, Battery, Brain, Zap, Coffee, Smartphone, Ear } from 'lucide-react';

export const sleepData = {
  sleepStages: [
    {
      name: "Light Sleep",
      description: "Transition from wakefulness, muscles relax, heart rate slows.",
      icon: <Moon className="h-6 w-6 text-blue-300" />,
      percentage: "50-60%",
      searchQuery: "Longevity & Health Optimization > Sleep Optimization > Sleep Stages > Light Sleep"
    },
    {
      name: "Deep Sleep (SWS)",
      description: "Physical restoration, immune boosting, growth hormone release.",
      icon: <Battery className="h-6 w-6 text-blue-500" />,
      percentage: "10-25%",
      searchQuery: "Longevity & Health Optimization > Sleep Optimization > Sleep Stages > Deep Sleep (SWS)"
    },
    {
      name: "REM Sleep",
      description: "Mental restoration, memory consolidation, dreaming.",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      percentage: "20-25%",
      searchQuery: "Longevity & Health Optimization > Sleep Optimization > Sleep Stages > REM Sleep"
    }
  ],
  hygieneTips: [
    {
      title: "Consistency",
      icon: <Clock className="h-5 w-5 text-green-500" />,
      description: "Go to bed and wake up at the same time every day, even on weekends.",
      searchQuery: "Longevity & Health Optimization > Sleep Optimization > Sleep Hygiene > Consistency"
    },
    {
      title: "Light Environment",
      icon: <Sun className="h-5 w-5 text-orange-500" />,
      description: "Get morning sunlight within 30 mins of waking. Avoid blue light 2 hours before bed.",
      searchQuery: "Longevity & Health Optimization > Sleep Optimization > Sleep Hygiene > Light Environment"
    },
    {
      title: "Temperature",
      icon: <Zap className="h-5 w-5 text-blue-400" />,
      description: "Keep your bedroom cool (around 65°F/18°C) for optimal sleep.",
      searchQuery: "Longevity & Health Optimization > Sleep Optimization > Sleep Hygiene > Temperature"
    },
    {
      title: "Caffeine/Alcohol",
      icon: <Coffee className="h-5 w-5 text-brown-500" />,
      description: "Avoid caffeine after 2 PM and limit alcohol before bed (it disrupts REM).",
      searchQuery: "Longevity & Health Optimization > Sleep Optimization > Sleep Hygiene > Caffeine/Alcohol"
    },
    {
      title: "Wind Down",
      icon: <Smartphone className="h-5 w-5 text-gray-500" />,
      description: "Create a relaxing routine. Read, stretch, or meditate instead of scrolling.",
      searchQuery: "Longevity & Health Optimization > Sleep Optimization > Sleep Hygiene > Wind Down"
    },
    {
      title: "Earplugs",
      icon: <Ear className="h-5 w-5 text-gray-500" />,
      description: "Blocking out noise is crucial for maintaining deep, uninterrupted sleep, leading to better rest and improved daytime function.",
      searchQuery: "benefits of sleeping with earplugs"
    }
  ]
};
