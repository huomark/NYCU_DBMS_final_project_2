import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAverageSleepDurationByAgeRange } from '../api/sleeppeople';

const AverageSleepDurationByAgeRange: React.FC = () => {
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [averageSleepDuration, setAverageSleepDuration] = useState<number | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await getAverageSleepDurationByAgeRange(parseInt(minAge, 10), parseInt(maxAge, 10));
      setAverageSleepDuration(data);
    } catch (error) {
      console.error('Error fetching average sleep duration by age range:', error);
      setAverageSleepDuration(null);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Average Sleep Duration by Age Range</h1>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          value={minAge}
          onChange={(e) => setMinAge(e.target.value)}
          placeholder="Enter minimum age"
          className="px-4 py-2 rounded-lg text-black"
        />
        <input
          type="text"
          value={maxAge}
          onChange={(e) => setMaxAge(e.target.value)}
          placeholder="Enter maximum age"
          className="px-4 py-2 rounded-lg text-black"
        />
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
      {averageSleepDuration !== null && (
        <p className="text-lg">
          {`Average Sleep Duration for age range ${minAge} ~ ${maxAge}: ${averageSleepDuration} hours`}
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

export default AverageSleepDurationByAgeRange;