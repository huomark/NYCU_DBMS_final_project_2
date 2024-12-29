"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const axios_1 = require("axios");
const RecordDetails = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const [record, setRecord] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchRecord = async () => {
            const { data } = await axios_1.default.get(`/api/sleeppeople/${id}`);
            setRecord(data);
        };
        fetchRecord();
    }, [id]);
    if (!record) {
        return <div>Loading...</div>;
    }
    return (<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Record Details</h1>
      <pre>{JSON.stringify(record, null, 2)}</pre>
    </div>);
};
exports.default = RecordDetails;
//# sourceMappingURL=RecordDetails.js.map