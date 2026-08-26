/**
 * FAQ Content
 *
 * These are reasonable, generic FAQs for a hackathon.
 * All factual details reference confirmed event data (dates, theme).
 * Items marked `confirmed: false` should be replaced when official answers are available.
 */

export interface FAQItem {
  id: string
  question: string
  answer: string
  confirmed: boolean
}

export const faqs: FAQItem[] = [
  {
    id: 'what-is-saarthi',
    question: 'What is SAARTHI Hackathon?',
    answer:
      'SAARTHI Hackathon 2026 is a 48-hour Open Innovation hackathon taking place from 2–4 November 2026. Participants form teams, build projects from scratch, and present them to a panel of judges.',
    confirmed: true,
  },
  {
    id: 'who-can-participate',
    question: 'Who can participate?',
    answer:
      'Eligibility details will be announced soon. Check back here or follow our social channels for updates.',
    confirmed: false,
  },
  {
    id: 'team-size',
    question: 'What is the team size?',
    answer:
      'Team size guidelines will be confirmed and announced here. Individual participation rules are also TBA.',
    confirmed: false,
  },
  {
    id: 'registration-fee',
    question: 'Is there a registration fee?',
    answer: 'Registration fee details will be announced soon.',
    confirmed: false,
  },
  {
    id: 'theme',
    question: 'What is the theme?',
    answer:
      'The theme for SAARTHI 2026 is Open Innovation. You are free to build any project that demonstrates creative problem-solving and meaningful impact. There are no mandatory problem statements — innovation is the only constraint.',
    confirmed: true,
  },
  {
    id: 'judging-criteria',
    question: 'How will projects be judged?',
    answer:
      'Judging criteria will be announced closer to the event. Typical factors include innovation, impact, technical complexity, and presentation.',
    confirmed: false,
  },
  {
    id: 'prizes',
    question: 'What are the prizes?',
    answer: 'Prize details are being finalised and will be announced soon.',
    confirmed: false,
  },
  {
    id: 'contact',
    question: 'How can I contact the organizers?',
    answer:
      'Contact information will be made available soon. You can also reach out via our social media channels once they are live.',
    confirmed: false,
  },
]
