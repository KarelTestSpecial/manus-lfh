import React from 'react';
import { Dumbbell, Heart, Activity, Bike, Waves, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export function Exercise() {
  const exerciseBenefits = [
    {
      name: "Cardiovascular Health",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      description: "Strengthens heart and improves blood circulation.",
	  searchQuery: "Longevity & Health Optimization > Exercise & Movement > Cardiovascular Health"
    },
    {
      name: "Muscle & Bone Strength",
      icon: <Dumbbell className="h-8 w-8 text-blue-500" />,
      description: "Builds and maintains muscle mass and bone density.",
	  searchQuery: "Longevity & Health Optimization > Exercise & Movement > Muscle & Bone Strength"
    },
    {
      name: "Metabolic Health",
      icon: <Activity className="h-8 w-8 text-green-500" />,
      description: "Improves insulin sensitivity and glucose regulation.",
	  searchQuery: "Longevity & Health Optimization > Exercise & Movement > Metabolic Health"
    },
    {
      name: "Mental Well-being",
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      description: "Reduces stress, anxiety, and improves mood.",
	  searchQuery: "Longevity & Health Optimization > Exercise & Movement > Mental Well-being"
    }
  ];

  const exerciseTypes = [
    {
      name: "Aerobic Exercise (Zone 2)",
      icon: <Bike className="h-8 w-8 text-purple-500" />,
      description: "Moderate intensity, sustainable for long periods (e.g., brisk walking, cycling).",
	  searchQuery: "Longevity & Health Optimization > Exercise & Movement > Aerobic Exercise (Zone 2)"
    },
    {
      name: "High-Intensity Interval Training (HIIT)",
      icon: <Activity className="h-8 w-8 text-orange-500" />,
      description: "Short bursts of intense exercise followed by brief recovery periods.",
	  searchQuery: "Longevity & Health Optimization > Exercise & Movement > High-Intensity Interval Training (HIIT)"
    },
    {
      name: "Strength Training",
      icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
      description: "Exercises that build muscle strength and endurance (e.g., weightlifting, bodyweight).",
	  searchQuery: "Longevity & Health Optimization > Exercise & Movement > Strength Training"
    },
    {
      name: "Flexibility & Balance",
      icon: <Waves className="h-8 w-8 text-indigo-500" />,
      description: "Activities like yoga or stretching to improve range of motion and stability.",
	  searchQuery: "Longevity & Health Optimization > Exercise & Movement > Flexibility & Balance"
    }
  ];

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
            <Card key={index} className="hover:shadow-lg transition-shadow">
			  <Link to={`https://www.google.com/search?q=${encodeURIComponent(benefit.searchQuery)}`} target="_blank" rel="noopener noreferrer">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {benefit.icon}
                  <CardTitle className="ml-3 text-xl">{benefit.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
			  </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Types of Exercise for Longevity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exerciseTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
			  <Link to={`https://www.google.com/search?q=${encodeURIComponent(type.searchQuery)}`} target="_blank" rel="noopener noreferrer">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {type.icon}
                  <CardTitle className="ml-3 text-xl">{type.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{type.description}</p>
              </CardContent>
			  </Link>
            </Card>
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



