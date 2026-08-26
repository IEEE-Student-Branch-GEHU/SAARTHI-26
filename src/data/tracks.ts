/**
 * Hackathon Tracks
 *
 * PLACEHOLDER — no official tracks have been announced for SAARTHI 2026.
 * The event is based on Open Innovation — tracks may or may not be defined.
 *
 * Architecture note:
 *   - Add tracks by appending objects to this array.
 *   - The TracksSection component renders whatever is in this array.
 *   - Removing all tracks renders an "Announced Soon" state instead of empty cards.
 */

export interface Track {
  id: string
  name: string
  description: string
  /** SVG icon identifier — maps to an icon component in src/components/icons/ */
  icon: string
  /** Hex colour used for this track's accent — overrides the default cyan */
  accentColor: string
  tags: string[]
  /** false = not yet officially announced; used to show a "Coming Soon" badge */
  confirmed: boolean
}

/**
 * Currently empty — Open Innovation is the overarching theme.
 * Populate with official sub-tracks once announced.
 */
export const tracks: Track[] = []

/**
 * Fallback shown when tracks array is empty.
 */
export const tracksPlaceholder = {
  heading: 'Tracks',
  subheading: 'Open Innovation',
  body:
    'Track details will be announced soon. SAARTHI 2026 is built around Open Innovation — bring any idea that makes a difference.',
} as const
