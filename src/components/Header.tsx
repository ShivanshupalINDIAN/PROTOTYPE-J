import React from 'react';
import jatayuLogo from '../assets/jatayu_logo.png'; // Import the logo
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { Menu, Search, Bell } from 'lucide-react';
import {logo} from'../../assets/jatayu_logo.png';
export function Header() {
  return (
    <header className="border-b border-gray-200 bg-gray-100"> {/* Change background color to gray */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Height set to 80px */}

            <div className="flex items-center m-0 bg-white">
            <Link to="/chat" className="p-2 hover:bg-gray-100 rounded-full" />
            <MessageSquare className="h-6 w-6 text-gray-600" /> {/* Change icon color to gray-600 */}
            <Menu className="h-6 w-6 text-gray-600" /> {/* Change icon color to gray-600 */}

            <img src={jatayuLogo} alt="Jatayu Logo" className="h-8 ml-4" /> {/* Replace text with logo */}
            </div>
          
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
              type="search"
              placeholder="Search content..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500 placeholder:pl-2"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-6 w-6 text-gray-800" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
