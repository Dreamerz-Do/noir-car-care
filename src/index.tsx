/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.tsx'
import { initializeFirebaseAnalytics } from './utils/firebase.client.ts'

const root = document.getElementById('root')

render(() => <App />, root!)

// Initialize Firebase Analytics after app is mounted (non-blocking)
// This will only enable analytics if user has already given consent
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    initializeFirebaseAnalytics()
  })
} else {
  setTimeout(() => {
    initializeFirebaseAnalytics()
  }, 1)
}
