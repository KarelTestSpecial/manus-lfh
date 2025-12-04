import React from 'react';
import { Bone, Scale, Shield, Dumbbell, AlertTriangle, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DialogCard } from '@/components/ui/DialogCard';
import { boneHealthData } from '@/data/bone-health';

export function BoneHealth() {
  const { risks, buildingStrategies, boneRoles } = boneHealthData;

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Bone className="h-16 w-16 text-orange-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Bone Health
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bone is not static; it's a dynamic tissue that responds to the demands placed upon it. 
          Learn how to build and maintain strong bones for a lifetime of health.
        </p>
      </div>

      {/* Importance */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Bone Health Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-700 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Crucial for Longevity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Strong bones are essential for mobility, independence, and overall quality of life as we age.
              </p>
            </CardContent>
          </Card>

          <DialogCard
            icon={<AlertTriangle className="h-6 w-6 mr-2" />}
            title="Consequences of Poor Bone Health"
            description={
              <ul className="space-y-2 text-gray-700">
                {risks.map((risk, index) => (
                  <li key={index}>{risk.name}</li>
                ))}
              </ul>
            }
            searchQuery="Longevity & Health Optimization > Bone Health > Risks"
          />
        </div>
      </section>

      {/* Bone's Role in the Body */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bone's Role in the Body</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {boneRoles.map((role, index) => (
            <DialogCard
              key={index}
              icon={role.icon}
              title={role.name}
              description={role.description}
              searchQuery={role.searchQuery}
            />
          ))}
        </div>
      </section>

      {/* Building & Maintaining Bone Health */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Building & Maintaining Bone Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {buildingStrategies.map((strategy, index) => (
            <DialogCard
              key={index}
              icon={strategy.icon}
              title={strategy.name}
              description={strategy.description}
              searchQuery={strategy.searchQuery}
            />
          ))}
        </div>
      </section>

      {/* Action Plan */}
      <Card className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
        <CardContent className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">
            Invest in Your Skeletal Strength
          </h3>
          <p className="text-lg text-orange-100 mb-6">
            Start implementing these bone-building strategies today for a stronger, more resilient future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <Dumbbell className="h-8 w-8 mb-2" />
              <span className="font-semibold">Weight-Bearing Exercise</span>
            </div>
            <div className="flex flex-col items-center">
              <Scale className="h-8 w-8 mb-2" />
              <span className="font-semibold">Resistance Training</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-8 w-8 mb-2" />
              <span className="font-semibold">Nutrient-Rich Diet</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 mb-2" />
              <span className="font-semibold">Avoid Smoking</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
