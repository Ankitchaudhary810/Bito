"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)({
    origin: "*",
    methods: "*",
}));
app.use("/", index_1.default);
app.listen(process.env.PORT, () => {
    console.log("Server is running at port", process.env.PORT);
});
