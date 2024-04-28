"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const services_1 = __importDefault(require("../services"));
router.post("/api/v1/create-subscription", services_1.default.createSubscription);
router.get("/api/v1/get-all-subscription-list", services_1.default.GetAllSubscription);
exports.default = router;
