const navItems = [
  { path: '/', label: 'Home' },
  { path: '/aging', label: 'Aging' },
  { 
    path: '/defense-systems', 
    label: 'Defense Systems',
    children: [
      { path: '/defense-systems', label: 'Overview' },
      { path: '/defense-systems/immune-system', label: 'Immune System' },
      { path: '/defense-systems/detoxification', label: 'Detoxification' },
      { path: '/defense-systems/antioxidant-defense', label: 'Antioxidant Defense' },
      { path: '/defense-systems/cell-repair', label: 'Cell Repair' },
      { path: '/defense-systems/microbiome-balance', label: 'Microbiome Balance' },
    ]
  },
  { path: '/inflammation', label: 'Inflammation' },
  { path: '/autophagy', label: 'Autophagy' },
  { path: '/mitochondria', label: 'Mitochondria' },
  { path: '/microbiome', label: 'Microbiome' },
  { path: '/nutrition', label: 'Nutrition' },
  { path: '/exercise', label: 'Exercise' },
  { path: '/sleep', label: 'Sleep' },
  { path: '/bone-health', label: 'Bone Health' },
  { path: '/circulation', label: 'Circulation' },
  { path: '/metabolism', label: 'Metabolism' },
  { path: '/mindset', label: 'Mindset' },
  { path: '/technology', label: 'Technology' },
  { path: '/toxins', label: 'Toxins' },
  { path: '/other-health', label: 'Other Health' }
]

export default navItems