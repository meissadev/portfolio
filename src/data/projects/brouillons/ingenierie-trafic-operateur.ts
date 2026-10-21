import { todo, type Project } from '../../types'

const project: Project = {
  slug: 'ingenierie-trafic-operateur',
  code: 'PRJ-02',
  title: { fr: 'Ingénierie de trafic opérateur : BGP, VRF-Lite et cœur MPLS' },
  summary: {
    fr: 'Configuration d’un réseau de type opérateur sous Cisco IOS : sessions iBGP et eBGP en IPv4, séparation des clients par VRF-Lite et transport sur un cœur MPLS.',
  },
  categories: ['reseau'],
  status: 'done',
  context: {
    fr: todo(
      'cadre (TP de Master, projet personnel…) et outil d’émulation utilisé (GNS3, EVE-NG, matériel réel…)',
    ),
  },
  objective: {
    fr: 'Mettre en œuvre les briques d’un réseau d’opérateur : routage BGP interne et externe, isolation des clients et commutation MPLS dans le cœur.',
  },
  technologies: ['Cisco IOS', 'iBGP', 'eBGP', 'IPv4', 'VRF-Lite', 'MPLS'],
  achievements: [
    { fr: 'Configuration de sessions iBGP et eBGP en IPv4.' },
    { fr: 'Isolation des tables de routage des clients avec VRF-Lite.' },
    { fr: 'Mise en place d’un cœur MPLS.' },
    {
      fr: todo(
        'commandes de vérification et résultats (ex. show ip bgp summary), politiques de trafic appliquées',
      ),
    },
  ],
  learnings: [{ fr: todo('2 ou 3 apprentissages clés') }],
  topology: {
    title: { fr: 'Topologie de principe : clients en VRF-Lite, cœur MPLS et peering BGP' },
    caption: {
      fr: 'Schéma de principe. À compléter avec ta topologie réelle (nombre de routeurs, numéros d’AS, plan d’adressage).',
    },
    zones: [{ label: 'Cœur MPLS', x: 195, y: 115, w: 550, h: 190 }],
    nodes: [
      { id: 'ce-a', label: 'Routeur client A', sub: 'VRF-Lite', kind: 'router', x: 95, y: 90 },
      { id: 'ce-b', label: 'Routeur client B', sub: 'VRF-Lite', kind: 'router', x: 95, y: 330 },
      { id: 'pe1', label: 'PE1', sub: 'Cisco IOS', kind: 'router', x: 290, y: 210, w: 140 },
      { id: 'p', label: 'P', sub: 'commutation MPLS', kind: 'router', x: 470, y: 210, w: 150 },
      { id: 'pe2', label: 'PE2', sub: 'Cisco IOS', kind: 'router', x: 650, y: 210, w: 140 },
      { id: 'ext', label: 'AS externe', sub: 'peering', kind: 'cloud', x: 860, y: 210, w: 150 },
    ],
    links: [
      { from: 'ce-a', to: 'pe1', label: 'VRF A' },
      { from: 'ce-b', to: 'pe1', label: 'VRF B' },
      { from: 'pe1', to: 'p', label: 'MPLS' },
      { from: 'p', to: 'pe2', label: 'MPLS' },
      { from: 'pe1', to: 'pe2', label: 'iBGP', dashed: true, bend: -150 },
      { from: 'pe2', to: 'ext', label: 'eBGP' },
    ],
  },
  screenshots: [],
  screenshotsHint: {
    fr: 'topologie dans l’émulateur, sortie de show ip bgp summary, table MPLS (show mpls forwarding-table)',
  },
  github: null,
}

export default project
