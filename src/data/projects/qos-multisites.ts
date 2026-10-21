import type { Project } from '../types'

const IMG = '/images/projets/qos-multisites'

const project: Project = {
  slug: 'qos-multisites',
  code: 'PRJ-03',
  title: { fr: 'Réseau inter-LAN sécurisé et optimisé par la QoS' },
  summary: {
    fr: 'Interconnexion d’un siège et d’un site de secours à travers un nuage opérateur RIPv2/OSPF émulé sous GNS3 : VPN IPsec, pare-feu FortiGate, téléphonie IP Cisco CME, puis QoS (classification, marquage, lissage) mesurée avec iperf3 et Wireshark.',
  },
  categories: ['reseau', 'securite'],
  status: 'done',
  context: {
    fr: 'Projet final du module « QoS dans les réseaux IP », Master Réseaux et Télécoms (UIDT), juillet 2025, réalisé en binôme avec Thierno Bassirou Sall. Scénario : une institution financière doit relier son siège et son site de secours de façon sécurisée, avec des garanties de qualité de service.',
  },
  objective: {
    fr: 'Concevoir et déployer un réseau inter-LAN complet (routage opérateur mixte, VPN, pare-feu, téléphonie IP), puis appliquer des politiques QoS et mesurer leur effet sur des flux TCP, UDP et VoIP.',
  },
  technologies: [
    'GNS3 + VMware',
    'Cisco IOS',
    'RIPv2 / OSPF',
    'VPN IPsec',
    'FortiGate VM',
    'VoIP Cisco CME',
    'QoS MQC',
    'Traffic shaping',
    'iperf3',
    'Wireshark',
  ],
  achievements: [
    {
      fr: 'Maquette GNS3 + VMware : routeurs Cisco c7200 pour le nuage opérateur, deux routeurs EDGE, deux FortiGate VM, deux postes Windows 7 (iperf3, Cisco IP Communicator) et des VPCS.',
    },
    {
      fr: 'Durcissement de l’accès aux routeurs : comptes locaux, SSH v2 uniquement sur les lignes VTY, bannière, chiffrement des mots de passe et déconnexion après 5 minutes d’inactivité.',
    },
    {
      fr: 'Nuage opérateur bi-protocole : RIPv2 côté R1, OSPF aire 0 côté R4, liens volontairement asymétriques (2,5 Mb/s et 128 kb/s).',
    },
    {
      fr: 'Redistribution mutuelle RIPv2 ↔ OSPF sur R2 et R3, filtrée par route-maps et tags (23 et 30) pour éviter les boucles de redistribution. Vérifiée par show ip ospf database (LSA de type 5 tagués 23) et par les tables de R1 et R4.',
    },
    {
      fr: 'VPN IPsec site à site entre EDGE1 et EDGE2 (phase 1 IKE AES/SHA, phase 2 ESP AES/SHA) : SA ISAKMP active et trafic chiffré ESP observé dans Wireshark sur le lien EDGE2–R4.',
    },
    {
      fr: 'FortiGate en coupure de chaque LAN : interfaces WAN/LAN, relais DHCP vers les EDGE, RIP au siège et OSPF au site de secours, règles de flux inter-sites et vers l’Internet simulé (NAT overload sur les EDGE).',
    },
    {
      fr: 'Téléphonie IP avec Cisco CME sur les EDGE (DHCP option 150, numéros 1212 et 1414, dial-peer VoIP inter-sites) : appel établi entre les deux sites.',
    },
    {
      fr: 'QoS MQC en sortie WAN des EDGE : classification ICMP / HTTP / VoIP, marquage IP precedence 1, 3 et 5, bande passante 15 / 25 / 60 %, puis lissage à 300 / 500 / 1 200 kb/s sur 2 Mb/s avec fair-queue pour la classe par défaut.',
    },
    {
      fr: 'Mesures iperf3 : TCP autour de 940 kbit/s sans perte ; UDP sans perte à 700 kbit/s, 18 % de pertes à 800 kbit/s et 72 % à 1 Mbit/s. Appel VoIP mesuré sous 30 kbit/s dans Wireshark.',
    },
  ],
  learnings: [
    {
      fr: 'Face à la congestion, TCP réduit son débit et ne perd rien, tandis qu’UDP n’a aucun contrôle : dès que le débit dépasse la capacité (≈ 700 kbit/s ici), les pertes montent jusqu’à 72 %. C’est pour ces flux que la QoS est indispensable.',
    },
    {
      fr: 'Avec deux points de redistribution, une route peut revenir dans son protocole d’origine. Les tags sur route-map sont un moyen simple et lisible de l’empêcher.',
    },
    {
      fr: 'Une politique QoS ne se voit que sous congestion : il faut générer volontairement du trafic au-delà de la capacité pour la valider.',
    },
    {
      fr: 'L’émulation GNS3 limite les volumes de trafic : les mesures valident un comportement plus que des performances absolues.',
    },
  ],
  topology: {
    title: {
      fr: 'Topologie : siège et site de secours reliés par un nuage opérateur de quatre routeurs RIPv2/OSPF, avec routeurs EDGE, tunnel IPsec et pare-feu FortiGate',
    },
    caption: {
      fr: 'Topologie du projet redessinée à partir du rapport. R2 et R3 redistribuent entre RIPv2 (côté R1) et OSPF (côté R4). Les captures Wireshark ont été faites sur le lien EDGE2–R4.',
    },
    zones: [{ label: 'Nuage opérateur', x: 130, y: 0, w: 640, h: 300 }],
    nodes: [
      { id: 'r2', label: 'R2', sub: 'redistribution', kind: 'router', x: 450, y: 55, w: 160 },
      { id: 'r1', label: 'R1', sub: 'RIPv2', kind: 'router', x: 250, y: 150, w: 150 },
      { id: 'r4', label: 'R4', sub: 'OSPF aire 0', kind: 'router', x: 650, y: 150, w: 150 },
      { id: 'r3', label: 'R3', sub: 'redistribution', kind: 'router', x: 450, y: 245, w: 160 },
      { id: 'edge1', label: 'EDGE1', sub: 'CME · NAT · QoS', kind: 'router', x: 170, y: 390 },
      { id: 'edge2', label: 'EDGE2', sub: 'CME · NAT · QoS', kind: 'router', x: 730, y: 390 },
      { id: 'fg1', label: 'FortiGate siège', sub: 'VM · RIP', kind: 'firewall', x: 170, y: 500 },
      {
        id: 'fg2',
        label: 'FortiGate backup',
        sub: 'VM · OSPF',
        kind: 'firewall',
        x: 730,
        y: 500,
        w: 180,
      },
      {
        id: 'lan1',
        label: 'LAN Siège',
        sub: '192.168.1.0/24 · 1212',
        kind: 'host',
        x: 170,
        y: 610,
        w: 190,
      },
      {
        id: 'lan2',
        label: 'LAN Backup',
        sub: '192.168.2.0/24 · 1414',
        kind: 'host',
        x: 730,
        y: 610,
        w: 190,
      },
    ],
    links: [
      { from: 'r1', to: 'r2', label: '2,5 Mb/s' },
      { from: 'r2', to: 'r4', label: '128 kb/s' },
      { from: 'r1', to: 'r3', label: '128 kb/s' },
      { from: 'r3', to: 'r4', label: '2,5 Mb/s' },
      { from: 'r1', to: 'edge1', label: '10.0.0.0/8' },
      { from: 'r4', to: 'edge2', label: '15.0.0.0/8' },
      { from: 'edge1', to: 'edge2', label: 'tunnel VPN IPsec', dashed: true },
      { from: 'edge1', to: 'fg1' },
      { from: 'edge2', to: 'fg2' },
      { from: 'fg1', to: 'lan1' },
      { from: 'fg2', to: 'lan2' },
    ],
  },
  screenshots: [
    {
      src: `${IMG}/topologie-gns3.png`,
      alt: {
        fr: 'Topologie GNS3 avec adresses : nuage opérateur RIPv2 et OSPF de quatre routeurs, routeurs EDGE1 et EDGE2 reliés par un tunnel VPN IPsec, pare-feu FortiGate et LAN Siège et Backup.',
      },
      caption: { fr: 'Topologie GNS3 du projet.' },
      wide: true,
    },
    {
      src: `${IMG}/ospf-database-tags.png`,
      alt: {
        fr: 'Sortie show ip ospf database sur R2 : LSA externes de type 5 pour 10.0.0.0, 11.0.0.0 et 12.0.0.0 avec le tag 23.',
      },
      caption: { fr: 'R2 · routes RIPv2 redistribuées dans OSPF avec le tag 23.' },
    },
    {
      src: `${IMG}/vpn-isakmp-sa.png`,
      alt: {
        fr: 'Ping d’EDGE1 vers EDGE2 à travers le VPN réussi à 100 %, puis show crypto isakmp sa : état QM_IDLE, statut ACTIVE.',
      },
      caption: { fr: 'EDGE1 · tunnel IPsec établi (SA ISAKMP active).' },
    },
    {
      src: `${IMG}/wireshark-esp.png`,
      alt: {
        fr: 'Capture Wireshark filtrée sur ESP entre 15.0.0.2 et 10.0.0.2 : tous les paquets sont chiffrés en Encapsulating Security Payload.',
      },
      caption: { fr: 'Wireshark · trafic inter-sites chiffré en ESP.' },
      wide: true,
    },
    {
      src: `${IMG}/fortigate-regles-siege.png`,
      alt: {
        fr: 'Règles du pare-feu FortiGate du siège : accès au site distant, ping vers l’Internet simulé et flux entrants du site distant vers le LAN.',
      },
      caption: { fr: 'FortiGate siège · règles de flux inter-sites.' },
      wide: true,
    },
    {
      src: `${IMG}/show-policy-map.png`,
      alt: {
        fr: 'Sortie show policy-map sur EDGE2 : politiques QOS (15, 25 et 60 % de bande passante) et TRAFIC-SHAPING (CIR 300, 500 et 1 200 kb/s, fair-queue en classe par défaut).',
      },
      caption: { fr: 'EDGE2 · show policy-map : marquage, réservation et lissage.' },
    },
    {
      src: `${IMG}/appel-voip.png`,
      alt: {
        fr: 'Cisco IP Communicator du poste 1414 en communication avec le poste 1212 du siège.',
      },
      caption: { fr: 'Appel VoIP établi entre le 1414 et le 1212.' },
    },
    {
      src: `${IMG}/wireshark-voip.png`,
      alt: {
        fr: 'Statistiques Wireshark des conversations IPv4 pendant l’appel : environ 30 kbit/s dans chaque sens entre 15.0.0.2 et 10.0.0.2.',
      },
      caption: { fr: 'Wireshark · l’appel VoIP consomme environ 30 kbit/s.' },
      wide: true,
    },
    {
      src: `${IMG}/iperf-tcp.png`,
      alt: {
        fr: 'Résultat iperf3 TCP côté serveur : environ 1 Mbit/s par seconde, 1,19 Mo reçus en 10,6 secondes, soit 937 kbit/s.',
      },
      caption: { fr: 'iperf3 · flux TCP à 937 kbit/s.' },
    },
    {
      src: `${IMG}/iperf-udp.png`,
      alt: {
        fr: 'Résultats iperf3 UDP : à 700 kbit/s, 0 perte sur 63 datagrammes ; à 800 kbit/s, 10 pertes sur 56 (18 %).',
      },
      caption: { fr: 'iperf3 · UDP : 0 % de pertes à 700 kbit/s, 18 % à 800 kbit/s.' },
    },
    {
      src: `${IMG}/debits-tcp-udp.png`,
      alt: {
        fr: 'Graphique des débits sur 10 secondes : TCP monte à environ 1 Mbit/s puis se stabilise ; UDP reste entre 0,65 et 0,72 Mbit/s.',
      },
      caption: { fr: 'Évolution des débits TCP et UDP.' },
    },
    {
      src: `${IMG}/iperf-udp-congestion.png`,
      alt: {
        fr: 'Résultat iperf3 UDP à 1 Mbit/s : les pertes montent jusqu’à 98 % par intervalle, 101 datagrammes perdus sur 140 (72 %).',
      },
      caption: { fr: 'iperf3 · UDP à 1 Mbit/s : 72 % de pertes sous congestion.' },
    },
  ],
  screenshotsHint: { fr: 'captures du rapport de projet' },
  github: null,
  resources: [
    { label: { fr: 'Rapport du projet (PDF, 38 pages)' }, href: '/files/rapport-projet-qos.pdf' },
  ],
}

export default project
