import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, Heart, Brain, Dna, Zap, Shield, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import heroImage from '../assets/8iYQd9Va36Vo.jpg'

export function Home() {
  const keyTopicsSectionRef = useRef(null)

  const handleScroll = () => {
    keyTopicsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const keyTopics = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Aging & Longevity",
      description: "Understanding the aging process and how to add life to years, not just years to life.",
      link: "/aging"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Autophagy",
      description: "Cellular recycling system that maintains cell health and promotes longevity.",
      link: "/autophagy"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Mitochondria",
      description: "The powerhouse of cells - energy production and aging prevention.",
      link: "/mitochondria"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Inflammation",
      description: "Understanding chronic inflammation and how to reduce it naturally.",
      link: "/inflammation"
    },
    {
      icon: <Dna className="h-8 w-8 text-blue-500" />,
      title: "Microbiome",
      description: "Gut health and the trillions of bacteria that support overall wellness.",
      link: "/microbiome"
    },
    {
      icon: <Activity className="h-8 w-8 text-orange-500" />,
      title: "Exercise & Movement",
      description: "Physical activity as medicine for longevity and health optimization.",
      link: "/exercise"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Longevity & Health
            <span className="block text-green-400">Optimization</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover evidence-based strategies to optimize your health, extend your lifespan, 
            and add quality to your years through science-backed approaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={handleScroll}>
              Start Your Journey
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section ref={keyTopicsSectionRef} className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Areas of Health Optimization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the fundamental pillars of longevity science and discover how to optimize 
            each aspect of your health for maximum vitality and lifespan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyTopics.map((topic, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  {topic.icon}
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={topic.link}>
                  <Button variant="ghost" className="w-full group-hover:bg-green-50 group-hover:text-green-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Optimize Your Health?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Take control of your longevity journey with evidence-based strategies 
            that can help you live longer, healthier, and more vibrant life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link to="/nutrition">
                Start with Nutrition
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Link to="/exercise">
                Explore Exercise
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

