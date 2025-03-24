import {
  pgTable,
  text,
  serial,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Define device type enum
export const DeviceType = {
  IPHONE: "iPhone",
  IPAD: "iPad",
  MACBOOK: "MacBook",
  AIRPODS: "AirPods",
  WATCH: "Apple Watch",
} as const;

export type DeviceTypeValues = (typeof DeviceType)[keyof typeof DeviceType];

// Devices table
export const devices = pgTable("devices", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // iPhone, iPad, MacBook, AirPods, Apple Watch
  model: text("model").notNull(),
  serial: text("serial").notNull(),
  osVersion: text("os_version").notNull(),
  batteryPercentage: integer("battery_percentage").notNull(),
  cycleCount: integer("cycle_count").notNull(),
  isCharging: boolean("is_charging").default(false),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  // For AirPods additional battery levels
  caseBatteryPercentage: integer("case_battery_percentage"),
  leftBatteryPercentage: integer("left_battery_percentage"),
  rightBatteryPercentage: integer("right_battery_percentage"),
  // Additional device info
  connectedTo: text("connected_to"),
  firmware: text("firmware"),
  noiseStatus: text("noise_status"),
});

export const insertDeviceSchema = createInsertSchema(devices).omit({
  id: true,
  updatedAt: true,
});

export type InsertDevice = z.infer<typeof insertDeviceSchema>;
export type Device = typeof devices.$inferSelect;
