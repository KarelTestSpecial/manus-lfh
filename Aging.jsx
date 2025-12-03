import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, TrendingDown, Target, Heart, Brain, Dumbbell, Utensils, Moon, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Aging() {
  const declineFactors = [
    { name: "Autophagy", icon: <Brain className="h-5 w-5" />, description: "Cellular recycling system efficiency", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > Autophagy" },
    { name: "Bone Density", icon: <Shield className="h-5 w-5" />, description: "Structural integrity and strength", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > Bone Density" },
    { name: "Gut Bacteria", icon: <Heart className="h-5 w-5" />, description: "Microbiome diversity and health", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > Gut Bacteria" },
    { name: "Muscle Mass", icon: <Dumbbell className="h-5 w-5" />, description: "Sarcopenia and strength loss", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > Muscle Mass" },
    { name: "NAD+ Levels", icon: <Target className="h-5 w-5" />, description: "Cellular energy metabolism", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > NAD+ Levels" },
    { name: "VO2 Max", icon: <Heart className="h-5 w-5" />, description: "Cardiovascular fitness capacity", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > VO2 Max" }
  ];

  const healthyAgingInfluences = [
    { name: "Exercise", icon: <Dumbbell className="h-6 w-6 text-blue-500" />, impact: "High" },
    { name: "Food", icon: <Utensils className="h-6 w-6 text-green-500" />, impact: "High" },
    { name: "Mental Health", icon: <Brain className="h-6 w-6 text-purple-500" />, impact: "High" },
    { name: "Sleep", icon: <Moon className="h-6 w-6 text-indigo-500" />, impact: "High" },
    { name: "Toxins", icon: <Shield className="h-6 w-6 text-red-500" />, impact: "Medium" }
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Clock className="h-16 w-16 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Understanding Aging
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Aging is inevitable, but the rate of decline is variable. Learn how to optimize 
          your health to add life to years, not just years to life.
        </p>
      </div>

      {/* Goal Section */}
      <Card className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-green-700">
            <Target className="h-8 w-8 mr-3" />
            Primary Goal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700">
            <strong>Add Life to Years, Not Just Years to Life</strong> - Focus on maintaining 
            functional capacity, vitality, and quality of life as we age.
          </p>
        </CardContent>
      </Card>

      {/* Decline Factors */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Factors That Decline with Age
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {declineFactors.map((factor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  {factor.icon}
                  <Link to={`https://www.google.com/search?q=${encodeURIComponent(factor.searchQuery)}`} target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
                    {factor.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{factor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Healthy Aging Influences */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Healthy Aging Influences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {healthyAgingInfluences.map((influence, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  {influence.icon}
                </div>
                <CardTitle className="text-lg">{influence.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge 
                  variant={influence.impact === 'High' ? 'default' : 'secondary'}
                  className={influence.impact === 'High' ? 'bg-green-600' : ''}
                >
                  {influence.impact} Impact
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Insights */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Insights About Aging
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-700">
                <TrendingDown className="h-6 w-6 inline mr-2" />
                Mid-70s Significant Slowdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Athletic performance and physical capabilities show marked decline 
                in the mid-70s, making earlier intervention crucial.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-700">
                <Clock className="h-6 w-6 inline mr-2" />
                Temporal Disconnect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                It's hard to act today for future benefits, but the choices we make 
                now significantly impact our health decades later.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-700">
                <Shield className="h-6 w-6 inline mr-2" />
                Frailty Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                25% of people become frail by age 85, characterized by loss of 
                functional capacity and increased vulnerability.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-700">
                <Heart className="h-6 w-6 inline mr-2" />
                Effects Intensify
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The effects of aging become more pronounced in the second half 
                of life, making prevention strategies essential.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <CardContent className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">
            Take Action Today for Tomorrow's Health
          </h3>
          <p className="text-lg text-blue-100 mb-6">
            While aging is inevitable, the rate of decline is within your control. 
            Start implementing healthy aging strategies now.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Exercise Regularly
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Eat Nutrient-Dense Foods
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Prioritize Sleep
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Manage Stress
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


