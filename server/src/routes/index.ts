import express from "express";
const router = express.Router();
import Service from "../services";
router.post("/create-subscription", Service.createSubscription);
export default router;
