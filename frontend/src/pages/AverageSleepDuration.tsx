import React, { useEffect, useState } from 'react';
import { getAverageSleepDuration } from '../api/sleeppeople';

const AverageSleepDuration: React.FC = () => {
  const [averageSleepDuration, setAverageSleepDuration] = useState<number | null>(null);

  useEffect(() => {
    const fetchAverageSleepDuration = async () => {
      try {
        const data = await getAverageSleepDuration();
        setAverageSleepDuration(data);
      } catch (error) {
        console.error('Error fetching average sleep duration:', error);
      }
    };

    fetchAverageSleepDuration();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Average Sleep Duration</h1>
      <p className="text-lg mb-8">
        {averageSleepDuration !== null ? `Average Sleep Duration: ${averageSleepDuration} hours` : 'Loading...'}
      </p>
    </div>
  );
};

export default AverageSleepDuration;