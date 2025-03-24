import React from "react";
import { DeviceCard } from "@/components/device-card";
import { AirpodsCard } from "@/components/airpods-card";
import { type Device } from "@shared/schema";

interface DeviceGridProps {
  devices: Device[];
}

export function DeviceGrid({ devices }: DeviceGridProps) {
  const airpodsDevices = devices.filter((d) =>
    d.deviceType.startsWith("airpods_")
  );
  const otherDevices = devices.filter(
    (d) => !d.deviceType.startsWith("airpods_")
  );

  // Group AirPods by deviceId
  const airpodsGroups = airpodsDevices.reduce((acc, device) => {
    if (!acc[device.deviceId]) {
      acc[device.deviceId] = {};
    }
    if (device.deviceType === "airpods_left")
      acc[device.deviceId].left = device;
    if (device.deviceType === "airpods_right")
      acc[device.deviceId].right = device;
    if (device.deviceType === "airpods_case")
      acc[device.deviceId].case = device;
    return acc;
  }, {} as Record<string, { left?: Device; right?: Device; case?: Device }>);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherDevices.map((device) => (
          <DeviceCard key={device.deviceId} device={device} />
        ))}
        {Object.values(airpodsGroups).map((group) => {
          if (group.left && group.right && group.case) {
            return (
              <AirpodsCard
                key={group.left.deviceId}
                leftPod={group.left}
                rightPod={group.right}
                case={group.case}
              />
            );
          }
          return null;
        })}
      </div>
    </main>
  );
}
