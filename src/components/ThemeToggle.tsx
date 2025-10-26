import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      class="fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 bg-gray-800 dark:bg-gray-200 hover:scale-110 focus:scale-110 shadow-lg"
      aria-label={`Switch to ${theme() === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme() === 'dark' ? 'light' : 'dark'} mode`}
    >
      <svg
        class="w-6 h-6 text-white dark:text-black transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {theme() === 'dark' ? (
          // Sun icon for light mode
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        ) : (
          // Moon icon for dark mode
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        )}
      </svg>
    </button>
  );
}
