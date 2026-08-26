/**
 * Judges & Mentors
 *
 * PLACEHOLDER — no official judges or mentors have been announced.
 */

export interface Person {
  id: string
  name: string
  role: string
  organization: string
  /** URL to a professional photo (WebP preferred) — use placeholder avatar if not yet available */
  photoUrl: string
  linkedinUrl: string
  type: 'judge' | 'mentor'
  confirmed: boolean
}

/**
 * PLACEHOLDER — populate with official judge/mentor data once announced.
 */
export const judges: Person[] = []

export const mentors: Person[] = []
