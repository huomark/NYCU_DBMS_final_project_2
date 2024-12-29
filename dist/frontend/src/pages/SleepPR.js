"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = require("axios");
const SleepPR = () => {
    const [duration, setDuration] = (0, react_1.useState)(null);
    const [prValue, setPrValue] = (0, react_1.useState)(null);
    const handleCalculatePR = async () => {
        if (duration !== null) {
            const { data } = await axios_1.default.get('/api/sleeppeople/sleep-pr', { params: { duration } });
            setPrValue(data);
        }
    };
    return (<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Calculate PR Value</h1>
      <input type="number" value={duration ?? ''} onChange={(e) => setDuration(parseFloat(e.target.value))} placeholder="Enter sleep duration" className="border p-2 mr-2"/>
      <button onClick={handleCalculatePR} className="bg-blue-500 text-white p-2">Calculate PR</button>
      {prValue !== null && <p>PR Value: {prValue.toFixed(2)}%</p>}
    </div>);
};
exports.default = SleepPR;
//# sourceMappingURL=SleepPR.js.map