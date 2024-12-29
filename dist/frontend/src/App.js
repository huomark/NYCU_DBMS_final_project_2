"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const AverageSleepDuration_1 = require("./pages/AverageSleepDuration");
const CreateRecord_1 = require("./pages/CreateRecord");
const Dashboard_1 = require("./pages/Dashboard");
const RecordDetails_1 = require("./pages/RecordDetails");
const RecordsList_1 = require("./pages/RecordsList");
const SleepPR_1 = require("./pages/SleepPR");
const App = () => {
    return (<react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Dashboard_1.default />}/>
        <react_router_dom_1.Route path="/create" element={<CreateRecord_1.default />}/>
        <react_router_dom_1.Route path="/records" element={<RecordsList_1.default />}/>
        <react_router_dom_1.Route path="/records/:id" element={<RecordDetails_1.default />}/>
        <react_router_dom_1.Route path="/average-sleep-duration" element={<AverageSleepDuration_1.default />}/>
        <react_router_dom_1.Route path="/sleep-pr" element={<SleepPR_1.default />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
//# sourceMappingURL=App.js.map