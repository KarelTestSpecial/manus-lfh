import React from 'react';
import { Brain, Heart, Smile, Users, Zap, Anchor, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DialogCard } from '@/components/ui/DialogCard';

export function Mindset() {
  const pillars = [
    {
      title: "Stress Management",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      description: "Chronic stress increases cortisol, inflammation, and accelerates aging. Learning to manage it is crucial."
    },
    {
      title: "Purpose (Ikigai)",
      icon: <Anchor className="h-8 w-8 text-blue-500" />,
      description: "Having a sense of purpose is strongly linked to longevity. It gives you a reason to wake up every morning."
    },
    {
      title: "Social Connection",
      icon: <Users className="h-8 w-8 text-green-500" />,
      description: "Loneliness is as damaging to health as smoking. Strong social bonds are a key predictor of a long life."
    },
    {
      title: "Optimism & Gratitude",
      icon: <Smile className="h-8 w-8 text-orange-500" />,
      description: "Positive outlook and gratitude practices correlate with better cardiovascular health and immune function."
    }
  ];

  const practices = [
    {
      name: "Meditation / Mindfulness",
      description: "Reduces stress, improves focus, and physically changes the brain (neuroplasticity).",
      time: "10-20 mins/day"
    },
    {
      name: "Breathwork",
      description: "Controlled breathing (e.g., 4-7-8, Box Breathing) can instantly activate the parasympathetic nervous system.",
      time: "5 mins/day"
    },
    {
      name: "Gratitude Journaling",
      description: "Writing down 3 things you are grateful for each day rewires the brain to scan for positives.",
      time: "5 mins/day"
    },
    {
      name: "Cognitive Reframing",
      description: "Challenging negative thoughts and viewing obstacles as opportunities (Stoicism).",
      time: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Brain className="h-16 w-16 text-purple-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mindset & Mental Health
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your mind and body are connected. A healthy mindset is not just about feeling good; 
          it's a biological imperative for longevity.
        </p>
      </div>

      {/* Pillars of Mindset */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Pillars of a Longevity Mindset
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <DialogCard
              key={index}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              searchQuery={`Longevity & Health Optimization > Mindset & Mental Health > Pillars > ${pillar.title}`}
            />
          ))}
        </div>
      </section>

      {/* Blue Zones Connection */}
      <Card className="mb-12 bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-blue-800">
            <Users className="h-8 w-8 mr-3" />
            The Blue Zones Lesson
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700">
            In Blue Zones (areas with the most centenarians), social connection and purpose are central. 
            Okinawans have "Moai" (lifelong social circles) and "Ikigai" (purpose). Sardinians put family first. 
            These factors are just as important as diet and exercise.
          </p>
        </CardContent>
      </Card>

      {/* Actionable Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Daily Practices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((practice, index) => (
            <DialogCard
              key={index}
              title={practice.name}
              description={practice.description}
              searchQuery={`Longevity & Health Optimization > Mindset & Mental Health > Daily Practices > ${practice.name}`}
            >
              <div className="mt-2">
                <Badge variant="outline">{practice.time}</Badge>
              </div>
            </DialogCard>
          ))}
        </div>
      </section>
    </div>
  );
}
