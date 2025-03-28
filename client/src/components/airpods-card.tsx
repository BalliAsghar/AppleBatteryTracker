import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { type Device } from "@shared/schema";
import { useTheme } from "@/components/ui/theme-provider";
import { formatLastUpdate } from "@/lib/utils";
import { getIcon, getBatteryIconType } from "./icons";

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
        <div className="flex items-start justify-between">
          <div>
            <h2
              className={`text-lg font-semibold ${
                theme === "dark" ? "text-white" : "text-[#1D1D1F]"
              } group-hover:text-primary transition-colors duration-300`}
            >
              {baseDeviceName}
            </h2>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
              } mt-1 transition-colors duration-300`}
            >
              {updatedText}
            </p>
          </div>
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            {getIcon("airpods", {
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
          <div className="grid grid-cols-3 gap-4">
            {[
              { device: leftPod, icon: "airpods_left" },
              { device: rightPod, icon: "airpods_right" },
              { device: airpodsCase, icon: "airpods_case" },
            ].map(({ device, icon }) => (
              <div key={device.deviceId} className="group/item">
                <div className="flex justify-center mb-2">
                  {getIcon(icon, {
                    size: 20,
                    className: `${
                      theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                    } group-hover/item:text-primary transition-colors duration-300`,
                  })}
                </div>
                <div className="flex flex-col items-center transform group-hover:scale-105 transition-transform duration-300">
                  {getIcon(
                    getBatteryIconType(device.batteryLevel, device.isCharging),
                    {
                      size: 24,
                      className: device.isCharging
                        ? "text-green-500"
                        : device.batteryLevel <= 20
                        ? "text-red-500"
                        : theme === "dark"
                        ? "text-white"
                        : "text-[#1D1D1F]",
                    }
                  )}
                  <span
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                    } group-hover/item:text-primary transition-colors duration-300 mt-1`}
                  >
                    {device.batteryLevel}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {Object.values([leftPod, rightPod, airpodsCase]).some(
            (pod) => pod.batteryLevel <= 20 && !pod.isCharging
          ) && (
            <p className="text-sm font-medium text-[#FF3B30] mt-4 text-center animate-pulse">
              Low Battery
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
