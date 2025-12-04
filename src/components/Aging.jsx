import React from 'react';
import { Clock, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { agingData } from '@/data/aging';
import { DialogCard } from '@/components/ui/DialogCard';

export function Aging() {
  const { declineFactors, healthyAgingInfluences, keyInsights } = agingData;

  const getColorClasses = (color) => {
    const classes = {
      orange: { border: 'border-orange-200', bg: 'bg-orange-50', text: 'text-orange-700' },
      purple: { border: 'border-purple-200', bg: 'bg-purple-50', text: 'text-purple-700' },
      red: { border: 'border-red-200', bg: 'bg-red-50', text: 'text-red-700' },
      blue: { border: 'border-blue-200', bg: 'bg-blue-50', text: 'text-blue-700' }
    };
    return classes[color] || classes.blue;
  };

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
            <DialogCard
              key={index}
              icon={factor.icon}
              title={factor.name}
              description={factor.description}
              searchQuery={factor.searchQuery}
            />
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
            <DialogCard
              key={index}
              icon={influence.icon}
              title={influence.name}
              searchQuery={influence.searchQuery}
              className="text-center"
            >
              <div className="mt-2">
                <Badge
                  variant={influence.impact === 'High' ? 'default' : 'secondary'}
                  className={influence.impact === 'High' ? 'bg-green-600' : ''}
                >
                  {influence.impact} Impact
                </Badge>
              </div>
            </DialogCard>
          ))}
        </div>
      </section>

      {/* Key Insights */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Insights About Aging
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyInsights.map((insight, index) => {
            const colors = getColorClasses(insight.colorClass);
            return (
              <DialogCard
                key={index}
                icon={insight.icon}
                title={insight.title}
                description={insight.content}
                searchQuery={insight.searchQuery}
                className={`${colors.border} ${colors.bg}`}
              />
            );
          })}
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
