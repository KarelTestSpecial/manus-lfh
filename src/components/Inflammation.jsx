import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, AlertTriangle, CheckCircle, X, Heart, Brain, Dumbbell, Moon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { inflammationData } from '@/data/inflammation';

export function Inflammation() {
  const { causes, consequences, solutions } = inflammationData;

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Flame className="h-16 w-16 text-red-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Understanding Inflammation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn the difference between beneficial acute inflammation and harmful chronic
          inflammation, and discover evidence-based strategies to reduce it.
        </p>
      </div>

      {/* Acute vs Chronic */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Acute vs. Chronic Inflammation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Acute Inflammation Card */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-green-700">
                <CheckCircle className="h-8 w-8 mr-3" />
                Acute Inflammation: The Body's Protector
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">
                Acute inflammation is a <strong>short-term, beneficial process</strong> initiated by the body's immune system in response to injury or infection. It helps to heal wounds, fight off pathogens, and remove damaged cells. This type of inflammation is crucial for survival and typically resolves once the threat is neutralized.
              </p>
            </CardContent>
          </Card>

          {/* Chronic Inflammation Card (previously "Warning Section") */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-red-700">
                <AlertTriangle className="h-8 w-8 mr-3" />
                Chronic Inflammation: The Silent Killer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">
                Unlike acute inflammation (which heals wounds), <strong>chronic inflammation</strong> simmers
                in the background, damaging tissues and organs over decades without obvious symptoms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Causes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Common Causes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((cause, index) => (
            <InfoCard
              key={index}
              icon={<X className="h-5 w-5 text-red-500" />}
              title={cause.name}
              searchQuery={cause.searchQuery}
            />
          ))}
        </div>
      </section>

      {/* Consequences */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Health Consequences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consequences.map((consequence, index) => (
            <InfoCard
              key={index}
              icon={<AlertTriangle className="h-5 w-5 text-orange-500" />}
              title={consequence.name}
              searchQuery={consequence.searchQuery}
            >
              <div className="mt-2">
                <Badge variant={consequence.severity === 'high' ? 'destructive' : 'secondary'}>
                  {consequence.severity.toUpperCase()} Severity
                </Badge>
              </div>
            </InfoCard>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          How to Reduce Inflammation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  {category.icon}
                  <span className="ml-2">{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <InfoCard
                      key={itemIndex}
                      icon={<CheckCircle className="h-4 w-4 text-green-500" />}
                      title={item.name}
                      searchQuery={item.searchQuery}
                      className="mb-2"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    
      {/* Action Plan */}
      <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">
            Your Anti-Inflammatory Action Plan
          </h3>
          <p className="text-lg text-green-100 mb-6">
            Start implementing these evidence-based strategies to reduce chronic inflammation
            and protect your long-term health.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <Heart className="h-8 w-8 mb-2" />
              <span className="font-semibold">Eat Anti-Inflammatory Foods</span>
            </div>
            <div className="flex flex-col items-center">
              <Dumbbell className="h-8 w-8 mb-2" />
              <span className="font-semibold">Exercise Regularly</span>
            </div>
            <div className="flex flex-col items-center">
              <Moon className="h-8 w-8 mb-2" />
              <span className="font-semibold">Prioritize Sleep</span>
            </div>
            <div className="flex flex-col items-center">
              <Brain className="h-8 w-8 mb-2" />
              <span className="font-semibold">Manage Stress</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
