import React from 'react';
import { Clock, TrendingDown, Target, Heart, Brain, Dumbbell, Utensils, Moon, Shield } from 'lucide-react';

export const agingData = {
    declineFactors: [
        { name: "Autophagy", icon: <Brain className="h-5 w-5" />, description: "Cellular recycling system efficiency", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > Autophagy" },
        { name: "Bone Density", icon: <Shield className="h-5 w-5" />, description: "Structural integrity and strength", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > Bone Density" },
        { name: "Gut Bacteria", icon: <Heart className="h-5 w-5" />, description: "Microbiome diversity and health", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > Gut Bacteria" },
        { name: "Muscle Mass", icon: <Dumbbell className="h-5 w-5" />, description: "Sarcopenia and strength loss", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > Muscle Mass" },
        { name: "NAD+ Levels", icon: <Target className="h-5 w-5" />, description: "Cellular energy metabolism", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > NAD+ Levels" },
        { name: "VO2 Max", icon: <Heart className="h-5 w-5" />, description: "Cardiovascular fitness capacity", searchQuery: "Longevity & Health Optimization > Aging > Decline with Age > VO2 Max" }
    ],
    healthyAgingInfluences: [
        { name: "Exercise", icon: <Dumbbell className="h-6 w-6 text-blue-500" />, impact: "High", searchQuery: "Longevity & Health Optimization > Aging > Healthy Aging Influences > Exercise" },
        { name: "Food", icon: <Utensils className="h-6 w-6 text-green-500" />, impact: "High", searchQuery: "Longevity & Health Optimization > Aging > Healthy Aging Influences > Food" },
        { name: "Mental Health", icon: <Brain className="h-6 w-6 text-purple-500" />, impact: "High", searchQuery: "Longevity & Health Optimization > Aging > Healthy Aging Influences > Mental Health" },
        { name: "Sleep", icon: <Moon className="h-6 w-6 text-indigo-500" />, impact: "High", searchQuery: "Longevity & Health Optimization > Aging > Healthy Aging Influences > Sleep" },
        { name: "Toxins", icon: <Shield className="h-6 w-6 text-red-500" />, impact: "Medium", searchQuery: "Longevity & Health Optimization > Aging > Healthy Aging Influences > Toxins" }
    ],
    keyInsights: [
        {
            title: "Mid-70s Significant Slowdown",
            icon: <TrendingDown className="h-6 w-6 inline mr-2" />,
            content: "Athletic performance and physical capabilities show marked decline in the mid-70s, making earlier intervention crucial.",
            searchQuery: "Longevity & Health Optimization > Aging > Key Insights About Aging > Mid-70s Significant Slowdown",
            colorClass: "orange"
        },
        {
            title: "Temporal Disconnect",
            icon: <Clock className="h-6 w-6 inline mr-2" />,
            content: "It's hard to act today for future benefits, but the choices we make now significantly impact our health decades later.",
            searchQuery: "Longevity & Health Optimization > Aging > Key Insights About Aging > Temporal Disconnect",
            colorClass: "purple"
        },
        {
            title: "Frailty Statistics",
            icon: <Shield className="h-6 w-6 inline mr-2" />,
            content: "25% of people become frail by age 85, characterized by loss of functional capacity and increased vulnerability.",
            searchQuery: "Longevity & Health Optimization > Aging > Key Insights About Aging > Frailty Statistics",
            colorClass: "red"
        },
        {
            title: "Effects Intensify",
            icon: <Heart className="h-6 w-6 inline mr-2" />,
            content: "The effects of aging become more pronounced in the second half of life, making prevention strategies essential.",
            searchQuery: "Longevity & Health Optimization > Aging > Key Insights About Aging > Effects Intensify",
            colorClass: "blue"
        }
    ]
};
