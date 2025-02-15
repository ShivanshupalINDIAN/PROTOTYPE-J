import { Outlet } from 'react-router-dom';
import { Sidebar } from '../navigation/Sidebar';
import { Header } from './Header';
import { colors } from '../../styles/theme';

import { useLocation } from 'react-router-dom';

export function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/'; // Adjust this condition as needed

  return (
    <div className={`max-h-screen h-full ${isHomePage ? colors.primary.bg : 'bg-white'} text-black`}>
      <Header />
      <Sidebar />
      <main className="ml-64 pt-16 p-4">
      <div className="max-w-[80%] mx-auto">
        <Outlet />
      </div>
      </main>
    </div>
  );
}
