import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DeviceGrid } from "@/components/device-grid";
import { useQuery } from "@tanstack/react-query";
import { Device } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "@/components/ui/theme-provider";

export default function Dashboard() {
  const { theme } = useTheme();
  const { data: devices, isLoading } = useQuery<Device[]>({
    queryKey: ["/api/devices"],
  });

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark" ? "bg-zinc-900 text-white" : "bg-slate-50 text-black"
      } transition-colors duration-300`}
    >
      <Header />

      {isLoading ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`rounded-2xl ${
                  theme === "dark" ? "bg-zinc-800" : "bg-white"
                } shadow p-6 transition-colors duration-300`}
              >
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
                <div className="mt-6 flex items-center">
                  <Skeleton className="h-6 w-14 mr-3" />
                  <Skeleton className="h-8 w-16" />
                </div>
                <Skeleton className="h-px w-full mt-5" />
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[...Array(6)].map((_, j) => (
                    <div key={j}>
                      <Skeleton className="h-3 w-12" />
                      <Skeleton className="h-4 w-20 mt-1" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <DeviceGrid devices={devices || []} />
      )}

      <div className="flex-grow" />
      <Footer />
    </div>
  );
}
