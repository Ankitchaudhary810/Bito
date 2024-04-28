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
                res.status(405).json({ error: `${req.method} Method not allowed` });
            }
        });
    }
    static GetAllSubscription(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.method === "GET") {
                const subscriptios = yield prisma_1.prisma.subscription.findMany({});
                res.status(201).json(subscriptios);
            }
            else {
                res.status(405).json({ error: `${req.method} Method not allowed` });
            }
        });
    }
    static SubscriberCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.method === "GET") {
                try {
                    const count = yield prisma_1.prisma.subscription.count();
                    res.json({ totalSubscribers: count });
                }
                catch (error) {
                    res.status(500).json({
                        message: "Error retrieving subscriber count",
                    });
                }
            }
            else {
                res.status(405).json({ error: `${req.method} Method not allowed` });
            }
        });
    }
    static subcriberLongestDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.method === "GET") {
                try {
                    const subscriber = yield prisma_1.prisma.subscription.findMany({
                        orderBy: {
                            subscriptionDate: "asc",
                        },
                        take: 1,
                    });
                    if (subscriber.length > 0) {
                        const longestDurationSubscriber = subscriber[0];
                        const durationInDays = Math.floor((new Date().getTime() -
                            new Date(longestDurationSubscriber.subscriptionDate).getTime()) /
                            (1000 * 3600 * 24));
                        res.json({ subscriber: longestDurationSubscriber, durationInDays });
                    }
                    else {
                        res.status(404).json({ message: "No subscribers found" });
                    }
                }
                catch (error) {
                    res.status(500).json({
                        message: "Error finding subscriber with longest duration",
                    });
                }
            }
            else {
                res.status(405).json({ error: `${req.method} Method not allowed` });
            }
        });
    }
    static CountryByMostNumberOfSubscriber(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.method === "GET") {
                try {
                    const result = yield prisma_1.prisma.subscription.groupBy({
                        by: ["subscriberCountry"],
                        _count: true,
                        orderBy: {
                            _count: {
                                subscriberId: "desc",
                            },
                        },
                        take: 1,
                    });
                    if (result.length > 0) {
                        const mostSubscribersCountry = result[0];
                        res.json({
                            country: mostSubscribersCountry.subscriberCountry,
                            count: mostSubscribersCountry._count,
                        });
                    }
                    else {
                        res.status(404).json({ message: "No data found" });
                    }
                }
                catch (error) {
                    res
                        .status(404)
                        .json({ message: "No countries found with subscribers" });
                }
            }
            else {
                res.status(405).json({ error: `${req.method} Method not allowed` });
            }
        });
    }
}
exports.default = Service;
