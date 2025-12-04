import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Aging } from './components/Aging';
import { Inflammation } from './components/Inflammation';
import { Autophagy } from './components/Autophagy';
import { Mitochondria } from './components/Mitochondria';
import { Microbiome } from './components/Microbiome';
import { Nutrition } from './components/Nutrition';
import { BoneHealth } from './components/BoneHealth';
import { DefenseSystems } from './components/DefenseSystems';
import { ImmuneSystem } from './components/ImmuneSystem';
import { Detoxification } from './components/Detoxification';
import { AntioxidantDefense } from './components/AntioxidantDefense';
import { CellRepair } from './components/CellRepair';
import { MicrobiomeBalance } from './components/MicrobiomeBalance';
import { Circulation } from './components/Circulation';
import { Exercise } from './components/Exercise';
import { Metabolism } from './components/Metabolism';
import { Sleep } from './components/Sleep';
import { Mindset } from './components/Mindset';
import { Technology } from './components/Technology';
import { Toxins } from './components/Toxins';
import { OtherHealth } from './components/OtherHealth';
import './App.css';

function App() {
  return (
    <Router basename="/manus-lfh">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aging" element={<Aging />} />
            <Route path="/inflammation" element={<Inflammation />} />
            <Route path="/autophagy" element={<Autophagy />} />
            <Route path="/mitochondria" element={<Mitochondria />} />
            <Route path="/microbiome" element={<Microbiome />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/bone-health" element={<BoneHealth />} />
            <Route path="/defense-systems" element={<DefenseSystems />} />
            <Route path="/defense-systems/immune-system" element={<ImmuneSystem />} />
            <Route path="/defense-systems/detoxification" element={<Detoxification />} />
            <Route path="/defense-systems/antioxidant-defense" element={<AntioxidantDefense />} />
            <Route path="/defense-systems/cell-repair" element={<CellRepair />} />
            <Route path="/defense-systems/microbiome-balance" element={<MicrobiomeBalance />} />
            <Route path="/circulation" element={<Circulation />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/metabolism" element={<Metabolism />} />
            <Route path="/sleep" element={<Sleep />} />
            <Route path="/mindset" element={<Mindset />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/toxins" element={<Toxins />} />
            <Route path="/other-health" element={<OtherHealth />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


