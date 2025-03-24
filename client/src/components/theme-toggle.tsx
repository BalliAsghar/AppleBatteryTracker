import React from "react";
import { SunIcon, MoonIcon } from "@/lib/icons";
import { useTheme } from "@/components/ui/theme-provider";
import { motion } from "framer-motion";
import { SVGDeviceIcon } from "./svg-device-icon";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`rounded-full ${
        theme === "dark"
          ? "text-white hover:text-white hover:bg-zinc-800"
          : "text-[#1D1D1F] hover:text-[#1D1D1F] hover:bg-gray-100"
      }`}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {theme === "dark" ? (
          <motion.div
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <SVGDeviceIcon type="sun" className="absolute inset-0" size={24} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <SVGDeviceIcon type="moon" className="absolute inset-0" size={24} />
          </motion.div>
        )}
      </div>
    </Button>
  );
}
