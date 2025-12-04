import React from 'react';
import { Shield, Heart, Dna, Bug, Brain, Zap, Syringe, Bone, Activity, Leaf, Microscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Link } from 'react-router-dom';

export function DefenseSystems() {
  const defenseSystems = [
    {
      name: 'Immuunsysteem',
      description: 'De primaire verdediging van het lichaam tegen ziekteverwekkers.',
      icon: Shield,
      link: '/defense-systems/immune-system',
    },
    {
      name: 'Ontstekingsreactie',
      description: 'Een gecoördineerde respons om schade te herstellen en indringers te elimineren.',
      icon: Zap,
      link: '/defense-systems/inflammation',
    },
    {
      name: 'Detoxificatie',
      description: 'Het proces van het neutraliseren en elimineren van gifstoffen uit het lichaam.',
      icon: Syringe,
      link: '/defense-systems/detoxification',
    },
    {
      name: 'Antioxidante Defensie',
      description: 'Bescherming tegen oxidatieve stress en celbeschadiging.',
      icon: Leaf,
      link: '/defense-systems/antioxidant-defense',
    },
    {
      name: 'Celreparatie en Regeneratie',
      description: 'Mechanismen voor het herstellen van beschadigde cellen en weefsels.',
      icon: Dna,
      link: '/defense-systems/cell-repair',
    },
    {
      name: 'Microbioom Balans',
      description: 'De rol van gunstige micro-organismen in de bescherming van de gastheer.',
      icon: Microscope,
      link: '/defense-systems/microbiome-balance',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Verdedigingssystemen</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {defenseSystems.map((system, index) => (
          <Link to={system.link} key={index}>
            <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium">
                  {system.name}
                </CardTitle>
                <system.icon className="h-8 w-8 text-gray-500" />
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{system.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}


