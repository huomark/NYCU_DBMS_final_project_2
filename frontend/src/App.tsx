import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/DashBoard'
import CreateRecord from './pages/CreateRecord'
import UpdateRecord from './pages/UpdateRecord';
import DeleteRecord from './pages/DeleteRecord';
import AverageSleepDuration from './pages/AverageSleepDuration'
import AverageSleepDurationByOccupation from './pages/AverageSleepDurationByOccupation'
import SleepPR from './pages/SleepPR'
import FindOne from './pages/FindOne';
import AverageSleepDurationByAgeRange from './pages/AverageSleepDurationByAgeRange';
import AverageSleepDurationByGender from './pages/AverageSleepDurationByGender';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/average-sleep-duration" element={<AverageSleepDuration />} />
        <Route path="/average-sleep-duration-by-occupation" element={<AverageSleepDurationByOccupation />} />
        <Route path="/sleep-pr" element={<SleepPR />} />
        <Route path="/find-one" element={<FindOne />} />
        <Route path="/create" element={<CreateRecord />} />
        <Route path="/update" element={<UpdateRecord />} />
        <Route path="/delete" element={<DeleteRecord />} />
        <Route path="/average-sleep-duration-by-age-range" element={<AverageSleepDurationByAgeRange />} />
        <Route path="average-sleep-duration-by-gender" element={<AverageSleepDurationByGender />} />
      </Routes>
    </Router>
  );
};

export default App;