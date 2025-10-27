import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <ThemeProvider>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" class="skip-to-main">
        Skip to main content
      </a>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <Services />
      </main>

      {/* Footer */}
      <footer
        class="bg-black dark:bg-white py-8 px-6 border-t border-zinc-800 dark:border-gray-200 transition-colors duration-300"
        role="contentinfo"
      >
        <div class="max-w-7xl mx-auto text-center">
          <p class="text-gray-400 dark:text-gray-600">
            &copy; {new Date().getFullYear()} Noir CarCare - Oog voor Detail. Alle rechten voorbehouden.
          </p>
          <p class="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Premium auto verzorging met passie voor perfectie
          </p>
          <p class="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Website build by <a class="underline" href='https://dreamerz-do.nl/'>Dreamerz Do</a>
          </p>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default App;
