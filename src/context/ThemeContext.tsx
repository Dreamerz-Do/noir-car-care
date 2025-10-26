import { createContext, useContext, createEffect, createSignal } from 'solid-js';
import type { JSX } from 'solid-js';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: () => Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>();

export const ThemeProvider = (props: { children: JSX.Element }) => {
  // Check localStorage and system preference - default to dark
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('noir-theme') as Theme | null;
      if (stored) return stored;

      // Default to dark mode
      return 'dark';
    }
    return 'dark';
  };

  const [theme, setTheme] = createSignal<Theme>(getInitialTheme());

  // Apply theme to document and save to localStorage
  createEffect(() => {
    const currentTheme = theme();
    const html = document.documentElement;

    // When theme is 'light', add 'dark' class to show light styles
    // When theme is 'dark', remove 'dark' class to show dark styles (default)
    if (currentTheme === 'light') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    html.setAttribute('data-theme', currentTheme);
    localStorage.setItem('noir-theme', currentTheme);
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
