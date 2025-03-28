import React from "react";
import { DeviceCard } from "@/components/device-card";
import { AirpodsCard } from "@/components/airpods-card";
import { type Device } from "@shared/schema";
import { motion } from "framer-motion";

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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {Object.values(airpodsGroups).length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(airpodsGroups).map((group, index) => {
              if (group.left && group.right && group.case) {
                return (
                  <motion.div
                    key={group.left.deviceId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <AirpodsCard
                      leftPod={group.left}
                      rightPod={group.right}
                      case={group.case}
                    />
                  </motion.div>
                );
              }
              return null;
            })}
          </div>
        </motion.section>
      )}

      {otherDevices.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {otherDevices.map((device, index) => (
              <motion.div
                key={device.deviceId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <DeviceCard device={device} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </main>
  );
}
