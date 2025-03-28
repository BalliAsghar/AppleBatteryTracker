import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DeviceGrid } from "@/components/device-grid";
import { useQuery } from "@tanstack/react-query";
import { Device } from "@shared/schema";
import { useTheme } from "@/components/ui/theme-provider";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const { theme } = useTheme();
  const { data: devices } = useQuery<Device[]>({
    queryKey: ["/api/devices"],
  });

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark" ? "bg-zinc-900 text-white" : "bg-slate-50 text-black"
      } transition-colors duration-300`}
    >
      <Header />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DeviceGrid devices={devices || []} />
        </motion.div>
      </AnimatePresence>

      <div className="flex-grow" />
      <Footer />
    </div>
  );
}
