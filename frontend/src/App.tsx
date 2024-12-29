import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/DashBoard'
import AverageSleepDuration from './pages/AverageSleepDuration'
import AverageSleepDurationByOccupation from './pages/AverageSleepDurationByOccupation'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/average-sleep-duration" element={<AverageSleepDuration />} />
        <Route path="/average-sleep-duration-by-occupation" element={<AverageSleepDurationByOccupation />} />
      </Routes>
    </Router>
  );
};

export default App;