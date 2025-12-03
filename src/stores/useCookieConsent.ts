import { createSignal, createEffect } from 'solid-js';

export type ConsentStatus = 'pending' | 'accepted' | 'declined';

const CONSENT_KEY = 'cookie_consent_status';

// Initialize signals
const [consentStatus, setConsentStatus] = createSignal<ConsentStatus>('pending');
const [consentGiven, setConsentGiven] = createSignal(false);

// Initialize from storage on client-side
if (typeof window !== 'undefined') {
  const storedConsentLocal = localStorage.getItem(CONSENT_KEY) as ConsentStatus | null;
  const storedConsentSession = sessionStorage.getItem(CONSENT_KEY) as ConsentStatus | null;

  if (storedConsentLocal === 'accepted') {
    setConsentStatus('accepted');
    setConsentGiven(true);
  } else if (storedConsentSession === 'declined') {
    setConsentStatus('declined');
    setConsentGiven(false);
  }
}

export function useCookieConsent() {
  const hasConsent = () => consentStatus() === 'accepted';
  const shouldShowBanner = () => consentStatus() === 'pending';

  const acceptCookies = () => {
    setConsentStatus('accepted');
    setConsentGiven(true);

    // Store accepted consent in localStorage (persistent) - only on client
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONSENT_KEY, 'accepted');
      // Remove any declined consent from sessionStorage
      sessionStorage.removeItem(CONSENT_KEY);
    }
  };

  const declineCookies = () => {
    setConsentStatus('declined');
    setConsentGiven(false);

    // Store declined consent in sessionStorage (session only) - only on client
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(CONSENT_KEY, 'declined');
      // Remove any accepted consent from localStorage
      localStorage.removeItem(CONSENT_KEY);
    }
  };

  const resetConsent = () => {
    setConsentStatus('pending');
    setConsentGiven(false);

    // Clear from both storages - only on client
    if (typeof window !== 'undefined') {
      localStorage.removeItem(CONSENT_KEY);
      sessionStorage.removeItem(CONSENT_KEY);
    }
  };

  return {
    consentStatus,
    hasConsent,
    shouldShowBanner,
    consentGiven,
    acceptCookies,
    declineCookies,
    resetConsent,
  };
}
