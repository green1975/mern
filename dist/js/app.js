"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
const connectionString = 'mongodb://localhost:27017/library';
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(routes_1.router);
mongoose_1.default.connect(connectionString);
app.listen(4000, () => console.info('Express server is running on port 4000'));
