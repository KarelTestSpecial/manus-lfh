import React from 'react';
import { Heart, Dumbbell, CheckCircle, Brain, Flame, AlertTriangle, X } from 'lucide-react';

export const inflammationData = {
    causes: [
        { name: "Excess Visceral Fat", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > Excess Visceral Fat" },
        { name: "High Blood Sugar", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > High Blood Sugar" },
        { name: "AGES (Advanced Glycation End Products)", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > AGES (Advanced Glycation End Products)" },
        { name: "Stress", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > Stress" },
        { name: "Poor Sleep", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > Poor Sleep" },
        { name: "Oxidative Stress", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > Oxidative Stress" },
        { name: "Damaged Mitochondria", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > Damaged Mitochondria" },
        { name: "Certain Toxins/Chemicals (Microplastics)", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > Certain Toxins/Chemicals (Microplastics)" },
        { name: "Imbalances in Gut Bacteria", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > Imbalances in Gut Bacteria" },
        { name: "Lack of Exercise", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > Lack of Exercise" },
        { name: "Alcohol", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > Alcohol" },
        { name: "Smoking/Vaping", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Causes > Smoking/Vaping" }
    ],
    consequences: [
        { name: "Chronic Disease", severity: "high", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Health Consequences > Chronic Disease" },
        { name: "Cancer Growth", severity: "high", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Health Consequences > Cancer Growth" },
        { name: "Blood Vessel Damage", severity: "high", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Health Consequences > Blood Vessel Damage" },
        { name: "Increased Pain (Arthralgia)", severity: "medium", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Health Consequences > Increased Pain (Arthralgia)" },
        { name: "Metabolic Dysfunction", severity: "high", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Health Consequences > Metabolic Dysfunction" },
        { name: "Neurological Issues", severity: "high", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Health Consequences > Neurological Issues" }
    ],
    solutions: [
        {
            category: "Diet",
            icon: <Heart className="h-5 w-5 text-green-500" />,
            items: [
                { name: "Anti-inflammatory foods", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Diet > Anti-inflammatory foods" },
                { name: "Less added sugar/refined carbs", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Diet > Less added sugar/refined carbs" },
                { name: "Less ultra-processed foods", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Diet > Less ultra-processed foods" },
                { name: "Omega-3 fatty acids", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Diet > Omega-3 fatty acids" },
                { name: "Polyphenol-rich foods", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Diet > Polyphenol-rich foods" }
            ]
        },
        {
            category: "Lifestyle",
            icon: <Dumbbell className="h-5 w-5 text-blue-500" />,
            items: [
                { name: "Moderate exercise", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Lifestyle > Moderate exercise" },
                { name: "Getting enough sleep", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Lifestyle > Getting enough sleep" },
                { name: "Managing stress", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Lifestyle > Managing stress" },
                { name: "Maintaining healthy weight", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Lifestyle > Maintaining healthy weight" }
            ]
        },
        {
            category: "Specific Foods",
            icon: <CheckCircle className="h-5 w-5 text-purple-500" />,
            items: [
                { name: "Brassica vegetables (Sulforaphane)", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Specific Foods > Brassica vegetables (Sulforaphane)" },
                { name: "Curcumin/Turmeric", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Specific Foods > Curcumin/Turmeric" },
                { name: "Pomegranate juice", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Specific Foods > Pomegranate juice" },
                { name: "Extra virgin olive oil", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Specific Foods > Extra virgin olive oil" },
                { name: "Green tea", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Specific Foods > Green tea" }
            ]
        },
        {
            category: "Supplements",
            icon: <Brain className="h-5 w-5 text-orange-500" />,
            items: [
                { name: "Hydrogen water", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > Hydrogen water" },
                { name: "PEA (Palmitoylethanolamide)", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > PEA (Palmitoylethanolamide)" },
                { name: "Spermidine", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > Spermidine" },
                { name: "Nicotinamide", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > Nicotinamide" },
                { name: "Astaxanthin", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > Astaxanthin" },
                { name: "Glutathione", searchQuery: "Longevity & Health Optimization > Understanding Inflammation > Reducing Inflammation > Supplements > Glutathione" }
            ]
        }
    ]
};
