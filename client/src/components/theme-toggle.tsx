import React from "react";
import { useTheme } from "@/components/ui/theme-provider";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="iconLg"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`rounded-full ${
        theme === "dark"
          ? "text-white hover:text-white hover:text-white hover:bg-zinc-800"
          : "text-[#1D1D1F] hover:text-[#1D1D1F] hover:bg-gray-100"
      }`}
      aria-label="Toggle theme"
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        {theme === "dark" ? (
          <motion.div
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            {/* Sun */}
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full block"
            >
              <path
                fill="currentColor"
                d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06m-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            {/* Moon */}
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full block"
            >
              <path
                fill="currentColor"
                d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"
              />
            </svg>
          </motion.div>
        )}
      </div>
    </Button>
  );
}
