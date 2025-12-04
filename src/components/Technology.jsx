import React from 'react';
import { Watch, Smartphone, Cpu, Activity, Wifi, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

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

  // Define Sun icon locally if needed or import it (I used Zap/Activity as placeholders above, let's add Sun to imports if I use it)
  // Wait, I used <Sun> in therapies but didn't import it in the list above.
  // I should import Sun.
  
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
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </CardTitle>
                <CardDescription>{item.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
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
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                   {therapy.icon}
                   <span className="ml-2">{therapy.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{therapy.benefits}</p>
              </CardContent>
            </Card>
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
             <div className="p-4 bg-white rounded shadow">
               <h3 className="font-bold text-lg mb-1">Cronometer / MyFitnessPal</h3>
               <p className="text-sm text-gray-600">Track macro and micronutrients.</p>
             </div>
             <div className="p-4 bg-white rounded shadow">
               <h3 className="font-bold text-lg mb-1">Zero / Life</h3>
               <p className="text-sm text-gray-600">Track fasting windows.</p>
             </div>
             <div className="p-4 bg-white rounded shadow">
               <h3 className="font-bold text-lg mb-1">Waking Up / Calm</h3>
               <p className="text-sm text-gray-600">Meditation and mindfulness.</p>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Sun({ className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  );
}
