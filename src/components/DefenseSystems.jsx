import React from 'react';
import { Shield, Zap, Users, ShieldCheck, Heart, Dumbbell, Moon, Utensils, Syringe, Dna, Microscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DialogCard } from '@/components/ui/DialogCard';
import { defenseSystemsData } from '@/data/defense-systems';
import { detoxificationData } from '@/data/detoxification';
import { antioxidantDefenseData } from '@/data/antioxidant-defense';
import { cellRepairData } from '@/data/cell-repair';
import { microbiomeBalanceData } from '@/data/microbiome-balance';

export function DefenseSystems() {
  const { defenseSystems } = defenseSystemsData;
  const { detoxificationPathways, waysToSupportDetox } = detoxificationData;
  const { intro: antioxidantIntro, antioxidantSystems, waysToSupport: waysToSupportAntioxidants } = antioxidantDefenseData;
  const { cellRepairMechanisms, waysToSupportCellRepair } = cellRepairData;
  const { microbiomeFunctions, waysToSupportMicrobiome } = microbiomeBalanceData;

  const immuneCellTypes = [
    { name: "Innate Immune System", description: "First line of defense, non-specific.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Innate Immune System" },
    { name: "Adaptive Immune System", description: "Specific, targeted defense with memory.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Adaptive Immune System" },
    { name: "T-Cells", description: "Cell-mediated immunity.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > T-Cells" },
    { name: "B-Cells", description: "Produce antibodies.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > B-Cells" },
    { name: "Natural Killer (NK) Cells", description: "Kill infected or cancerous cells.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Natural Killer (NK) Cells" },
    { name: "Macrophages", description: "Engulf and digest cellular debris.", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Macrophages" }
  ];

  const factorsThatWeakenImmunity = [
    { name: "Chronic Stress", icon: <Zap className="h-5 w-5" />, impact: "High", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Chronic Stress" },
    { name: "Poor Sleep", icon: <Moon className="h-5 w-5" />, impact: "High", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Poor Sleep" },
    { name: "Poor Nutrition", icon: <Utensils className="h-5 w-5" />, impact: "High", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Poor Nutrition" },
    { name: "Sedentary Lifestyle", icon: <Dumbbell className="h-5 w-5" />, impact: "Medium", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Sedentary Lifestyle" },
    { name: "Excess Alcohol", icon: <Heart className="h-5 w-5" />, impact: "Medium", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Excess Alcohol" },
    { name: "Aging (Immunosenescence)", icon: <Users className="h-5 w-5" />, impact: "High", searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Aging (Immunosenescence)" }
  ];

  const waysToSupportImmunity = [
    { name: "Balanced Diet", description: "Rich in vitamins and minerals.", icon: <Utensils className="h-6 w-6 text-green-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Balanced Diet" },
    { name: "Regular Exercise", description: "Moderate intensity is key.", icon: <Dumbbell className="h-6 w-6 text-blue-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Regular Exercise" },
    { name: "Quality Sleep", description: "7-9 hours per night.", icon: <Moon className="h-6 w-6 text-indigo-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Quality Sleep" },
    { name: "Stress Management", description: "Mindfulness, meditation.", icon: <Zap className="h-6 w-6 text-yellow-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Stress Management" },
    { name: "Supplementation", description: "Vitamin D, C, Zinc.", icon: <ShieldCheck className="h-6 w-6 text-purple-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Supplementation" },
    { name: "Hydration", description: "Water is essential for immune function.", icon: <Heart className="h-6 w-6 text-red-500" />, searchQuery: "Longevity & Health Optimization > Defense Systems > Immune System > Hydration" }
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Defense Systems</h1>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {defenseSystems.map((system, index) => {
          // Internal links for consolidated sections
          if (system.link) {
            const targetId = system.link.substring(1); // Remove '#'
            return (
              <a href={system.link} key={index} className="block hover:no-underline" onClick={(e) => handleScroll(e, targetId)}>
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
              </a>
            );
          }
          // External link / DialogCard for other items
          return (
            <DialogCard
              key={index}
              icon={system.icon}
              title={system.name}
              description={system.description}
              searchQuery={system.searchQuery}
            />
          );
        })}
      </div>

      {/* --- Consolidated Sections --- */}

      {/* Immune System Section */}
      <section id="immune-system" className="mb-20 pt-10">
        <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Immune System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your body's primary defense against pathogens. A complex network of cells, tissues, and organs that work together to protect you.
            </p>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Components of the Immune System
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {immuneCellTypes.map((cell, index) => (
            <DialogCard
                key={index}
                title={cell.name}
                description={cell.description}
                searchQuery={cell.searchQuery}
            />
            ))}
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Factors That Weaken Immunity
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {factorsThatWeakenImmunity.map((factor, index) => (
            <DialogCard
                key={index}
                icon={factor.icon}
                title={factor.name}
                searchQuery={factor.searchQuery}
            >
                <div className="mt-2">
                <Badge
                    variant={factor.impact === 'High' ? 'destructive' : 'secondary'}
                >
                    {factor.impact} Impact
                </Badge>
                </div>
            </DialogCard>
            ))}
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ways to Support a Healthy Immune System
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waysToSupportImmunity.map((way, index) => (
            <DialogCard
                key={index}
                icon={way.icon}
                title={way.name}
                description={way.description}
                searchQuery={way.searchQuery}
            />
            ))}
        </div>
      </section>

      {/* Detoxification Section */}
      <section id="detoxification" className="mb-20 pt-10">
        <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
                <Syringe className="h-16 w-16 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Detoxification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The process of neutralizing and eliminating toxins from the body.
            </p>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Detoxification Pathways
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {detoxificationPathways.map((pathway, index) => (
            <DialogCard
                key={index}
                title={pathway.name}
                description={pathway.description}
                searchQuery={pathway.searchQuery}
            />
            ))}
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ways to Support Detoxification
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToSupportDetox.map((way, index) => (
            <DialogCard
                key={index}
                icon={way.icon}
                title={way.name}
                searchQuery={way.searchQuery}
            />
            ))}
        </div>
      </section>

      {/* Antioxidant Defense Section */}
      <section id="antioxidant-defense" className="mb-20 pt-10">
        <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
                {antioxidantIntro.icon}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {antioxidantIntro.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {antioxidantIntro.subtitle}
            </p>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Antioxidant Systems
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {antioxidantSystems.map((system, index) => (
                <DialogCard
                key={index}
                icon={system.icon}
                title={system.name}
                description={system.description}
                searchQuery={system.searchQuery}
                />
            ))}
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ways to Support Antioxidant Defense
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waysToSupportAntioxidants.map((way, index) => (
                <DialogCard
                key={index}
                icon={way.icon}
                title={way.name}
                description={way.description}
                searchQuery={way.searchQuery}
                />
            ))}
        </div>
      </section>

      {/* Cell Repair Section */}
      <section id="cell-repair" className="mb-20 pt-10">
        <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
                <Dna className="h-16 w-16 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Cell Repair and Regeneration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mechanisms for repairing damaged cells and tissues to maintain health.
            </p>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Cell Repair Mechanisms
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cellRepairMechanisms.map((mechanism, index) => (
                <DialogCard
                key={index}
                title={mechanism.name}
                description={mechanism.description}
                searchQuery={mechanism.searchQuery}
                />
            ))}
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ways to Support Cell Repair
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waysToSupportCellRepair.map((way, index) => (
                <DialogCard
                key={index}
                icon={way.icon}
                title={way.name}
                searchQuery={way.searchQuery}
                />
            ))}
        </div>
      </section>

      {/* Microbiome Balance Section */}
      <section id="microbiome-balance" className="pt-10">
        <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
                <Microscope className="h-16 w-16 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Microbiome Balance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The role of beneficial microorganisms in protecting the host.
            </p>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Microbiome Functions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {microbiomeFunctions.map((func, index) => (
                <DialogCard
                key={index}
                title={func.name}
                description={func.description}
                searchQuery={func.searchQuery}
                />
            ))}
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ways to Support a Healthy Microbiome
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waysToSupportMicrobiome.map((way, index) => (
                <DialogCard
                key={index}
                icon={way.icon}
                title={way.name}
                searchQuery={way.searchQuery}
                />
            ))}
        </div>
      </section>
    </div>
  );
}
