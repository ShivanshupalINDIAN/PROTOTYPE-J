import React from 'react';

interface LogoProps {
  bgColor?: string; // Add a prop for background color
  onClick?: () => void; // Add onClick prop
}

export function Logo({ bgColor = 'bg-gray-800', onClick }: LogoProps) {
  return (
    <div className={`w-10 h-10 rounded-full overflow-hidden ${bgColor}`} onClick={onClick}>
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64"
        alt="Logo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
