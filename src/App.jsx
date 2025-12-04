import React from 'react';
import { HashRouter as Router, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import navItems from './lib/navItems';
import generateRoutes from './lib/routeGenerator.jsx';

import { Home } from './components/Home';
import { Aging } from './components/Aging';
import { Inflammation } from './components/Inflammation';
import { Autophagy } from './components/Autophagy';
import { Mitochondria } from './components/Mitochondria';
import { Microbiome } from './components/Microbiome';
import { Nutrition } from './components/Nutrition';
import { BoneHealth } from './components/BoneHealth';
import { DefenseSystems } from './components/DefenseSystems';
import { Circulation } from './components/Circulation';
import { Exercise } from './components/Exercise';
import { Metabolism } from './components/Metabolism';
import { Sleep } from './components/Sleep';
import { Mindset } from './components/Mindset';
import { Technology } from './components/Technology';
import { Toxins } from './components/Toxins';
import { OtherHealth } from './components/OtherHealth';
import './App.css';

const componentMap = {
  Home,
  Aging,
  Inflammation,
  Autophagy,
  Mitochondria,
  Microbiome,
  Nutrition,
  BoneHealth,
  DefenseSystems,
  Circulation,
  Exercise,
  Metabolism,
  Sleep,
  Mindset,
  Technology,
  Toxins,
  OtherHealth,
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Navigation />
        <main className="pt-16">
          <Routes>
            {generateRoutes(navItems, componentMap)}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


