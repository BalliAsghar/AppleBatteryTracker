import React from "react";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/components/ui/theme-provider";
import { AppleIcon } from "./icons";

export function Header() {
  const { theme } = useTheme();

  return (
    <header
      className={`${
        theme === "dark" ? "bg-zinc-950 shadow-md" : "bg-white shadow-sm"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <AppleIcon
              size={32}
              className={theme === "dark" ? "text-white" : "text-[#1D1D1F]"}
            />
            <h1
              className={`ml-3 text-2xl font-semibold ${
                theme === "dark" ? "text-white" : "text-[#1D1D1F]"
              }`}
            >
              Battery Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
