"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma");
class Service {
    static createSubscription(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.method === "POST") {
                try {
                    const { subscriptionId, subscriberId, subscriberName, subscriberCountry, subscriptionDate, } = req.body;
                    const subscription = yield prisma_1.prisma.subscription.create({
                        data: {
                            id: subscriptionId,
                            subscriberId,
                            subscriberName,
                            subscriberCountry,
                            subscriptionDate,
                        },
                    });
                    const subscriptions = yield prisma_1.prisma.subscription.findMany({});
                    res.status(201).json({ success: true, data: subscriptions });
                }
                catch (error) {
                    res.status(400).json({ success: false, error: error.message });
                }
            }
            else {
                res.status(405).json({ error: "Method not allowed" });
            }
        });
    }
}
exports.default = Service;
