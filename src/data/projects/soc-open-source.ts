import { todo, type Project } from '../types'

const project: Project = {
  slug: 'soc-open-source',
  code: 'PRJ-01',
  title: { fr: 'SOC open source : collecte, détection et réponse automatisée' },
  summary: {
    fr: 'Mise en place d’un SOC avec des outils open source : Wazuh pour la collecte et l’analyse des logs, MISP et VirusTotal pour le renseignement sur les menaces, Shuffle pour l’automatisation (SOAR).',
  },
  categories: ['soc', 'securite'],
  status: 'done',
  context: {
    fr: todo(
      'cadre du projet (cours, projet personnel, préparation de compétition…), durée, seul ou en équipe',
    ),
  },
  objective: {
    fr: 'Disposer d’une chaîne SOC complète, de la collecte des journaux jusqu’à la détection et l’enrichissement des alertes, avec des outils open source.',
  },
  technologies: ['Wazuh', 'MISP', 'VirusTotal', 'Shuffle (SOAR)', 'Analyse de logs'],
  achievements: [
    { fr: 'Déploiement de Wazuh pour centraliser et analyser les journaux.' },
    { fr: 'Utilisation de MISP et de VirusTotal pour enrichir les alertes.' },
    { fr: 'Automatisation de traitements avec Shuffle (SOAR).' },
    {
      fr: todo(
        'résultats concrets : règles de détection écrites, scénarios d’attaque testés, alertes traitées',
      ),
    },
  ],
  learnings: [
    {
      fr: todo(
        '2 ou 3 apprentissages clés (ex. réglage des règles, réduction des faux positifs, conception de playbooks)',
      ),
    },
  ],
  topology: {
    title: { fr: 'Architecture de principe du SOC open source' },
    caption: {
      fr: 'Schéma de principe reconstitué à partir des outils du projet. À compléter avec ton architecture réelle (machines, flux, versions).',
    },
    nodes: [
      {
        id: 'endpoints',
        label: 'Postes et serveurs',
        sub: 'agents Wazuh',
        kind: 'host',
        x: 100,
        y: 200,
      },
      { id: 'wazuh', label: 'Wazuh', sub: 'collecte · détection', kind: 'search', x: 320, y: 200 },
      { id: 'shuffle', label: 'Shuffle', sub: 'SOAR', kind: 'workflow', x: 540, y: 200 },
      { id: 'misp', label: 'MISP', sub: 'renseignement', kind: 'database', x: 760, y: 90 },
      { id: 'vt', label: 'VirusTotal', sub: 'réputation', kind: 'cloud', x: 760, y: 310 },
      {
        id: 'analyst',
        label: 'Analyste SOC',
        sub: 'tri et réponse',
        kind: 'users',
        x: 320,
        y: 340,
      },
    ],
    links: [
      { from: 'endpoints', to: 'wazuh', label: 'logs' },
      { from: 'wazuh', to: 'shuffle', label: 'alertes' },
      { from: 'shuffle', to: 'misp', label: 'IOC' },
      { from: 'shuffle', to: 'vt', label: 'enrichissement' },
      { from: 'wazuh', to: 'analyst', label: 'tableau de bord', dashed: true },
    ],
  },
  screenshots: [],
  screenshotsHint: {
    fr: 'tableau de bord Wazuh, une alerte enrichie (MISP / VirusTotal), un workflow Shuffle',
  },
  github: null,
}

export default project
