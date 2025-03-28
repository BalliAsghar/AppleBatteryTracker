import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DeviceGrid } from "@/components/device-grid";
import { useQuery } from "@tanstack/react-query";
import { Device } from "@shared/schema";
import { DeviceSkeleton } from "@/components/device-skeleton";
import { useTheme } from "@/components/ui/theme-provider";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const { theme } = useTheme();
  const { data: devices, isLoading } = useQuery<Device[]>({
    queryKey: ["/api/devices"],
  });

  const airpodsCount =
    devices?.filter((d) => d.deviceType.startsWith("airpods_")).length ?? 0;
  const otherDevicesCount =
    devices?.filter((d) => !d.deviceType.startsWith("airpods_")).length ?? 0;

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark" ? "bg-zinc-900 text-white" : "bg-slate-50 text-black"
      } transition-colors duration-300`}
    >
      <Header />

      <AnimatePresence>
        {isLoading ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {airpodsCount > 0 && (
              <section>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <DeviceSkeleton variant="airpods" delay={0} />
                </div>
              </section>
            )}
            <section>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[...Array(3)].map((_, i) => (
                  <DeviceSkeleton key={`device-${i}`} delay={i * 0.1} />
                ))}
              </div>
            </section>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <DeviceGrid devices={devices || []} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-grow" />
      <Footer />
    </div>
  );
}
