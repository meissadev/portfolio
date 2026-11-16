import type { Certification, TimelineEntry } from './types'

export const education: TimelineEntry[] = [
  {
    id: 'master',
    period: { fr: '2024 – présent', en: '2024 – present' },
    title: { fr: 'Master Réseaux et Télécoms', en: 'Master’s in Networks and Telecommunications' },
    org: {
      fr: 'Université Iba Der Thiam de Thiès (UIDT)',
      en: 'Université Iba Der Thiam de Thiès (UIDT), Senegal',
    },
    details: [
      {
        fr: 'Mémoire en cours : architecture Zero Trust post-quantique basée sur la cryptographie à codes correcteurs d’erreurs.',
        en: 'Thesis in progress: a post-quantum Zero Trust architecture based on code-based (error-correcting code) cryptography.',
      },
    ],
  },
  {
    id: 'aws-restart',
    period: { fr: 'Février – juillet 2026', en: 'February – July 2026' },
    title: { fr: 'AWS re/Start & DevOps', en: 'AWS re/Start & DevOps' },
    org: { fr: 'Sonatel Academy', en: 'Sonatel Academy' },
  },
  {
    id: 'licence',
    period: { fr: '2021 – 2024', en: '2021 – 2024' },
    title: {
      fr: 'Licence Réseaux et Télécoms',
      en: 'Bachelor’s in Networks and Telecommunications',
    },
    org: {
      fr: 'Université Iba Der Thiam de Thiès (UIDT)',
      en: 'Université Iba Der Thiam de Thiès (UIDT), Senegal',
    },
  },
]

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: { fr: 'Juillet 2026', en: 'July 2026' },
    verifyUrl: 'https://www.credly.com/badges/d4e0caf7-aa01-493d-a36c-90c4e7a956ec/public_url',
  },
  {
    name: 'AWS re/Start Graduate',
    issuer: 'Amazon Web Services · Sonatel Academy',
    date: { fr: '2026', en: '2026' },
    verifyUrl: 'https://www.credly.com/badges/a364b0de-b831-4bc8-b025-fcf075bbafee/public_url',
  },
  {
    name: { fr: 'SOC Fundamentals — badge SOC Member', en: 'SOC Fundamentals — SOC Member badge' },
    issuer: 'LetsDefend',
    date: { fr: 'Octobre 2025', en: 'October 2025' },
    verifyUrl: 'https://app.letsdefend.io/my-rewards/detail/ced40f31e0a74870b0b74c0dad1aa423',
  },
]
