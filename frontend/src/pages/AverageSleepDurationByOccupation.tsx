import React, { useState } from 'react';
import { getAverageSleepDurationByOccupation } from '../api/sleeppeople';
import { Link } from 'react-router-dom';

const AverageSleepDurationByOccupation: React.FC = () => {
  const [occupation, setOccupation] = useState('');
  const [averageSleepDuration, setAverageSleepDuration] = useState<number | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await getAverageSleepDurationByOccupation(occupation);
      setAverageSleepDuration(data !== null ? data : -1);
    } catch (error) {
      console.error('Error fetching average sleep duration by occupation:', error);
      setAverageSleepDuration(-1);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Average Sleep Duration by Occupation</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          placeholder="Enter occupation"
          className="px-4 py-2 rounded-lg text-black"
        />
        <button type="submit" className="ml-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
      {averageSleepDuration !== null && (
        <p className="text-lg">
          {averageSleepDuration !== -1
            ? `Average Sleep Duration for ${occupation}: ${averageSleepDuration} hours`
            : 'Occupation not found: -1 hours'}
        </p>
      )}
      <Link 
        to="/" 
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Home
      </Link>
    </div>
  );
};

export default AverageSleepDurationByOccupation;