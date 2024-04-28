import express from "express";
const router = express.Router();
import Service from "../services";
router.post("/create-subscription", Service.createSubscription);
router.get("/get-all-subscription-list", Service.GetAllSubscription);

router.get("/subscribers/count", Service.SubscriberCount);
router.get("/longest/duration", Service.subcriberLongestDetails);
router.get(
  "/most/subscribers/country",
  Service.CountryByMostNumberOfSubscriber
);
export default router;
