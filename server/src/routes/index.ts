import express from "express";
const router = express.Router();
import Service from "../services";
router.post("/api/v1/create-subscription", Service.createSubscription);
export default router;
