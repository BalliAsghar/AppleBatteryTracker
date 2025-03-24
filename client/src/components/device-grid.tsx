import React from "react";
import { DeviceCard } from "@/components/device-card";
import { type Device } from "@shared/schema";

interface DeviceGridProps {
  devices: Device[];
}

export function DeviceGrid({ devices }: DeviceGridProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </main>
  );
}
