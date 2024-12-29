"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = require("axios");
const AverageSleepDuration = () => {
    const [averageSleepDuration, setAverageSleepDuration] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchAverageSleepDuration = async () => {
            try {
                const response = await axios_1.default.get('/api/sleeppeople/average-sleep-duration');
                setAverageSleepDuration(response.data.averageSleepDuration);
            }
            catch (error) {
                console.error('Error fetching average sleep duration:', error);
            }
        };
        fetchAverageSleepDuration();
    }, []);
    return (<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Average Sleep Duration</h1>
      {averageSleepDuration !== null ? (<p>The average sleep duration is {averageSleepDuration} hours.</p>) : (<p>Loading...</p>)}
    </div>);
};
exports.default = AverageSleepDuration;
//# sourceMappingURL=AverageSleepDuration.js.map