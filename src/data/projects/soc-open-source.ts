import type { Project } from '../types'

const IMG = '/images/projets/soc-open-source'

const project: Project = {
  slug: 'soc-open-source',
  code: 'PRJ-01',
  title: {
    fr: 'SOC open source sur AWS : de la détection à la réponse automatique',
    en: 'Open-source SOC on AWS: from detection to automated response',
  },
  summary: {
    fr: 'Laboratoire SOC déployé en Terraform sur AWS pour la manche SOC du Cyber Competition Challenge 2026 : Wazuh, Suricata, YARA et VirusTotal pour détecter, Shuffle et MISP pour enrichir, DFIR-IRIS pour les dossiers, et blocage automatique de l’attaquant.',
    en: 'SOC lab deployed with Terraform on AWS for the SOC round of the Cyber Competition Challenge 2026: Wazuh, Suricata, YARA and VirusTotal to detect, Shuffle and MISP to enrich, DFIR-IRIS for case management, and automatic blocking of the attacker.',
  },
  categories: ['soc', 'securite'],
  status: 'done',
  context: {
    fr: 'Manche SOC (DAY 3) du Cyber Competition Challenge 2026, challenge remporté par l’équipe SecurityForAll (1re place). Scénario : le SOC 24/7 d’une banque fictive. La chaîne prévue en production (Splunk ES et SOAR, CrowdStrike, ServiceNow) a été reproduite outil par outil en open source, car les versions gratuites des produits commerciaux ne permettent pas de montrer une chaîne complète.',
    en: 'SOC round (DAY 3) of the Cyber Competition Challenge 2026, won by the SecurityForAll team (1st place). Scenario: the 24/7 SOC of a fictitious bank. The production toolchain planned in the design (Splunk ES and SOAR, CrowdStrike, ServiceNow) was reproduced tool by tool with open-source software, because the free editions of the commercial products cannot show a complete chain.',
  },
  objective: {
    fr: 'Démontrer devant le jury une chaîne SOC complète et mesurée : collecter, détecter, enrichir, répondre et tracer, sur des attaques simulées internes au laboratoire (scan Web, fichier malveillant, rançongiciel, déni de service).',
    en: 'Demonstrate to the jury a complete, measured SOC chain: collect, detect, enrich, respond and track, on simulated attacks kept inside the lab (web scan, malicious file, ransomware, denial of service).',
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
      en: 'Infrastructure as code (Terraform + cloud-init): 4 instances on AWS (London), a VPC split with VLSM (SOC /26, bank /27 and attack /28 segments), no port open to the Internet, administration only through Session Manager, IMDSv2 and a budget alert.',
    },
    {
      fr: 'Collecte et détection avec Wazuh : agents sur l’annuaire Active Directory (Sysmon, surveillance des fichiers) et sur le serveur de paiement (Suricata, surveillance des fichiers), règles maison pour le chiffrement de masse (niveau 14) et l’afflux HTTP anormal (niveau 12).',
      en: 'Collection and detection with Wazuh: agents on the Active Directory domain controller (Sysmon, file integrity monitoring) and on the payment server (Suricata, file integrity monitoring), custom rules for mass encryption (level 14) and abnormal HTTP floods (level 12).',
    },
    {
      fr: 'Analyse des fichiers : YARA lancé en réponse active à chaque fichier créé dans un dossier surveillé, et vérification de l’empreinte par VirusTotal.',
      en: 'File analysis: YARA runs as an active response on every file created in a monitored folder, and the hash is checked against VirusTotal.',
    },
    {
      fr: 'Workflow Shuffle de triage : Wazuh envoie l’alerte avec sa priorité (P1 à P4), Shuffle extrait l’IP, interroge MISP et crée l’alerte dans DFIR-IRIS avec l’indicateur et le tag misp:connu.',
      en: 'Shuffle triage workflow: Wazuh sends the alert with its priority (P1 to P4), Shuffle extracts the IP, queries MISP and creates the alert in DFIR-IRIS with the indicator and the misp:known tag.',
    },
    {
      fr: 'Réponse automatique : blocage de l’IP attaquante sur le serveur visé, levé automatiquement après 2 minutes. Les alertes Suricata répétitives sont regroupées pour éviter la tempête d’alertes.',
      en: 'Automated response: the attacking IP is blocked on the targeted server and unblocked automatically after 2 minutes. Repetitive Suricata alerts are grouped to avoid an alert storm.',
    },
    {
      fr: 'Dossiers DFIR-IRIS : alertes fusionnées en dossier, chronologie de l’attaque, tâches réparties selon le RACI de la cellule de crise, et corrélation des dossiers par l’indicateur commun.',
      en: 'DFIR-IRIS cases: alerts merged into a case, attack timeline, tasks assigned according to the crisis unit’s RACI, and cases correlated through their shared indicator.',
    },
    {
      fr: 'Résultats mesurés : scan d’injection SQL remis à l’analyste en 19 s, fichier malveillant en 21 s (65 moteurs VirusTotal), rançongiciel simulé en 23 à 25 s, attaquant du déni de service bloqué en 1 s. Chaque attaque a été détectée et contextualisée en moins de 40 secondes.',
      en: 'Measured results: SQL injection scan delivered to the analyst in 19 s, malicious file in 21 s (65 VirusTotal engines), simulated ransomware in 23 to 25 s, denial-of-service attacker blocked in 1 s. Every attack was detected and put in context in under 40 seconds.',
    },
  ],
  learnings: [
    {
      fr: 'Un outil isolé ne fait pas un SOC : c’est l’enchaînement détection → enrichissement → dossier qui réduit le délai entre l’attaque et la décision.',
      en: 'A single tool does not make a SOC: it is the detection → enrichment → case chain that shortens the time between the attack and the decision.',
    },
    {
      fr: 'Une priorité technique (P1 à P4) n’est pas une gravité d’incident : l’analyste la traduit en SEV1 à SEV4 selon la criticité de l’actif dans le BIA.',
      en: 'A technical priority (P1 to P4) is not an incident severity: the analyst translates it into SEV1 to SEV4 based on the asset’s criticality in the BIA.',
    },
    {
      fr: 'Regrouper les alertes répétitives est indispensable pendant un déni de service : l’analyste doit voir une alerte par vague, pas des centaines.',
      en: 'Grouping repetitive alerts is essential during a denial of service: the analyst must see one alert per wave, not hundreds.',
    },
    {
      fr: 'Décrire le laboratoire en Terraform permet de le reconstruire à l’identique en quelques minutes ; reste à y persister aussi la configuration des outils (Wazuh, Shuffle, MISP, IRIS), encore appliquée à la main.',
      en: 'Describing the lab in Terraform makes it possible to rebuild it identically in minutes; the next step is to also persist the tool configuration (Wazuh, Shuffle, MISP, IRIS), which is still applied by hand.',
    },
  ],
  topology: {
    title: {
      fr: 'Laboratoire SOC sur AWS : segment SOC avec Wazuh, Shuffle, MISP et DFIR-IRIS ; segment banque avec l’annuaire et le serveur de paiement surveillés',
      en: 'SOC lab on AWS: SOC segment with Wazuh, Shuffle, MISP and DFIR-IRIS; bank segment with the monitored domain controller and payment server',
    },
    caption: {
      fr: 'Architecture du laboratoire (VPC 10.20.0.0/16, région de Londres). Aucun port ouvert vers Internet : l’équipe administre les machines par AWS Session Manager. Les attaques simulées partent de SOC-02 et restent internes au VPC.',
      en: 'Lab architecture (VPC 10.20.0.0/16, London region). No port is open to the Internet: the team manages the instances through AWS Session Manager. Simulated attacks start from SOC-02 and stay inside the VPC.',
    },
    zones: [
      {
        label: { fr: 'Segment SOC · 10.20.40.0/26', en: 'SOC segment · 10.20.40.0/26' },
        x: 20,
        y: 75,
        w: 920,
        h: 210,
      },
      {
        label: { fr: 'Segment banque · 10.20.21.0/27', en: 'Bank segment · 10.20.21.0/27' },
        x: 20,
        y: 330,
        w: 920,
        h: 145,
      },
      {
        label: {
          fr: 'Segment attaque · 10.20.50.0/28 (réservé)',
          en: 'Attack segment · 10.20.50.0/28 (reserved)',
        },
        x: 20,
        y: 505,
        w: 920,
        h: 45,
      },
    ],
    nodes: [
      {
        id: 'vt',
        label: 'VirusTotal',
        sub: { fr: 'réputation (API)', en: 'reputation (API)' },
        kind: 'cloud',
        x: 290,
        y: 25,
      },
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
      {
        id: 'misp',
        label: 'MISP',
        sub: { fr: 'renseignement', en: 'threat intel' },
        kind: 'database',
        x: 820,
        y: 125,
      },
      {
        id: 'iris',
        label: 'DFIR-IRIS',
        sub: { fr: 'dossiers', en: 'case management' },
        kind: 'policy',
        x: 820,
        y: 235,
      },
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
        sub: { fr: 'paiement · Suricata', en: 'payment · Suricata' },
        kind: 'server',
        x: 680,
        y: 410,
        w: 200,
      },
    ],
    links: [
      { from: 'wazuh', to: 'vt', label: { fr: 'empreintes', en: 'hashes' } },
      { from: 'dc01', to: 'wazuh', label: 'agent' },
      { from: 'srv', to: 'wazuh', label: 'agent' },
      { from: 'wazuh', to: 'shuffle', label: { fr: 'P1 à P4', en: 'P1 to P4' } },
      { from: 'shuffle', to: 'misp', label: { fr: 'IP connue ?', en: 'known IP?' } },
      { from: 'shuffle', to: 'iris', label: { fr: 'alerte enrichie', en: 'enriched alert' } },
      {
        from: 'wazuh',
        to: 'srv',
        label: { fr: 'blocage auto', en: 'auto block' },
        dashed: true,
        bend: 50,
      },
    ],
  },
  screenshots: [
    {
      src: `${IMG}/architecture-laboratoire.png`,
      alt: {
        fr: 'Architecture du laboratoire de démonstration sur AWS (Londres) : VPC découpé en segments SOC, banque et attaque ; SOC-01 avec Wazuh et VirusTotal, SOC-02 avec Shuffle, MISP et DFIR-IRIS ; DC01 et SRV-WEB surveillés par les agents Wazuh, Sysmon, YARA et Suricata ; accès par Session Manager.',
        en: 'Architecture of the demonstration lab on AWS (London): VPC split into SOC, bank and attack segments; SOC-01 with Wazuh and VirusTotal, SOC-02 with Shuffle, MISP and DFIR-IRIS; DC01 and SRV-WEB monitored by Wazuh, Sysmon, YARA and Suricata agents; access through Session Manager.',
      },
      caption: {
        fr: 'Architecture du laboratoire de démonstration.',
        en: 'Architecture of the demonstration lab.',
      },
      wide: true,
    },
    {
      src: `${IMG}/wz-alertes-eq13.png`,
      alt: {
        fr: 'Wazuh Discover : 12 détections de la séance, dont VirusTotal (65 moteurs), YARA, chiffrement de masse, afflux HTTP anormal et scan d’injection SQL Suricata.',
        en: 'Wazuh Discover: the session’s 12 detections, including VirusTotal (65 engines), YARA, mass encryption, abnormal HTTP flood and a Suricata SQL injection scan.',
      },
      caption: {
        fr: 'Wazuh · les détections de la séance du 10 octobre 2026.',
        en: 'Wazuh · detections from the 10 October 2026 session.',
      },
      wide: true,
    },
    {
      src: `${IMG}/ar-console.png`,
      alt: {
        fr: 'Réponse automatique : 120 requêtes de la vague 1 servies, puis l’IP 10.20.40.20 bloquée une seconde après le début de l’attaque ; les 20 requêtes de la vague 2 restent sans réponse ; déblocage deux minutes plus tard.',
        en: 'Automated response: the 120 requests of wave 1 are served, then IP 10.20.40.20 is blocked one second after the attack starts; the 20 requests of wave 2 get no answer; the IP is unblocked two minutes later.',
      },
      caption: {
        fr: 'Déni de service simulé : attaquant bloqué en 1 seconde.',
        en: 'Simulated denial of service: attacker blocked in 1 second.',
      },
      wide: true,
    },
    {
      src: `${IMG}/sh-workflow-zoom.png`,
      alt: {
        fr: 'Workflow Shuffle : webhook Wazuh, extraction de l’IP, recherche MISP, préparation de l’alerte et création dans IRIS.',
        en: 'Shuffle workflow: Wazuh webhook, IP extraction, MISP lookup, alert preparation and creation in IRIS.',
      },
      caption: {
        fr: 'Shuffle · workflow de triage automatique.',
        en: 'Shuffle · automated triage workflow.',
      },
    },
    {
      src: `${IMG}/misp-evenement.png`,
      alt: {
        fr: 'Événement MISP « [EQ13] Liste IOC de test » : l’adresse de l’attaquant simulé y est enregistrée avant l’attaque, TLP amber.',
        en: 'MISP event “[EQ13] Liste IOC de test”: the simulated attacker’s address is recorded before the attack, TLP amber.',
      },
      caption: {
        fr: 'MISP · l’adresse de l’attaquant était connue avant l’attaque.',
        en: 'MISP · the attacker’s address was known before the attack.',
      },
    },
    {
      src: `${IMG}/iris-alertes.png`,
      alt: {
        fr: 'DFIR-IRIS : alertes créées automatiquement avec priorité, machine, règle Wazuh, IP source et résultat MISP (« IP connue »).',
        en: 'DFIR-IRIS: alerts created automatically with priority, host, Wazuh rule, source IP and MISP result (“known IP”).',
      },
      caption: {
        fr: 'DFIR-IRIS · alertes enrichies arrivées automatiquement.',
        en: 'DFIR-IRIS · enriched alerts received automatically.',
      },
    },
    {
      src: `${IMG}/iris-dossier3-timeline.png`,
      alt: {
        fr: 'Chronologie du dossier rançongiciel dans IRIS : scan d’injection SQL, fichier malveillant détecté par YARA, puis chiffrement de masse.',
        en: 'Timeline of the ransomware case in IRIS: SQL injection scan, malicious file detected by YARA, then mass encryption.',
      },
      caption: {
        fr: 'DFIR-IRIS · chronologie du rançongiciel, de la reconnaissance au chiffrement.',
        en: 'DFIR-IRIS · ransomware timeline, from reconnaissance to encryption.',
      },
    },
    {
      src: `${IMG}/wz-mitre.png`,
      alt: {
        fr: 'Tableau MITRE ATT&CK de Wazuh : techniques observées pendant les scénarios.',
        en: 'Wazuh MITRE ATT&CK dashboard: techniques observed during the scenarios.',
      },
      caption: {
        fr: 'Wazuh · techniques MITRE ATT&CK observées.',
        en: 'Wazuh · observed MITRE ATT&CK techniques.',
      },
    },
  ],
  screenshotsHint: {
    fr: 'captures du rapport de compétition',
    en: 'screenshots from the competition report',
  },
  github: 'https://github.com/meissadev/ccc-soc-lab',
}

export default project
