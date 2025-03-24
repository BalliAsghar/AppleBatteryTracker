import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  DeviceIcon,
  AirpodLeftIcon,
  AirpodRightIcon,
  AirpodCaseIcon,
} from "@/lib/icons";
import { BatteryIndicator } from "@/components/battery-indicator";
import { type Device } from "@shared/schema";
import { useTheme } from "@/components/ui/theme-provider";

interface DeviceCardProps {
  device: Device;
}

export function DeviceCard({ device }: DeviceCardProps) {
  const { theme } = useTheme();
  const isAirPods = device.type === "AirPods";

  const formattedUpdatedAt = new Date(device.updatedAt).getTime();
  const timeAgo = Math.floor((Date.now() - formattedUpdatedAt) / 60000);

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
      className={`device-card ${
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
              {device.name}
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
            type={device.type}
            size={40}
            className={theme === "dark" ? "text-white" : "text-[#1D1D1F]"}
          />
        </div>

        {isAirPods ? (
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div>
              <div className="flex justify-center mb-2">
                <DeviceIcon
                  type="airpods.left"
                  size={20}
                  className={
                    theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                  }
                />
              </div>
              <div className="flex flex-col items-center">
                <BatteryIndicator
                  percentage={device.leftBatteryPercentage || 0}
                  size="sm"
                  className="mb-1"
                  isCharging={device.isCharging || false}
                />
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                  }`}
                >
                  {device.leftBatteryPercentage}%
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-center mb-2">
                <DeviceIcon
                  type="airpods.right"
                  size={20}
                  className={
                    theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                  }
                />
              </div>
              <div className="flex flex-col items-center">
                <BatteryIndicator
                  percentage={device.rightBatteryPercentage || 0}
                  size="sm"
                  className="mb-1"
                  isCharging={device.isCharging || false}
                />
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                  }`}
                >
                  {device.rightBatteryPercentage}%
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-center mb-2">
                <DeviceIcon
                  type="airpods.case"
                  size={20}
                  className={
                    theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                  }
                />
              </div>
              <div className="flex flex-col items-center">
                <BatteryIndicator
                  percentage={device.caseBatteryPercentage || 0}
                  size="sm"
                  className="mb-1"
                  isCharging={device.isCharging || false}
                />
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                  }`}
                >
                  {device.caseBatteryPercentage}%
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center mt-6">
            <BatteryIndicator
              percentage={device.batteryPercentage}
              showPercentage={true}
              isCharging={device.isCharging || false}
            />
          </div>
        )}

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
                {device.model}
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
                {device.serial}
              </p>
            </div>

            {isAirPods ? (
              <>
                <div>
                  <p
                    className={`text-xs ${
                      theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                    }`}
                  >
                    Firmware
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                    } mt-1`}
                  >
                    {device.firmware}
                  </p>
                </div>
                <div>
                  <p
                    className={`text-xs ${
                      theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                    }`}
                  >
                    Connected to
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                    } mt-1`}
                  >
                    {device.connectedTo}
                  </p>
                </div>
                <div>
                  <p
                    className={`text-xs ${
                      theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                    }`}
                  >
                    Noise Cancellation
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                    } mt-1`}
                  >
                    {device.noiseStatus}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p
                    className={`text-xs ${
                      theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                    }`}
                  >{`${
                    device.type === "Apple Watch"
                      ? "watchOS"
                      : device.type === "MacBook"
                      ? "macOS"
                      : device.type + "OS"
                  } Version`}</p>
                  <p
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                    } mt-1`}
                  >
                    {device.osVersion}
                  </p>
                </div>
                <div>
                  <p
                    className={`text-xs ${
                      theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
                    }`}
                  >
                    Battery Health
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                    } mt-1`}
                  >
                    Good
                  </p>
                </div>
                {device.batteryPercentage <= 20 && !device.isCharging && (
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
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
