import type { Express } from "express";
import { createServer, type Server } from "http";

// Sample device data for the dashboard
const mockDevices = [
  {
    batteryLevel: 80,
    deviceType: "iphone",
    dataSource: "IDevice_Network",
    isCharging: false,
    deviceName: "Balli’s iPhone",
    deviceModel: "iPhone13,4",
    deviceId: "00008101-000B592434E0001E",
    lastUpdate: 1742838674.521682,
  },
  {
    isCharging: true,
    deviceType: "airpods_right",
    lastUpdate: 1742838659.5988321,
    deviceName: "Balli’s AirPods Pro (Right)",
    dataSource: "BLE_AirPods",
    batteryLevel: 100,
    deviceId: "56DC0295-6146-7DB9-294E-BC06053789DE",
  },
  {
    deviceName: "Balli’s iPad",
    isCharging: true,
    deviceId: "00008103-001E11D41AF1001E",
    dataSource: "IDevice_Network",
    deviceModel: "iPad13,8",
    deviceType: "ipad",
    batteryLevel: 53,
    lastUpdate: 1742838675.640888,
  },
  {
    deviceName: "Balli’s AirPods Pro (Case)",
    lastUpdate: 1742838659.5988321,
    dataSource: "BLE_AirPods",
    deviceId: "56DC0295-6146-7DB9-294E-BC06053789DE",
    batteryLevel: 74,
    deviceType: "airpods_case",
    isCharging: false,
  },
  {
    lastUpdate: 1742838659.5988321,
    deviceType: "airpods_left",
    deviceId: "56DC0295-6146-7DB9-294E-BC06053789DE",
    deviceName: "Balli’s AirPods Pro (Left)",
    isCharging: true,
    dataSource: "BLE_AirPods",
    batteryLevel: 100,
  },
  {
    batteryLevel: 100,
    deviceType: "macbookair",
    deviceName: "Balli’s MacBook Air",
    isCharging: false,
    deviceId: "internal",
    lastUpdate: 1742838676.0385652,
    dataSource: "Internal",
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
      (device) => device.deviceType === type
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
