import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, Heart, Brain, Dna, Zap, Shield, Activity, Utensils, Moon, Bone, Cpu, Biohazard } from 'lucide-react'
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
      title: "Aging",
      description: "Understanding the aging process and adding life to years.",
      link: "/aging"
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-500" />,
      title: "Defense Systems",
      description: "Strengthening the body's natural defense mechanisms.",
      link: "/defense-systems"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Inflammation",
      description: "Understanding and reducing chronic inflammation.",
      link: "/inflammation"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Autophagy",
      description: "The cellular recycling system for promoting longevity.",
      link: "/autophagy"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Mitochondria",
      description: "The powerhouse of cells for energy and aging prevention.",
      link: "/mitochondria"
    },
    {
      icon: <Dna className="h-8 w-8 text-blue-500" />,
      title: "Microbiome",
      description: "Gut health and the bacteria that support overall wellness.",
      link: "/microbiome"
    },
    {
      icon: <Utensils className="h-8 w-8 text-amber-600" />,
      title: "Nutrition",
      description: "Fueling your body for optimal health and longevity.",
      link: "/nutrition"
    },
    {
      icon: <Activity className="h-8 w-8 text-orange-500" />,
      title: "Exercise",
      description: "Physical activity as medicine for a long and healthy life.",
      link: "/exercise"
    },
    {
      icon: <Moon className="h-8 w-8 text-indigo-500" />,
      title: "Sleep",
      description: "The foundation of physical and mental restoration.",
      link: "/sleep"
    },
    {
      icon: <Bone className="h-8 w-8 text-gray-500" />,
      title: "Bone Health",
      description: "Maintaining a strong and resilient skeletal structure.",
      link: "/bone-health"
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: "Circulation",
      description: "Ensuring optimal blood flow and nutrient delivery.",
      link: "/circulation"
    },
    {
      icon: <Zap className="h-8 w-8 text-lime-500" />,
      title: "Metabolism",
      description: "Optimizing the body's energy conversion processes.",
      link: "/metabolism"
    },
    {
      icon: <Brain className="h-8 w-8 text-pink-500" />,
      title: "Mindset",
      description: "The role of mental well-being in a long, healthy life.",
      link: "/mindset"
    },
    {
      icon: <Cpu className="h-8 w-8 text-cyan-500" />,
      title: "Technology",
      description: "Leveraging tech for health monitoring and improvement.",
      link: "/technology"
    },
    {
      icon: <Biohazard className="h-8 w-8 text-red-700" />,
      title: "Toxins",
      description: "Identifying and mitigating exposure to harmful substances.",
      link: "/toxins"
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
            <Link to={topic.link} key={index} className="block group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-500">
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
                  <div className="text-sm text-green-600 font-semibold group-hover:underline">
                    Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Explore Other Health Topics
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Discover a wide range of additional health and longevity topics
            to continue your journey of optimization.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-gray-800 hover:bg-gray-200" data-testid="other-health-button">
              <Link to="/other-health">Other Health</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

