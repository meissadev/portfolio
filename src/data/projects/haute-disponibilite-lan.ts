import { todo, type Project } from '../types'

const project: Project = {
  slug: 'haute-disponibilite-lan',
  code: 'PRJ-08',
  title: { fr: 'Haute disponibilité LAN : HSRP, EtherChannel et Rapid PVST+' },
  summary: {
    fr: 'Réseau campus redondant sous Cisco Packet Tracer : deux routeurs en HSRP, quatre commutateurs reliés par six EtherChannel LACP, Rapid PVST+ et routage inter-VLAN par sous-interfaces 802.1Q.',
  },
  categories: ['reseau'],
  status: 'done',
  context: {
    fr: 'TP d’intégration des compétences du module « Disponibilité dans les LAN », Licence 3 Réseaux et Télécoms (semestre 6), réalisé sous Cisco Packet Tracer. Le routage RIP, les PC et les équipements Internet étaient préconfigurés.',
  },
  objective: {
    fr: 'Configurer les routeurs R1 et R2 et les commutateurs S1 à S4 pour que tous les PC des VLAN 10 et 20 joignent le serveur web et les autres PC, sans point de défaillance unique entre l’accès et le WAN.',
  },
  technologies: [
    'Cisco IOS',
    'HSRP',
    'EtherChannel LACP',
    'Rapid PVST+',
    'VLAN / 802.1Q',
    'Packet Tracer',
  ],
  achievements: [
    {
      fr: 'Routage inter-VLAN sur R1 et R2 par sous-interfaces dot1Q (VLAN 10, 20 et 99), avec le VLAN 99 comme VLAN natif.',
    },
    {
      fr: 'HSRP sur les sous-interfaces : R1 actif pour les VLAN 10 et 99, R2 actif pour le VLAN 20 (priorité 250). Les PC utilisent l’adresse virtuelle .1 comme passerelle.',
    },
    {
      fr: 'Trunks natifs VLAN 99 sur F0/19–24 et G0/1–2, et six EtherChannel LACP (Po1 à Po6) en maillage complet entre S1, S2, S3 et S4.',
    },
    {
      fr: 'Rapid PVST+ sur tous les commutateurs : S1 racine du VLAN 10 (4096), S2 racine du VLAN 20 (4096), chacun aligné sur le routeur HSRP actif du même VLAN.',
    },
    {
      fr: todo(
        'résultats de validation : show standby brief, show etherchannel summary, show spanning-tree, pings PC → web, test de bascule en coupant R1',
      ),
    },
  ],
  learnings: [
    {
      fr: todo(
        '2 ou 3 apprentissages clés (ex. aligner racine STP et routeur HSRP actif, rôle du VLAN natif, comportement lors d’une bascule)',
      ),
    },
  ],
  topology: {
    title: {
      fr: 'Topologie : serveur web derrière un FAI, routeurs R1 et R2 en HSRP, commutateurs S1 à S4 maillés en EtherChannel, quatre PC répartis sur les VLAN 10 et 20',
    },
    caption: {
      fr: 'Topologie du TP redessinée à partir de l’énoncé. Po1 à Po6 : EtherChannel LACP. Liens ISP–R1, ISP–R2 et R1–R2 : liaisons série.',
    },
    zones: [{ label: 'LACP · Rapid PVST+', x: 60, y: 270, w: 780, h: 250 }],
    nodes: [
      { id: 'web', label: 'Serveur web', sub: '64.104.13.130', kind: 'server', x: 120, y: 50 },
      { id: 'isp', label: 'ISP', sub: 'Internet', kind: 'cloud', x: 450, y: 50, w: 140 },
      { id: 'r1', label: 'R1', sub: 'HSRP actif 10, 99', kind: 'router', x: 250, y: 180 },
      { id: 'r2', label: 'R2', sub: 'HSRP actif 20', kind: 'router', x: 650, y: 180 },
      { id: 's1', label: 'S1', sub: 'racine VLAN 10', kind: 'switch', x: 250, y: 320, w: 160 },
      { id: 's2', label: 'S2', sub: 'racine VLAN 20', kind: 'switch', x: 650, y: 320, w: 160 },
      { id: 's3', label: 'S3', sub: 'accès', kind: 'switch', x: 250, y: 470, w: 160 },
      { id: 's4', label: 'S4', sub: 'accès', kind: 'switch', x: 650, y: 470, w: 160 },
      { id: 'pc10a', label: 'PC10A', sub: 'VLAN 10', kind: 'host', x: 150, y: 610, w: 140 },
      { id: 'pc20a', label: 'PC20A', sub: 'VLAN 20', kind: 'host', x: 350, y: 610, w: 140 },
      { id: 'pc10b', label: 'PC10B', sub: 'VLAN 10', kind: 'host', x: 550, y: 610, w: 140 },
      { id: 'pc20b', label: 'PC20B', sub: 'VLAN 20', kind: 'host', x: 750, y: 610, w: 140 },
    ],
    links: [
      { from: 'web', to: 'isp', label: '/30' },
      { from: 'isp', to: 'r1', label: 'série' },
      { from: 'isp', to: 'r2', label: 'série' },
      { from: 'r1', to: 'r2', label: 'série' },
      { from: 'r1', to: 's1', label: 'trunk 802.1Q' },
      { from: 'r2', to: 's2', label: 'trunk 802.1Q' },
      { from: 's1', to: 's3', label: 'Po1' },
      { from: 's2', to: 's4', label: 'Po2' },
      { from: 's1', to: 's2', label: 'Po3' },
      { from: 's3', to: 's4', label: 'Po4' },
      { from: 's1', to: 's4', label: 'Po5', bend: 45 },
      { from: 's2', to: 's3', label: 'Po6', bend: 45 },
      { from: 's3', to: 'pc10a' },
      { from: 's3', to: 'pc20a' },
      { from: 's4', to: 'pc10b' },
      { from: 's4', to: 'pc20b' },
    ],
  },
  screenshots: [
    {
      src: '/images/projets/haute-disponibilite-lan/topologie-packet-tracer.png',
      alt: {
        fr: 'Topologie Packet Tracer : serveur web relié à l’ISP, routeurs R1 et R2 reliés en série à l’ISP, commutateurs S1 à S4 reliés par six canaux EtherChannel LACP, et quatre PC.',
      },
      caption: { fr: 'Topologie Packet Tracer de l’énoncé du TP.' },
    },
  ],
  screenshotsHint: {
    fr: 'show standby brief sur R1 et R2, show etherchannel summary, show spanning-tree vlan 10, ping réussi vers le serveur web',
  },
  github: null,
}

export default project
