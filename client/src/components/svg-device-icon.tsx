import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/ui/theme-provider";
import {
  AppleIcon,
  PhoneIcon,
  TabletIcon,
  LaptopIcon,
  AirpodsIcon,
  WatchIcon,
  IconProps,
} from "@/lib/icons";

interface SVGDeviceIconProps {
  type: string;
  size?: number;
  className?: string;
}

export function SVGDeviceIcon({
  type,
  size = 24,
  className = "",
}: SVGDeviceIconProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    // Normalize device type for file naming
    let deviceType = type.toLowerCase().replace(/\s+/g, "");

    console.log("Loading SVG for device type:", deviceType);

    // Handle special cases for AirPods
    if (deviceType === "airpods") {
      deviceType = "airpods.left-right";
    }

    fetch(`/src/icons/${deviceType}.svg`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load SVG: ${response.statusText}`);
        }
        return response.text();
      })
      .then((text) => {
        // Replace fill="white" with the appropriate color based on theme
        // For dark mode, keep white fill, for light mode, use dark color
        const modifiedSvg =
          theme === "dark"
            ? text.replace(/fill-opacity="0.85"/g, 'fill-opacity="0.85"')
            : text.replace(/fill="white"/g, 'fill="#1D1D1F"');

        // Add viewBox preservation and responsiveness
        const processedSvg = modifiedSvg
          .replace("<svg", `<svg style="width:100%;height:100%;"`)
          .replace(/width="[\d.]+"\s+height="[\d.]+"/g, "");

        setSvgContent(processedSvg);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading SVG:", error);
        setSvgContent(null);
        setHasError(true);
        setIsLoading(false);
      });
  }, [type, theme]);

  if (isLoading) {
    return null;
  }

  // If we failed to load the SVG or there was an error, fall back to the built-in icons
  if (hasError) {
    const FallbackIcon = getFallbackIcon(type);
    return <FallbackIcon size={size} className={className} />;
  }

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      dangerouslySetInnerHTML={{ __html: svgContent as string }}
    />
  );
}

// Helper function to get the fallback icon based on device type
function getFallbackIcon(type: string): React.FC<IconProps> {
  switch (type) {
    case "iPhone":
      return PhoneIcon;
    case "iPad":
      return TabletIcon;
    case "MacBook":
      return LaptopIcon;
    case "AirPods":
      return AirpodsIcon;
    case "Apple Watch":
      return WatchIcon;
    default:
      return AppleIcon;
  }
}
