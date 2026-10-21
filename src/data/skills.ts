import type { SkillGroup } from './types'

/** Compétences par domaine, chacune reliée aux projets qui la démontrent. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'soc',
    title: { fr: 'SOC et détection' },
    icon: 'radar',
    items: [
      'Wazuh',
      'Suricata',
      'Sysmon',
      'YARA',
      'VirusTotal',
      'MISP',
      'Shuffle (SOAR)',
      'DFIR-IRIS',
      'MITRE ATT&CK',
    ],
    proofs: [
      { project: 'soc-open-source' },
      { section: 'distinction', label: { fr: 'Cyber Competition Challenge 2026' } },
      { section: 'formation', label: { fr: 'Badge LetsDefend' } },
    ],
  },
  {
    id: 'incidents',
    title: { fr: 'Traitement des incidents' },
    icon: 'siren',
    items: [
      'SOP ransomware',
      'SOP DDoS',
      'Gestion de crise',
      'Dossiers d’incident',
      'Réponse automatique',
      'Rapport pour la direction',
    ],
    proofs: [
      { section: 'distinction', label: { fr: 'Cyber Competition Challenge 2026' } },
      { project: 'soc-open-source' },
    ],
  },
  {
    id: 'secu-reseau',
    title: { fr: 'Sécurité réseau' },
    icon: 'shield',
    items: [
      'FortiGate',
      'VPN IPsec',
      'NAT',
      'ACL et route-maps',
      'Durcissement SSH',
      'Segmentation',
    ],
    proofs: [
      { project: 'qos-multisites' },
      { project: 'soc-open-source' },
      { section: 'experience', label: { fr: 'Stage AIBD' } },
    ],
  },
  {
    id: 'routage',
    title: { fr: 'Routage et commutation' },
    icon: 'router',
    items: [
      'Cisco IOS',
      'RIPv2 / OSPF',
      'Redistribution',
      'VLAN / 802.1Q',
      'HSRP',
      'EtherChannel LACP',
      'Rapid PVST+',
      'QoS (MQC, shaping)',
      'GNS3',
      'Packet Tracer',
      'Wireshark',
      'iperf3',
    ],
    proofs: [{ project: 'qos-multisites' }, { project: 'haute-disponibilite-lan' }],
  },
  {
    id: 'systemes',
    title: { fr: 'Systèmes et virtualisation' },
    icon: 'server',
    items: ['Windows Server', 'Active Directory', 'Linux (Ubuntu)', 'Docker', 'VMware'],
    proofs: [{ project: 'soc-open-source' }, { project: 'qos-multisites' }],
  },
  {
    id: 'aws',
    title: { fr: 'Cloud AWS' },
    icon: 'cloud',
    items: ['EC2', 'VPC', 'Security Groups', 'IAM', 'Systems Manager', 'AWS Budgets', 'Terraform'],
    proofs: [
      { project: 'soc-open-source' },
      { section: 'formation', label: { fr: 'Certifications AWS' } },
    ],
  },
]
