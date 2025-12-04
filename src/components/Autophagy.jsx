import React from 'react'
import { Recycle, Shield, Clock, Coffee, Dumbbell, Moon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { DialogCard } from '@/components/ui/DialogCard'
import { autophagyData } from '@/data/autophagy'

export function Autophagy() {
  const { benefits, stimulators, supplements } = autophagyData


  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Recycle className="h-16 w-16 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Autophagy: Cellular Recycling
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how your body's natural recycling system cleans up damaged components,
          maintains cell health, and promotes longevity.
        </p>
      </div>

      {/* Importance */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Autophagy Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <DialogCard
              key={index}
              icon={benefit.icon}
              title={benefit.name}
              description={benefit.details}
              searchQuery={`Longevity & Health Optimization > Aging > Autophagy > Benefits > ${benefit.name}`}
            />
          ))}
        </div>
      </section>

      {/* Cancer Paradox */}
      <Alert className="mb-12 border-yellow-300 bg-yellow-50">
        <Shield className="h-4 w-4" />
        <AlertDescription className="text-gray-700">
          <strong>Autophagy & Cancer Paradox:</strong> Autophagy is beneficial for preventing cancer
          by keeping normal cells healthy, but it can potentially speed up advanced cancer progression.
          This is why cancer treatment sometimes involves autophagy inhibitors.
        </AlertDescription>
      </Alert>

      {/* How to Stimulate Autophagy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          How to Stimulate Autophagy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stimulators.map((stimulator, index) => (
            <DialogCard
              key={index}
              icon={stimulator.icon}
              title={stimulator.category}
              description={stimulator.details}
              searchQuery={`Longevity & Health Optimization > Aging > Autophagy > Stimulators > ${stimulator.category}`}
            />
          ))}
        </div>
      </section>

      {/* Fasting Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Fasting & Autophagy Timeline
        </h2>
        <Card className="bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">12 Hours</h3>
                <p className="text-gray-600">Autophagy begins to activate</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24-48 Hours</h3>
                <p className="text-gray-600">Significant increase in activity</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">48-72 Hours</h3>
                <p className="text-gray-600">Peak autophagy activation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Supplements */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Autophagy-Supporting Supplements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supplements.map((supplement, index) => (
            <DialogCard
              key={index}
              title={supplement.name}
              description={supplement.description}
              searchQuery={supplement.searchQuery}
            />
          ))}
        </div>
      </section>

      {/* Action Steps */}
      <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">
            Boost Your Cellular Recycling
          </h3>
          <p className="text-lg text-green-100 mb-6">
            Start implementing these autophagy-stimulating strategies to enhance
            your cellular health and longevity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 mb-2" />
              <span className="font-semibold">Try Intermittent Fasting</span>
            </div>
            <div className="flex flex-col items-center">
              <Dumbbell className="h-8 w-8 mb-2" />
              <span className="font-semibold">Exercise Regularly</span>
            </div>
            <div className="flex flex-col items-center">
              <Coffee className="h-8 w-8 mb-2" />
              <span className="font-semibold">Drink Green Tea</span>
            </div>
            <div className="flex flex-col items-center">
              <Moon className="h-8 w-8 mb-2" />
              <span className="font-semibold">Get Quality Sleep</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
