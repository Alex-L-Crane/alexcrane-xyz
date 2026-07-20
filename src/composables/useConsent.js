import { ref } from 'vue'
import { EU_UK_TIMEZONES } from '@/constants/euUkTimezones.js'

const CONSENT_KEY = 'ga-consent-eu-uk' // 'granted' | 'denied' | absent

export function isLikelyEuUk() {
  try {
    return EU_UK_TIMEZONES.has(Intl.DateTimeFormat().resolvedOptions().timeZone)
  } catch {
    return false
  }
}

function getStoredConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

function setStoredConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // ignore -- storage unavailable (private mode, quota, etc.)
  }
}

export function clearStoredConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY)
  } catch {
    // ignore
  }
}

// Non-EU/UK visitors are always allowed -- Consent Mode's own default
// (granted, when no 'consent default' call is ever made) already matches
// this, this just gates our own manual page_view firing to match.
export function hasAnalyticsConsent() {
  return !isLikelyEuUk() || getStoredConsent() === 'granted'
}

export function needsConsentPrompt() {
  return isLikelyEuUk() && getStoredConsent() === null
}

// Module-scoped, not per-call -- ConsentBanner.vue (renders it) and
// GlobalFooter.vue's "Privacy Choices" link (reopens it) are siblings in
// App.vue, not parent/child, so they need one shared ref, not two
// independent instances that can't see each other's updates.
const visible = ref(needsConsentPrompt())

// Vue-facing half -- banner visibility + the two choices. Only
// ConsentBanner.vue and the footer's "Privacy Choices" control use this.
export function useConsent() {
  function accept() {
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    setStoredConsent('granted')
    visible.value = false
  }

  function decline() {
    window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
    setStoredConsent('denied')
    visible.value = false
  }

  function reopen() {
    clearStoredConsent()
    visible.value = true
  }

  return { visible, accept, decline, reopen }
}
