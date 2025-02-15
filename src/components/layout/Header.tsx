import { useState } from 'react';
import { Search, Bell, Menu, Settings } from 'lucide-react';
import { ThemeToggle } from '../theme/ThemeToggle';
import { SettingsMenu } from '../settings/SettingsMenu';
import { colors, componentStyles } from '../../styles/theme';

export function Header() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-black border-b ${colors.primary.border} shadow-sm z-50`}>
      <div className="max-w-7xl mx-auto px-4 h-24">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center mx-10">
            <span className={`text-2xl font-bold text-white mr-5`}>
              <h1>JATAYU</h1>
            </span>
          </div>
          <div className="flex items-center mx-30"></div>

          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search"
                className={componentStyles.input}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button className={`p-3 ${colors.primary.hover} rounded-full text-white`}>
              <Bell className="h-7 w-7" />
            </button>
            
            <button 
              className={`p-3 ${colors.primary.hover} rounded-full text-white`}
              onClick={() => setShowSettings(!showSettings)}
            >
              <Settings className="h-7 w-7" />
            </button>
            
            <button className={`md:hidden p-3 ${colors.primary.hover} rounded-full text-white`}>
              <Menu className="h-7 w-7" />
            </button>

            <button className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
      {showSettings && <SettingsMenu />}
    </header>
  );
}
