import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { DeviceType } from "@shared/schema";

// Sample device data for the dashboard
const mockDevices = [
  {
    name: "iPhone 14 Pro",
    type: DeviceType.IPHONE,
    model: "iPhone 14 Pro",
    serial: "GHXY78900J",
    osVersion: "16.1.1",
    batteryPercentage: 78,
    cycleCount: 123,
    isCharging: true,
  },
  {
    name: "iPhone 13",
    type: DeviceType.IPHONE,
    model: "iPhone 13",
    serial: "FGTY56821K",
    osVersion: "16.0.3",
    batteryPercentage: 23,
    cycleCount: 245,
    isCharging: true,
  },
  {
    name: "MacBook Pro",
    type: DeviceType.MACBOOK,
    model: 'MacBook Pro 14"',
    serial: "C02G56HNMD6T",
    osVersion: "Ventura 13.0",
    batteryPercentage: 92,
    cycleCount: 42,
    isCharging: false,
  },
  {
    name: "iPad Pro",
    type: DeviceType.IPAD,
    model: 'iPad Pro 12.9"',
    serial: "DMPVH8BLLXK1",
    osVersion: "16.1",
    batteryPercentage: 65,
    cycleCount: 89,
    isCharging: false,
  },
  {
    name: "AirPods Pro",
    type: DeviceType.AIRPODS,
    model: "AirPods Pro 2",
    serial: "GHT789PQR",
    osVersion: "5B58",
    batteryPercentage: 0, // Not used for AirPods (use left/right/case instead)
    cycleCount: 0,
    leftBatteryPercentage: 35,
    rightBatteryPercentage: 28,
    caseBatteryPercentage: 82,
    isCharging: false,
    connectedTo: "iPhone 14 Pro",
    firmware: "5B58",
    noiseStatus: "On",
  },
  {
    name: "Apple Watch",
    type: DeviceType.WATCH,
    model: "Apple Watch Series 8",
    serial: "GQ7XL4THQ1K6",
    osVersion: "9.1",
    batteryPercentage: 12,
    cycleCount: 56,
    isCharging: true,
  },
  {
    name: "iPad Mini",
    type: DeviceType.IPAD,
    model: "iPad Mini 6",
    serial: "FTWY16JNLL78",
    osVersion: "16.0",
    batteryPercentage: 86,
    cycleCount: 56,
    isCharging: false,
  },
  {
    name: "MacBook Air",
    type: DeviceType.MACBOOK,
    model: "MacBook Air M2",
    serial: "C02ZW4JPQZ0F",
    osVersion: "Ventura 13.0",
    batteryPercentage: 29,
    cycleCount: 142,
    isCharging: false,
  },
];

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get all devices
  app.get("/api/devices", (req, res) => {
    res.json(mockDevices);
  });

  // API endpoint to get devices by type
  app.get("/api/devices/type/:type", (req, res) => {
    const { type } = req.params;
    const filteredDevices = mockDevices.filter(
      (device) => device.type === type
    );
    res.json(filteredDevices);
  });

  // API endpoint to refresh battery data
  app.post("/api/devices/refresh", (req, res) => {
    // In a real app, this would trigger a refresh from the devices
    // For this demo, we'll just return the current data
    res.json({ success: true, message: "Battery data refreshed" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
