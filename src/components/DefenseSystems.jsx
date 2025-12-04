import React from 'react';
import { Shield, Zap, Syringe, Dna, Leaf, Microscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Link, Outlet, useOutlet } from 'react-router-dom';

export function DefenseSystems() {
  const defenseSystems = [
    {
      name: 'Immune System',
      description: 'The body\'s primary defense against pathogens.',
      icon: <Shield />,
      link: '/defense-systems/immune-system',
    },
    {
      name: 'Inflammatory Response',
      description: 'A coordinated response to repair damage and eliminate invaders.',
      icon: <Zap />,
      link: '/inflammation',
    },
    {
      name: 'Detoxification',
      description: 'The process of neutralizing and eliminating toxins from the body.',
      icon: <Syringe />,
      link: '/defense-systems/detoxification',
    },
    {
      name: 'Antioxidant Defense',
      description: 'Protection against oxidative stress and cellular damage.',
      icon: <Leaf />,
      link: '/defense-systems/antioxidant-defense',
    },
    {
      name: 'Cell Repair and Regeneration',
      description: 'Mechanisms for repairing damaged cells and tissues.',
      icon: <Dna />,
      link: '/defense-systems/cell-repair',
    },
    {
      name: 'Microbiome Balance',
      description: 'The role of beneficial microorganisms in protecting the host.',
      icon: <Microscope />,
      link: '/defense-systems/microbiome-balance',
    },
  ];

  const outlet = useOutlet();

  return outlet ? (
    <Outlet />
  ) : (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Defense Systems</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {defenseSystems.map((system, index) => (
          <Link to={system.link} key={index} className="block hover:no-underline">
            <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  {system.icon}
                  <span className="ml-2">{system.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{system.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
