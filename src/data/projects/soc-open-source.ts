import type { Project } from '../types'

const IMG = '/images/projets/soc-open-source'

const project: Project = {
  slug: 'soc-open-source',
  code: 'PRJ-01',
  title: { fr: 'SOC open source sur AWS : de la détection à la réponse automatique' },
  summary: {
    fr: 'Laboratoire SOC déployé en Terraform sur AWS pour la manche SOC du Cyber Competition Challenge 2026 : Wazuh, Suricata, YARA et VirusTotal pour détecter, Shuffle et MISP pour enrichir, DFIR-IRIS pour les dossiers, et blocage automatique de l’attaquant.',
  },
  categories: ['soc', 'securite'],
  status: 'done',
  context: {
    fr: 'Manche SOC (DAY 3) du Cyber Competition Challenge 2026, challenge remporté par l’équipe SecurityForAll (1re place sur 64 équipes). Scénario : le SOC 24/7 d’une banque fictive. La chaîne prévue en production (Splunk ES et SOAR, CrowdStrike, ServiceNow) a été reproduite outil par outil en open source, car les versions gratuites des produits commerciaux ne permettent pas de montrer une chaîne complète.',
  },
  objective: {
    fr: 'Démontrer devant le jury une chaîne SOC complète et mesurée : collecter, détecter, enrichir, répondre et tracer, sur des attaques simulées internes au laboratoire (scan Web, fichier malveillant, rançongiciel, déni de service).',
  },
  technologies: [
    'Wazuh 4.14',
    'Suricata',
    'Sysmon',
    'YARA',
    'VirusTotal',
    'Shuffle (SOAR)',
    'MISP',
    'DFIR-IRIS',
    'Terraform',
    'AWS',
  ],
  achievements: [
    {
      fr: 'Infrastructure en code (Terraform + cloud-init) : 4 machines sur AWS (Londres), VPC découpé en VLSM (segments SOC /26, banque /27, attaque /28), aucun port ouvert vers Internet, administration uniquement par Session Manager, IMDSv2 et alerte budgétaire.',
    },
    {
      fr: 'Collecte et détection avec Wazuh : agents sur l’annuaire Active Directory (Sysmon, surveillance des fichiers) et sur le serveur de paiement (Suricata, surveillance des fichiers), règles maison pour le chiffrement de masse (niveau 14) et l’afflux HTTP anormal (niveau 12).',
    },
    {
      fr: 'Analyse des fichiers : YARA lancé en réponse active à chaque fichier créé dans un dossier surveillé, et vérification de l’empreinte par VirusTotal.',
    },
    {
      fr: 'Workflow Shuffle de triage : Wazuh envoie l’alerte avec sa priorité (P1 à P4), Shuffle extrait l’IP, interroge MISP et crée l’alerte dans DFIR-IRIS avec l’indicateur et le tag misp:connu.',
    },
    {
      fr: 'Réponse automatique : blocage de l’IP attaquante sur le serveur visé, levé automatiquement après 2 minutes. Les alertes Suricata répétitives sont regroupées pour éviter la tempête d’alertes.',
    },
    {
      fr: 'Dossiers DFIR-IRIS : alertes fusionnées en dossier, chronologie de l’attaque, tâches réparties selon le RACI de la cellule de crise, et corrélation des dossiers par l’indicateur commun.',
    },
    {
      fr: 'Résultats mesurés : scan d’injection SQL remis à l’analyste en 19 s, fichier malveillant en 21 s (65 moteurs VirusTotal), rançongiciel simulé en 23 à 25 s, attaquant du déni de service bloqué en 1 s. Chaque attaque a été détectée et contextualisée en moins de 40 secondes.',
    },
  ],
  learnings: [
    {
      fr: 'Un outil isolé ne fait pas un SOC : c’est l’enchaînement détection → enrichissement → dossier qui réduit le délai entre l’attaque et la décision.',
    },
    {
      fr: 'Une priorité technique (P1 à P4) n’est pas une gravité d’incident : l’analyste la traduit en SEV1 à SEV4 selon la criticité de l’actif dans le BIA.',
    },
    {
      fr: 'Regrouper les alertes répétitives est indispensable pendant un déni de service : l’analyste doit voir une alerte par vague, pas des centaines.',
    },
    {
      fr: 'Décrire le laboratoire en Terraform permet de le reconstruire à l’identique en quelques minutes ; reste à y persister aussi la configuration des outils (Wazuh, Shuffle, MISP, IRIS), encore appliquée à la main.',
    },
  ],
  topology: {
    title: {
      fr: 'Laboratoire SOC sur AWS : segment SOC avec Wazuh, Shuffle, MISP et DFIR-IRIS ; segment banque avec l’annuaire et le serveur de paiement surveillés',
    },
    caption: {
      fr: 'Architecture du laboratoire (VPC 10.20.0.0/16, région de Londres). Aucun port ouvert vers Internet : l’équipe administre les machines par AWS Session Manager. Les attaques simulées partent de SOC-02 et restent internes au VPC.',
    },
    zones: [
      { label: 'Segment SOC · 10.20.40.0/26', x: 20, y: 75, w: 920, h: 210 },
      { label: 'Segment banque · 10.20.21.0/27', x: 20, y: 330, w: 920, h: 145 },
      { label: 'Segment attaque · 10.20.50.0/28 (réservé)', x: 20, y: 505, w: 920, h: 45 },
    ],
    nodes: [
      { id: 'vt', label: 'VirusTotal', sub: 'réputation (API)', kind: 'cloud', x: 290, y: 25 },
      {
        id: 'wazuh',
        label: 'Wazuh',
        sub: 'SIEM / XDR · SOC-01',
        kind: 'search',
        x: 290,
        y: 175,
        w: 190,
      },
      { id: 'shuffle', label: 'Shuffle', sub: 'SOAR · SOC-02', kind: 'workflow', x: 560, y: 175 },
      { id: 'misp', label: 'MISP', sub: 'renseignement', kind: 'database', x: 820, y: 125 },
      { id: 'iris', label: 'DFIR-IRIS', sub: 'dossiers', kind: 'policy', x: 820, y: 235 },
      {
        id: 'dc01',
        label: 'DC01',
        sub: 'AD · Sysmon · YARA',
        kind: 'server',
        x: 250,
        y: 410,
        w: 200,
      },
      {
        id: 'srv',
        label: 'SRV-WEB',
        sub: 'paiement · Suricata',
        kind: 'server',
        x: 680,
        y: 410,
        w: 200,
      },
    ],
    links: [
      { from: 'wazuh', to: 'vt', label: 'empreintes' },
      { from: 'dc01', to: 'wazuh', label: 'agent' },
      { from: 'srv', to: 'wazuh', label: 'agent' },
      { from: 'wazuh', to: 'shuffle', label: 'P1 à P4' },
      { from: 'shuffle', to: 'misp', label: 'IP connue ?' },
      { from: 'shuffle', to: 'iris', label: 'alerte enrichie' },
      { from: 'wazuh', to: 'srv', label: 'blocage auto', dashed: true, bend: 50 },
    ],
  },
  screenshots: [
    {
      src: `${IMG}/chaine_soc.png`,
      alt: {
        fr: 'Chaîne d’intégration : sources DC01 et SRV-WEB vers Wazuh, puis Shuffle qui interroge MISP, puis DFIR-IRIS et les analystes, avec l’équivalent en production (Splunk ES, Splunk SOAR, ServiceNow).',
      },
      caption: { fr: 'Chaîne d’intégration de la démonstration et son équivalent en production.' },
      wide: true,
    },
    {
      src: `${IMG}/wz-alertes-eq13.png`,
      alt: {
        fr: 'Wazuh Discover : 12 détections de la séance, dont VirusTotal (65 moteurs), YARA, chiffrement de masse, afflux HTTP anormal et scan d’injection SQL Suricata.',
      },
      caption: { fr: 'Wazuh · les détections de la séance du 10 octobre 2026.' },
      wide: true,
    },
    {
      src: `${IMG}/ar-console.png`,
      alt: {
        fr: 'Réponse automatique : 120 requêtes de la vague 1 servies, puis l’IP 10.20.40.20 bloquée une seconde après le début de l’attaque ; les 20 requêtes de la vague 2 restent sans réponse ; déblocage deux minutes plus tard.',
      },
      caption: { fr: 'Déni de service simulé : attaquant bloqué en 1 seconde.' },
      wide: true,
    },
    {
      src: `${IMG}/sh-workflow-zoom.png`,
      alt: {
        fr: 'Workflow Shuffle : webhook Wazuh, extraction de l’IP, recherche MISP, préparation de l’alerte et création dans IRIS.',
      },
      caption: { fr: 'Shuffle · workflow de triage automatique.' },
    },
    {
      src: `${IMG}/misp-evenement.png`,
      alt: {
        fr: 'Événement MISP « [EQ13] Liste IOC de test » : l’adresse de l’attaquant simulé y est enregistrée avant l’attaque, TLP amber.',
      },
      caption: { fr: 'MISP · l’adresse de l’attaquant était connue avant l’attaque.' },
    },
    {
      src: `${IMG}/iris-alertes.png`,
      alt: {
        fr: 'DFIR-IRIS : alertes créées automatiquement avec priorité, machine, règle Wazuh, IP source et résultat MISP (« IP connue »).',
      },
      caption: { fr: 'DFIR-IRIS · alertes enrichies arrivées automatiquement.' },
    },
    {
      src: `${IMG}/iris-dossier3-timeline.png`,
      alt: {
        fr: 'Chronologie du dossier rançongiciel dans IRIS : scan d’injection SQL, fichier malveillant détecté par YARA, puis chiffrement de masse.',
      },
      caption: {
        fr: 'DFIR-IRIS · chronologie du rançongiciel, de la reconnaissance au chiffrement.',
      },
    },
    {
      src: `${IMG}/wz-mitre.png`,
      alt: { fr: 'Tableau MITRE ATT&CK de Wazuh : techniques observées pendant les scénarios.' },
      caption: { fr: 'Wazuh · techniques MITRE ATT&CK observées.' },
    },
  ],
  screenshotsHint: { fr: 'captures du rapport de compétition' },
  github: 'https://github.com/meissadev/ccc-soc-lab',
}

export default project
