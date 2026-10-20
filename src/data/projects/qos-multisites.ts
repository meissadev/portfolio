import { todo, type Project } from '../types'

const project: Project = {
  slug: 'qos-multisites',
  code: 'PRJ-03',
  title: { fr: 'Qualité de service sur une topologie multi-sites' },
  summary: {
    fr: 'Topologie multi-sites émulée sous GNS3, avec routeurs de bordure et pare-feu FortiGate virtualisés, et validation par capture Wireshark.',
  },
  categories: ['reseau', 'securite'],
  status: 'done',
  context: { fr: todo('cadre du projet, durée, seul ou en équipe') },
  objective: {
    fr: 'Appliquer une politique de qualité de service entre plusieurs sites et en vérifier l’effet par l’analyse du trafic.',
  },
  technologies: ['GNS3', 'QoS', 'FortiGate (VM)', 'Routeurs de bordure', 'Wireshark'],
  achievements: [
    { fr: 'Construction d’une topologie multi-sites sous GNS3.' },
    { fr: 'Intégration de routeurs de bordure et de FortiGate virtualisés.' },
    { fr: 'Validation du comportement du trafic par captures Wireshark.' },
    {
      fr: todo(
        'classes de trafic et mécanismes QoS utilisés (marquage, files d’attente…), mesures avant / après',
      ),
    },
  ],
  learnings: [{ fr: todo('2 ou 3 apprentissages clés') }],
  topology: {
    title: {
      fr: 'Topologie de principe : deux sites reliés par un WAN, avec FortiGate et routeurs de bordure',
    },
    caption: {
      fr: 'Schéma de principe à deux sites. À compléter : nombre réel de sites et position exacte des FortiGate.',
    },
    zones: [
      { label: 'Site A', x: 10, y: 40, w: 560, h: 110 },
      { label: 'Site B', x: 10, y: 250, w: 560, h: 110 },
    ],
    nodes: [
      { id: 'lan-a', label: 'LAN A', sub: 'utilisateurs', kind: 'host', x: 100, y: 100, w: 150 },
      { id: 'fg-a', label: 'FortiGate A', sub: 'VM', kind: 'firewall', x: 290, y: 100, w: 160 },
      { id: 'edge-a', label: 'Bordure A', sub: 'routeur', kind: 'router', x: 475, y: 100, w: 160 },
      { id: 'lan-b', label: 'LAN B', sub: 'utilisateurs', kind: 'host', x: 100, y: 310, w: 150 },
      { id: 'fg-b', label: 'FortiGate B', sub: 'VM', kind: 'firewall', x: 290, y: 310, w: 160 },
      { id: 'edge-b', label: 'Bordure B', sub: 'routeur', kind: 'router', x: 475, y: 310, w: 160 },
      {
        id: 'wan',
        label: 'WAN',
        sub: 'liaison inter-sites',
        kind: 'cloud',
        x: 700,
        y: 205,
        w: 170,
      },
      { id: 'ws', label: 'Wireshark', sub: 'capture', kind: 'search', x: 700, y: 370, w: 150 },
    ],
    links: [
      { from: 'lan-a', to: 'fg-a' },
      { from: 'fg-a', to: 'edge-a' },
      { from: 'edge-a', to: 'wan', label: 'QoS' },
      { from: 'lan-b', to: 'fg-b' },
      { from: 'fg-b', to: 'edge-b' },
      { from: 'edge-b', to: 'wan', label: 'QoS' },
      { from: 'ws', to: 'wan', label: 'analyse', dashed: true },
    ],
  },
  screenshots: [],
  screenshotsHint: {
    fr: 'topologie GNS3, configuration QoS, capture Wireshark montrant le marquage ou la priorisation',
  },
  github: null,
}

export default project
