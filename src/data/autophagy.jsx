import { Recycle, Brain, Shield, Clock, Coffee, Dumbbell } from 'lucide-react'
import React from 'react'

export const autophagyData = {
    benefits: [
        {
            name: "Brain & Memory Health",
            icon: <Brain className="h-5 w-5" />,
            details: "Autophagy helps clear out beta-amyloid plaques and tau proteins, which are associated with neurodegenerative diseases. It promotes the growth of new neurons (neurogenesis) and improves cognitive function and memory retention."
        },
        {
            name: "Cellular Recycling System",
            icon: <Recycle className="h-5 w-5" />,
            details: "This process breaks down and recycles cellular components, allowing cells to reuse raw materials for repair and energy production. It's essentially the body's internal housekeeping mechanism that converts waste into fuel."
        },
        {
            name: "Cleans Up Damaged Mitochondria",
            icon: <Shield className="h-5 w-5" />,
            details: "Known as mitophagy, this specific form of autophagy removes dysfunctional mitochondria. Since mitochondria are the power plants of the cell, keeping them healthy prevents oxidative stress and maintains efficient energy production."
        },
        {
            name: "Maintains Cell Health",
            icon: <Shield className="h-5 w-5" />,
            details: "By removing damaged proteins, misfolded proteins, and organelles, autophagy prevents cellular clutter that can lead to dysfunction. It ensures that cells operate at their peak efficiency."
        },
        {
            name: "Promotes Longevity",
            icon: <Clock className="h-5 w-5" />,
            details: "Enhanced autophagy is a common feature in long-lived organisms. It delays aging by preserving cellular function, reducing inflammation, and increasing resistance to stress."
        },
        {
            name: "Protects Against Disease",
            icon: <Shield className="h-5 w-5" />,
            details: "Autophagy plays a crucial role in preventing cancer, metabolic disorders, and infections. It helps the immune system by eliminating intracellular pathogens and preventing the accumulation of damaged DNA."
        }
    ],
    stimulators: [
        {
            category: "Fasting",
            icon: <Clock className="h-6 w-6 text-blue-500" />,
            description: "Most potent trigger",
            details: "Fasting is the most powerful physiological trigger for autophagy. When nutrients are scarce, insulin levels drop and glucagon rises, signaling the body to switch from growth mode to repair mode. While 12 hours initiates the process, deeper cleaning typically occurs after 24-48 hours of fasting.",
            methods: [
                "Begins after ~12 hours",
                "Increases significantly at 48-72 hours",
                "Intermittent fasting (Time Restricted Eating)",
                "Skipping breakfast",
                "Forces body to become efficient"
            ]
        },
        {
            category: "Exercise",
            icon: <Dumbbell className="h-6 w-6 text-green-500" />,
            description: "Regular physical activity",
            details: "Exercise induces autophagy in muscle and other tissues to adapt to physical stress. High-intensity interval training (HIIT) and resistance training are particularly effective. It helps clear metabolic waste produced during exertion.",
            methods: [
                "Moderate intensity exercise",
                "Resistance training",
                "Cardiovascular exercise",
                "Consistent routine"
            ]
        },
        {
            category: "Diet",
            icon: <Coffee className="h-6 w-6 text-orange-500" />,
            description: "Specific foods and patterns",
            details: "Ketogenic diets mimic fasting by keeping insulin low, which upregulates autophagy. Additionally, limiting protein intake occasionally (protein cycling) can inhibit mTOR, a pathway that suppresses autophagy.",
            methods: [
                "Low sugar/low carbohydrate diet",
                "Moderate protein intake",
                "Limit processed foods",
                "Healthy eating patterns"
            ]
        },
        {
            category: "Phytonutrients",
            icon: <Shield className="h-6 w-6 text-purple-500" />,
            description: "Natural compounds",
            details: "Certain plant compounds can activate autophagy pathways (like AMPK activation or mTOR inhibition) without the need for fasting. These are often called 'caloric restriction mimetics'.",
            methods: [
                "Coffee (polyphenols)",
                "Green tea (EGCG)",
                "Berberine",
                "Adaptogens (Ashwagandha)",
                "Certain mushrooms",
                "Ginger"
            ]
        }
    ],
    supplements: [
        { name: "Spermidine", description: "Physiological inducer, anti-aging vitamin", searchQuery: "Longevity & Health Optimization > Aging > Autophagy > Supplements > Spermidine" },
        { name: "Mimio", description: "Blend of Spermidine, Nicotinamide, PEA, OEA", searchQuery: "Longevity & Health Optimization > Aging > Autophagy > Supplements > Mimio" },
        { name: "Nicotinamide", description: "NAD+ precursor", searchQuery: "Longevity & Health Optimization > Aging > Autophagy > Supplements > Nicotinamide" },
        { name: "PEA", description: "Palmitoylethanolamide", searchQuery: "Longevity & Health Optimization > Aging > Autophagy > Supplements > PEA" },
        { name: "OEA", description: "Oleoylethanolamide", searchQuery: "Longevity & Health Optimization > Aging > Autophagy > Supplements > OEA" }
    ]
}
