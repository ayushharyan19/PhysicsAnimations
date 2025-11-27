import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/experiment-data", async (req, res) => {
    try {
      const data = await storage.getAllExperimentData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch experiment data" });
    }
  });

  app.get("/api/experiment-data/:trial", async (req, res) => {
    try {
      const trial = parseInt(req.params.trial);
      const data = await storage.getExperimentDataByTrial(trial);
      if (!data) {
        return res.status(404).json({ error: "Trial not found" });
      }
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch experiment data" });
    }
  });

  app.get("/api/project-info", async (req, res) => {
    res.json({
      title: "Rubber Band Launcher",
      subtitle: "An Investigation of Hooke's Law and Energy Conversion",
      groupNumber: 4,
      teamMembers: [
        "Vivek Choudhary",
        "Partham Sharma",
        "Preetam Kowar",
        "Ayush Aryan",
        "Nishant Verma",
      ],
      topic: "Hooke's Law, Work & Energy",
      concepts: [
        "Hooke's Law (F = -kx)",
        "Elastic Potential Energy (PE = ½kx²)",
        "Kinetic Energy (KE = ½mv²)",
        "Conservation of Energy",
      ],
    });
  });

  return httpServer;
}
