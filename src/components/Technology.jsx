import React from 'react';
import { Smartphone, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DialogCard } from '@/components/ui/DialogCard';
import { technologyData } from '@/data/technology';

export function Technology() {
  const { wearables, therapies, apps } = technologyData;

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Cpu className="h-16 w-16 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Health Technology & Biohacking
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Leverage modern technology to measure, track, and optimize your biology. 
          "What gets measured gets managed."
        </p>
      </div>

      {/* Wearables */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Wearables & Trackers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wearables.map((item, index) => (
            <DialogCard
              key={index}
              icon={item.icon}
              title={item.name}
              description={item.description}
              searchQuery={item.searchQuery}
            />
          ))}
        </div>
      </section>

      {/* Advanced Therapies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Advanced Therapies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapies.map((therapy, index) => (
            <DialogCard
              key={index}
              icon={therapy.icon}
              title={therapy.name}
              description={therapy.benefits}
              searchQuery={therapy.searchQuery}
            />
          ))}
        </div>
      </section>

      {/* Apps */}
      <Card className="bg-gray-50 border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Smartphone className="h-8 w-8 mr-3 text-gray-700" />
            Essential Apps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {apps.map((app, index) => (
                <DialogCard
                  key={index}
                  title={app.title}
                  description={app.description}
                  searchQuery={app.searchQuery}
                />
             ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
