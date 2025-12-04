import React from 'react';
import { Watch, Smartphone, Cpu, Activity, Wifi, Zap, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DialogCard } from '@/components/ui/DialogCard';

export function Technology() {
  const wearables = [
    {
      name: "Oura Ring",
      type: "Sleep & Recovery Tracker",
      description: "Excellent for sleep staging, HRV, and body temperature trends.",
      icon: <Activity className="h-6 w-6 text-gray-500" />
    },
    {
      name: "Apple Watch / Whoop",
      type: "Activity & Vitals",
      description: "Great for workout tracking, heart rate monitoring, and atrial fibrillation detection.",
      icon: <Watch className="h-6 w-6 text-blue-500" />
    },
    {
      name: "CGM (Continuous Glucose Monitor)",
      type: "Metabolic Health",
      description: "Real-time blood sugar data to understand how food affects your body.",
      icon: <Activity className="h-6 w-6 text-green-500" />
    }
  ];

  const therapies = [
    {
      name: "Red Light Therapy (PBM)",
      benefits: "Skin health, mitochondrial function, reduced inflammation.",
      icon: <Sun className="h-6 w-6 text-red-500" />
    },
    {
      name: "Sauna",
      benefits: "Heat shock proteins, cardiovascular health, detoxification.",
      icon: <Zap className="h-6 w-6 text-orange-500" />
    },
    {
      name: "Cold Plunge",
      benefits: "Dopamine release, reduced inflammation, metabolic boost.",
      icon: <Activity className="h-6 w-6 text-blue-300" />
    },
    {
      name: "Hyperbaric Oxygen (HBOT)",
      benefits: "Wound healing, stem cell mobilization, angiogenesis.",
      icon: <Activity className="h-6 w-6 text-blue-700" />
    }
  ];

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
              searchQuery={`Longevity & Health Optimization > Health Technology & Biohacking > Wearables & Trackers > ${item.name}`}
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
              searchQuery={`Longevity & Health Optimization > Health Technology & Biohacking > Advanced Therapies > ${therapy.name}`}
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
             <DialogCard title="Cronometer / MyFitnessPal" description="Track macro and micronutrients." searchQuery="cronometer vs myfitnesspal" />
             <DialogCard title="Zero / Life" description="Track fasting windows." searchQuery="zero vs life fasting app" />
             <DialogCard title="Waking Up / Calm" description="Meditation and mindfulness." searchQuery="waking up vs calm app" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
