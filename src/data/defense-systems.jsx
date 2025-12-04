import React from 'react';
import { Shield, Zap, Syringe, Dna, Leaf, Microscope } from 'lucide-react';

export const defenseSystemsData = {
  defenseSystems: [
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
      searchQuery: 'Longevity & Health Optimization > Inflammation',
    },
    {
      name: 'Detoxification',
      description: 'The process of neutralizing and eliminating toxins from the body.',
      icon: <Syringe />,
      searchQuery: 'Longevity & Health Optimization > Defense Systems > Detoxification',
    },
    {
      name: 'Antioxidant Defense',
      description: 'Protection against oxidative stress and cellular damage.',
      icon: <Leaf />,
      searchQuery: 'Longevity & Health Optimization > Defense Systems > Antioxidant Defense',
    },
    {
      name: 'Cell Repair and Regeneration',
      description: 'Mechanisms for repairing damaged cells and tissues.',
      icon: <Dna />,
      searchQuery: 'Longevity & Health Optimization > Defense Systems > Cell Repair',
    },
    {
      name: 'Microbiome Balance',
      description: 'The role of beneficial microorganisms in protecting the host.',
      icon: <Microscope />,
      searchQuery: 'Longevity & Health Optimization > Defense Systems > Microbiome Balance',
    },
  ]
};
