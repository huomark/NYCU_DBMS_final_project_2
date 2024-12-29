import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-8">Welcome to the Sleep Analysis Dashboard.</p>
      <div className="space-y-4">
        <Link 
          to="/create" 
          className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
        >
          Create Record
        </Link>
        <Link 
          to="/average-sleep-duration" 
          className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
        >
          View Average Sleep Duration
        </Link>
        <Link 
          to="/average-sleep-duration-by-occupation" 
          className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
        >
          View Average Sleep Duration by Occupation
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;