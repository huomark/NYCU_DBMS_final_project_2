"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
const App_1 = require("./App");
require("./index.css");
const container = document.getElementById('root');
if (!container)
    throw new Error('Failed to find the root element');
const root = (0, client_1.createRoot)(container);
root.render(<react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>);
//# sourceMappingURL=index.js.map