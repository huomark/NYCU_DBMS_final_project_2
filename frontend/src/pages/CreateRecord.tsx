import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createRecord } from '../api/sleeppeople';

const CreateRecord: React.FC = () => {
  const [formData, setFormData] = useState({
    personId: '',
    gender: '',
    age: '',
    occupation: '',
    sleepDurationHours: '',
    qualityOfSleep: '',
    physicalActivityLevel: '',
    stressLevel: '',
    bmiCategory: '',
    bloodPressure: '',
    heartRate: '',
    dailySteps: '',
    sleepDisorder: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      personId: parseInt(formData.personId, 10),
      age: parseInt(formData.age, 10),
      sleepDurationHours: parseFloat(formData.sleepDurationHours),
      qualityOfSleep: parseInt(formData.qualityOfSleep, 10),
      physicalActivityLevel: parseInt(formData.physicalActivityLevel, 10),
      stressLevel: parseInt(formData.stressLevel, 10),
      heartRate: parseInt(formData.heartRate, 10),
      dailySteps: parseInt(formData.dailySteps, 10),
    };
    try {
      await createRecord(dataToSubmit);
      alert('Record created successfully');
    } catch (error) {
      console.error('Error creating record:', error);
      alert('Failed to create record');
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Create Record</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            value={(formData as any)[key]}
            onChange={handleChange}
            placeholder={`Enter ${key}`}
            className="px-4 py-2 rounded-lg text-black"
          />
        ))}
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
      <Link 
        to="/" 
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Home
      </Link>
    </div>
  );
};

export default CreateRecord;