import React, { useState } from 'react';
import { getSleepPR } from '../api/sleeppeople';
import { Link } from 'react-router-dom';

const SleepPR: React.FC = () => {
  const [duration, setDuration] = useState('');
  const [sleepPR, setSleepPR] = useState<number | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await getSleepPR(parseFloat(duration));
      setSleepPR(data);
    } catch (error) {
      console.error('Error fetching sleep PR:', error);
      setSleepPR(null);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Sleep PR</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter sleep duration"
          className="px-4 py-2 rounded-lg text-black"
        />
        <button type="submit" className="ml-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
      {sleepPR !== null && (
        <p className="text-lg">
          {`Sleep PR for ${duration} hours: ${sleepPR}%`}
        </p>
      )}
    <Link
      to="/"
      className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
    >
      Home
    </Link>
    </div>
  );
};

export default SleepPR;