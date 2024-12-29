"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = require("axios");
const react_router_dom_1 = require("react-router-dom");
const RecordsList = () => {
    const [records, setRecords] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchRecords = async () => {
            const { data } = await axios_1.default.get('/api/sleeppeople');
            setRecords(data);
        };
        fetchRecords();
    }, []);
    return (<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Records List</h1>
      <ul>
        {records.map((record) => (<li key={record.personId}>
            <react_router_dom_1.Link to={`/records/${record.personId}`}>{record.personId}</react_router_dom_1.Link>
          </li>))}
      </ul>
    </div>);
};
exports.default = RecordsList;
//# sourceMappingURL=RecordsList.js.map