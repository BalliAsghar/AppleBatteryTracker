import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DeviceIcon } from "@/lib/icons";
import { BatteryIndicator } from "@/components/battery-indicator";
import { type Device } from "@shared/schema";
import { useTheme } from "@/components/ui/theme-provider";

interface DeviceCardProps {
  device: Device;
}

export function DeviceCard({ device }: DeviceCardProps) {
  const { theme } = useTheme();
  const timeAgo = Math.floor((Date.now() - device.lastUpdate * 1000) / 60000);

  let updatedText = "Updated just now";
  if (timeAgo === 1) {
    updatedText = "Updated 1 minute ago";
  } else if (timeAgo > 1 && timeAgo < 60) {
    updatedText = `Updated ${timeAgo} minutes ago`;
  } else if (timeAgo >= 60 && timeAgo < 120) {
    updatedText = "Updated 1 hour ago";
  } else if (timeAgo >= 120) {
    updatedText = `Updated ${Math.floor(timeAgo / 60)} hours ago`;
  }

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

        <div className="flex items-center mt-6">
          <BatteryIndicator
            percentage={device.batteryLevel}
            showPercentage={true}
            isCharging={device.isCharging}
          />
        </div>

        <div
          className={`mt-5 pt-5 border-t ${
            theme === "dark" ? "border-zinc-700" : "border-gray-100"
          }`}
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p
                className={`text-xs ${
                  theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                }`}
              >
                Model
              </p>
              <p
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                } mt-1`}
              >
                {"Unknown"}
              </p>
            </div>
            <div>
              <p
                className={`text-xs ${
                  theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                }`}
              >
                Serial
              </p>
              <p
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                } mt-1`}
              >
                {device.deviceId.slice(0, 8)}
              </p>
            </div>
            {device.batteryLevel <= 20 && !device.isCharging && (
              <div>
                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                  }`}
                >
                  Status
                </p>
                <p className="text-sm font-medium text-[#FF3B30] mt-1">
                  Low Battery
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
