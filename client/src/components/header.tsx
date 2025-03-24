import React from "react";
import { AppleIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useQueryClient } from "@tanstack/react-query";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/components/ui/theme-provider";

export function Header() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { theme } = useTheme();

  const handleRefresh = async () => {
    try {
      await apiRequest("POST", "/api/devices/refresh", {});

      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["/api/devices"] });

      toast({
        title: "Refreshed",
        description: "Battery data has been updated",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to refresh battery data",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

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
