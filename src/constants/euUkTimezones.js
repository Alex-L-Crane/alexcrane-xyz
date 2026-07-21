// IANA zones for the 27 EU member states + the UK, used as a best-effort,
// no-network geofence for the GDPR consent banner. Not authoritative --
// misses VPN users (reads as the VPN's region) and mis-detects travelers
// in both directions. See useConsent.js's isLikelyEuUk() for the check.
export const EU_UK_TIMEZONES = new Set([
  // UK
  'Europe/London',
  // Ireland
  'Europe/Dublin',
  // France
  'Europe/Paris',
  // Germany
  'Europe/Berlin',
  // Spain
  'Europe/Madrid',
  // Italy
  'Europe/Rome',
  // Netherlands
  'Europe/Amsterdam',
  // Belgium
  'Europe/Brussels',
  // Austria
  'Europe/Vienna',
  // Poland
  'Europe/Warsaw',
  // Czechia
  'Europe/Prague',
  // Slovakia
  'Europe/Bratislava',
  // Hungary
  'Europe/Budapest',
  // Romania
  'Europe/Bucharest',
  // Bulgaria
  'Europe/Sofia',
  // Greece
  'Europe/Athens',
  // Portugal
  'Europe/Lisbon',
  // Sweden
  'Europe/Stockholm',
  // Finland
  'Europe/Helsinki',
  // Denmark
  'Europe/Copenhagen',
  // Croatia
  'Europe/Zagreb',
  // Slovenia
  'Europe/Ljubljana',
  // Lithuania
  'Europe/Vilnius',
  // Latvia
  'Europe/Riga',
  // Estonia
  'Europe/Tallinn',
  // Luxembourg
  'Europe/Luxembourg',
  // Malta
  'Europe/Malta',
  // Cyprus -- IANA's canonical zone is Europe/Nicosia; Asia/Nicosia is kept
  // as a defensive alias since some ICU/browser data still reports it.
  'Europe/Nicosia',
  'Asia/Nicosia',
])
