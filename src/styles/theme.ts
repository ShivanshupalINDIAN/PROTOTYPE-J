export const colors = {
  primary: {
    bg: 'bg-custom-cyan dark:bg-gray-900', // Updated to new color
    text: 'text-black dark:text-white', // Updated to black for light background
    hover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    border: 'border-gray-200 dark:border-gray-800',
  },
  secondary: {
    bg: 'bg-gray-100 dark:bg-gray-800',
    text: 'text-black dark:text-gray-300', // Updated to black for light background
    hover: 'hover:bg-gray-200 dark:hover:bg-gray-700',
  },
  accent: {
    bg: 'bg-blue-500',
    text: 'text-blue-600 dark:text-blue-400',
    hover: 'hover:bg-blue-600',
  }
} as const;

export const componentStyles = {
  card: `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm ${colors.primary.hover}`,
  button: {
    primary: `px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors`,
    secondary: `px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors`, // Updated to black for light background
  },
  input: `w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500`,

} as const;
