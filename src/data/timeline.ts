/**
 * Event Timeline
 *
 * PLACEHOLDER — official schedule for SAARTHI 2026 has not been confirmed.
 * The structure below defines the shape. Add or edit entries as the schedule is finalised.
 */

export interface TimelineEvent {
  id: string
  phase: string
  /** Human-readable date/time string */
  date: string
  description: string
  /** true = this event has passed; drives visual treatment */
  completed: boolean
  /** true = this is the "current" or next upcoming event */
  active: boolean
  confirmed: boolean
}

/**
 * PLACEHOLDER entries — replace with official dates.
 * Keep the entries in chronological order.
 */
export const timeline: TimelineEvent[] = [
  {
    id: 'registration-open',
    phase: 'Registration Opens',
    date: 'TBA',
    description: 'Online registration opens for all participants.',
    completed: false,
    active: false,
    confirmed: false,
  },
  {
    id: 'registration-close',
    phase: 'Registration Closes',
    date: 'TBA',
    description: 'Last date to register your team.',
    completed: false,
    active: false,
    confirmed: false,
  },
  {
    id: 'hackathon-start',
    phase: 'Hackathon Begins',
    date: '2 November 2026',
    description: 'The 48-hour Open Innovation hackathon kicks off.',
    completed: false,
    active: false,
    confirmed: true,
  },
  {
    id: 'submission-deadline',
    phase: 'Project Submission',
    date: '4 November 2026',
    description: 'Final project submissions close.',
    completed: false,
    active: false,
    confirmed: true,
  },
  {
    id: 'results',
    phase: 'Results & Awards',
    date: '4 November 2026',
    description: 'Winners announced and prizes awarded.',
    completed: false,
    active: false,
    confirmed: true,
  },
]
