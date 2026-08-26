/**
 * SAARTHI Hackathon 2026 — Site Configuration
 *
 * All event-specific and branding values are centralised here.
 * Replace these placeholders as official information becomes available.
 *
 * Design tokens (colors, fonts, spacing) live in src/styles/tokens.css.
 * Content data (tracks, FAQs, etc.) lives in src/data/.
 */

// ─── Event ────────────────────────────────────────────────────────────────────

export const EVENT_NAME = 'SAARTHI Hackathon 2026' as const

export const EVENT_TAGLINE = 'Build the Future. One Block at a Time.' as const

export const EVENT_THEME = 'Open Innovation' as const

export const EVENT_DATES = {
  start: new Date('2026-11-02T00:00:00'),
  end: new Date('2026-11-04T23:59:59'),
  /** Human-readable label shown in UI */
  label: '2 – 4 November 2026',
  /** Duration in hours */
  durationHours: 48,
} as const

// ─── Venue ────────────────────────────────────────────────────────────────────

/**
 * PLACEHOLDER — replace once official venue is confirmed.
 * Set `confirmed: true` when the value is official.
 */
export const VENUE = {
  name: 'Venue TBA',
  city: 'India',
  address: '',
  mapsUrl: '',
  confirmed: false,
} as const

// ─── Registration ─────────────────────────────────────────────────────────────

/**
 * PLACEHOLDER — replace with the official registration link once finalised.
 * This is the single place to update when the registration platform is decided.
 */
export const REGISTRATION_URL = '' as const

/** Set to true once registration is open to enable CTA links */
export const REGISTRATION_OPEN = false as const

/** Team size constraints */
export const TEAM_SIZE = {
  min: 1,
  max: 4,
  confirmed: false, // replace with true once officially confirmed
} as const

// ─── Social / Contact ─────────────────────────────────────────────────────────

/**
 * PLACEHOLDER — add official handles/links when available.
 */
export const SOCIAL = {
  twitter: '',
  instagram: '',
  linkedin: '',
  discord: '',
  email: '',
} as const

// ─── Stats (Social Proof) ─────────────────────────────────────────────────────

/**
 * PLACEHOLDER — replace with real figures from past editions.
 * Set confirmed: true for each value once officially verified.
 */
export const STATS = [
  { id: 'participants', label: 'Participants', value: 500, suffix: '+', confirmed: false },
  { id: 'colleges',     label: 'Colleges',     value: 50,  suffix: '+', confirmed: false },
  { id: 'hours',        label: 'Hours of Hacking', value: 48, suffix: 'h', confirmed: true },
  { id: 'prize_pool',   label: 'Prize Pool',    value: 0,   prefix: '₹', suffix: '', confirmed: false },
] as const

// ─── Branding helpers ─────────────────────────────────────────────────────────

/** Short name used in navigation and logo */
export const BRAND_SHORT_NAME = 'SAARTHI' as const

/** Full legal / formal name of the organising body — PLACEHOLDER */
export const ORGANIZER_NAME = '[Organizer Name — TBD]' as const
