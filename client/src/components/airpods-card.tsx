import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DeviceIcon } from "@/lib/icons";
import { BatteryIndicator } from "@/components/battery-indicator";
import { type Device } from "@shared/schema";
import { useTheme } from "@/components/ui/theme-provider";
import { formatLastUpdate } from "@/lib/utils";

interface AirpodsCardProps {
  leftPod: Device;
  rightPod: Device;
  case: Device;
}

export function AirpodsCard({
  leftPod,
  rightPod,
  case: airpodsCase,
}: AirpodsCardProps) {
  const { theme } = useTheme();
  const baseDeviceName = leftPod.deviceName.replace(" (Left)", "");
  const updatedText = formatLastUpdate(leftPod.lastUpdate);

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
              {baseDeviceName}
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
            type="airpods"
            size={40}
            className={theme === "dark" ? "text-white" : "text-[#1D1D1F]"}
          />
        </div>

        <div
          className={`mt-5 pt-5 border-t ${
            theme === "dark" ? "border-zinc-700" : "border-gray-100"
          }`}
        >
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="flex justify-center mb-2">
                <DeviceIcon
                  type="airpods_left"
                  size={20}
                  className={
                    theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                  }
                />
              </div>
              <div className="flex flex-col items-center">
                <BatteryIndicator
                  percentage={leftPod.batteryLevel}
                  size="sm"
                  className="mb-1"
                  isCharging={leftPod.isCharging}
                />
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                  }`}
                >
                  {leftPod.batteryLevel}%
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-center mb-2">
                <DeviceIcon
                  type="airpods_right"
                  size={20}
                  className={
                    theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                  }
                />
              </div>
              <div className="flex flex-col items-center">
                <BatteryIndicator
                  percentage={rightPod.batteryLevel}
                  size="sm"
                  className="mb-1"
                  isCharging={rightPod.isCharging}
                />
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                  }`}
                >
                  {rightPod.batteryLevel}%
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-center mb-2">
                <DeviceIcon
                  type="airpods_case"
                  size={20}
                  className={
                    theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                  }
                />
              </div>
              <div className="flex flex-col items-center">
                <BatteryIndicator
                  percentage={airpodsCase.batteryLevel}
                  size="sm"
                  className="mb-1"
                  isCharging={airpodsCase.isCharging}
                />
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                  }`}
                >
                  {airpodsCase.batteryLevel}%
                </span>
              </div>
            </div>
          </div>

          {Object.values([leftPod, rightPod, airpodsCase]).some(
            (pod) => pod.batteryLevel <= 20 && !pod.isCharging
          ) && (
            <p className="text-sm font-medium text-[#FF3B30] mt-4 text-center">
              Low Battery
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
