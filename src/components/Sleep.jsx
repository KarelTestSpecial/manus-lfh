import React from 'react';
import { Moon, Sun, Clock, Battery, Brain, Zap, Coffee, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DialogCard } from '@/components/ui/DialogCard';

export function Sleep() {
  const sleepStages = [
    {
      name: "Light Sleep",
      description: "Transition from wakefulness, muscles relax, heart rate slows.",
      icon: <Moon className="h-6 w-6 text-blue-300" />,
      percentage: "50-60%"
    },
    {
      name: "Deep Sleep (SWS)",
      description: "Physical restoration, immune boosting, growth hormone release.",
      icon: <Battery className="h-6 w-6 text-blue-500" />,
      percentage: "10-25%"
    },
    {
      name: "REM Sleep",
      description: "Mental restoration, memory consolidation, dreaming.",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      percentage: "20-25%"
    }
  ];

  const hygieneTips = [
    {
      title: "Consistency",
      icon: <Clock className="h-5 w-5 text-green-500" />,
      tip: "Go to bed and wake up at the same time every day, even on weekends."
    },
    {
      title: "Light Environment",
      icon: <Sun className="h-5 w-5 text-orange-500" />,
      tip: "Get morning sunlight within 30 mins of waking. Avoid blue light 2 hours before bed."
    },
    {
      title: "Temperature",
      icon: <Zap className="h-5 w-5 text-blue-400" />,
      tip: "Keep your bedroom cool (around 65°F/18°C) for optimal sleep."
    },
    {
      title: "Caffeine/Alcohol",
      icon: <Coffee className="h-5 w-5 text-brown-500" />,
      tip: "Avoid caffeine after 2 PM and limit alcohol before bed (it disrupts REM)."
    },
    {
      title: "Wind Down",
      icon: <Smartphone className="h-5 w-5 text-gray-500" />,
      tip: "Create a relaxing routine. Read, stretch, or meditate instead of scrolling."
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Moon className="h-16 w-16 text-indigo-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sleep Optimization
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Sleep is the foundation of health. It's when your body repairs itself, clears toxins 
          from the brain, and consolidates memories.
        </p>
      </div>

      {/* Importance of Sleep */}
      <Card className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-indigo-700">
            <Brain className="h-8 w-8 mr-3" />
            Why We Sleep
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-4">
            Sleep is not just a passive state of rest. It is an active neurological process 
            vital for physical and mental health. Lack of sleep is linked to virtually every 
            major chronic disease, including Alzheimer's, cancer, diabetes, and heart disease.
          </p>
          <div className="flex flex-wrap gap-3">
             <Badge variant="secondary" className="bg-white">Glymphatic System Cleansing</Badge>
             <Badge variant="secondary" className="bg-white">Hormone Regulation</Badge>
             <Badge variant="secondary" className="bg-white">Memory Consolidation</Badge>
             <Badge variant="secondary" className="bg-white">Cellular Repair</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Sleep Stages */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Understanding Sleep Stages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sleepStages.map((stage, index) => (
            <DialogCard
              key={index}
              icon={stage.icon}
              title={stage.name}
              description={stage.description}
              searchQuery={`Longevity & Health Optimization > Sleep Optimization > Sleep Stages > ${stage.name}`}
            >
              <div className="mt-2">
                <Badge variant="outline">{stage.percentage} of night</Badge>
              </div>
            </DialogCard>
          ))}
        </div>
      </section>

      {/* Sleep Hygiene */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Sleep Hygiene Protocol
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hygieneTips.map((tip, index) => (
            <DialogCard
              key={index}
              icon={tip.icon}
              title={tip.title}
              description={tip.tip}
              searchQuery={`Longevity & Health Optimization > Sleep Optimization > Sleep Hygiene > ${tip.title}`}
            />
          ))}
        </div>
      </section>

      {/* Tools & Tech */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Tools for Better Sleep
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <Card>
             <CardHeader>
               <CardTitle>Supplements</CardTitle>
             </CardHeader>
             <CardContent>
               <ul className="list-disc pl-5 space-y-2 text-gray-700">
                 <li><strong>Magnesium Threonate/Glycinate:</strong> Helps with relaxation.</li>
                 <li><strong>L-Theanine:</strong> Promotes calmness without sedation.</li>
                 <li><strong>Apigenin:</strong> Found in chamomile, aids sleep onset.</li>
                 <li><strong>Glycine:</strong> Lowers core body temperature.</li>
               </ul>
             </CardContent>
           </Card>
           <Card>
             <CardHeader>
               <CardTitle>Environment</CardTitle>
             </CardHeader>
             <CardContent>
               <ul className="list-disc pl-5 space-y-2 text-gray-700">
                 <li>Blackout curtains or sleep mask</li>
                 <li>White noise machine or earplugs</li>
                 <li>Weighted blanket</li>
                 <li>Cooling mattress pad</li>
               </ul>
             </CardContent>
           </Card>
        </div>
      </section>
    </div>
  );
}
