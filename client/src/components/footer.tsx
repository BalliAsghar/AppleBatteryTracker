import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`${
        theme === "dark"
          ? "bg-zinc-950 border-zinc-800"
          : "bg-white border-gray-200"
      } border-t mt-10 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <p
            className={`text-sm ${
              theme === "dark" ? "text-zinc-400" : "text-[#86868B]"
            }`}
          >
            Battery Dashboard for Apple Devices
          </p>
          {/* <div className="flex items-center mt-4 md:mt-0">
            <Button 
              variant="link" 
              className={`text-sm ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-[#86868B] hover:text-[#1D1D1F]'}`}
            >
              Privacy Policy
            </Button>
            <Button 
              variant="link" 
              className={`text-sm ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-[#86868B] hover:text-[#1D1D1F]'}`}
            >
              Terms of Use
            </Button>
            <Button 
              variant="link" 
              className={`text-sm ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-[#86868B] hover:text-[#1D1D1F]'}`}
            >
              Help
            </Button>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
