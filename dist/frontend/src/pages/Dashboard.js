"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Dashboard = () => {
    return (<div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-8">Welcome to the Sleep Analysis Dashboard.</p>
      <div className="space-y-4">
        <react_router_dom_1.Link to="/create" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Create Record
        </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/records" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          View Records
        </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/average-sleep-duration" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Average Sleep Duration
        </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/sleep-pr" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Sleep Percentile Rank
        </react_router_dom_1.Link>
      </div>
    </div>);
};
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map