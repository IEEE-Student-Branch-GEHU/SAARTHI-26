/**
 * Sponsors
 *
 * PLACEHOLDER — no official sponsors have been announced.
 */

export type SponsorTier = 'title' | 'gold' | 'silver' | 'bronze' | 'inkind' | 'community'

export interface Sponsor {
  id: string
  name: string
  tier: SponsorTier
  /** URL to sponsor logo (SVG or WebP) */
  logoUrl: string
  websiteUrl: string
  confirmed: boolean
}

/**
 * PLACEHOLDER — populate with official sponsor data once partnership agreements are finalised.
 */
export const sponsors: Sponsor[] = []

/**
 * Controls the visual order and label of each tier in the SponsorsSection.
 */
export const sponsorTierOrder: { tier: SponsorTier; label: string }[] = [
  { tier: 'title',     label: 'Title Sponsor' },
  { tier: 'gold',      label: 'Gold Sponsors' },
  { tier: 'silver',    label: 'Silver Sponsors' },
  { tier: 'bronze',    label: 'Bronze Sponsors' },
  { tier: 'inkind',    label: 'In-Kind Sponsors' },
  { tier: 'community', label: 'Community Partners' },
]
