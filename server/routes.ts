import type { Express } from "express";
import { createServer, type Server } from "http";
import { promises as fs } from "fs";
import path from "path";
import { homedir } from "os";

async function readBatteryData() {
  try {
    const filePath =
      process.env.NODE_ENV === "production"
        ? "/Batteries.json"
        : path.join(homedir(), ".local/share", "batteries", "Batteries.json");

    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading battery data:", error);
    return [];
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get all devices
  app.get("/api/devices", async (req, res) => {
    const devices = await readBatteryData();
    res.json(devices);
  });

  const httpServer = createServer(app);

  return httpServer;
}
