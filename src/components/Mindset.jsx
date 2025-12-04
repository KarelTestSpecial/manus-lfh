import React from 'react';
import { Brain, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DialogCard } from '@/components/ui/DialogCard';
import { mindsetData } from '@/data/mindset';

export function Mindset() {
  const { pillars, practices } = mindsetData;

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
              searchQuery={pillar.searchQuery}
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
              searchQuery={practice.searchQuery}
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
