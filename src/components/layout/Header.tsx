import { useState } from 'react';
import { Search, Bell, Menu, Settings } from 'lucide-react';
import { ThemeToggle } from '../theme/ThemeToggle';
import { SettingsMenu } from '../settings/SettingsMenu';
import { colors, componentStyles } from '../../styles/theme';
import jatayuLogo from '../../assets/jatayu_logo.png';

export function Header() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-black border-b ${colors.primary.border} shadow-sm z-50`}>
      <div className="max-w-7xl ml-0 mr-auto px-0 h-24">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center mx-10">
            <div className="h-16 w-16 border-white rounded-md bg-white border-2  mr-2">
              <img src={jatayuLogo} alt="Jatayu Logo" className="h-full w-full object-cover" />
            </div>
            <span className={`text-3xl font-bold text-white  ml-2 mr-5 pl-0`}>
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
                className={`${componentStyles.input} pl-9`}
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
