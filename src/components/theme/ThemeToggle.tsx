import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-black  hover:bg-gray-700 dark:hover:bg-white-100  rounded-full transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <Sun className="h-7 w-7 " stroke="white" />
      ) : (
        <Moon className="h-7 w-7" stroke="white" />
      )}
    </button>
  );
}