"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = require("../api/axios");
const CreateRecord = () => {
    const [formData, setFormData] = (0, react_1.useState)({
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
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios_1.default.post('/sleeppeople', formData);
            alert('Record created successfully!');
        }
        catch (error) {
            console.error('Error creating record:', error);
        }
    };
    return (<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Record</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label className="block mb-2">Gender</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Occupation</label>
          <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Sleep Duration (Hours)</label>
          <input type="number" name="sleepDurationHours" value={formData.sleepDurationHours} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Quality of Sleep</label>
          <input type="text" name="qualityOfSleep" value={formData.qualityOfSleep} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Physical Activity Level</label>
          <input type="text" name="physicalActivityLevel" value={formData.physicalActivityLevel} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Stress Level</label>
          <input type="text" name="stressLevel" value={formData.stressLevel} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">BMI Category</label>
          <input type="text" name="bmiCategory" value={formData.bmiCategory} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Blood Pressure</label>
          <input type="text" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Heart Rate</label>
          <input type="number" name="heartRate" value={formData.heartRate} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Daily Steps</label>
          <input type="number" name="dailySteps" value={formData.dailySteps} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Sleep Disorder</label>
          <input type="text" name="sleepDisorder" value={formData.sleepDisorder} onChange={handleChange} className="border p-2 w-full"/>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Create</button>
      </form>
    </div>);
};
exports.default = CreateRecord;
//# sourceMappingURL=CreateRecord.js.map