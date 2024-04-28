import { Request, Response } from "express";
import { ErrorRequestHandler } from "express";
import { prisma } from "../prisma";

class Service {
  public static async createSubscription(req: Request, res: Response) {
    try {
      if (req.method === "POST") {
        try {
            const { subscriptionId, subscriberId, subscriberName, subscriberCountry, subscriptionDate } = req.body;

            const subscription = await prisma.subscription.create({
              data: {
                id: subscriptionId,
                subscriberId,
                subscriberName,
                subscriberCountry,
                subscriptionDate
              }
            });
            res.status(201).json({ success: true, data: subscription });
          }
      } else {
        res.status(405).json({ error: "Method not allowed" });
      }
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
}

export default Service;
