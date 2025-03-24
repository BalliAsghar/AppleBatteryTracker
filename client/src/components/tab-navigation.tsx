import React from "react";
import { cn } from "@/lib/utils";
import { DeviceType } from "@shared/schema";
import { useTheme } from "@/components/ui/theme-provider";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  const { theme } = useTheme();
  const tabs = [
    { id: "all", label: "All Devices" },
    { id: DeviceType.IPHONE, label: "iPhone" },
    { id: DeviceType.IPAD, label: "iPad" },
    { id: DeviceType.MACBOOK, label: "MacBook" },
    { id: DeviceType.AIRPODS, label: "AirPods" },
    { id: DeviceType.WATCH, label: "Apple Watch" },
  ];

  return (
    <div className={`${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-gray-200'} border-b transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "tab whitespace-nowrap px-1 py-4 font-medium text-sm transition-colors relative",
                {
                  "text-[#0071E3] tab-active": activeTab === tab.id,
                  [theme === 'dark' ? "text-zinc-400 hover:text-white" : "text-[#86868B] hover:text-[#1D1D1F]"]: activeTab !== tab.id,
                }
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
