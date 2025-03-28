import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BatteryIndicator } from "@/components/battery-indicator";
import { type Device } from "@shared/schema";
import { useTheme } from "@/components/ui/theme-provider";
import { formatLastUpdate } from "@/lib/utils";
import { getIcon } from "./icons";

interface DeviceCardProps {
  device: Device;
}

export function DeviceCard({ device }: DeviceCardProps) {
  const { theme } = useTheme();
  const updatedText = formatLastUpdate(device.lastUpdate);

  return (
    <Card
      className={`group relative overflow-hidden ${
        theme === "dark"
          ? "bg-zinc-800/50 hover:bg-zinc-800/80"
          : "bg-white/50 hover:bg-white/80"
      } backdrop-blur-xl rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent ${
        theme === "dark"
          ? "hover:border-zinc-700/50"
          : "hover:border-gray-200/50"
      }`}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h2
              className={`text-lg font-semibold truncate ${
                theme === "dark" ? "text-white" : "text-[#1D1D1F]"
              } group-hover:text-primary transition-colors duration-300`}
            >
              {device.deviceName}
            </h2>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
              } mt-1 transition-colors duration-300`}
            >
              {updatedText}
            </p>
          </div>
          <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
            {getIcon(device.deviceType, {
              size: 40,
              className: `${
                theme === "dark" ? "text-white" : "text-[#1D1D1F]"
              } group-hover:text-primary transition-colors duration-300`,
            })}
          </div>
        </div>

        <div
          className={`mt-5 pt-5 border-t ${
            theme === "dark" ? "border-zinc-700/50" : "border-gray-100"
          } transition-colors duration-300`}
        >
          <div className="flex flex-col items-center">
            <div className="transform group-hover:scale-105 transition-transform duration-300">
              <BatteryIndicator
                percentage={device.batteryLevel}
                isCharging={device.isCharging}
                size="lg"
                showPercentage
              />
            </div>
          </div>
          {device.batteryLevel <= 20 && !device.isCharging && (
            <p className="text-sm font-medium text-[#FF3B30] mt-4 text-center animate-pulse">
              Low Battery
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
