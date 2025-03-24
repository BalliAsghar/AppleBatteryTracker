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
          <div className="absolute -left-6 text-[#34C759]">
            <svg
              width="16"
              height="25"
              viewBox="0 0 43.6768 69.7511"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect
                  height="69.7511"
                  opacity="0"
                  width="43.6768"
                  x="0"
                  y="0"
                />
                <path
                  d="M0 38.5987C0 39.5997 0.78125 40.3809 1.92871 40.3809L19.8242 40.3809L10.3516 66.0889C9.27734 68.921 12.1826 70.3858 14.0381 68.0909L42.5293 32.4464C42.9932 31.836 43.2617 31.2745 43.2617 30.6397C43.2617 29.6387 42.5049 28.8331 41.3574 28.8331L23.4375 28.8331L32.9346 3.14949C34.0088 0.293045 31.1035-1.1718 29.248 1.14754L0.756836 36.7921C0.292969 37.4024 0 37.9639 0 38.5987Z"
                  fill="currentColor"
                  fillOpacity="0.85"
                />
              </g>
            </svg>
          </div>
        )}
        <div
          className={cn(
            `relative border-2 ${
              theme === "dark" ? "border-white" : "border-[#1D1D1F]"
            } rounded-[4px] after:content-[''] after:absolute after:right-[-4px] after:w-[3px] ${
              theme === "dark" ? "after:bg-white" : "after:bg-[#1D1D1F]"
            } after:rounded-r-sm`,
            containerClasses[size],
            {
              "after:h-3 after:top-1": size === "sm",
              "after:h-3 after:top-[4px]": size === "md",
              "after:h-4 after:top-[6px]": size === "lg",
            }
          )}
        >
          <div
            className={cn(
              "h-full rounded-[2px] transition-all duration-500",
              batteryColor
            )}
            style={{ width: `${Math.max(2, percentage)}%` }}
          ></div>
        </div>
      </div>
      {showPercentage && (
        <span
          className={`ml-3 text-2xl font-semibold ${
            theme === "dark" ? "text-white" : "text-[#1D1D1F]"
          }`}
        >
          {percentage}%
        </span>
      )}
    </div>
  );
}
