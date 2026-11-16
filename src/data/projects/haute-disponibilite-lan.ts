import type { Project } from '../types'

const project: Project = {
  slug: 'haute-disponibilite-lan',
  code: 'PRJ-03',
  title: {
    fr: 'Haute disponibilité LAN : HSRP, EtherChannel et Rapid PVST+',
    en: 'LAN high availability: HSRP, EtherChannel and Rapid PVST+',
  },
  summary: {
    fr: 'Réseau campus redondant sous Cisco Packet Tracer : deux routeurs en HSRP, quatre commutateurs reliés par six EtherChannel LACP, Rapid PVST+ et routage inter-VLAN par sous-interfaces 802.1Q.',
    en: 'Redundant campus network in Cisco Packet Tracer: two routers running HSRP, four switches connected by six LACP EtherChannels, Rapid PVST+ and inter-VLAN routing with 802.1Q subinterfaces.',
  },
  categories: ['reseau'],
  status: 'done',
  context: {
    fr: 'TP d’intégration des compétences du module « Disponibilité dans les LAN », Licence 3 Réseaux et Télécoms (semestre 6), réalisé sous Cisco Packet Tracer. Le routage RIP, les PC et les équipements Internet étaient préconfigurés.',
    en: 'Capstone lab of the “Availability in LANs” course, Bachelor’s in Networks and Telecommunications (year 3, semester 6), built in Cisco Packet Tracer. RIP routing, the PCs and the Internet devices were preconfigured.',
  },
  objective: {
    fr: 'Configurer les routeurs R1 et R2 et les commutateurs S1 à S4 pour que tous les PC des VLAN 10 et 20 joignent le serveur web et les autres PC, sans point de défaillance unique entre l’accès et le WAN.',
    en: 'Configure routers R1 and R2 and switches S1 to S4 so that every PC in VLANs 10 and 20 reaches the web server and the other PCs, with no single point of failure between the access layer and the WAN.',
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
      en: 'Inter-VLAN routing on R1 and R2 with dot1Q subinterfaces (VLANs 10, 20 and 99), with VLAN 99 as the native VLAN.',
    },
    {
      fr: 'HSRP avec préemption : R1 actif pour les VLAN 10 et 99, R2 actif pour le VLAN 20 (priorité 250). Les PC utilisent l’adresse virtuelle .1 comme passerelle.',
      en: 'HSRP with preemption: R1 active for VLANs 10 and 99, R2 active for VLAN 20 (priority 250). The PCs use the virtual .1 address as their gateway.',
    },
    {
      fr: 'Six EtherChannel LACP (Po1 à Po6) en maillage complet entre S1, S2, S3 et S4, sur des trunks au VLAN natif 99.',
      en: 'Six LACP EtherChannels (Po1 to Po6) in a full mesh between S1, S2, S3 and S4, on trunks with native VLAN 99.',
    },
    {
      fr: 'Rapid PVST+ : S1 racine du VLAN 10 et S2 racine du VLAN 20, chacun aligné sur le routeur HSRP actif du même VLAN.',
      en: 'Rapid PVST+: S1 is root for VLAN 10 and S2 root for VLAN 20, each aligned with the active HSRP router of the same VLAN.',
    },
    {
      fr: 'Validé : show standby brief montre R1 actif pour le VLAN 10 et R2 en veille, et l’inverse pour le VLAN 20.',
      en: 'Verified: show standby brief shows R1 active for VLAN 10 with R2 on standby, and the reverse for VLAN 20.',
    },
    {
      fr: 'Validé : sur S1, Po1, Po3 et Po5 sont en service (SU) en LACP, tous les ports agrégés (P).',
      en: 'Verified: on S1, Po1, Po3 and Po5 are in use (SU) with LACP, all member ports bundled (P).',
    },
    {
      fr: 'Validé : S1 est racine du VLAN 10 (priorité 4106 = 4096 + VLAN 10) et S2 du VLAN 20 (4116), en mode rstp.',
      en: 'Verified: S1 is root for VLAN 10 (priority 4106 = 4096 + VLAN 10) and S2 for VLAN 20 (4116), in rstp mode.',
    },
    {
      fr: 'Validé : PC10A joint le serveur web (TTL 126) et PC20B dans l’autre VLAN (TTL 127), 0 % de perte.',
      en: 'Verified: PC10A reaches the web server (TTL 126) and PC20B in the other VLAN (TTL 127), 0 % loss.',
    },
    {
      fr: 'Test de bascule : avec un ping continu de PC10A vers le serveur web, la coupure de R1 coûte 2 requêtes perdues, puis R2 devient actif pour le VLAN 10 et le trafic reprend.',
      en: 'Failover test: with a continuous ping from PC10A to the web server, shutting down R1 costs 2 lost requests, then R2 becomes active for VLAN 10 and traffic resumes.',
    },
  ],
  learnings: [
    {
      fr: 'Aligner la racine Spanning Tree et le routeur HSRP actif de chaque VLAN évite au trafic un détour par le lien entre commutateurs de distribution, tout en répartissant la charge entre R1 et R2.',
      en: 'Aligning the Spanning Tree root and the active HSRP router for each VLAN keeps traffic from detouring over the link between distribution switches, while sharing the load between R1 and R2.',
    },
    {
      fr: 'La priorité de pont affichée inclut le sys-id-ext : 4096 configuré devient 4106 pour le VLAN 10. Il faut le savoir pour lire show spanning-tree.',
      en: 'The displayed bridge priority includes the sys-id-ext: a configured 4096 becomes 4106 for VLAN 10. You need to know this to read show spanning-tree.',
    },
    {
      fr: 'HSRP rend la panne d’un routeur quasi invisible pour les postes : la passerelle virtuelle ne change pas, seules quelques secondes de convergence sont perdues.',
      en: 'HSRP makes a router failure almost invisible to hosts: the virtual gateway does not change, only a few seconds of convergence are lost.',
    },
    {
      fr: 'Point relevé dans les sorties : sur le VLAN 99 (natif), R1 et R2 se déclarent tous deux actifs, avec un standby « unknown ». Leurs messages HSRP ne se voient pas sur ce VLAN ; la piste à vérifier est la cohérence du VLAN natif entre sous-interfaces et trunks.',
      en: 'Issue spotted in the outputs: on VLAN 99 (native), R1 and R2 both declare themselves active, with an “unknown” standby. Their HSRP hellos do not reach each other on this VLAN; the lead to check is native VLAN consistency between subinterfaces and trunks.',
    },
  ],
  topology: {
    title: {
      fr: 'Topologie : serveur web derrière un FAI, routeurs R1 et R2 en HSRP, commutateurs S1 à S4 maillés en EtherChannel, quatre PC répartis sur les VLAN 10 et 20',
      en: 'Topology: web server behind an ISP, routers R1 and R2 running HSRP, switches S1 to S4 meshed with EtherChannel, four PCs spread across VLANs 10 and 20',
    },
    caption: {
      fr: 'Topologie du TP redessinée à partir de l’énoncé. Po1 à Po6 : EtherChannel LACP. Liens ISP–R1, ISP–R2 et R1–R2 : liaisons série.',
      en: 'Lab topology redrawn from the assignment. Po1 to Po6: LACP EtherChannel. ISP–R1, ISP–R2 and R1–R2 links: serial links.',
    },
    zones: [{ label: 'LACP · Rapid PVST+', x: 60, y: 270, w: 780, h: 250 }],
    nodes: [
      {
        id: 'web',
        label: { fr: 'Serveur web', en: 'Web server' },
        sub: '64.104.13.130',
        kind: 'server',
        x: 120,
        y: 50,
      },
      { id: 'isp', label: 'ISP', sub: 'Internet', kind: 'cloud', x: 450, y: 50, w: 140 },
      {
        id: 'r1',
        label: 'R1',
        sub: { fr: 'HSRP actif 10, 99', en: 'HSRP active 10, 99' },
        kind: 'router',
        x: 250,
        y: 180,
      },
      {
        id: 'r2',
        label: 'R2',
        sub: { fr: 'HSRP actif 20', en: 'HSRP active 20' },
        kind: 'router',
        x: 650,
        y: 180,
      },
      {
        id: 's1',
        label: 'S1',
        sub: { fr: 'racine VLAN 10', en: 'VLAN 10 root' },
        kind: 'switch',
        x: 250,
        y: 320,
        w: 160,
      },
      {
        id: 's2',
        label: 'S2',
        sub: { fr: 'racine VLAN 20', en: 'VLAN 20 root' },
        kind: 'switch',
        x: 650,
        y: 320,
        w: 160,
      },
      {
        id: 's3',
        label: 'S3',
        sub: { fr: 'accès', en: 'access' },
        kind: 'switch',
        x: 250,
        y: 470,
        w: 160,
      },
      {
        id: 's4',
        label: 'S4',
        sub: { fr: 'accès', en: 'access' },
        kind: 'switch',
        x: 650,
        y: 470,
        w: 160,
      },
      { id: 'pc10a', label: 'PC10A', sub: 'VLAN 10', kind: 'host', x: 150, y: 610, w: 140 },
      { id: 'pc20a', label: 'PC20A', sub: 'VLAN 20', kind: 'host', x: 350, y: 610, w: 140 },
      { id: 'pc10b', label: 'PC10B', sub: 'VLAN 10', kind: 'host', x: 550, y: 610, w: 140 },
      { id: 'pc20b', label: 'PC20B', sub: 'VLAN 20', kind: 'host', x: 750, y: 610, w: 140 },
    ],
    links: [
      { from: 'web', to: 'isp', label: '/30' },
      { from: 'isp', to: 'r1', label: { fr: 'série', en: 'serial' } },
      { from: 'isp', to: 'r2', label: { fr: 'série', en: 'serial' } },
      { from: 'r1', to: 'r2', label: { fr: 'série', en: 'serial' } },
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
        en: 'Packet Tracer topology: web server connected to the ISP, routers R1 and R2 connected to the ISP over serial links, switches S1 to S4 connected by six LACP EtherChannels, and four PCs.',
      },
      caption: {
        fr: 'Topologie Packet Tracer de l’énoncé du TP.',
        en: 'Packet Tracer topology from the lab assignment.',
      },
      wide: true,
    },
    {
      src: '/images/projets/haute-disponibilite-lan/hsrp-r1.png',
      alt: {
        fr: 'Sortie show standby brief sur R1 : groupe 10 actif priorité 250, groupe 20 en veille priorité 100, groupe 99 actif priorité 250.',
        en: 'show standby brief output on R1: group 10 active priority 250, group 20 standby priority 100, group 99 active priority 250.',
      },
      caption: {
        fr: 'R1 · show standby brief : actif pour les VLAN 10 et 99.',
        en: 'R1 · show standby brief: active for VLANs 10 and 99.',
      },
      wide: true,
    },
    {
      src: '/images/projets/haute-disponibilite-lan/hsrp-r2.png',
      alt: {
        fr: 'Sortie show standby brief sur R2 : groupe 10 en veille, groupe 20 actif priorité 250, groupe 99 actif.',
        en: 'show standby brief output on R2: group 10 standby, group 20 active priority 250, group 99 active.',
      },
      caption: {
        fr: 'R2 · show standby brief : actif pour le VLAN 20.',
        en: 'R2 · show standby brief: active for VLAN 20.',
      },
      wide: true,
    },
    {
      src: '/images/projets/haute-disponibilite-lan/etherchannel-s1.png',
      alt: {
        fr: 'Sortie show etherchannel summary sur S1 : Po1, Po3 et Po5 en état SU, protocole LACP, ports Fa0/19 à Fa0/24 agrégés.',
        en: 'show etherchannel summary output on S1: Po1, Po3 and Po5 in SU state, LACP protocol, ports Fa0/19 to Fa0/24 bundled.',
      },
      caption: {
        fr: 'S1 · show etherchannel summary : trois canaux LACP en service.',
        en: 'S1 · show etherchannel summary: three LACP channels in use.',
      },
    },
    {
      src: '/images/projets/haute-disponibilite-lan/stp-s1-vlan10.png',
      alt: {
        fr: 'Sortie show spanning-tree vlan 10 sur S1 : protocole rstp, priorité 4106, « This bridge is the root », tous les ports désignés en forwarding.',
        en: 'show spanning-tree vlan 10 output on S1: rstp protocol, priority 4106, “This bridge is the root”, all designated ports forwarding.',
      },
      caption: {
        fr: 'S1 · show spanning-tree vlan 10 : racine du VLAN 10.',
        en: 'S1 · show spanning-tree vlan 10: root for VLAN 10.',
      },
    },
    {
      src: '/images/projets/haute-disponibilite-lan/stp-s2-vlan20.png',
      alt: {
        fr: 'Sortie show spanning-tree vlan 20 sur S2 : protocole rstp, priorité 4116, « This bridge is the root », tous les ports désignés en forwarding.',
        en: 'show spanning-tree vlan 20 output on S2: rstp protocol, priority 4116, “This bridge is the root”, all designated ports forwarding.',
      },
      caption: {
        fr: 'S2 · show spanning-tree vlan 20 : racine du VLAN 20.',
        en: 'S2 · show spanning-tree vlan 20: root for VLAN 20.',
      },
    },
    {
      src: '/images/projets/haute-disponibilite-lan/ping-pc10a-web.png',
      alt: {
        fr: 'Invite de commandes de PC10A : ping vers 64.104.13.130, 4 réponses sur 4, 0 % de perte.',
        en: 'PC10A command prompt: ping to 64.104.13.130, 4 replies out of 4, 0 % loss.',
      },
      caption: {
        fr: 'PC10A → serveur web : 4/4 réponses.',
        en: 'PC10A → web server: 4/4 replies.',
      },
    },
    {
      src: '/images/projets/haute-disponibilite-lan/ping-pc10a-pc20b.png',
      alt: {
        fr: 'Invite de commandes de PC10A : ping vers 192.168.20.102 (PC20B), 4 réponses sur 4, 0 % de perte.',
        en: 'PC10A command prompt: ping to 192.168.20.102 (PC20B), 4 replies out of 4, 0 % loss.',
      },
      caption: {
        fr: 'PC10A → PC20B (VLAN 20) : routage inter-VLAN fonctionnel.',
        en: 'PC10A → PC20B (VLAN 20): inter-VLAN routing works.',
      },
    },
    {
      src: '/images/projets/haute-disponibilite-lan/bascule-ping.png',
      alt: {
        fr: 'Ping continu de PC10A vers le serveur web : deux « Request timed out » pendant la coupure de R1, puis les réponses reprennent.',
        en: 'Continuous ping from PC10A to the web server: two “Request timed out” during the R1 shutdown, then replies resume.',
      },
      caption: {
        fr: 'Bascule : 2 requêtes perdues pendant la coupure de R1.',
        en: 'Failover: 2 requests lost while R1 is down.',
      },
    },
    {
      src: '/images/projets/haute-disponibilite-lan/bascule-hsrp-r2.png',
      alt: {
        fr: 'Sortie show standby brief sur R2 après la coupure de R1 : R2 actif pour les groupes 10, 20 et 99, standby inconnu.',
        en: 'show standby brief output on R2 after R1 is shut down: R2 active for groups 10, 20 and 99, standby unknown.',
      },
      caption: {
        fr: 'R2 après la bascule : actif pour tous les VLAN.',
        en: 'R2 after failover: active for every VLAN.',
      },
      wide: true,
    },
  ],
  screenshotsHint: {
    fr: 'sorties de vérification HSRP, EtherChannel, Spanning Tree et tests de connectivité',
    en: 'HSRP, EtherChannel, Spanning Tree verification outputs and connectivity tests',
  },
  github: null,
  resources: [
    {
      label: { fr: 'Fichier Packet Tracer (.pkt)', en: 'Packet Tracer file (.pkt)' },
      href: '/files/tp-haute-disponibilite-lan.pkt',
    },
  ],
}

export default project
