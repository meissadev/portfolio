import { todo, type Project } from '../types'

const project: Project = {
  slug: 'ngfw-sophos-fortigate',
  code: 'PRJ-04',
  title: { fr: 'Étude comparative NGFW : Sophos vs FortiGate' },
  summary: {
    fr: 'Comparaison de deux pare-feu nouvelle génération sur cinq fonctions : IPS, filtrage web, filtrage du trafic, WAF et intégration Active Directory.',
  },
  categories: ['securite', 'reseau'],
  status: 'done',
  context: {
    fr: todo('cadre de l’étude (cours, demande d’entreprise…), durée, seul ou en équipe'),
  },
  objective: {
    fr: 'Évaluer Sophos et FortiGate sur les mêmes fonctions de sécurité pour éclairer le choix d’un pare-feu.',
  },
  technologies: ['Sophos', 'FortiGate', 'IPS', 'Filtrage web', 'WAF', 'Active Directory'],
  achievements: [
    { fr: 'Configuration et test de l’IPS sur les deux solutions.' },
    { fr: 'Mise en place du filtrage web et du filtrage du trafic.' },
    { fr: 'Configuration du WAF.' },
    { fr: 'Intégration des deux pare-feu avec Active Directory.' },
    {
      fr: todo(
        'tableau comparatif et conclusion : quelle solution recommander, pour quel contexte',
      ),
    },
  ],
  learnings: [{ fr: todo('2 ou 3 apprentissages clés') }],
  topology: {
    title: {
      fr: 'Banc de test de principe : un NGFW entre le LAN, Active Directory, un serveur web et Internet',
    },
    caption: {
      fr: 'Schéma de principe du banc de test : le même scénario est appliqué à Sophos puis à FortiGate.',
    },
    nodes: [
      { id: 'clients', label: 'Postes clients', sub: 'LAN', kind: 'host', x: 100, y: 90 },
      { id: 'ad', label: 'Active Directory', sub: 'annuaire', kind: 'server', x: 100, y: 320 },
      {
        id: 'ngfw',
        label: 'NGFW testé',
        sub: 'Sophos | FortiGate',
        kind: 'firewall',
        x: 390,
        y: 205,
        w: 190,
      },
      { id: 'internet', label: 'Internet', sub: 'sites web', kind: 'cloud', x: 680, y: 90 },
      { id: 'web', label: 'Serveur web', sub: 'publié', kind: 'server', x: 680, y: 320 },
    ],
    links: [
      { from: 'clients', to: 'ngfw', label: 'filtrage du trafic' },
      { from: 'ad', to: 'ngfw', label: 'intégration AD', dashed: true },
      { from: 'ngfw', to: 'internet', label: 'IPS · filtrage web' },
      { from: 'ngfw', to: 'web', label: 'WAF' },
    ],
  },
  screenshots: [],
  screenshotsHint: {
    fr: 'règles IPS, page de blocage du filtrage web, journal du WAF, configuration AD sur chaque pare-feu',
  },
  github: null,
}

export default project
