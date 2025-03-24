import React from "react";
import { SVGDeviceIcon } from "@/components/svg-device-icon";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const AppleIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09998 22C7.78998 22.05 6.79998 20.68 5.95998 19.47C4.24998 17 2.93998 12.45 4.69998 9.39C5.56998 7.87 7.12998 6.91 8.81998 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.09 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
      fill="currentColor"
    />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="7"
      y="2"
      width="10"
      height="20"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M11 5H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const TabletIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="5"
      y="2"
      width="14"
      height="20"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12 18.5H12.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const LaptopIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 16.5H20C20.5523 16.5 21 16.0523 21 15.5V5.5C21 4.94772 20.5523 4.5 20 4.5H4C3.44772 4.5 3 4.94772 3 5.5V15.5C3 16.0523 3.44772 16.5 4 16.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M2 19.5H22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const AirpodsIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12C4 8.5 7 6 10 6V18C7 18 4 15.5 4 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M20 12C20 8.5 17 6 14 6V18C17 18 20 15.5 20 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="10"
      y="6"
      width="4"
      height="12"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const AirpodLeftIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12C4 8.5 7 6 10 6V18C7 18 4 15.5 4 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="10"
      y="6"
      width="2"
      height="12"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const AirpodRightIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 12C20 8.5 17 6 14 6V18C17 18 20 15.5 20 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="12"
      y="6"
      width="2"
      height="12"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const AirpodCaseIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="5"
      y="8"
      width="14"
      height="8"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M8 8V6.5C8 5.67157 8.67157 5 9.5 5H14.5C15.3284 5 16 5.67157 16 6.5V8"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const WatchIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="8"
      y="3"
      width="8"
      height="18"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M8 9H16" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 15H16" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M6.5 9V15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M17.5 9V15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19.7778 4.22266L17.5558 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4.22217 4.22266L6.44418 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6.44434 17.5557L4.22211 19.7779" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19.7778 19.7773L17.5558 17.5551" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.38938C9.89873 6.23938 10.1187 5.13938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2187 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DeviceIcon = ({ type, size = 24, ...props }: { type: string } & IconProps) => {
  // Return the SVG device icon component that will handle loading the external SVG files
  // The component will handle error states internally and display the right icon
  return <SVGDeviceIcon type={type} size={size} className={props.className} />;
};
