import React from 'react';
import { Dumbbell, Heart, Activity, Bike, Waves, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { exerciseData } from '@/data/exercise';
import { DialogCard } from '@/components/ui/DialogCard';

export function Exercise() {
  const { exerciseBenefits, exerciseTypes } = exerciseData;


  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Dumbbell className="h-16 w-16 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Exercise & Movement
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Regular physical activity is a cornerstone of longevity, offering profound benefits for both body and mind.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Benefits of Exercise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exerciseBenefits.map((benefit, index) => (
            <DialogCard
              key={index}
              icon={benefit.icon}
              title={benefit.name}
              description={benefit.description}
              searchQuery={benefit.searchQuery}
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Types of Exercise for Longevity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exerciseTypes.map((type, index) => (
            <DialogCard
              key={index}
              icon={type.icon}
              title={type.name}
              description={type.description}
              searchQuery={type.searchQuery}
            />
          ))}
        </div>
      </section>

      <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">
            Move More, Live Longer
          </h3>
          <p className="text-lg text-green-100 mb-6">
            Incorporate a variety of exercises into your routine to maximize health and longevity benefits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <Bike className="h-8 w-8 mb-2" />
              <span className="font-semibold">Zone 2 Cardio</span>
            </div>
            <div className="flex flex-col items-center">
              <Activity className="h-8 w-8 mb-2" />
              <span className="font-semibold">HIIT Sessions</span>
            </div>
            <div className="flex flex-col items-center">
              <Dumbbell className="h-8 w-8 mb-2" />
              <span className="font-semibold">Strength Training</span>
            </div>
            <div className="flex flex-col items-center">
              <Waves className="h-8 w-8 mb-2" />
              <span className="font-semibold">Flexibility Work</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
