import React from 'react';
import { Bug, Shield, Brain, Heart, CheckCircle, X } from 'lucide-react';

export const microbiomeData = {
    keyBacteria: [
        {
            name: "Akkermansia Muciniphila",
            benefits: [
                "Helps cancer treatment response",
                "Improves metabolic health & gut lining",
                "Lowers inflammation"
            ],
            searchQuery: "Longevity & Health Optimization > Microbiome Health > Key Bacteria for Longevity > Akkermansia Muciniphila"
        },
        {
            name: "Odoribacter",
            benefits: [
                "Improves immune system (against E.coli, etc.)"
            ],
            searchQuery: "Longevity & Health Optimization > Microbiome Health > Key Bacteria for Longevity > Odoribacter"
        },
        {
            name: "Oscillibacter",
            benefits: [
                "Improves lipid profile (lowers LDL, increases HDL)",
                "Improves metabolism (blood sugar, insulin sensitivity)"
            ],
            searchQuery: "Longevity & Health Optimization > Microbiome Health > Key Bacteria for Longevity > Oscillibacter"
        },
        {
            name: "Cristianella",
            benefits: [
                "Supports overall gut health"
            ],
            searchQuery: "Longevity & Health Optimization > Microbiome Health > Key Bacteria for Longevity > Cristianella"
        }
    ],
    harmfulFactors: [
        "Alcohol",
        "Lack of Good Sleep",
        "Smoking/Vaping",
        "Ultra-Processed Foods & Artificial Ingredients",
        "Unnecessary Antibiotics (collateral damage)"
    ],
    beneficialFoods: [
        {
            category: "Fermented Foods (Probiotics)",
            items: ["Kefir, Yoghurt", "Kimchi, Sauerkraut", "Kombucha (fermented tea)"]
        },
        {
            category: "Polyphenol-rich Foods",
            items: ["Chili Peppers, Black Vinegar, Matcha", "Concord Grapes, Berries"]
        },
        {
            category: "Resistant Starches (Prebiotics)",
            items: ["Day Old Cooked Rice / Potatoes", "Green Bananas & Plantains", "Oatmeal"]
        },
        {
            category: "Diverse Plant Foods",
            items: ["30+ plant types per week", "Variety of whole foods"]
        }
    ]
};
