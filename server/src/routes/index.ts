import express from "express";
const router = express.Router();
import Service from "../services";
router.post("/api/v1/create-subscription", Service.createSubscription);
router.get("/api/v1/get-all-subscription-list", Service.GetAllSubscription);
export default router;
