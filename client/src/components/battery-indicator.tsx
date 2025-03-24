import React from "react";
import { cn, getBatteryColor } from "@/lib/utils";
import { useTheme } from "@/components/ui/theme-provider";

interface BatteryIndicatorProps {
  percentage: number;
  className?: string;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
  isCharging?: boolean;
}

export function BatteryIndicator({
  percentage,
  className,
  showPercentage = false,
  size = "md",
  isCharging = false,
}: BatteryIndicatorProps) {
  const { theme } = useTheme();
  const containerClasses = {
    sm: "w-10 h-5",
    md: "w-[50px] h-6",
    lg: "w-14 h-7",
  };

  const batteryColor = getBatteryColor(percentage);

  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative flex items-center">
        {isCharging && (
          <div className="absolute -left-5 text-[#34C759]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2L7 8H10.5L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
        <div
          className={cn(
            `relative border-2 ${theme === 'dark' ? 'border-white' : 'border-[#1D1D1F]'} rounded-[4px] after:content-[''] after:absolute after:right-[-4px] after:w-[3px] ${theme === 'dark' ? 'after:bg-white' : 'after:bg-[#1D1D1F]'} after:rounded-r-sm`,
            containerClasses[size],
            {
              "after:h-3 after:top-1": size === "sm",
              "after:h-3 after:top-[4px]": size === "md",
              "after:h-4 after:top-[6px]": size === "lg",
            }
          )}
        >
          <div
            className={cn("h-full rounded-[2px] transition-all duration-500", batteryColor)}
            style={{ width: `${Math.max(2, percentage)}%` }}
          ></div>
        </div>
      </div>
      {showPercentage && (
        <span className={`ml-3 text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#1D1D1F]'}`}>
          {percentage}%
        </span>
      )}
    </div>
  );
}
