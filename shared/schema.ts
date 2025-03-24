import {
  pgTable,
  text,
  integer,
  boolean,
  doublePrecision,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Define device type enum
export const DeviceType = {
  IPHONE: "iphone",
  IPAD: "ipad",
  MACBOOK: "macbookair", // Changed to macbookair to match data
  AIRPODS_LEFT: "airpods_left",
  AIRPODS_RIGHT: "airpods_right",
  AIRPODS_CASE: "airpods_case",
} as const;

export type DeviceTypeValues = (typeof DeviceType)[keyof typeof DeviceType];

// Devices table
export const devices = pgTable("devices", {
  deviceId: text("device_id").notNull().primaryKey(),
  deviceName: text("device_name").notNull(),
  deviceType: text("device_type").notNull(), // Using text to store enum values
  batteryLevel: integer("battery_level").notNull(),
  isCharging: boolean("is_charging").default(false).notNull(),
  dataSource: text("data_source").notNull(),
  lastUpdate: doublePrecision("last_update").notNull(), // Using double precision for timestamp
});

export const insertDeviceSchema = createInsertSchema(devices);

export type InsertDevice = z.infer<typeof insertDeviceSchema>;
export type Device = typeof devices.$inferSelect;
