import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteRecord } from '../api/sleeppeople';

const DeleteRecord: React.FC = () => {
  const [personId, setPersonId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonId(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await deleteRecord(parseInt(personId, 10));
      alert('Record deleted successfully');
      setPersonId('');
    } catch (error) {
      console.error('Error deleting record:', error);
      alert('Failed to delete record');
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Delete Record</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="personId"
          value={personId}
          onChange={handleChange}
          placeholder="Enter person ID"
          className="px-4 py-2 rounded-lg text-black"
        />
        <button type="submit" className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
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

export default DeleteRecord;