import React from 'react';
import { Dumbbell, Heart, Activity, Bike, Waves, Sun } from 'lucide-react';

export const exerciseData = {
    exerciseBenefits: [
        {
            name: "Cardiovascular Health",
            icon: <Heart className="h-8 w-8 text-red-500" />,
            description: "Strengthens heart and improves blood circulation.",
            searchQuery: "Longevity & Health Optimization > Exercise & Movement > Cardiovascular Health"
        },
        {
            name: "Muscle & Bone Strength",
            icon: <Dumbbell className="h-8 w-8 text-blue-500" />,
            description: "Builds and maintains muscle mass and bone density.",
            searchQuery: "Longevity & Health Optimization > Exercise & Movement > Muscle & Bone Strength"
        },
        {
            name: "Metabolic Health",
            icon: <Activity className="h-8 w-8 text-green-500" />,
            description: "Improves insulin sensitivity and glucose regulation.",
            searchQuery: "Longevity & Health Optimization > Exercise & Movement > Metabolic Health"
        },
        {
            name: "Mental Well-being",
            icon: <Sun className="h-8 w-8 text-yellow-500" />,
            description: "Reduces stress, anxiety, and improves mood.",
            searchQuery: "Longevity & Health Optimization > Exercise & Movement > Mental Well-being"
        }
    ],
    exerciseTypes: [
        {
            name: "Aerobic Exercise (Zone 2)",
            icon: <Bike className="h-8 w-8 text-purple-500" />,
            description: "Moderate intensity, sustainable for long periods (e.g., brisk walking, cycling).",
            searchQuery: "Longevity & Health Optimization > Exercise & Movement > Aerobic Exercise (Zone 2)"
        },
        {
            name: "High-Intensity Interval Training (HIIT)",
            icon: <Activity className="h-8 w-8 text-orange-500" />,
            description: "Short bursts of intense exercise followed by brief recovery periods.",
            searchQuery: "Longevity & Health Optimization > Exercise & Movement > High-Intensity Interval Training (HIIT)"
        },
        {
            name: "Strength Training",
            icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
            description: "Exercises that build muscle strength and endurance (e.g., weightlifting, bodyweight).",
            searchQuery: "Longevity & Health Optimization > Exercise & Movement > Strength Training"
        },
        {
            name: "Flexibility & Balance",
            icon: <Waves className="h-8 w-8 text-indigo-500" />,
            description: "Activities like yoga or stretching to improve range of motion and stability.",
            searchQuery: "Longevity & Health Optimization > Exercise & Movement > Flexibility & Balance"
        }
    ]
};
