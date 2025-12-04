import React from 'react'
import { Zap, Snowflake, Dumbbell, Clock, Lightbulb, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mitochondriaData } from '@/data/mitochondria'

export function Mitochondria() {
  const { improvements, supportiveCompounds, keyFacts } = mitochondriaData


  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Zap className="h-16 w-16 text-yellow-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mitochondria: Cellular Powerhouses
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about the energy-producing organelles that power your cells and discover
          how to optimize their function for longevity and vitality.
        </p>
      </div>

      {/* Key Facts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Understanding Mitochondria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyFacts.map((fact, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  {fact.icon}
                  <span className="ml-3">{fact.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Brown Fat Connection */}
      <Card className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-2xl text-orange-700 flex items-center">
            <Snowflake className="h-8 w-8 mr-3" />
            Brown Fat & Mitochondria
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Brown Fat is Packed with Mitochondria
              </h3>
              <p className="text-gray-700">
                Brown adipose tissue contains an exceptionally high density of mitochondria,
                which gives it its characteristic color and thermogenic properties.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Early Activity Matters
              </h3>
              <p className="text-gray-700">
                Children's physical activity levels help predetermine their mitochondrial
                load and capacity throughout life.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Improve */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          How to Improve Mitochondrial Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {improvements.map((improvement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {improvement.icon}
                  <span className="ml-2">{improvement.method}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{improvement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Supportive Compounds */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Mitochondrial Support Compounds
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Natural & Supplemental Support</CardTitle>
            <CardDescription>
              Compounds that specifically support mitochondrial function and energy production
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supportiveCompounds.map((compound, index) => (
                <div key={index} className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <Badge
                    variant="secondary"
                    className={`mb-2 ${compound.category === 'Superfoods' ? 'bg-green-100 text-green-700' :
                        compound.category === 'Technology' ? 'bg-blue-100 text-blue-700' :
                          compound.category === 'Supplement' ? 'bg-purple-100 text-purple-700' :
                            compound.category === 'Antioxidant' ? 'bg-orange-100 text-orange-700' :
                              'bg-red-100 text-red-700'
                      }`}
                  >
                    {compound.category}
                  </Badge>
                  <span className="text-center font-medium text-gray-900">
                    {compound.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Communication Network */}
      <Card className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-700 flex items-center">
            <Lightbulb className="h-8 w-8 mr-3" />
            Mitochondrial Communication
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Distributed Intelligence:</strong> Mitochondria are ancient bacteria that have
              developed sophisticated communication networks within cells.
            </p>
            <p className="text-gray-700">
              <strong>Dysfunction Signals:</strong> When mitochondria become dysfunctional, they
              signal other mitochondria, potentially spreading damage throughout the cell.
            </p>
            <p className="text-gray-700">
              <strong>Collective Function:</strong> Healthy mitochondria work together to maintain
              optimal cellular energy production and metabolic function.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Action Plan */}
      <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <CardContent className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">
            Optimize Your Cellular Energy
          </h3>
          <p className="text-lg text-yellow-100 mb-6">
            Start implementing these mitochondrial health strategies to boost your energy
            production and support healthy aging.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <Snowflake className="h-8 w-8 mb-2" />
              <span className="font-semibold">Cold Exposure</span>
            </div>
            <div className="flex flex-col items-center">
              <Dumbbell className="h-8 w-8 mb-2" />
              <span className="font-semibold">Zone 2 Exercise</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 mb-2" />
              <span className="font-semibold">Intermittent Fasting</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-8 w-8 mb-2" />
              <span className="font-semibold">Key Nutrients</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

