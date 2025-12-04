import React from 'react'
import { Recycle, Brain, Shield, Clock, Coffee, Dumbbell, Moon, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105 border-transparent hover:border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      {benefit.icon}
                      <span className="ml-2">{benefit.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">Click to learn more</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    {benefit.icon}
                    {benefit.name}
                  </DialogTitle>
                  <DialogDescription>
                    Key Benefit
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.details}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02] border-transparent hover:border-blue-200 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        {stimulator.icon}
                        <span className="ml-2">{stimulator.category}</span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </CardTitle>
                    <CardDescription>{stimulator.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {stimulator.methods.slice(0, 3).map((method, methodIndex) => (
                        <li key={methodIndex} className="flex items-center text-gray-700 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                          {method}
                        </li>
                      ))}
                      {stimulator.methods.length > 3 && (
                        <li className="text-sm text-gray-500 italic pl-4">
                          + {stimulator.methods.length - 3} more...
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-2xl">
                    {stimulator.icon}
                    {stimulator.category}
                  </DialogTitle>
                  <DialogDescription className="text-lg">
                    {stimulator.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Overview</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {stimulator.details}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Methods</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {stimulator.methods.map((method, i) => (
                        <li key={i} className="flex items-start text-gray-700 bg-gray-50 p-2 rounded">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-purple-700">
                  <Link to={`https://www.google.com/search?q=${encodeURIComponent(supplement.searchQuery)}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {supplement.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{supplement.description}</p>
              </CardContent>
            </Card>
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

