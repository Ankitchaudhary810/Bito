"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const services_1 = __importDefault(require("../services"));
router.post("/create-subscription", services_1.default.createSubscription);
router.get("/get-all-subscription-list", services_1.default.GetAllSubscription);
router.get("/subscribers/count", services_1.default.SubscriberCount);
router.get("/longest/duration", services_1.default.subcriberLongestDetails);
router.get("/most/subscribers/country", services_1.default.CountryByMostNumberOfSubscriber);
exports.default = router;
