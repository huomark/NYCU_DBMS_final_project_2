import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAverageSleepDurationByGender } from '../api/sleeppeople';

const AverageSleepDurationByGender: React.FC = () => {
  const [gender, setGender] = useState('');
  const [averageSleepDuration, setAverageSleepDuration] = useState<number | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await getAverageSleepDurationByGender(gender);
      setAverageSleepDuration(data);
    } catch (error) {
      console.error('Error fetching average sleep duration by gender:', error);
      setAverageSleepDuration(null);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Average Sleep Duration by Gender</h1>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="px-4 py-2 rounded-lg text-black"
        >
          <option value="" disabled>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
      {averageSleepDuration !== null && (
        <p className="text-lg">
          {`Average Sleep Duration for gender ${gender}: ${averageSleepDuration} hours`}
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

export default AverageSleepDurationByGender;