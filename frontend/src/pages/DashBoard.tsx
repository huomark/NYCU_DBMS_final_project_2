import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-8">Welcome to the Sleep Analysis Dashboard.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link 
          to="/create" 
          className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
        >
          Create Record
        </Link>
        <Link
          to="/update"
          className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
        >
          Update Record
        </Link>
        <Link
          to="/delete"
          className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
        >
          Delete Record
        </Link>
        <Link
          to="/find-one"
          className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
        >
          Search Person by ID
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
        <Link
          to="/sleep-pr"
          className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
        >
          View Sleep PR 
        </Link>
        <Link 
          to="/average-sleep-duration-by-age-range" 
          className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
        >
          View Average Sleep Duration by Age Range
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
