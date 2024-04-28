import { Request, Response } from "express";
import { ErrorRequestHandler } from "express";

class Service {
  public static async createSubscription(req: Request, res: Response) {
    try {
      if (req.method === "POST") {
      } else {
        res.status(405).json({ error: "Method not allowed" });
      }
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
}

export default Service;
