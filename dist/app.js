"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("./app/routes/route"));
const globalErrorHandler_1 = __importDefault(require("./app/modules/middleware/globalErrorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(globalErrorHandler_1.default);
app.get('/', (req, res) => {
    res.send({
        message: "Server is running"
    });
});
app.use('/api/v1', route_1.default);
exports.default = app;
