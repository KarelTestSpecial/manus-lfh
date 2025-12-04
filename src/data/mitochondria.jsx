import React from 'react';
import { Zap, Snowflake, Dumbbell, Clock, Lightbulb, Heart } from 'lucide-react';

export const mitochondriaData = {
    improvements: [
        {
            method: "Cold Exposure",
            icon: <Snowflake className="h-6 w-6 text-blue-500" />,
            description: "Activates brown fat and stimulates mitochondrial biogenesis"
        },
        {
            method: "Exercise (Zone 2 & HIIT)",
            icon: <Dumbbell className="h-6 w-6 text-green-500" />,
            description: "Especially effective for mitochondrial health and energy production"
        },
        {
            method: "Intermittent Fasting",
            icon: <Clock className="h-6 w-6 text-orange-500" />,
            description: "Forces mitochondria to become more efficient"
        },
        {
            method: "Key Nutrients",
            icon: <Heart className="h-6 w-6 text-red-500" />,
            description: "CoQ10, PQQ, and other mitochondrial cofactors"
        }
    ],
    supportiveCompounds: [
        { name: "Algae (Spirulina, Chlorella)", category: "Superfoods" },
        { name: "Red Light Therapy", category: "Technology" },
        { name: "Dihydromyricetin", category: "Supplement" },
        { name: "OEA (Oleoylethanolamide)", category: "Supplement" },
        { name: "Astaxanthin", category: "Antioxidant" },
        { name: "CoQ10", category: "Cofactor" },
        { name: "PQQ", category: "Cofactor" }
    ],
    keyFacts: [
        {
            title: "Powerhouse of the Cell",
            description: "Mitochondria produce ATP, the energy currency that powers all cellular processes",
            icon: <Zap className="h-8 w-8 text-yellow-500" />
        },
        {
            title: "Primary Cause of Aging",
            description: "Damaged mitochondria are considered one of the main drivers of the aging process",
            icon: <Clock className="h-8 w-8 text-red-500" />
        },
        {
            title: "Distributed Intelligence",
            description: "Ancient bacteria that communicate with each other and coordinate cellular energy",
            icon: <Lightbulb className="h-8 w-8 text-purple-500" />
        },
        {
            title: "Resuscitation Possible",
            description: "Even early onset dysfunction can be improved with proper interventions",
            icon: <Heart className="h-8 w-8 text-green-500" />
        }
    ]
};
