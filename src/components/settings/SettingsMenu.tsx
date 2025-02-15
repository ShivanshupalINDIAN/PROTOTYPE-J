import React from 'react';
import { User, Bell, Shield, HelpCircle, LogOut } from 'lucide-react';


const menuItems = [
  { icon: User, label: 'Account Settings' },
  { icon: Bell, label: 'Notifications' },
  { icon: Shield, label: 'Privacy & Security' },
  { icon: HelpCircle, label: 'Help & Support' },
  { icon: LogOut, label: 'Sign Out' }
];

export function SettingsMenu() {
  return (
      <div className="absolute top-16 right-4 w-64 bg-black rounded-lg shadow-lg py-2 z-50">

      {menuItems.map(({ icon: Icon, label }) => (
      <button
        key={label}
        className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white hover:text-black transition-colors text-white"

      >
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </button>
      ))}
    </div>
  );
}
