import { initializeApp, type FirebaseApp } from 'firebase/app';
import {
  getAnalytics,
  type Analytics,
  setAnalyticsCollectionEnabled,
  logEvent,
} from 'firebase/analytics';

// Firebase configuration
// Replace with your actual Firebase config values
const firebaseConfig = {
  apiKey: "AIzaSyD11PsTKzo83PuFT8KCcNxOUX5oq_b-A4g",
  authDomain: "noir-car-care.firebaseapp.com",
  projectId: "noir-car-care",
  storageBucket: "noir-car-care.firebasestorage.app",
  messagingSenderId: "111658799199",
  appId: "1:111658799199:web:d2fd030f5b751f9ecd0bea",
  measurementId: "G-LWZ3ZVJQL0"
};

const CONSENT_KEY = 'cookie_consent_status';

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;

/**
 * Initialize Firebase Analytics based on user consent
 */
export function initializeFirebaseAnalytics() {
  // Only run on client-side
  if (typeof window === 'undefined') {
    return;
  }

  // Check if already initialized
  if (app && analytics) {
    return;
  }

  try {
    // Initialize Firebase app
    app = initializeApp(firebaseConfig);

    // Initialize analytics
    analytics = getAnalytics(app);

    // Check if user has given consent
    const storedConsent = localStorage.getItem(CONSENT_KEY);

    // Enable or disable analytics based on consent
    if (storedConsent === 'accepted') {
      setAnalyticsCollectionEnabled(analytics, true);
      console.log('Firebase Analytics enabled');

      // Track initial page view
      trackPageView(window.location.pathname);
    } else {
      setAnalyticsCollectionEnabled(analytics, false);
      console.log('Firebase Analytics disabled (no consent)');
    }
  } catch (error) {
    console.error('Error initializing Firebase Analytics:', error);
  }
}

/**
 * Track page views
 */
export function trackPageView(pagePath: string) {
  if (!analytics) {
    return;
  }

  const consentStatus = localStorage.getItem(CONSENT_KEY);
  if (consentStatus !== 'accepted') {
    return;
  }

  try {
    logEvent(analytics, 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
    });
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
}

/**
 * Track custom events
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (!analytics) {
    return;
  }

  const consentStatus = localStorage.getItem(CONSENT_KEY);
  if (consentStatus !== 'accepted') {
    return;
  }

  try {
    logEvent(analytics, eventName, eventParams);
  } catch (error) {
    console.error('Error tracking event:', error);
  }
}

/**
 * Get the Firebase app instance
 */
export function getFirebaseApp(): FirebaseApp | null {
  return app;
}

/**
 * Get the Analytics instance
 */
export function getFirebaseAnalytics(): Analytics | null {
  return analytics;
}
