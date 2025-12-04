import React from 'react';
import { Shield, Zap, Syringe, Dna, Leaf, Microscope } from 'lucide-react';

export const defenseSystemsData = {
  defenseSystems: [
    {
      name: 'Immune System',
      description: 'The body\'s primary defense against pathogens.',
      icon: <Shield />,
      link: '#immune-system',
    },
    {
      name: 'Detoxification',
      description: 'The process of neutralizing and eliminating toxins from the body.',
      icon: <Syringe />,
      link: '#detoxification',
    },
    {
      name: 'Antioxidant Defense',
      description: 'Protection against oxidative stress and cellular damage.',
      icon: <Leaf />,
      link: '#antioxidant-defense',
    },
    {
      name: 'Cell Repair and Regeneration',
      description: 'Mechanisms for repairing damaged cells and tissues.',
      icon: <Dna />,
      link: '#cell-repair',
    },
    {
      name: 'Microbiome Balance',
      description: 'The role of beneficial microorganisms in protecting the host.',
      icon: <Microscope />,
      link: '#microbiome-balance',
    },
    {
      name: 'Inflammatory Response',
      description: 'A coordinated response to repair damage and eliminate invaders.',
      icon: <Zap />,
      searchQuery: 'Longevity & Health Optimization > Inflammation',
    },
  ]
};
