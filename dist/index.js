"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoConnection_1 = require("./database/MongoConnection");
const express_1 = __importDefault(require("express"));
const URLController_1 = require("./controller/URLController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const database = new MongoConnection_1.MongoConnection();
database.connect();
const urlController = new URLController_1.URLController();
app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);
app.listen(5555, () => { console.log('Connected at port 5555'); });
//# sourceMappingURL=index.js.map