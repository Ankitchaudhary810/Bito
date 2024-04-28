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
      res.status(405).json({ error: `${req.method} Method not allowed` });
    }
  }

  public static async GetAllSubscription(req: Request, res: Response) {
    if (req.method === "GET") {
      const subscriptios = await prisma.subscription.findMany({});
      res.status(201).json(subscriptios);
    } else {
      res.status(405).json({ error: `${req.method} Method not allowed` });
    }
  }

  public static async SubscriberCount(req: Request, res: Response) {
    if (req.method === "GET") {
      try {
        const count = await prisma.subscription.count();
        res.json({ totalSubscribers: count });
      } catch (error) {
        res.status(500).json({
          message: "Error retrieving subscriber count",
        });
      }
    } else {
      res.status(405).json({ error: `${req.method} Method not allowed` });
    }
  }

  public static async subcriberLongestDetails(req: Request, res: Response) {
    if (req.method === "GET") {
      try {
        const subscriber = await prisma.subscription.findMany({
          orderBy: {
            subscriptionDate: "asc",
          },
          take: 1,
        });
        if (subscriber.length > 0) {
          const longestDurationSubscriber = subscriber[0];
          const durationInDays = Math.floor(
            (new Date().getTime() -
              new Date(longestDurationSubscriber.subscriptionDate).getTime()) /
              (1000 * 3600 * 24)
          );
          res.json({ subscriber: longestDurationSubscriber, durationInDays });
        } else {
          res.status(404).json({ message: "No subscribers found" });
        }
      } catch (error) {
        res.status(500).json({
          message: "Error finding subscriber with longest duration",
        });
      }
    } else {
      res.status(405).json({ error: `${req.method} Method not allowed` });
    }
  }

  public static async CountryByMostNumberOfSubscriber(
    req: Request,
    res: Response
  ) {
    if (req.method === "GET") {
      try {
        const result = await prisma.subscription.groupBy({
          by: ["subscriberCountry"],
          _count: true,
          orderBy: {
            _count: {
              subscriberId: "desc",
            },
          },
          take: 1,
        });
        console.log(result);
        if (result.length > 0) {
          const mostSubscribersCountry = result[0];
          res.json({
            country: mostSubscribersCountry.subscriberCountry,
            count: mostSubscribersCountry._count,
          });
        } else {
          res.status(404).json({ message: "No data found" });
        }
      } catch (error) {
        res
          .status(404)
          .json({ message: "No countries found with subscribers" });
      }
    } else {
      res.status(405).json({ error: `${req.method} Method not allowed` });
    }
  }
}

export default Service;
