import { Request, Response } from "express";
import { ErrorRequestHandler } from "express";
import { prisma } from "../prisma";

class Service {
  public static async createSubscription(req: Request, res: Response) {
    if (req.method === "POST") {
      try {
        const {
          subscriptionId,
          subscriberId,
          subscriberName,
          subscriberCountry,
          subscriptionDate,
        } = req.body;

        const subscription = await prisma.subscription.create({
          data: {
            id: subscriptionId,
            subscriberId,
            subscriberName,
            subscriberCountry,
            subscriptionDate,
          },
        });

        const subscriptions = await prisma.subscription.findMany({});
        res.status(201).json({ success: true, data: subscriptions });
      } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
      }
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }
}

export default Service;
