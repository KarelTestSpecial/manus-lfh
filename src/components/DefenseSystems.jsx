import React from 'react';
import { DialogCard } from '@/components/ui/DialogCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, Outlet, useOutlet } from 'react-router-dom';
import { defenseSystemsData } from '@/data/defense-systems';

export function DefenseSystems() {
  const { defenseSystems } = defenseSystemsData;
  const outlet = useOutlet();

  return outlet ? (
    <Outlet />
  ) : (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Defense Systems</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {defenseSystems.map((system, index) => {
          if (system.link) {
            return (
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
            );
          }
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
    </div>
  );
}
