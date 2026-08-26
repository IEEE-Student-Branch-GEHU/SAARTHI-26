/**
 * Prizes
 *
 * PLACEHOLDER — official prize amounts and categories have not been announced.
 */

export interface PrizeTier {
  id: string
  rank: number
  label: string
  /** e.g. '₹35,000' — leave empty string if not confirmed */
  amount: string
  /** Additional perks beyond the cash prize */
  perks: string[]
  confirmed: boolean
}

/**
 * PLACEHOLDER — replace with official prize data.
 * Rendered as a podium: rank 1 centre-top, rank 2 left, rank 3 right.
 */
export const prizes: PrizeTier[] = [
  {
    id: 'first',
    rank: 1,
    label: '1st Place',
    amount: 'TBA',
    perks: [],
    confirmed: false,
  },
  {
    id: 'second',
    rank: 2,
    label: '2nd Place',
    amount: 'TBA',
    perks: [],
    confirmed: false,
  },
  {
    id: 'third',
    rank: 3,
    label: '3rd Place',
    amount: 'TBA',
    perks: [],
    confirmed: false,
  },
]

/** Special/track-specific prizes — add once announced */
export const specialPrizes: { id: string; label: string; amount: string; confirmed: boolean }[] =
  []
