import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Heart, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/aging', label: 'Aging' },
    { path: '/inflammation', label: 'Inflammation' },
    { path: '/autophagy', label: 'Autophagy' },
    { path: '/mitochondria', label: 'Mitochondria' },
    { path: '/microbiome', label: 'Microbiome' },
    { path: '/bone-health', label: 'Bone Health' },
    { path: '/defense-systems', label: 'Defense Systems' },
    { path: '/circulation', label: 'Circulation' },
    { path: '/nutrition', label: 'Nutrition' },
    { path: '/exercise', label: 'Exercise' },
    { path: '/metabolism', label: 'Metabolism' },
    { path: '/sleep', label: 'Sleep' },
    { path: '/mindset', label: 'Mindset' },
    { path: '/technology', label: 'Technology' },
    { path: '/toxins', label: 'Toxins' },
    { path: '/other-health', label: 'Other Health' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Heart className="h-8 w-8 text-green-600" />
              <Activity className="h-8 w-8 text-blue-600" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Longevity & Health
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 8).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Dropdown for remaining items */}
            <div className="relative group">
              <Button variant="ghost" className="text-gray-700">
                More
              </Button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {navItems.slice(8).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      location.pathname === item.path
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

