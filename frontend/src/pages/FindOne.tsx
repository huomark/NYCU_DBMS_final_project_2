import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { findOne } from '../api/sleeppeople';

const FindOne: React.FC = () => {
  const [id, setId] = useState('');
  const [personData, setPersonData] = useState<any | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await findOne(parseInt(id));
      setPersonData(data);
    } catch (error) {
      console.error('Error fetching person data:', error);
      setPersonData(null);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Find Person by ID</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter person ID"
          className="px-4 py-2 rounded-lg text-black"
        />
        <button type="submit" className="ml-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
      {personData && (
        <table className="table-auto bg-gray-800 text-white rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2">Field</th>
              <th className="px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Person ID</td>
              <td className="border px-4 py-2">{personData.personId}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Gender</td>
              <td className="border px-4 py-2">{personData.gender}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Age</td>
              <td className="border px-4 py-2">{personData.age}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Occupation</td>
              <td className="border px-4 py-2">{personData.occupation}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Sleep Duration (Hours)</td>
              <td className="border px-4 py-2">{personData.sleepDurationHours}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Quality of Sleep</td>
              <td className="border px-4 py-2">{personData.qualityOfSleep}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Physical Activity Level</td>
              <td className="border px-4 py-2">{personData.physicalActivityLevel}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Stress Level</td>
              <td className="border px-4 py-2">{personData.stressLevel}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">BMI Category</td>
              <td className="border px-4 py-2">{personData.bmiCategory}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Blood Pressure</td>
              <td className="border px-4 py-2">{personData.bloodPressure}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Heart Rate</td>
              <td className="border px-4 py-2">{personData.heartRate}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Daily Steps</td>
              <td className="border px-4 py-2">{personData.dailySteps}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Sleep Disorder</td>
              <td className="border px-4 py-2">{personData.sleepDisorder}</td>
            </tr>
          </tbody>
        </table>
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

export default FindOne;