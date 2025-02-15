import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Users, Video, User, TrendingUp } from 'lucide-react';

import { colors } from '../../styles/theme';

const navItems = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: Video, label: 'Shorts', path: '/home/shorts' },
  { icon: Users, label: 'Raise Voice', path: '/home/protest' },
  { icon: TrendingUp, label: 'Trending', path: '/home/trending' },
  { icon: User, label: 'Profile', path: '/home/profile' },
];


export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // const isFeaturePage = navItems.some(item => location.pathname === item.path);


  return (
<aside className={`fixed left-0 top-24 h-full w-80 bg-black border-r p-4`}>


      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-white hover:text-black ${location.pathname === item.path ? 'bg-white text-black' : `${colors.secondary.text} ${colors.primary.hover}`}`}
                style={{ color: location.pathname === item.path ? 'black' : '' }}


              >
                <item.icon className="h-6 w-6" />
                <span className="text-lg">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
