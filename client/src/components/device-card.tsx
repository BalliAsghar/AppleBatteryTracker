import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DeviceIcon } from "@/lib/icons";
import { BatteryIndicator } from "@/components/battery-indicator";
import { type Device } from "@shared/schema";
import { useTheme } from "@/components/ui/theme-provider";
import { formatLastUpdate } from "@/lib/utils";

interface DeviceCardProps {
  device: Device;
}

export function DeviceCard({ device }: DeviceCardProps) {
  const { theme } = useTheme();
  const updatedText = formatLastUpdate(device.lastUpdate);

  return (
    <Card
      className={`${
        theme === "dark" ? "bg-zinc-800" : "bg-white"
      } rounded-2xl shadow hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2
              className={`text-lg font-semibold ${
                theme === "dark" ? "text-white" : "text-[#1D1D1F]"
              }`}
            >
              {device.deviceName}
            </h2>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
              } mt-1`}
            >
              {updatedText}
            </p>
          </div>
          <DeviceIcon
            type={device.deviceType}
            size={40}
            className={theme === "dark" ? "text-white" : "text-[#1D1D1F]"}
          />
        </div>

        <div
          className={`mt-5 pt-5 border-t ${
            theme === "dark" ? "border-zinc-700" : "border-gray-100"
          }`}
        >
          <div className="flex flex-col items-center">
            <BatteryIndicator
              percentage={device.batteryLevel}
              isCharging={device.isCharging}
              size="lg"
            />
            <span
              className={`text-sm font-medium ${
                theme === "dark" ? "text-white" : "text-[#1D1D1F]"
              }`}
            >
              {device.batteryLevel}%
            </span>
          </div>
          {device.batteryLevel <= 20 && !device.isCharging && (
            <p className="text-sm font-medium text-[#FF3B30] mt-4 text-center">
              Low Battery
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
