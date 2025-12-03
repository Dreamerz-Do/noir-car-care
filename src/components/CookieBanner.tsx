import { Show } from 'solid-js';
import { useCookieConsent } from '../stores/useCookieConsent';

export default function CookieBanner() {
  const { shouldShowBanner, acceptCookies, declineCookies } = useCookieConsent();

  const handleAccept = () => {
    acceptCookies();
    // Reload to initialize analytics
    window.location.reload();
  };

  const handleDecline = () => {
    declineCookies();
  };

  return (
    <Show when={shouldShowBanner()}>
      <div class="fixed bottom-0 left-0 right-0 z-[100] bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-zinc-800 animate-slide-up">
        <div class="container mx-auto px-6 py-6">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Content */}
            <div class="flex-1">
              <h3 class="text-lg font-semibold mb-2 text-black dark:text-white">
                Cookie Toestemming
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
                We gebruiken cookies om uw ervaring te verbeteren en om webverkeer te analyseren met Google Analytics.
                Door op "Accepteren" te klikken, stemt u in met het gebruik van deze cookies.
              </p>
            </div>

            {/* Actions */}
            <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                class="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                Weigeren
              </button>
              <button
                onClick={handleAccept}
                class="px-6 py-2.5 text-sm font-medium bg-noir-blue text-black dark:text-white rounded-lg hover:shadow-lg hover:shadow-noir-blue/50 transition-all duration-200 whitespace-nowrap"
              >
                Accepteren
              </button>
            </div>
          </div>
        </div>
      </div>
    </Show>
  );
}
