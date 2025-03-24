import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  format,
  formatDistanceToNow,
  formatRelative,
  fromUnixTime,
} from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBatteryColor(percentage: number) {
  if (percentage <= 20) {
    return "bg-[#FF3B30]"; // Apple red
  } else if (percentage <= 50) {
    return "bg-[#FF9500]"; // Apple orange
  } else {
    return "bg-[#34C759]"; // Apple green
  }
}

export function getBatteryColorStyle(percentage: number) {
  if (percentage <= 20) {
    return "#FF3B30"; // Apple red
  } else if (percentage <= 50) {
    return "#FF9500"; // Apple orange
  } else {
    return "#34C759"; // Apple green
  }
}

export function formatDate(date: Date): string {
  return format(date, "MMM d, yyyy");
}

export function formatLastUpdate(timestamp: number): string {
  return formatRelative(fromUnixTime(timestamp), new Date());
}
