import React from 'react';

interface EagleLogoProps {
  className?: string;
}

export function EagleLogo({ className = "w-8 h-8" }: EagleLogoProps) {
  return (
    <svg 
      viewBox="0 0 500 500" 
      className={`${className} text-white`}
      aria-label="Eagle Logo"
    >
      <path
        fill="currentColor"
        d="M250 50c-25 0-48 12-65 30-85 90-135 220-135 320 0 20 15 35 35 35h330c20 0 35-15 35-35 0-100-50-230-135-320-17-18-40-30-65-30zm0 40c15 0 28 7 38 18 75 80 112 192 112 282H100c0-90 37-202 112-282 10-11 23-18 38-18zm-80 240c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm160 0c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"
      />
    </svg>
  );
}